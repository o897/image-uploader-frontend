import { useState } from "react";
import "../index.css";


function Loading() {

 const [progress,setProgress] = useState(0)

  return (
    <>
      <div className="progress-bar">
        <div className="progress-bar-title">Uploading</div>
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
}

export default Loading;
