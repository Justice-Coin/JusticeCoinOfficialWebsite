import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaBars } from "react-icons/fa";

function MainNavBar(props) {
  let navCompressed = false;
  let navOpen = false;
  const threshold = 10;

  function handleScroll() {
    let scrollY = window.pageYOffset;
    var nav = document.getElementById("nav");
    if (scrollY > threshold) {
      navCompressed = true;
      nav.classList.add('stickyadd');
    } else if (!navOpen) {
      navCompressed = false;
      nav.classList.remove('stickyadd');
    }
  };

  function handleNavToggleClick() {
    let scrollY = window.pageYOffset;
    var nav = document.getElementById("nav");
    var navList = document.getElementById("nav-item-list");
    var activeNavItem = document.getElementsByClassName("active")[0];

    if (activeNavItem) {
      activeNavItem.classList.remove("active");
    }
    navOpen = !navOpen;

    if (navOpen) {
      navList.classList.add("fullPageNavDropDown");
    } else {
      navList.classList.remove("fullPageNavDropDown");
    }

    if (!navCompressed && scrollY < threshold) {
      navCompressed = true;
      nav.classList.add('stickyadd');
    } else if (navCompressed && scrollY < threshold) {
      navCompressed = false;
      nav.classList.remove('stickyadd');
    }
  }

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
            <img src={require("./images/JusticeCoinLogo.png")} alt="JusticeCoinLogo" className="img-fluid logo-light" style={{ position: "fixed", top: "10px" }} />
          </a>

        </div>
        <button className="navbar-toggler sticky border-0" type="button" onClick={handleNavToggleClick} data-toggle="collapse" data-target="#responsive-navbar-nav" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="" id="nav-toggle-button" style={{ fontSize: "30px" }}><FaBars /></span>
        </button>
        <div className="collapse navbar-collapse" id="responsive-navbar-nav">
          <ul className="navbar-nav ml-auto" id="nav-item-list">
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
            <li className={props.activePage === 'blog' ? 'nav-item active' : 'nav-item'}>
            {props.activePage !== "webMiner" ?
                <Link className="nav-link" to="/blog" style={{ cursor: "pointer" }}>Blog</Link>
                : <a href="/blog" className="nav-link">Blog</a>}
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default MainNavBar;