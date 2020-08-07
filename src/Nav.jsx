import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
// import { Nav, Navbar } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function MainNavBar(props) {
  const [navCompressed, setNavCompressed] = useState(false)
  function handleScroll() {
    let nav = document.getElementById("nav")
    let scrollY = window.pageYOffset;
    if (scrollY > 10) {
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

  // FIXING DROPDOWN MENU BACKGROUND
  // On clicking the nav toggler
  // if navCompress false, add .stickyadd to the classnames if its not already there and set navCompress to true
  // else remove stickyadd from list and set navCompress true


  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky" id="nav">
      <div className="container">
        {/* <!-- LOGO --> */}
        <div className="navbar-brand">
          <a className="logo anchor" href="/">
            <img src={require("./images/JusticeCoinLogo.png")} alt="JusticeCoinLogo" className="img-fluid logo-light" style={{ position: "fixed", top: "10px"}} />
          </a>

        </div>
        <button className="navbar-toggler sticky border-0" type="button" data-toggle="collapse" data-target="#responsive-navbar-nav" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="" id="nav-toggle-button" style={{ fontSize: "30px" }}><FaBars /></span>
        </button>
        <div className="collapse navbar-collapse" id="responsive-navbar-nav">
          <ul className="navbar-nav ml-auto">
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

export default MainNavBar;








// return (
  //   <>
  //     <Navbar collapseOnSelect expand="lg" className="custom-nav" fixed="top" id="nav"}}>
  //       <Navbar.Brand href="/">
  //         <img src={require("./images/JusticeCoinLogo.png")} alt="JusticeCoinLogo" className="img-fluid logo logo-light mx-5" style={{ position: "fixed", top: "10px", width: "250px", height: "auto" }} />
  //       </Navbar.Brand>
  //       <button className="navbar-toggler sticky border-0" type="button" data-toggle="collapse" data-target="#responsive-navbar-nav" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  //          <span className="text-white" id="nav-toggle-button" style={{fontSize: "30px"}}><FaBars /></span>
  //        </button>
  //     <Navbar.Collapse id="responsive-navbar-nav">
  //       <ul className="navbar-nav ml-auto">
  //       <li className={props.activePage === 'home' ? 'nav-item active' : 'nav-item'}>
  //           {props.activePage === "home" ?
  //             <ScrollLink className="nav-link" to="topOfHome" smooth={true} duration={500} style={{ cursor: "pointer" }}>Home</ScrollLink>
  //             : props.activePage === "webMiner" ? <a href="/" className="nav-link">Home</a>
  //               : <Link to="/" className="nav-link">Home</Link>}
  //         </li>
  //         <li className={props.activePage === 'faq' ? 'nav-item active' : 'nav-item'}>
  //           {props.activePage === "faq" ?
  //             <Link className="nav-link" to="/faq" smooth={true} duration={500} style={{ cursor: "pointer" }}>FAQ</Link>
  //             : props.activePage === "webMiner" ? <a href="/faq" className="nav-link">FAQ</a>
  //               : <Link to="/faq" className="nav-link">FAQ</Link>}
  //         </li>
  //         <li className={props.activePage === 'about' ? 'nav-item active' : 'nav-item'}>
  //             {props.activePage !== "webMiner" ?
  //               <Link className="nav-link" to="/about" style={{ cursor: "pointer" }}>About Us</Link>
  //               : <a href="/about" className="nav-link">About Us</a>}
  //           </li>
  //           <li className={props.activePage === 'webMiner' ? 'nav-item active' : 'nav-item'}>
  //             {props.activePage !== "webMiner" ?
  //               <Link className="nav-link" to="/webMiner" style={{ cursor: "pointer" }}>Web Miner</Link>
  //               : <a href="/webMiner" className="nav-link">Web Miner</a>}
  //           </li>
  //           <li className={props.activePage === 'download' ? 'nav-item active' : 'nav-item'}>
  //             {props.activePage !== "webMiner" ?
  //               <Link className="nav-link" to="/download" style={{ cursor: "pointer" }}>Download</Link>
  //               : <a href="/download" className="nav-link">Download</a>}
  //           </li>
  //           <li className="nav-item">
  //             {props.activePage === "home" ?
  //               <ScrollLink className="nav-link" to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }}>Contact</ScrollLink>
  //               : <a href="/#contact" className="nav-link">Contact</a>}
  //           </li>
  //       </ul>
  //       </Navbar.Collapse>
  //     </Navbar>
  //   </>
  // );