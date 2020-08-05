import React from "react";
// import Nav from "./Nav";
import SetTitle from "./setTitle";
// import PageTitle from "./PageTitle";
// import Footer from "./Footer/Footer";

function PageNotFound() {
    console.log("Page not founf");
    return (
        <>
            <SetTitle title="Error 404: Page Not Found" />
            {/* <Nav /> */}
            {/* <PageTitle title="Uh-Oh" /> */}
            <section className="container text-center" style={{ marginTop: "10%" }}>
                <div>
                    <h2>The requested pathname "{window.location.pathname}" was not found on this server.</h2>
                    <h5>Maybe you wanted to go to our <a href="/">home page</a>?</h5>
                    <h5>Or perhaps you wanted to try out our <a href="/webMiner">web miner</a>?</h5>
                </div>
                <img src={require("./images/miner.gif")} style={{width: "20%"}}/>
                <img src={require("./images/miner.gif")} style={{width: "20%"}}/>
                <img src={require("./images/miner.gif")} style={{width: "20%"}}/>
                {/* ADD 404 Image of miners in that shape here */}

            </section>
            {/* <Footer /> */}
        </>
    )
}

export default PageNotFound;