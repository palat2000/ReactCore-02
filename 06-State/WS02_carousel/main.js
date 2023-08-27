function Carousel() {
  const [index, setIdex] = React.useState(0);
  const arrImage = [
    {
      name: "yellow women seller",
      src: "https://img.freepik.com/free-photo/close-up-woman-serving-customers_23-2148896944.jpg?w=1380&t=st=1693066787~exp=1693067387~hmac=86ce794939bbcf7e2f4bee203297468e9498314a2c985c6aa6826b4fdd1f32d8",
    },
    {
      name: "squid",
      src: "https://img.freepik.com/free-photo/large-variety-delicious-grilled-seafood-asian-market_651396-417.jpg?w=1380&t=st=1693067479~exp=1693068079~hmac=054d56eba37154fdf3faa879279751f51ee2653ee806eb8cb6e74bed9f3fe0a7",
    },
    {
      name: "korea food",
      src: "https://img.freepik.com/free-photo/close-up-hands-holding-cup-with-food_23-2148896950.jpg?w=1380&t=st=1693067483~exp=1693068083~hmac=fda7d0d762af30e95be00fe9f139c40a95872b13c09a3d8bf132f984b7f57902",
    },
    {
      name: "street food",
      src: "https://img.freepik.com/free-photo/street-food-food-truck_1321-509.jpg?w=1380&t=st=1693067487~exp=1693068087~hmac=8b2e77a3a913eac8d75858c06efc4c3a8267172f44099e0a573053d1dca01648",
    },
    {
      name: "front view man holding corndog",
      src: "https://img.freepik.com/free-photo/front-view-man-holding-corn-dog_23-2149929403.jpg?w=1380&t=st=1693067491~exp=1693068091~hmac=ad983f4cb0edc49125b7be26f17045fe710c17aaeb6b2358fd37137ce838af7d",
    },
    {
      name: "asian women eat hamburger",
      src: "https://img.freepik.com/free-photo/happy-asian-woman-eating-burger-outdoors_23-2148952828.jpg?w=1380&t=st=1693067525~exp=1693068125~hmac=14b3795418e799655fa273e7d1b420d514897019338924700da982fa238eace3",
    },
    {
      name: "",
      src: "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      name: "",
      src: "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      name: "",
      src: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      name: "",
      src: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      name: "",
      src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];

  const left = () => {
    setIdex(index - 1);
    if (index == 0) {
      setIdex(arrImage.length - 1);
    }
  };

  const right = () => {
    setIdex(index + 1);
    if (index == arrImage.length - 1) {
      setIdex(0);
    }
  };

  return (
    <div className="container__car">
      <div className="box">
        <i onClick={left} className="fa-solid fa-arrow-left"></i>
        <div className="img">
          <img src={arrImage[index].src} alt={arrImage[index].name} />
        </div>
        <i onClick={right} className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Carousel />
    </div>
  );
}

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
