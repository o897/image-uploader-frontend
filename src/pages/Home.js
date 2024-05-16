import { useRef, useState, lazy,Suspense} from "react";
import Loading from "./Loading";
import "../index.css";

const CompletePreview = lazy(() => delayForLoading(import('./Complete')));

export default function Home() {

  const [file, setFile] = useState();
  const [msg, setMsg] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [progress, setProgress] = useState(0);
  const handleDrop = (event) => {
    event.preventDefault();
    const { file } = event.dataTransfer;
    if (file.length > 0) {
      setFile([...file]);
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

  const handleUpload = (e) => {
    e.preventDefault();

    if (!file) {
      setMsg("No file selected");
      console.log("No file selected");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = fetch("http://localhost:3004/upload", {
      // const response = fetch("https://image-uploader-backend-git-main-o897s-projects.vercel.app/upload", {
        method: "POST",
        body: formData
      });
      setShowHome(!showHome)
      setShowPreview(!showPreview)
      // setFile([])updaed
    } catch (error) {
      console.log("Error upload image : ", error);
      setMsg("Error Uploading file.");
    }
  };

  return (
    <>
      <div className="App">
        <div className="image" style={{ display: showHome ? 'inline-flex' : 'none' }}>
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
          <button onClick={onButtonClick}>Choose a file</button>

            <button className="upload__button" onClick={handleUpload}>
              Upload
            </button>

          {msg && <span>{msg}</span>}
          {file && <span className="filename">{file.name}</span>}
        </div>
      </div>

      { showPreview &&  (
        <Suspense fallback={<Loading />}>
            <CompletePreview filename={file.name}/>
        </Suspense>
      )}
    </>
  );
}

function delayForLoading(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 3000);
    }).then(() => promise);
}

