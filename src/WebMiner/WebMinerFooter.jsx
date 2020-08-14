import React from "react";
import "../Footer/Footer.css";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'


function WebMinerFooter() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p>JusticeCoin is a radical decentralized crypto-based fundraising model built to support organizations promoting
                        equality and social justice. Contact us at contact@justicecoin.com.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Miners</h6>
                        <ul className="footer-links">
                            <li><a href={"/webMiner"}>Web Miner</a></li>
                            <li><a href={"/download"}>Desktop Miner</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href={"/"}>Home</a></li>
                            <li><a href={"/about"}>About Us</a></li>
                            <li><a href={"#contact"}>Contact</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by JusticeCoin.</p>
          <p>Built with ❤</p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a href="https://github.com/Justice-Coin"><FaGithub /></a></li>
                            <li><a href="https://twitter.com/Justice_Coin"><FaTwitter /></a></li>
                            <li><a href="https://www.instagram.com/justice_coin/"><FaInstagram /></a></li>
                            <li><a href="https://www.linkedin.com/company/justice-coin/"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default WebMinerFooter;