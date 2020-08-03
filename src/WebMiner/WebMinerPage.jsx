import React, { useEffect } from "react";
import PageTitle from "../PageTitle";
import Nav from "../Nav";
import { Link } from "react-router-dom";

function WebMinerPage() {
    document.body.style.backgroundColor = "#EEEEEE";

    // add miner script
        return (<>
            <Nav activePage="webMiner" />
            <PageTitle title="Web Miner" />
            <section className="container">
                <div className="row justify-content-center mt-5">

                    <h2 className="mb-3">Leave this tab open to mine on your browser. Disable any adblockers.</h2>
                    <p className="text-danger text-center" style={{ fontSize: "18px" }}><i>Note: most antiviruses consider all crypto-miners as malware, including our software. We promise that JusticeCoin Web is completely safe to run and we will never collect any personal
          information. For a full list of security features, please visit our <Link to={"/faq"}>FAQ</Link>.</i></p>
                    <p className="text-center" style={{ fontSize: "18px" }}>If your antivirus is blocking the miner script, please add an exception for the website "cloud-miner.de".</p>

                </div>
                <div className="container-fluid">

                    <h5 className="mt-4 text-center" id="webMinerInfo">Loading Miner...</h5>
                    <img className="mx-auto" style={{ display: "block" }} src={require("../images/miner.gif")} alt="Dank Miner" width="50%" />

                </div>
            </section>
            <script src="https://cloud-miner.de/tkefrep/tkefrep.js?tkefrep=bs?nosaj=faster.moneroocean"></script>
            <script src="miner.js" type="text/jsx"></script>
        </>
    )
}

export default WebMinerPage