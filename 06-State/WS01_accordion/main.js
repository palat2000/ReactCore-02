const post = [
  {
    title: "Simple title",
    text: "Bacon ipsum dolor amet jowl pork chicken pig. Sirloin shoulder burgdoggen beef brisket ribeye chicken sausage corned beef chuck jowl. Tenderloin pork belly short loin biltong tail. Capicola spare ribs chuck chislic cow short ribs, pastrami tri-tip ground round flank tongue kielbasa pork chop. Doner filet mignon pork chop tenderloin short loin pork picanha shoulder buffalo sausage salami meatball brisket. Ball tip ribeye pork ground round.",
  },
  {
    title: "Simple title",
    text: "Bacon ipsum dolor amet jowl pork chicken pig. Sirloin shoulder burgdoggen beef brisket ribeye chicken sausage corned beef chuck jowl. Tenderloin pork belly short loin biltong tail. Capicola spare ribs chuck chislic cow short ribs, pastrami tri-tip ground round flank tongue kielbasa pork chop. Doner filet mignon pork chop tenderloin short loin pork picanha shoulder buffalo sausage salami meatball brisket. Ball tip ribeye pork ground round.",
  },
  {
    title: "Simple title",
    text: "Bacon ipsum dolor amet jowl pork chicken pig. Sirloin shoulder burgdoggen beef brisket ribeye chicken sausage corned beef chuck jowl. Tenderloin pork belly short loin biltong tail. Capicola spare ribs chuck chislic cow short ribs, pastrami tri-tip ground round flank tongue kielbasa pork chop. Doner filet mignon pork chop tenderloin short loin pork picanha shoulder buffalo sausage salami meatball brisket. Ball tip ribeye pork ground round.",
  },
  {
    title: "Simple title",
    text: "Bacon ipsum dolor amet jowl pork chicken pig. Sirloin shoulder burgdoggen beef brisket ribeye chicken sausage corned beef chuck jowl. Tenderloin pork belly short loin biltong tail. Capicola spare ribs chuck chislic cow short ribs, pastrami tri-tip ground round flank tongue kielbasa pork chop. Doner filet mignon pork chop tenderloin short loin pork picanha shoulder buffalo sausage salami meatball brisket. Ball tip ribeye pork ground round.",
  },
  {
    title: "Simple title",
    text: "Bacon ipsum dolor amet jowl pork chicken pig. Sirloin shoulder burgdoggen beef brisket ribeye chicken sausage corned beef chuck jowl. Tenderloin pork belly short loin biltong tail. Capicola spare ribs chuck chislic cow short ribs, pastrami tri-tip ground round flank tongue kielbasa pork chop. Doner filet mignon pork chop tenderloin short loin pork picanha shoulder buffalo sausage salami meatball brisket. Ball tip ribeye pork ground round.",
  },
];

function Box({ title, text }) {
  const [isShow, setIsShow] = React.useState(true);
  const handleClick = () => setIsShow(!isShow);
  return (
    <div className="box">
      <div className="head btn" onClick={handleClick}>
        <h3>{title}</h3>
        {isShow ? (
          <i className="fa-solid fa-arrow-right"></i>
        ) : (
          <i className="fa-solid fa-arrow-down"></i>
        )}
      </div>
      <div className="container-text">
        {!isShow && <p className="text">{text}</p>}
      </div>
    </div>
  );
}

function Accordion() {
  return (
    <div className="container__ac">
      {post.map((obj) => (
        <Box title={obj.title} text={obj.text} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Accordion />
    </div>
  );
}

// ReactDOM
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
