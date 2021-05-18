import useFirestore from "../hooks/useFirestore";

function ImageGrid({ id }) {
  let arr = { 1: "images", 2: "images2", 3: "images3" };
  const { docs } = useFirestore(arr[id]);
  return (
    <div className="grid image">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrapper">
            <img src={doc.url} id={doc.id} alt="iamge" />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
