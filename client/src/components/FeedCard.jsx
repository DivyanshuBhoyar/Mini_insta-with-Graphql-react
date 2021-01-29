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
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grow from "@material-ui/core/Grow";
import { TextField } from "@material-ui/core";
import ModeCommentIconOutlined from "@material-ui/icons/ModeComment";
import DeleteIconOutlined from "@material-ui/icons/Delete";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { AuthContext } from "../contexts/AuthContext";
import LikeButton from "./LikeButton";

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

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // console.log(post);
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
        <LikeButton user={user} post={post} />
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
          {post.comments &&
            post.comments.map((comment) => (
             <>
                <div
                key={comment.id}
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
                <p style={{ marginLeft: "2.8rem" }}>{comment.body}</p>
             </>
            ))}
        </CardContent>
      </Collapse>
    </Card>

  );
}
