import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import ProgressBar from "./ProgressBar";
import { UrlContext } from "../contexts/urlContext";
import { gql, useMutation } from "@apollo/client";
import { GET_POSTS } from "../utils/GraphQL.js";

const useStyles = makeStyles({
  root: {
    margin: "auto",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    maxWidth: 345,
    backdropFilter: "blur(3rem)",
  },
  media: {
    height: 300,
  },
  forms: {
    width: "100%",
  },
});

export default function NewPost() {
  const classes = useStyles();
  const [File, setFile] = useState(null);
  const [Error, setError] = useState(null);
  const [url, seturl] = useContext(UrlContext);
  const [body, setBody] = useState("");

  const handleChange = (e) => {
    const types = ["image/png", "image/jpeg"];
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  function handleBodyChange(e) {
    setBody(e.target.value);
  }

  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    update(proxy, result) {
      const data = proxy.readQuery({
        query: GET_POSTS,
      }); //Writing to local cache : the create post return values in the getposts cache data
      let newData = [...data.getPosts];
      newData = [result.data.createPost, ...newData];
      proxy.writeQuery({
        query: GET_POSTS,
        data: {
          ...data,
          getPosts: {
            newData,
          },
        },
      });
    },
    onError(ApolloError) {
      setError(ApolloError);
      console.log(ApolloError);
    },
  });

  function onSubmit(e) {
    e.preventDefault();
    createPost({ variables: { body, objectURL: url } });
    setBody("");
    setFile(null);
    seturl("");
    console.log(body, url);
  }

  return (
    <Card className={classes.root}>
      <form onSubmit={onSubmit} className={classes.forms} action="">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={url}
            title="Contemplative Reptile"
          >
            <Button
              size="small"
              component="label"
              variant="outlined"
              color="secondary"
            >
              Upload Image
              <input
                hidden
                type="file"
                name="file"
                onChange={handleChange}
                id=""
              />
            </Button>{" "}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <TextField
                required
                id="outlined-required"
                onChange={handleBodyChange}
                placeholder="Hello World"
                name="body"
                value={body}
                variant="outlined"
                fullWidth
              />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            disabled={!url || !body}
          >
            Add Post
          </Button>
          {Error && <div className="error">{Error}</div>}
          {File && <ProgressBar file={File} setFile={setFile} />}
        </CardActions>
      </form>
    </Card>
  );
}

const CREATE_POST = gql`
  mutation createPost($body: String!, $objectURL: String!) {
    createPost(body: $body, objectURL: $objectURL) {
      id
      body
      createdAt
      username
    }
  }
`;
