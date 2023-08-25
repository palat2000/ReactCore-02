function App() {
  function handleClick() {
    console.log("clicked");
    alert("Hi");
  }

  return (
    <div>
      <button onClick={handleClick}>Button</button>
    </div>
  );
}

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
