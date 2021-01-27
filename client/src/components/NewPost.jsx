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
  const [url] = useContext(UrlContext);

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

  function onSubmit() {}

  return (
    <Card className={classes.root}>
      <form className={classes.forms} action="">
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={url}
            title="Contemplative Reptile"
          >
            <Button size="small" variant="outlined" color="secondary">
              {" "}
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
                label="Caption"
                name="post-body"
                defaultValue="Hello World"
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
          >
            Add Post
          </Button>
          {File && <ProgressBar file={File} setFile={setFile} />}
        </CardActions>
      </form>
    </Card>
  );
}
