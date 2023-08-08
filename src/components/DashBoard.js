import React from 'react'
import searchNormal from "../images/searchNormal.png"
import notification from "../images/notification.png"
import moon from "../images/moon.png"
import vector from "../images/vector.png"

function DashBoard() {
  return (
    <>
      <div className="dashBoard-container">
        <div className="brand-logo-container">
          <div className="header">
            <h1 className="brand-logo-dashboard">Brand Logo</h1>
          </div>
          <div className='dash-add-btn'>
            <button className='add-new-btn'>
              + Add New Task
              </button>
          </div>
          <div className='dashboard-menu-bar'>
            <h2>
              Menu
            </h2>
          </div>
          <div className='overview'>
            <img></img>
            <h3>Overview</h3>
          </div>
          <div className='today'>
            <img></img>
            <h3>Today</h3>
          </div>
          <div>
            <img></img>
            <h3>Schedule</h3>
          </div>
          <div>
            <img></img>
            <h3>Note</h3>
          </div>
          <div className='projects'>
            <img></img>
            <select class="dropdown-select1">
              <option value="" disabled selected>Projects</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
             </select>
          </div>
          <div className='team'>
            <img></img>
            <select class="dropdown-select2">
              <option value="" disabled selected>Team</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
             </select>
          </div>
        </div>
        <div className="navbar-container">
          <div className="navbar">
            <div className="navbar-content">
              <div>
                <h2>Good evening, Adaeze</h2>
              </div>
              <div className="search-bar">
                <img src={searchNormal} alt="searchNormal"></img>
                <input
                  type="search"
                  className="search"
                  placeholder="search"
                ></input>
              </div>
              <div className="nav-icons">
                <img src={notification} alt="notification"></img>
                <img src={moon} alt="moon"></img>
                <img src={vector} alt="vector"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard
