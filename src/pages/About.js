
import Navbar from "../components/Navbar";
function About() {
    return (
      <div className="About_body">
              
        <div className="frame">
          <div className="About-container">
          < Navbar/>
              <div className="overlap-group">
                
                
                <h1 className="e-s-d-i-r">E&nbsp;&nbsp; S&nbsp;&nbsp; D&nbsp;&nbsp; I&nbsp;&nbsp; R</h1>
                <h2 className="esdir-name">Electromechanical Self-Driven Intelligent Rover</h2>
                <p className="text">
                  <span className="span">
                      <br />
                      <br />
                  </span>
                  
                  <span className="span">
                      <br />
                  </span>
                </p>


                <p className="ESDIR-description">
                 ESDIR is a robot capable of efficiently maneuvering through a maze, avoiding obstacles and objects, while reaching its intended destination.
                </p>

                <p className="div">
                  ESDIR where Service is Sovereignty!
                </p>

                <p className="p">
                  ESDIR is controlled through the use of a web application with robust user authentication features, which enable users to submit delivery requests. These locations come from a pre-defined list of campus buildings, each linked to specific GPS locations. Admins will have the ability to add GPS locations to the list making this product more efficient for users.
                </p>

                

              </div>
          </div>
        </div>


      </div>
      
    );
  }
  
  export default About;
  