import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Navbar from "../components/Navbar";

export default function Upload() {
  const navigate = useNavigate();

  const [file, setFile] = useState();
  const [msg, setMsg] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    let files = event.dataTransfer.files;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const inputFile = useRef(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleUpload = async (e) => {
    // 1. Added async
    e.preventDefault();

    if (!file) {
      setMsg("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setMsg("Uploading..."); // Optional: tell the user it's working

      // 2. Added AWAIT here
      const response = await fetch(
        "https://image-uploader-backend-yzqj.onrender.com/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // 3. Only navigate AFTER the response is successful
        navigate(`/complete/${file.name}`, { state: { filename: file.name } });
      } else {
        setMsg("Upload failed on server.");
      }
    } catch (error) {
      console.log("Error upload image : ", error);
      setMsg("Error Uploading file.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="image">
          <h1>Upload your file</h1>
          <p>File should be Jpeg, Png...</p>
          <div
            className="image__box"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div
              className="image__box-icon"
              draggable="true"
              onDragStart={handleDragStart}
            >
              {/* if file not uploaded show svg if true show progress and after file and  link on same page */}
              <img src="image.svg" alt="" />
            </div>
          </div>
          <p className="or">Or</p>

          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
          />
          <button onClick={onButtonClick} className="choose_file-btn">
            Choose a file
          </button>

          <button className="upload__button" onClick={handleUpload}>
            Upload
          </button>

          {msg && <span>{msg}</span>}
          {file && <span className="filename">{file.name}</span>}
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          refresh page if results not showing
        </p>
      </div>
    </>
  );
}
