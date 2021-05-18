import useStorage from "../hooks/useStorage";

function ProgressBar({ file, setFile, id }) {
  const { url, progress } = useStorage(file, id);
  if (url) {
    setFile(null);
  }

  console.log(url, progress);
  return (
    <div className="progress" style={{ maxWidth: progress + "%" }}>
      {" "}
    </div>
  );
}

export default ProgressBar;
