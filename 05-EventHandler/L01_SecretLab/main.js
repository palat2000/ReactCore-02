const Mosquito = () => {
  const [imageId, setImageId] = React.useState("./mos.jpeg");
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isDead, setIsDead] = React.useState(false);

  const changeImage = () => {
    setImageId("./mos-dead.png");
    alert("Dead");
    setIsDead(true);
  };
  React.useEffect(() => {
    const updatePosition = () => {
      const newX = Math.random() * (window.innerWidth - 50);
      const newY = Math.random() * (window.innerHeight - 50);
      setPosition({ x: newX, y: newY });
      //   setIsDead(false);
    };
    let interval;
    if (!isDead) {
      interval = setInterval(updatePosition, 500);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isDead]);

  return (
    <img
      src={imageId}
      style={{
        position: "absolute",
        left: position.x + "px",
        top: position.y + "px",
        width: "80px",
        height: "80px",
        cursor: "pointer",
        borderRadius: "50%",
      }}
      onClick={changeImage}
    />
  );
};

const App = () => {
  return (
    <div>
      <Mosquito />
      <Mosquito />
      <Mosquito />
    </div>
  );
};

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
