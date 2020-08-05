import React from "react";
import PageTitle from "../PageTitle";
import Nav from "../Nav";
import { FaWindows } from "react-icons/fa";

function DownloadWindowsPage(props) {

    return (<>
        <Nav />
        <PageTitle title="JusticeCoin For Windows" />
        <section className="container">
    <div className="container">
      <div className="mt-5 row justify-content-center pt-0">
        <h3 className = "text-center" style = {{fontSize: "35px"}}>Mine using our desktop application!</h3>
      </div>
      <div className="mt-5 row justify-content-center">
        <a href={require("../DesktopBuilds/JusticeCoin.exe")} download>
        <button id = "download" type="download" className="btn btn-large btn-outline-dark mb-3" name="button">
          <strong style={{fontSize: "25px"}}>Download For Windows <FaWindows /></strong>
        </button>
      </a>
      <p className="text-danger text-center" style={{fontSize: "20px", paddingTop:"2vh"}}>This version is currently under active development so you can't download it yet. Sorry :(</p>
      <div className="container-fluid text-center">
        <h5 className="mt-4 text-center"></h5>
        <img className="w3-display-middle w3-large" src={require("../images/WindowsApplication.png")} alt="windowsApp" style = {{width:"75%"}}/>
      </div>
      <p className="text-danger text-center" style={{fontSize: "20px", paddingTop:"10vh"}}><i>Note: most antivirus softwares consider all crypto-miners as dangerous, and unfortunately that could include our software. But this is no cause for worry! We promise that JusticeCoin is completely safe to download and we will never collect any of your personal information. For a full list of security features, please visit our <a href="/#faq">FAQ</a>.</i></p>
      </div>
    </div>
  </section>
    </>);
}

export default DownloadWindowsPage;