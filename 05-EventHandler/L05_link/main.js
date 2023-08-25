const App = () => {
  const handleClick = (e) => {
    let isTrue = confirm("Leave for google?");
    if (isTrue) {
      window.location.href = "https://google.com";
    }
  };
  return (
    <div>
      <a href="#" onClick={handleClick}>
        Google
      </a>
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
