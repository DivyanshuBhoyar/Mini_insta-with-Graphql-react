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

export default function FeedCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

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
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/400"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIconOutlined />
        </IconButton>
        <IconButton onClick={handleExpandClick} aria-label="share">
          <ModeCommentIconOutlined />
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
              <h4>Add rice </h4>
              <DeleteIcon style={{ position: "absolute", right: "8px" }} />
            </div>
            <p style={{ marginLeft: "2.5rem" }}>
              {" "}
              and stir very gently to distribute. Top with artichokes and
            </p>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
