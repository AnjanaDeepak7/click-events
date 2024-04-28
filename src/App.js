import "./index.css";

function App() {
  const name = "Anjana Deepak";
  const languagesKnown = ["C", " C++", " java", " python", " javascript"];
  const passion = "Coding";
  const nationality = "Indian";
  let year = new Date().getFullYear();

  const handleEvent = () => {
    console.log("clicked button");
  };
  const handleEvent2 = (myName) => {
    console.log(`${myName} clicked button`);
  };
  const handleEvent3 = (event) => {
    console.log(event.target);
  };
  return (
    <div className="App">
      <header className="heading-container">
        <h1 className="heading">My Details</h1>
      </header>
      <main className="main-container">
        <div className="details-container">
          <h1 className="name">{name}</h1>
          <h4 className="sub-heading">{languagesKnown}</h4>
          <h4 className="sub-heading">{passion}</h4>
          <h4 className="sub-heading">{nationality}</h4>
          <div className="btn-container">
            <button onClick={handleEvent} className="btn">
              click me1
            </button>
            <button onClick={() => handleEvent2("Deepak")} className="btn">
              click me2
            </button>
            <button onClick={(event) => handleEvent3(event)} className="btn">
              click me3
            </button>
          </div>
        </div>
      </main>
      <footer className="footer-container">&copy; Copyright {year}</footer>
    </div>
  );
}

export default App;
