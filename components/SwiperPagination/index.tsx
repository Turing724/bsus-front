import "./index.less";

export default ({ length, index, handleChangeIndex }) => {
  function handleChange(index) {
    handleChangeIndex(index);
  }
  return (
    <div className="dots-box">
      {new Array(length).fill("").map((x, i) => (
        <div onClick={_ => handleChange(i)} className={`dot ${i === index ? "active" : ""}`} key={i}></div>
      ))}
    </div>
  );
};
