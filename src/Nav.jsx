import React from "react";
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg fixed-top custom-nav sticky">
  <div className="container">
    {/* <!-- LOGO --> */}
    <div className="navbar-brand">
    <a className="logo anchor" href="/">
      <img src={require("./images/JusticeCoinLogo.png")} alt="JusticeCoinLogo" className="img-fluid logo-light" style={{position: "fixed", top: "10px", width: "250px", height: "auto"}} />
    </a>

    </div>
    <button className="navbar-toggler sticky" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <strong className="mdi mdi-menu"id="menu-button" style={{fontSize: "20px"}}>Menu</strong>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav ml-auto">
        <li className={props.activePage === 'home' ? 'nav-item active':'nav-item' }>
          <a href="/#" className="nav-link">Home</a>
        </li>
        <li className={props.activePage === 'faq' ? 'nav-item active':'nav-item' }>
          <Link to={"/faq"} className="nav-link">FAQ</Link>
        </li>
        <li className={props.activePage === 'about' ? 'nav-item active':'nav-item' }>
          <Link to={"/about"} className="nav-link">About Us</Link>
        </li>
        <li className={props.activePage === 'webMiner' ? 'nav-item active':'nav-item' }>
          <Link to={"/webMiner"} className="nav-link">Web Miner</Link>
        </li>
        <li className={props.activePage === 'download' ? 'nav-item active':'nav-item' }>
          <Link to={"/download"} className="nav-link">Download</Link>
        </li>
        {/* <!-- <li className={props.activePage == 'blog' ? 'nav-item active':'nav-item' }>
          <a href="/blog" className="nav-link">Blog</a>
        </li> --> */}
        <li className="nav-item">
          <a href="/#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default Nav;