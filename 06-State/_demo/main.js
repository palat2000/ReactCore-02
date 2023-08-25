const App = () => {
  const [count, setCount] = React.useState(0);
  const up = () => setCount(count + 1);
  const down = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <div className="container">
      <h1>{count}</h1>
      <button className="btn" onClick={up}>
        Up
      </button>
      <button className="btn" onClick={down}>
        Down
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

const NewApp = () => {
  const [isDark, setIsDark] = React.useState(false);
  const handleToggle = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={`container ${isDark ? "dark" : ""}`}>
      {/* <h3>Light</h3>
      <h3>Dark</h3> */}
      {isDark ? <h3>Dark mode</h3> : <h3>Light mode</h3>}
      <button onClick={handleToggle}>Toggle mode</button>
    </div>
  );
};
// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<NewApp />);
