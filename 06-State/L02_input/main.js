const App = () => {
  const [isHide, setIsHide] = React.useState(false);
  const toggle = () => setIsHide(!isHide);

  return (
    <div>
      <button onClick={toggle}>Click to hide text</button>

      <h2 className={isHide && "hide"}>Text</h2>
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
