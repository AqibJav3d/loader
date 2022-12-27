import React, { useEffect, useState } from "react";
import "./App.css";
import Image from "./assets/ring.svg";
import { makeStyles } from "@material-ui/styles";

export function MyPreloader() {
  const classes = useStyles();
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loadingProgress === 100) {
        setLoadingProgress(100);
      } else {
        setLoadingProgress((loadingProgress + 1) % 100);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [loadingProgress]);

  if (loadingProgress) {
    return (
      <div className={classes.loaderContainer}>
        <div className={classes.motion}>
          <img className={classes.img} src={Image} alt="" />
          <h2>{loadingProgress}%</h2>
        </div>

        <div>
          {loadingProgress > 20 && (
            <LoadingMessage message={"PRELAUNCH CHECK..."} />
          )}
        </div>
        <div>
          {loadingProgress > 40 && (
            <LoadingMessage message={"SYSTEM CHECK..."} />
          )}
        </div>
        <div>
          {loadingProgress > 60 && (
            <LoadingMessage message={"ANALYSING AVAILABILITY..."} />
          )}
        </div>
        <div>
          {loadingProgress > 80 && (
            <LoadingMessage message={"FINAL CHECK..."} />
          )}
        </div>
      </div>
    );
  }
}
const LoadingMessage = ({ message }) => {
  return (
    <div>
      <h3>{message}</h3>
    </div>
  );
};

const useStyles = makeStyles({
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },

  motion: {
    // position: "relative",
  },
  img: {
    maxWidth: 250,
    // position: "absolute",

    // rotate here is a KeyframeEffect
    // animation: "rotate 4s linear infinite",
  },
});
