import React from 'react';
import './style/SideBar.css';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <h2>Sidebar</h2>  
      <button className="sidebar-button" onClick={() => handleNavigate('/pl-matches')}>
        PL Live Matches
      </button>
    </div>
  );
};

export default SideBar;
