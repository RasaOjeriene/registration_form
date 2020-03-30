import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>Thanks for signing up....</h4>
      <p>contact data loading....</p>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;