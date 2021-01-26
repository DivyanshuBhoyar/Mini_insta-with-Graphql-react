import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIconOutlined from "@material-ui/icons/Favorite";
import { TextField } from "@material-ui/core";
import ModeCommentIconOutlined from "@material-ui/icons/ModeComment";
import MoreVertIconOutlined from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1.5em",
    background: "rgba(255,255,255,0.4)",
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
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  console.log(post);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <IconButton aria-label="settings">
            <MoreVertIconOutlined />
          </IconButton>
        }
        title={post.username}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={post.objectURL}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIconOutlined />
          <p style={{ fontSize: "12px", marginLeft: "2px" }}>
            {post.likeCount}
          </p>
        </IconButton>
        <IconButton onClick={handleExpandClick} aria-label="share">
          <ModeCommentIconOutlined />
          <p style={{ fontSize: "12px", marginLeft: "2px" }}>
            {post.commentCount}
          </p>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
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
              <DeleteIcon style={{ position: "absolute", right: "8px" }} />
            </div>
            <TextField
              style={{ marginLeft: "2.5rem", width: "80%" }}
              id="outlined-basic"
              size="small"
              variant="outlined"
            />
            <IconButton>
              <AddIcon size=" medium" />
            </IconButton>
          </Typography>
          {post.comments ??
            post.comments.map((comment) => (
              <Typography key={comment.id}>
                <div
                  className="comment"
                  style={{ display: "flex", alignItems: "center" }}
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
                  <DeleteIcon style={{ position: "absolute", right: "8px" }} />
                </div>
                <p style={{ marginLeft: "2.5rem" }}>{comment.body}</p>
              </Typography>
            ))}
        </CardContent>
      </Collapse>
    </Card>
  );
}