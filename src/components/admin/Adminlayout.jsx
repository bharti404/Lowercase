
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



import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './Adminlayout.css';
import {  NavLink } from "react-router-dom";

const AdminLayout = () => {

  const location = useLocation();
  
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



<nav>
  <ul>
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
</nav>


  </header>

  <main className="main-content">
    <Outlet /> 
  </main>
</div>

  );
};

export default AdminLayout;

