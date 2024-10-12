import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar bg-info">
        <div className="sidebar-item">
          <Link
            to="/buslist"
            className="btn-lg text-decoration-none text-black"
          >
            BUS LIST
          </Link>
        </div>

        <div className="sidebar-item">
          <Link
            to="/driverlist"
            className="btn-lg text-decoration-none text-black "
          >
            DRIVER LIST
          </Link>
        </div>
        <div className="sidebar-item">
          <Link
            to="/shiftlist"
            className="btn-lg text-decoration-none text-black"
          >
            SHIFT LIST
          </Link>
        </div>
        <div className="sidebar-item">
          <Link
            to="/routelist"
            className="btn-lg text-decoration-none text-black"
          >
           ROUTE LIST
          </Link>
        </div>
        <div className="sidebar-item">
          <Link
            to="/parking"
            className="btn-lg text-decoration-none text-black"
          >
           PARKING
          </Link>
        </div>
        <div className="sidebar-item">
          <Link
            to="/adminlist"
            className="btn-lg text-decoration-none text-black"
          >
           ADMIN LIST
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
