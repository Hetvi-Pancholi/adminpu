import React, { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Admin from "../../pages/Admin";
import App from "../../App"

const Login = ({setLogin}) => {
  // State for holding email and password values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data object
    const formData = new FormData();
    formData.append("key_email", email);
    formData.append("key_pass", password);

    try {
      console.log("Email:", email);
console.log("Password:", password);
console.log("FormData:", formData.get('key_email'), formData.get('key_pass'));

      // Send POST request to your PHP backend
      const response = await axios.post("http://localhost/pu_bus.php/login_admin", formData);
      console.log("Response:", response.data);
      console.log("stuatus",response.status);
      
      if (response.status===200) {
        // Handle successful login, e.g., redirect or show success message
        setLogin(true);
        alert("Login successful");
        //<Link to="/routelist"/>
        // window.location.replace("/")
        <App/>
        // <Admin/>
      } else {
        // Handle login error, show error message
        alert("Login failed: " + response.data.message);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className={`m-xxl-5 ${styles.centerStyle}`}>
      <div className={`bg-white ${styles.centerFlex}`}>
        <section className="vh-100 gradient-custom">
          <div className="text-center m-5">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="mx-5">
                <div className="card bg-dark text-white">
                  <div className="card-body p-5 text-center">
                    <form onSubmit={handleSubmit}> {/* Form submission handler */}
                      <div className="mb-md-5 mt-md-4 pb-5">
                        <h2 className="fw-bold mb-2">Log in</h2>
                        <p className="text-white-50 mb-5">
                          Please enter your login and password!
                        </p>

                        <div
                          data-mdb-input-init
                          className="form-outline form-white mb-4"
                        >
                          <input
                            type="text"
                            id="typeEmailX"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            required
                          />
                        </div>

                        <div
                          data-mdb-input-init
                          className="form-outline form-white mb-4"
                        >
                          <input
                            type="password"
                            id="typePasswordX"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                            required
                          />
                        </div>

                        <p className="small mb-5 pb-lg-2">
                          <a className="text-white-50" href="#!">
                            Forgot password?
                          </a>
                        </p>

                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-outline-light btn-lg px-5"
                          type="submit"
                          onSubmit={handleSubmit}
                        >
                          Login
                        </button>

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                          <a href="#!" className="text-white">
                            <i className="fab fa-facebook-f fa-lg"></i>
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                          </a>
                          <a href="#!" className="text-white">
                            <i className="fab fa-google fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </form>

                    <div>
                      <p className="mb-0">
                        Don't have an account?{" "}
                        <a href="#!" className="text-white-50 fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
