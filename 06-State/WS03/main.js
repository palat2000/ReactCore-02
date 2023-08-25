const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <button className="btn" onClick={toggle}>
        Open
      </button>
      {isOpen && (
        <div className="modal">
          <h3>Modal</h3>
          <button className="btn" onClick={toggle}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
