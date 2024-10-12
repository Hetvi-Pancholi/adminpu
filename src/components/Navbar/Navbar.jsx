// import React from "react";
// import logo from "../../assets/react.svg";
// import profile from "../../assets/nav-profile.svg";

// const Navbar = () => {
//   return (
//     <nav className="navbar bg-info">
//       <div className="container ">
//         <a className="navbar-brand " href="/menu">
//           {/* <img src={logo} alt="Bootstrap" width="30" height="24" /> */}
//           <h4 className="text-light">pubus</h4>
//           <img src={profile} alt="Bootstrap" width="30" height="24" />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import profile from "../../assets/nav-profile.svg";
import { Link } from "react-router-dom";
import list from "../../assets/list.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-info">
      <div className="container-fluid ms-lg-3">
        {/* <Link to="/sidebar">
          <img src={list} alt="" width="70" height="60" />
        </Link> */}
        <a className="navbar-brand" href="/">
          <h4 className="text-light">pubus</h4>
        </a>
        <div>
          <Link
            to="/login"
            className="btn text-white text-center fw-medium fst-normal fs-5 btn-outline-info shadow-lg m-sm-3"
          >
            LOGIN
          </Link>

          <img src={profile} alt="Bootstrap" width="70" height="60" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
