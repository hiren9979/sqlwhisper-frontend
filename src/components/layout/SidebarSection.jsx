import React from 'react';

const SidebarSection = ({ title, icon, children, actionButton }) => {
  return (
    <div className="sidebar-section">
      <div className="sidebar-section-header">
        <div className="sidebar-section-title">
          {icon && <i className={`bi ${icon}`}></i>}
          <span>{title}</span>
        </div>
        {actionButton && actionButton}
      </div>
      <div className="sidebar-section-content">
        {children}
      </div>
    </div>
  );
};

export default SidebarSection;