import React from 'react';

function Nav() {
  return (
    <>
      <nav className="navbar nav-Container navbar-expand-lg bg-body-tertiary" style={{backgroundColor: '#f5004f'}}>
        <div className="container-fluid">
          <a className="navbar-brand heading" href="#" style={{color: '#f5004f'}}>
            Ganpati Bappa
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item">
                <a 
                  className="nav-link active" 
                  aria-current="page" 
                  href="#SlideBar" 
                  style={{
                    color: '#f5004f', 
                    transition: 'color 0.5s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#7C00FE'}
                  onMouseOut={(e) => e.target.style.color = '#f5004f'}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className="nav-link" 
                  href="#About"
                  style={{
                    color: '#f5004f', 
                    transition: 'color 0.5s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#7C00FE'}
                  onMouseOut={(e) => e.target.style.color = '#f5004f'}
                >
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#Bappa"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    color: '#f5004f', 
                    transition: 'color 0.5s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#7C00FE'}
                  onMouseOut={(e) => e.target.style.color = '#f5004f'}
                >
                  Ganesh Chaturthi 
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a 
                      className="dropdown-item" 
                      href="#Bappa"
                      style={{
                        color: '#f5004f', 
                        transition: 'color 0.5s ease'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#7C00FE'}
                      onMouseOut={(e) => e.target.style.color = '#f5004f'}
                    >
                      Bappa Arti 
                    </a>
                  </li>
                  <li>
                    <a 
                      className="dropdown-item" 
                      href="#BappaVideo" 
                      style={{
                        color: '#f5004f', 
                        transition: 'color 0.5s ease'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#7C00FE'}
                      onMouseOut={(e) => e.target.style.color = '#f5004f'}
                    >
                      Bappa Song
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a 
                      className="dropdown-item" 
                      href="#BappaVideo" 
                      style={{
                        color: '#f5004f', 
                        transition: 'color 0.5s ease'
                      }}
                      onMouseOver={(e) => e.target.style.color = '#7C00FE'}
                      onMouseOut={(e) => e.target.style.color = '#f5004f'}
                    >
                      Bappa Videos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
              <a 
                  className="nav-link" 
                  href="#BappaPhotos" 
                  style={{
                    color: '#f5004f', 
                    transition: 'color 0.5s ease'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#7C00FE'}
                  onMouseOut={(e) => e.target.style.color = '#f5004f'}
                >
                  Bappa Photos
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dange btn btn-danger" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;