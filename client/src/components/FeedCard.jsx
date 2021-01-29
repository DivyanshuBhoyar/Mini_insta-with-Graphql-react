import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import { TextField } from "@material-ui/core";
import ModeCommentIconOutlined from "@material-ui/icons/ModeComment";
import DeleteIconOutlined from "@material-ui/icons/Delete";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { AuthContext } from "../contexts/AuthContext";
import LikeButton from "./LikeButton";
import { CREATE_COMMENT } from "../utils/GraphQL";
import { useMutation } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1.5em",
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(5px)",
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function FeedCard({ post }) {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = React.useState("");
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // console.log(post);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleCommentChange(e) {
    setComment(e.target.value);
    console.log(comment);
  }
  const [addComment] = useMutation(CREATE_COMMENT);

  function handleComment(e) {
    addComment({ variables: { postId: post.id, body: comment } });
    setComment("");
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            style={{ width: "60px", height: "60px" }}
            className={classes.avatar}
            src="https://uifaces.co/our-content/donated/N8kxcjRw.jpg"
          />
        }
        action={
          user &&
          user.username === post.username && (
            <IconButton aria-label="delete">
              <DeleteIconOutlined />
            </IconButton>
          )
        }
        title={post.username}
        subheader={moment(post.createdAt).fromNow(true) + " ago"}
      />
      <CardMedia className={classes.media} image={post.objectURL} />
      <CardContent>
        <h5> {post.body}</h5>
      </CardContent>
      <CardActions disableSpacing>
        <LikeButton user={user} post={post} />
        <IconButton onClick={handleExpandClick} aria-label="share">
          <ModeCommentIconOutlined />
          <p style={{ fontSize: "12px", marginLeft: "2px" }}>
            {post.commentCount}
          </p>
        </IconButton>
      </CardActions>
      <Collapse in={user && expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div
            className="comment"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Avatar
              sizes="small"
              src="https://uifaces.co/our-content/donated/N8kxcjRw.jpg"
              style={{ width: "30px", height: "30px", marginRight: "0.8em" }}
            />
            <h4>You </h4>
          </div>
          <TextField
            style={{ marginLeft: "2.5rem", width: "80%" }}
            id="outlined-basic"
            size="small"
            variant="outlined"
            onChange={handleCommentChange}
            value={comment}
          />
          <IconButton onClick={handleComment}>
            <AddIcon size=" medium" />
          </IconButton>

          {post.comments &&
            post.comments.map((comment) => (
              <>
                <div
                  key={comment.id}
                  className="comment"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "0.3em",
                  }}
                >
                  <Avatar
                    sizes="small"
                    src="https://uifaces.co/our-content/donated/N8kxcjRw.jpg"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "0.8em",
                    }}
                  />
                  <h4>{comment.username} </h4>
                  {comment.username === user.username && (
                    <DeleteIcon
                      style={{ position: "absolute", right: "10px" }}
                    />
                  )}
                </div>
                <p style={{ marginLeft: "2.8rem" }}>{comment.body}</p>
              </>
            ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}
