import Navbar from "../components/Navbar";


const Cart = ({ order, setOrder, robotPosition, setRobotPosition }) => {

  return (

      <div >
          <Navbar />
          <div className="container">
            <div className="inner-container">
                <h2 className="cart-text">Your Cart is Empty</h2>
                <div className="btn-container">
                <button className="continue-shopping-button">Continue Shopping </button>
                </div>
            </div>
          </div>
      </div>
  );
};

export default Cart;
