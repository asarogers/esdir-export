import Navbar from "../components/Navbar";
import building from "../images/building.png";
import signInIcon from "../images/SignIn.png";

const Register = () => {
  return (
    <>
      <Navbar />
      <main className="register-container">
        <h1 className="register-title">Welcome to ESDIR</h1>
        <div className="register-body">
          <section className="register-left-container float-left">
            <div className="grey-bar"></div>
            <p className="register-text">Glad to see you again!</p>
            <div className="image-container">
              <img
                className="register-image"
                src={building}
                alt="Building Image"
              />
              <div className="btn-container">
                <button className="register-button">Sign In</button>
              </div>
            </div>
          </section>
          <section className="float-right">
            <h2 className="create-account-text">Create Account</h2>
            <form className="register-form">
              <div className="account-item">
                <div className="image-holder">
                  <img
                    className="account-image"
                    src={signInIcon}
                    alt="Sign In Icon"
                  />
                </div>
                <input className="account-input" placeholder="First Name" />
              </div>
              <div className="account-item">
                <div className="image-holder">
                  <img
                    className="account-image"
                    src={signInIcon}
                    alt="Sign In Icon"
                  />
                </div>
                <input className="account-input" placeholder="Last Name" />
              </div>
              <div className="account-item">
                <div className="image-holder">
                  <img
                    className="account-image"
                    src={signInIcon}
                    alt="Sign In Icon"
                  />
                </div>
                <input className="account-input" placeholder="Email" />
              </div>
              <div className="account-item">
                <div className="image-holder">
                  <img
                    className="account-image"
                    src={signInIcon}
                    alt="Sign In Icon"
                  />
                </div>
                <input className="account-input" placeholder="Password" />
              </div>
              <div className="account-item">
                <div className="image-holder">
                  <img
                    className="account-image"
                    src={signInIcon}
                    alt="Sign In Icon"
                  />
                </div>
                <input
                  className="account-input"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="btn-container-dark">
              <button className="register-button-dark">Register</button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
};

export default Register;
