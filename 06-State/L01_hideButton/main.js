const App = () => {
  const [isHide, setIsHide] = React.useState(false);

  const toggle = () => setIsHide(!isHide);

  return (
    <div className="container">
      <button className={!isHide ? "" : "hide"} onClick={toggle}>
        Click to hide me
      </button>
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
