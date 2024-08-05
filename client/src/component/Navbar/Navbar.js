import React, {useState , useEffect} from "react";
import "./Navbar.css";
import defaltProfileImage from "./profile.png"
import { Link } from 'react-router-dom'
import toast from "react-hot-toast";



function Navbar() {
  const [User, setUser] = useState("");

  const Logout = () => {
    localStorage.clear();
    toast.success("Logged out successfully");

    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  const Login = () => {
    window.location.href = "/login";
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setUser(currentUser);
    }

    console.log(currentUser);
  }, []);

  return (
    <div>
      <div className="nav-bar-container">
        <div className="profile-container">
          <img
            src={User ? User.profilePhoto : defaltProfileImage}
            alt="profile-image"
            className="profile-image"
          />

          <p>{User ? User.fullName : "No User"}</p>
        </div>

        <ul type="none" className="list-container">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/bmi-calculator">
            <li>BMI Calculator</li>
          </Link>

          <Link to="/signup">
            <li>Signup</li>
          </Link>

          <li>
            {User ? 
            (
              <li onClick={Logout} className="L-btn">
                Logout
              </li>
            ) 

            
            :
            (
              <li onClick={Login} className="L-btn">
                Login
              </li>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
