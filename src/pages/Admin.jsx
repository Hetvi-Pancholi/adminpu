// import React from "react";

// import { Link, Navigate, Route, Routes } from "react-router-dom";
// import Footer from "../components/Footer/Footer";

// const Home = () => {
//   return (
//     <div>
//       <h1 className="text-center fw-light fst-normal fs-1 mt-5">
//         Admin Dashboard
//       </h1>
//       <div>
//         <div className="d-grid gap-3 col-6 mx-auto m-5">
//           <Link to="/shiftdata" className="btn btn-dark btn-lg">
//             SHIFT DATA
//           </Link>
//         </div>

//         <div className="d-grid gap-3 col-6 mx-auto m-5">
//           <Link to="/busdata" className="btn btn-dark  btn-lg">
//             BUS DATA
//           </Link>
//         </div>
//         <div className="d-grid gap-3 col-6 mx-auto m-5">
//           <Link to="/feedback" className="btn btn-dark  btn-lg">
//             FEEDBACK
//           </Link>
//         </div>
//         <div className="d-grid gap-3 col-6 mx-auto m-5">
//           <Link to="/menu" className="btn btn-dark  btn-lg">
//             MENU
//           </Link>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Routes, Route } from "react-router-dom";


import Sidebar from "../components/Sidebar/Sidebar";
import "./Admin.css";
import BusList from "../components/list/BusList";
import DriverList from "../components/list/DriverList";
import ShiftList from "../components/list/ShiftList";
import RouteList from "../components/list/RouteList";
import Parking from "../components/list/Parking";
import AdminList from "../components/list/AdminList";
import App from "../App"

const Admin = () => {
  return (
    <div className="admin" >
      <Sidebar />
      <Routes>
      <Route path="/" element={<App/>} />
        <Route path="/buslist" element={<BusList />} />
        <Route path="/driverlist" element={<DriverList />} />
        <Route path="/shiftlist" element={<ShiftList />} />
        <Route path="/routelist" element={<RouteList/>} />
        <Route path="/parking" element={<Parking />} />
        <Route path="/adminlist" element={<AdminList />} />
      </Routes>
    </div>
  );
};

export default Admin;
