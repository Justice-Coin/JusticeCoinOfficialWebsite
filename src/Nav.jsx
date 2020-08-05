import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Nav(props) {
  const [navCompressed, setNavCompressed] = useState(false)
  function handleScroll() {
    let nav = document.getElementById("nav")
    let scrollY = window.pageYOffset;
    if (scrollY > 150) {
      nav.classList.add('stickyadd');
      setNavCompressed(true)
    } else {
      nav.classList.remove('stickyadd');
      setNavCompressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky" id="nav">
      <div className="container">
        {/* <!-- LOGO --> */}
        <div className="navbar-brand">
          <a className="logo anchor" href="/">
            <img src={require("./images/JusticeCoinLogo.png")} alt="JusticeCoinLogo" className="img-fluid logo-light" style={{ position: "fixed", top: "10px", width: "250px", height: "auto" }} />
          </a>

        </div>
        <button className="navbar-toggler sticky" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <strong className="mdi mdi-menu" id="menu-button" style={{ fontSize: "20px" }}>Menu</strong>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            {/* make this better with another component and data.map() */}
            {/* Lol nevermind its too complex */}
            {/* ALso add css class for cursor pointer */}
            <li className={props.activePage === 'home' ? 'nav-item active' : 'nav-item'}>
              {props.activePage === "home" ?
                <ScrollLink className="nav-link" to="topOfHome" smooth={true} duration={500} style={{ cursor: "pointer" }}>Home</ScrollLink>
                : props.activePage === "webMiner" ? <a href="/" className="nav-link">Home</a>
                  : <Link to="/" className="nav-link">Home</Link>}
            </li>
            <li className={props.activePage === 'faq' ? 'nav-item active' : 'nav-item'}>
              {props.activePage !== "webMiner" ?
                <Link className="nav-link" to="/faq" style={{ cursor: "pointer" }}>FAQ</Link>
                : <a href="/faq" className="nav-link">FAQ</a>}
            </li>
            <li className={props.activePage === 'about' ? 'nav-item active' : 'nav-item'}>
              {props.activePage !== "webMiner" ?
                <Link className="nav-link" to="/about" style={{ cursor: "pointer" }}>About</Link>
                : <a href="/about" className="nav-link">About</a>}
            </li>
            <li className={props.activePage === 'webMiner' ? 'nav-item active' : 'nav-item'}>
              {props.activePage !== "webMiner" ?
                <Link className="nav-link" to="/webMiner" style={{ cursor: "pointer" }}>Web Miner</Link>
                : <a href="/webMiner" className="nav-link">Web Miner</a>}
            </li>
            <li className={props.activePage === 'download' ? 'nav-item active' : 'nav-item'}>
              {props.activePage !== "webMiner" ?
                <Link className="nav-link" to="/download" style={{ cursor: "pointer" }}>Download</Link>
                : <a href="/download" className="nav-link">Download</a>}
            </li>
            <li className="nav-item">
              {props.activePage === "home" ?
                <ScrollLink className="nav-link" to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }}>Contact</ScrollLink>
                : <a href="/#contact" className="nav-link">Contact</a>}
            </li>
            {/* <li className={props.activePage === 'blog' ? 'nav-item active' : 'nav-item'}>
              <Link to={"/blog"} className="nav-link">Blog</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Nav;