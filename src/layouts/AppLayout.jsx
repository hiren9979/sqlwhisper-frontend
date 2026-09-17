import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../components/layout/AppHeader';
import AppSidebar from '../components/layout/AppSidebar';

const AppLayout = () => {
  return (
    <div className="app-layout">
      <AppHeader />
      <div className="app-body">
        <AppSidebar />
        <main className="app-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;