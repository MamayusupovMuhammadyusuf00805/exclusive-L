import React, { useEffect, useState } from "react";
import "./Sign.css";
import { signup } from "../../services/App";
import { useNavigate, Link } from "react-router-dom";

function Sign() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email, password).then((info) => {
      console.log("Server javobi:", info);

      if (info?.message === "Foydalanuvchi ro'yxatdan o'tkazildi.") {
        navigate("/log");
      } else {
        if (info?.email_or_phone) {
          alert(info.email_or_phone[0]);
        } else {
          alert("Ro'yxatdan o'tishda xatolik yuz berdi.");
        }
      }
    });
  };

  return (
    <div className="signpage">
      <div className="container">
        <div className="sign">
          <div className="rights">
            <img src="/imgs/Side Image(1).png" alt="Side" />
          </div>
          <div className="lefts">
            <h1>Create an account</h1>
            <p>Enter your details below</p>

            <form onSubmit={handleSubmit}>
              <input
                onInput={(e) => setname(e.target.value)}
                type="text"
                placeholder="Name:"
                required
              />
              <hr />

              <input
                onInput={(e) => setemail(e.target.value)}
                type="email"
                placeholder="Email or Phone Number:"
                required
              />
              <hr />

              <input
                type={visible ? "text" : "password"}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Password:"
              />

              <i
                className={`fa-regular ${visible ? "fa-eye" : "fa-eye-slash"}`}
                onClick={() => setVisible(!visible)}
                style={{ cursor: "pointer", marginLeft: "55px" }}
              ></i>
              <hr />

              <div className="btnws">
                <button type="submit" className="btn1">
                  Create Account
                </button>

                <button type="button" className="btnws2">
                  <i className="fa-brands fa-google"></i> Sign up with Google
                </button>
              </div>
            </form>

            <div
              className="login-link"
              style={{ marginTop: "20px", textAlign: "center" }}
            >
              <p>
                Already have an account?
                <Link
                  to="/log"
                  style={{
                    marginLeft: "10px",
                    color: "black",
                    fontWeight: "500",
                  }}
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
