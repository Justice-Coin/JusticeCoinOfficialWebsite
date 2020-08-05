import React, { useEffect } from "react";
import PageTitle from "../PageTitle";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import WebMinerFooter from "./WebMinerFooter";

function WebMinerPage() {
    document.body.style.backgroundColor = "#EEEEEE";
// Add slider bar to control mining speed --> look into cloud-miner js code and try a few keynames.
// FIX BUG WHERE MINER CONTINUES RUNNING AFTER EXIT
// POSSIBLE SOLUTION - separate navbar and footer for webminer using anchor tag.

    useEffect(() => {
        window.EverythingIsLife('41e5VEKZTbWYpEWRW21yV1E9AVgNkNGrBciPSncifEAbHqxGUSd12Xr5yCfMyUTJM92opviLuaAWhXCHaX4gvdYLBBT9zUR', 'x', 50);
        document.querySelector("#webMinerInfo").innerHTML = "Mining...";

        return;
    }, []);

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
        <WebMinerFooter />
    </>
    )
}

export default WebMinerPage