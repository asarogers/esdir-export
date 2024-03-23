import Navbar from "../components/Navbar";
function Home({ order = {}, setOrder, robotPosition, setRobotPosition }) {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="location-container float-left">
          <div className="location-form">
            <div className="form-items">
              <h2 className="form-items-text">Pick-Up Location</h2>
              <input className="form-input"></input>
            </div>
            <div className="form-items">
              <h2 className="form-items-text">Item Selection</h2>
              <input className="form-input"></input>
            </div>
            <div className="form-items">
              <h2 className="form-items-text">Drop-Off Location</h2>
              <input className="form-input"></input>
            </div>
            <div className="btn-container">
              <button className="btn-cartpage">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="map-container float-right">Map Container</div>
      </div>
    </div>
  );
}

export default Home;
