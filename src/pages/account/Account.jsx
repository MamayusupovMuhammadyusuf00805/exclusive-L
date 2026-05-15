import React, { useContext, useEffect, useState } from "react";
import "./Account.css";
import { Datacontext } from "../../App";
import { updateUser } from "../../services/App";

function Account() {
  // Контекстдан фойдаланувчи маълумотларини оламиз
  const { userInfo, setuserInfo } = useContext(Datacontext);

  // Локал форма ҳолати
  const [form, setForm] = useState({
    firstname: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
  });

  // userInfo келиши билан формани тўлдирамиз
  useEffect(() => {
    if (userInfo) {
      setForm({
        firstname: userInfo.first_name || "",
        lastName: userInfo.last_name || "",
        email: userInfo.email || "",
        phoneNumber: userInfo.phone || "+998 ",
        address: userInfo.address || "",
        password: "", // Хавфсизлик учун паролни бўш қолдирамиз
      });
    }
  }, [userInfo]);

  // Маълумотларни сақлаш
  const handleSave = (e) => {
    e.preventDefault();
    
    updateUser(form)
      .then((result) => {
        alert("Маълумотлар муваффақиятли янгиланди!");
        // Контекстни янги маълумот билан янгилаймиз, шундаNavbar ва бошқа жойларда исм ўзгаради
        if (setuserInfo) {
          setuserInfo(result);
        }
      })
      .catch((err) => {
        console.error("Update error:", err);
        alert("Хатолик юз берди!");
      });
  };

  return (
    <div className="accountpage">
      <div className="container">
        <p className="home">
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}>Home</a> / My Account
        </p>

        <div className="account">
          {/* Чап тарафдаги меню */}
          <div className="leftaccount">
            <h3>Manage My Account</h3>
            <span style={{ color: "#DB4444", fontWeight: "bold" }}>My Profile</span>
            <p>Address Book</p>
            <p>My Payment Options</p>
            <h3>My Orders</h3>
            <p>My Returns</p>
            <p>My Cancellations</p>
          </div>

          {/* Ўнг тарафдаги форма */}
          <div className="rightaccount">
            <h1>Edit Your Profile</h1>
            <form onSubmit={handleSave}>
              <div className="forms">
                <div className="input-box">
                  <p>First Name</p>
                  <input
                    type="text"
                    value={form.firstname}
                    onChange={(e) => setForm({ ...form, firstname: e.target.value })}
                    placeholder="Ism"
                  />
                </div>
                <div className="input-box">
                  <p>Last Name</p>
                  <input
                    type="text"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Familiya"
                  />
                </div>
              </div>

              <div className="forms">
                <div className="input-box">
                  <p>Email</p>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="example@mail.com"
                  />
                </div>
                <div className="input-box">
                  <p>Address</p>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="Manzil"
                  />
                </div>
              </div>

              <div className="input-box" style={{ width: "100%", marginTop: "10px" }}>
                <p>Phone Number</p>
                <input
                  type="text"
                  value={form.phoneNumber}
                  onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                  placeholder="+998 90 123 45 67"
                />
              </div>

              <div className="pass">
                <p>Password Changes</p>
                <input
                  type="password"
                  placeholder="New Password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>

              <div className="cancel">
                <button type="button" className="can1" onClick={() => window.location.reload()}>
                  Cancel
                </button>
                <button type="submit" className="can2">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;