import React, { useEffect, useState } from "react";
import App from "./App";

export function MyPreloader() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((loadingProgress + 1) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, [loadingProgress]);
  if (loadingProgress) {
    return (
      <div>
        <p>{loadingProgress}%</p>
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
        <div>{loadingProgress === 100 && <button>Launch</button>}</div>
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
