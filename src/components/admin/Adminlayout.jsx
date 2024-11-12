// AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Adminlayout.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="/admin/albumlist">All Albums</a></li>
            <li><a href="/admin/albumupload">upload</a></li>
            <li><a href="/admin/settings">Settings</a></li>
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
