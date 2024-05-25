import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container-fluid mb-2">
      <div className="row">
        <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div className="col">
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={isMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="navbarNav"
              style={{ left: 5 }}
            >
              <div className="col-lg-5 ms-lg-5"> {/* Adjusted column classes */}
                <Link className="navbar-brand ms-5 " to="/">
                  Your Logo
                </Link>
              </div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* Added ms-auto to push menu items to the right */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/EngeeniringAdmission">
                        Engeeniring Admission
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/managemnet">
                      Management Admission
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/madical">
                        Madical Admission
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/directadmission">
                    Direct Admission
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
