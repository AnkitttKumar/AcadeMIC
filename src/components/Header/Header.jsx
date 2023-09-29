import React, { useRef } from "react";
import "./header.css";
import "remixicon/fonts/remixicon.css";
import { Container } from "reactstrap";

const navLinks = [
  {
    display: "Home",
    url: "home",
  },
  {
    display: "About",
    url: "about",
  },
  {
    display: "Courses",
    url: "courses",
  },
  {
    display: "Pages",
    url: "pages",
  },
  {
    display: "Log-In",
    url: "#",
  },
];
const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center">
              <i class="ri-pantone-line"></i>Acade
              <span style={{ color: "#17bf9e" }}>MIC</span>
            </h2>
          </div>
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu " ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-3">
                <i class="ri-phone-line"></i>+91-9876543210
              </p>
            </div>
          </div>
          <div className="mobile__menu">
            <span>
              <i class="ri-menu-fill" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
