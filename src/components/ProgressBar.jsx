import useStorage from "../hooks/useStorage";

function ProgressBar({ file, setFile, id }) {
  const { url, progress } = useStorage(file, id);

  if (url) {
    setFile(null);
  }

  return (
    <div className="progress" style={{ width: progress + "%" }}>
      {" "}
    </div>
  );
}

export default ProgressBar;
