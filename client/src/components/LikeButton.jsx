import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIconOutlined from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

export default function LikeButton({ user, post }) {
  console.log(user);
  const [liked, setLiked] = React.useState(false);
  const [likePost] = useMutation(LIKE_POST);

  function handleClick(e) {
    setLiked(!liked);
    likePost({ variables: { postId: post.id } });
  }

  return (
    <>
      {user ? (
        <IconButton onClick={handleClick} aria-label="add to favorites">
          <FavoriteIconOutlined
            style={liked ? { color: "red" } : { color: "unset" }}
          />
          <p style={{ fontSize: "12px", marginLeft: "2px" }}>
            {post.likeCount}
          </p>
        </IconButton>
      ) : (
        <Link to="/auth/r">
          <IconButton aria-label="add to favorites">
            <FavoriteIconOutlined />
            <p style={{ fontSize: "12px", marginLeft: "2px" }}>
              {post.likeCount}
            </p>
          </IconButton>
        </Link>
      )}
    </>
  );
}

export const LIKE_POST = gql`
  mutation($postId: ID!) {
    likePost(postId: $postId) {
      id
      likeCount
      likes {
        username
        id
      }
    }
  }
`;
//since we are returning ID of post in this mutation :
// apollo automatically updates the cache for that post id with the other fields returned
