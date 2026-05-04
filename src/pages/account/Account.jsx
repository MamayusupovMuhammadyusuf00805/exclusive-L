import React from "react";
import "./Account.css";

function Account() {
  return (
    <div className="accountpage">
      <div className="container">
     <p className="home">
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a> / My Account
        </p>
        <div className="account">
          <div className="leftaccount">
            <h3>Manage My Account</h3>
            <span style={{ color: "#DB4444" }}>My Profile</span>
            <p>Address Book</p>
            <p>My Payment Options</p>
            <h3>My Orders</h3>
            <p>My Returns</p>
            <p>My Cancellations</p>
            <h3>My WishList</h3>
          </div>
          <div className="rightaccount">
            <h1>Edit Your Profile</h1>
            <form>
              <div className="forms">
                <div className="input-box">
                  <p>First Name</p>
                  <input type="text" placeholder="Md:" />
                </div>
                <div className="input-box">
                  <p>Last Name</p>
                  <input type="text" placeholder="Rimel" />
                </div>
              </div>

              <div className="forms1">
                <div className="input-box">
                  <p>Email</p>
                  <input type="email" placeholder="rimel1111@gmail.com" />
                </div>
                <div className="input-box">
                  <p>Address</p>
                  <input type="text" placeholder="Kingston, 5236, United State" />
                </div>
              </div>

              <div className="pass">
                <p>Password Changes</p>
                <input type="password" placeholder="Current Password" />
                <input type="password" placeholder="New Password" />
                <input type="password" placeholder="Confirm New Password" />
              </div>

              <div className="cancel">
                <button type="button" className="can1">Cancel</button>
                <button type="submit" className="can2">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;