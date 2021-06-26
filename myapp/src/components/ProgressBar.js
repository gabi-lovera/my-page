function ProgressBar({ title, width, text }) {
  return (
    <div className="title-over">
      <h6>{title}</h6>
      <div className="progress-bar">
        <p className="progress-text">{text}</p>
        <div className="progress">
          <span className="progress-var" style={{ width: width }}></span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
