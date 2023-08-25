function App() {
  const handleChange = (e) => console.log(e.target.checked);

  const handleClick = () => console.log("click");

  const handleSelect = (e) => console.log(e.target.value);

  return (
    <div>
      {/* <input type="text" onChange={handleChange} />
      <label htmlFor="check">grey</label>
      <input type="checkBox" id="check" onChange={handleChange} />
      <button onClick={handleClick}>Click me</button> */}
      <label htmlFor="option">select</label>
      <select name="option" id="option" onChange={handleSelect}>
        <option>Select option</option>
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
        <option>option4</option>
      </select>
    </div>
  );
}

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
