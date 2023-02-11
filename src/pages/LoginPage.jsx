import React, { useEffect, useState } from "react";
import { FaUserCircle, FaLock, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("email") && localStorage.getItem("pass")
      ? navigate("/blog")
      : navigate("/");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    navigate("/blog");
  };

  return (
    <>
      <div className="MainContainer">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center">
              <FaUserCircle style={{ fontSize: "90px", color: "white" }} />
            </h4>
            <div className="image"></div>
          </div>
          <div className="body-form">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaUserAlt style={{ fontSize: "25px" }} />
                  </span>
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaLock style={{ fontSize: "25px" }} />
                  </span>
                </div>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="Password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-secondary btn-block"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
