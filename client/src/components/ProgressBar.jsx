import React, { useEffect, useContext } from "react";
import useStorage from "../firebase/useStorage";
import LinearProgress from "@material-ui/core/LinearProgress";
import { UrlContext } from "../contexts/urlContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ProgressBar({ file, setFile }) {
  const [url, seturl] = useContext(UrlContext);
  const classes = useStyles();

  console.log(file);

  const { progress, URL } = useStorage(file);

  console.log(URL);

  useEffect(() => {
    if (URL) {
      seturl(URL);
      setFile(null);
    }
  }, [URL, setFile]);

  return (
    <div className={classes.root}>
      <LinearProgress color="secondary" />
    </div>
  );
}
