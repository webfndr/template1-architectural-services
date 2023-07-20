// ModalNavbar.js
import React, { useState } from 'react';
import './ModalNavbar.css'; // Import the CSS file for styling the modal navbar

const ModalNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">Logo test nga tanga mo</div>
        <div className="hamburger-icon" onClick={toggleModal}>
          &#9776;
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              {/* Add more navigation links as needed */}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ModalNavbar;
