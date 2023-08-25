const App = () => {
  const handleChange = (e) => console.log(e.target.value);
  return (
    <div>
      <select onChange={handleChange}>
        <option>Thailand</option>
        <option>England</option>
        <option>USA</option>
        <option>Singapore</option>
        <option>Laos</option>
      </select>
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
