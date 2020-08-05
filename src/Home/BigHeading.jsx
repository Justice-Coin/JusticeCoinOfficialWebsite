import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";
import {Link} from "react-router-dom";

function BigHeading() {
  // Make particles Config a seperate file
  const config = particlesConfig;
  return (
    <section className="h-100vh" id="topOfHome">
      <div className="bg-overlay-gradient" style={{ zIndex: "-1", width: "100%", height: "100%" }}></div>
      <Particles params={config} style={{position: "absolute", marginTop: "0px", zIndex: 99}}
/>
      <div className="home-table">
        <div className="home-table-center">
          <div className="container position-relative">
            <div className="row justify-content-center">
              <div className="col-lg-12 text-white text-header_title">
                <h1 className="appear header_title" style={{ color: "#FFF" }}>JusticeCoin</h1>
              </div>
            </div>
            <h2 className="text-header_title" style={{ color: "#F0C000" }}>
              Crypto for change:
          </h2>
            <h2 className="text" style={{ color: "#fff" }}>
              Mining cryptocurrency to support organizations for social justice
          </h2>
            <br />
           <Link to={"/webMiner"}>
              <button style={{ zIndex: "100", position: "relative" }} className="mx-1 btn btn-large btn-outline-light">
                <strong style={{ fontSize: "20px" }}>Start Mining Online</strong>
              </button>
            </Link>
           <Link to={"/download"}>
              <button style={{ zIndex: "100", position: "relative" }} className="mx-1 btn btn-large btn-outline-warning">
                <strong style={{ fontSize: "20px" }}>Download Our Secure Desktop Miner</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
  
    </section>
  )
}

export default BigHeading;