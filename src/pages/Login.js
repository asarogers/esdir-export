import Navbar from "../components/Navbar";
import AmmuLogo from "../images/aamu_logo.jpg";

function Login() {
  return (
    <>
      <div>
        <Navbar />
        <div className="admin-container">
          <div className="aamu-logo ">
            <img
              src={AmmuLogo}
              style={{ width: "inherit", height: "inherit" }}
              alt="Ammu Logo"
            />
          </div>
          <div className="aamu-logo algin-right">
            <img
              src={AmmuLogo}
              style={{ width: "inherit", height: "inherit" }}
              alt="Ammu Logo"
            />
          </div>
          <div className="admin-body">
            <h1 className="register-title">Welcome to ESDIR</h1>
            <div className="admin-upload-body">
              <div className="signin-title"> Sign In</div>

              <div className="signin-items">
                <label className="signin-label">Username:</label>
                <input className="signin-input" />
              </div>
              <div className="signin-items">
                <label className="signin-label">Password</label>
                <input className="signin-input" />
                
              </div>
              <h2 className="forgot"> {"Forgot Password?"} </h2>
              <div className="signin-bottom-container">
                <div className="signin-divider" />
                <div className="signin-btn-container">
                  <button className="signin-button">Login</button>
                </div>
                <div className="signin-divider" />
              </div>
              <h2 className="signin-text"> {"<<<  Create an account  >>>"} </h2>
              <h2 className="newuser-text">
                {" "}
                {"New to our website? Sign up"}{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
