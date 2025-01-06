// AdminLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './Adminlayout.css';

const AdminLayout = () => {

  const location = useLocation();
  // Helper function to check if the current route matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <div className="admin-layout">
    <aside className="sidebar">
      <nav>
        <ul>
          <li className={isActive('/admin/albumlist') ? 'active' : ''}>
            <div className={isActive('/admin/albumlist') ? 'topbox active' : 'topbox'}></div>
            <a href="/admin/albumlist">All Albums</a>
            <div className={isActive('/admin/albumlist') ? 'btmbox active' : 'btmbox'}></div>
          </li>
          <li className={isActive('/admin/albumupload') ? 'active' : ''}>
            <div className={isActive('/admin/albumupload') ? 'topbox active' : 'topbox'}></div>
            <a href="/admin/albumupload">Upload</a>
            <div className={isActive('/admin/albumupload') ? 'btmbox active' : 'btmbox'}></div>
          </li>
          <li className={isActive('/admin/settings') ? 'active' : ''}>
            <div className={isActive('/admin/settings') ? 'topbox active' : 'topbox'}></div>
            <a href="/admin/settings">Settings</a>
            <div className={isActive('/admin/settings') ? 'btmbox active' : 'btmbox'}></div>
          </li>
        </ul>
      </nav>
    </aside>
      <main className="main-content">
        <Outlet /> {/* This will render the clicked item content */}
      </main>
    </div>
  );
};

export default AdminLayout;
