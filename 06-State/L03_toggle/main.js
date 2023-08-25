const App = () => {
  const [isHide, setIsHide] = React.useState(false);
  const toggle = () => setIsHide(!isHide);

  return (
    <div>
      <button onClick={toggle}>{isHide ? "Show" : "Hide"}</button>
      <p className={isHide && "hide"}>lorem ipsum</p>
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
