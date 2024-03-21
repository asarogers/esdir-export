import Navbar from "../components/Navbar";
import AmmuLogo from "../images/aamu_logo.jpg"
const AdminPage = () => {
  return (
    <div>
      <Navbar />
      <div className="admin-container">
      <div className="aamu-logo ">
        <img src={AmmuLogo} style={{width: "inherit", height: "inherit"}}alt="Ammu Logo" />
        </div>
        <div className="aamu-logo algin-right">
        <img src={AmmuLogo} style={{width: "inherit", height: "inherit"}}alt="Ammu Logo" />
        </div>
        <div className="admin-body">
          <div className="admin-text">Administration</div>
          <div className="admin-upload-body">
            <div className="divider"/>
            <div className="admin-upload-text"> Upload a New Building</div>
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
              <button className="btn-cartpage admin-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
