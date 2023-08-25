const App = () => {
  const handleChange = (e) => console.log(e.target.value);

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
