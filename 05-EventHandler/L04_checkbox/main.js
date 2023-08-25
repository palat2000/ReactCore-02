const App = () => {
  const handleChange = (e) => {
    console.log(
      "Name :",
      e.target.name,
      "Value :",
      e.target.value,
      "isChecked :",
      e.target.checked
    );
  };

  return (
    <div className="container">
      <label htmlFor="1">ONE</label>
      <input
        id="1"
        name="1"
        value="1"
        type="checkBox"
        onChange={handleChange}
      />
      <label htmlFor="2">TWO</label>
      <input
        id="2"
        name="2"
        value="2"
        type="checkBox"
        onChange={handleChange}
      />
      <label htmlFor="3">THREE</label>
      <input
        id="3"
        name="3"
        value="3"
        type="checkBox"
        onChange={handleChange}
      />
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
