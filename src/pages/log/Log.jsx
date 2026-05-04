import React, { useEffect, useState } from "react";
import "./Log.css";
import { login } from "../../services/App";
import { useNavigate } from "react-router-dom";

function Log() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password).then((info) => {
      if (info?.access) {
        localStorage.setItem("token", info.access); 
        alert("Foydalanuvchi tizimga muvaffaqiyatli kirdi");
        navigate("/");
      } else {
        alert(info?.non_field_errors || "Login yoki parol xato");
      }
    });
  };

  return (
    <div className="logpage">
      <div className="container">
        <div className="log">
          <div className="rights">
            <img src="/imgs/Side Image(1).png" alt="" />
          </div>
          <div className="left">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            
            <form onSubmit={handleSubmit}>
              <input
                onInput={(e) => setemail(e.target.value)}
                type="text"
                placeholder="Email or Phone Number:"
                required
              />
              <hr />
              <input
                onInput={(e) => setpassword(e.target.value)}
                type="password" 
                placeholder="Password:"
                required
              />
              <hr />
              <div className="bt">
                <button type="submit" className="bt1">Log In</button>
                <button type="button" className="bt2">Forget Password?</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;