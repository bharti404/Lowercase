// import React from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import './Adminlayout.css';

// const AdminLayout = () => {

//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   return (
//     <div className="admin-layout">
//     <aside className="sidebar">
//       <nav>
//         <ul>
//           <li className={isActive('/admin/albumlist') ? 'active' : ''}>
//             <div className={isActive('/admin/albumlist') ? 'topbox active' : 'topbox'}></div>
//             <a href="/admin/albumlist">All Albums</a>
//             <div className={isActive('/admin/albumlist') ? 'btmbox active' : 'btmbox'}></div>
//           </li>
//           <li className={isActive('/admin/albumupload') ? 'active' : ''}>
//             <div className={isActive('/admin/albumupload') ? 'topbox active' : 'topbox'}></div>
//             <a href="/admin/albumupload">Upload</a>
//             <div className={isActive('/admin/albumupload') ? 'btmbox active' : 'btmbox'}></div>
//           </li>
//           <li className={isActive('/admin/settings') ? 'active' : ''}>
//             <div className={isActive('/admin/settings') ? 'topbox active' : 'topbox'}></div>
//             <a href="/admin/settings">Settings</a>
//             <div className={isActive('/admin/settings') ? 'btmbox active' : 'btmbox'}></div>
//           </li>
//         </ul>
//       </nav>
//     </aside>
//       <main className="main-content">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AdminLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import "./Adminlayout.css";
import { NavLink , useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminLayout = () => {
  const navigate = useNavigate()
  // const location = useLocation();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("role");

    navigate("/admin/login");
    console.log("llogiut");
  };

  // const isActive = (path) => location.pathname === path;

  return (
    // AdminLayout.jsx
    <div className="admin-layout">
      <header className="top-navbar">
        {/* <nav>
      <ul>
        <li className={isActive('/admin/albumlist') ? 'active' : ''}>
          <a href="/admin/albumlist">All Albums</a>
        </li>

        <li className={isActive('/admin/albumlist') ? 'active' : ''}>
  <Link to="/admin/albumlist">All Albums</Link>
</li>
        <li className={isActive('/admin/albumupload') ? 'active' : ''}>
          <a href="/admin/albumupload">Upload</a>
        </li>
        <li className={isActive('/admin/settings') ? 'active' : ''}>
          <a href="/admin/settings">Settings</a>
        </li>
      </ul>
    </nav> */}

        <nav className="navbar-inner">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/admin/albumlist"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
              >
                All Albums
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/albumupload"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Upload Albums
              </NavLink>
            </li>

            {/* <li>
      <NavLink 
        to="/admin/settings" 
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Settings
      </NavLink>
    </li> */}
          </ul>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
