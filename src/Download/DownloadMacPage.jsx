import React from "react";
import PageTitle from "../PageTitle";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

function DownloadMacPage(props) {

  return (<>
    <PageTitle title="JusticeCoin For Mac" />
    <section className="container">
      <div className="container">
        <div className="mt-5 row justify-content-center">
          <h3 className="text-center" style={{ fontSize: "35px" }}>Mine using our desktop application!</h3>
          <p className="text-danger text-center" style={{ fontSize: "20px", paddingTop: "2vh" }}>This version is currently under active development so you can't download it yet. Sorry :(</p>
        </div>
        <div className="mt-3 row justify-content-center">
          <a href={require("../DesktopBuilds/JusticeCoin.dmg")} download>
            <button id="download" type="download" className="btn btn-large btn-outline-dark mb-3" name="button">
              <strong style={{ fontSize: "25px" }}>Download For Mac <FaApple /></strong>
            </button>
          </a>
          <div className="col-12 text-center">
            <Link to="/download/windows">Not your OS? Download for Windows instead.</Link>
          </div>

          <div className="container-fluid text-center">
            <h5 className="mt-4 text-center"></h5>
            <img className="w3-display-middle w3-large" src={require("../images/WindowsApplication.png")} alt="macApp" style={{ width: "75%" }} />
          </div>
          <p className="text-danger text-center" style={{ fontSize: "20px", paddingTop: "10vh" }}><i>Note: most antivirus softwares consider all crypto-miners as dangerous, and unfortunately that could include our software. But this is no cause for worry! We promise that JusticeCoin is completely safe to download and we will never collect any of your personal information. For a full list of security features, please visit our <a href="/#faq">FAQ</a>.</i></p>
        </div>
      </div>
    </section>
  </>);
}

export default DownloadMacPage;