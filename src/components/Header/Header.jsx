import React, { useState } from "react";
import "./Header.css";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <h2 className="logo">MG FITNESS</h2>
      {menuOpen === false && mobile ? (
        <div style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }} onClick={() => setMenuOpen(true)}>
          <img src={bars} alt="" style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="navbar">
          <li>
            <Link to="hero" span={true} smooth={true} onClick={() => setMenuOpen(false)} activeClass="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="reasons" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Why us
            </Link>
          </li>
          <li>
            <Link to="plans" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Plans
            </Link>
          </li>
          <li>
            <Link to="testimonials" span={true} smooth={true} onClick={() => setMenuOpen(false)}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
