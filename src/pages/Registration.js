import Navbar from "../components/Navbar";
const Register = () => {


  return (
    <div>
      <Navbar />
      <div className="register-container">
      
        <div className="register-body">
          <div className="register-text">Welcome to ESDIR </div>
          <div className="register-upload-body">
            <div className="divider"/>
            <div className="register-upload-text"> Upload a New Building</div>
            <div className="divider"/>

            <div className="upload-items">
              <label className="item-label">New Building</label>
              <input className="item-input"/>
            </div>
            <div className="upload-items">
              <label className="item-label">Coordinates</label>
              <input className="item-input"/>
            </div>
            <div className="btn-container">
              <button className="btn-cartpage register-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


