import { useState } from "react";
import ImageGrid from "./ImageGrid";
import ProgressBar from "./ProgressBar";
function View({ id }) {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const fTypes = ["image/png", "image/jpeg"];
  const changehandler = (e) => {
    let selected = e.target.files[0];
    if (selected && fTypes.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      setErr("Pleas select png/jpeg file type!!");
    }
  };
  return (
    <div className="view-holder">
      <form>
        <input
          type="file"
          onChange={changehandler}
          id="file"
          style={{ display: "none" }}
        />
        <label for="file">+</label>

        {file && <div> {file.name} </div>}
        {err && <div> {err} </div>}
      </form>

      {file && <ProgressBar file={file} setFile={setFile} id={id} />}

      <ImageGrid id={id} />
    </div>
  );
}

export default View;
