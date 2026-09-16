import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <header className="header">
        <div className="container">
          <h1>Text-to-SQL</h1>
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Text-to-SQL Frontend</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;