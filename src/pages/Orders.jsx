import '../Styles/Orders.css';
function Orders() {
  return (
  
    <div className="order-container">
      <h2 className="form-title">Shipping Address</h2>

      <form className="order-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            className="form-input"
            type="text"
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            className="form-textarea"
            required
            placeholder="House number, street, area"
          ></textarea>
        </div>

        <div className="form-group">
          <label>District</label>
          <select className="form-select" required>
            <option value="">Select your district</option>
            <option>Thiruvananthapuram</option>
            <option>Kollam</option>
            <option>Alappuzha</option>
            <option>Pathanamthitta</option>
            <option>Kottayam</option>
            <option>Idukki</option>
            <option>Ernakulam</option>
            <option>Thrissur</option>
            <option>Palakkad</option>
            <option>Malappuram</option>
            <option>Kozhikkode</option>
            <option>Wayanad</option>
            <option>Kannur</option>
            <option>Kasargod</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-group half">
            <label>State</label>
            <input
              className="form-input"
              type="text"
              placeholder="e.g., Kerala"
            />
          </div>

          <div className="form-group half">
            <label>Pin Code</label>
            <input
              className="form-input"
              type="text"
              required
              placeholder="Enter your pincode"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Payment Option</label>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" value="cod" /> Cash on Delivery
            </label>
            <label>
              <input type="radio" name="payment" value="gpay" /> GPay
            </label>
            <label>
              <input type="radio" name="payment" value="card" /> Card
            </label>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Orders;