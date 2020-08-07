import React from "react";
import {Link} from "react-router-dom";

function InfoSections() {

    return (<>
        {/* <!-- START SECTION BEGINNER --> */}
        <section className="container-fluid section section_beginner" id="route1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-5">
                        <h2 className="font-weight-bold " style={{ color: "#E0B000" }}>Donate Money Without Spending a Dime</h2>
                        <p className="text" style={{ fontSize: "20px", color: "#000000" }}>By mining cryptocurrency, we transform your computer's computing power into funding for the Atlanta Black-Owned Business Fund.</p>
                        <p className="text" style={{ fontSize: "20px", color: "#000000" }}>In the future, we will expand our outreach to more non-profit organizations. With enough downloads over time, the money builds up, and you’ll be part of an initiative with the
            potential to help thousands of people.</p>

                    </div>
                    <div className="col-lg-6 col-sm-12 text-center">
                        <img src={require("../images/home-gift.svg")} alt="" style={{ maxWidth: "400px", marginTop: "15vh", marginBottom: "10vh" }} />
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- END SECTION BEGINNER --> */}
        {/* <!-- START SECTION INTERMEDIATE --> */}
        <section className="container-fluid section section_intermediate" id="route2">
            <div className="container">
                <div className="row">

                    <div className="order-last order-lg-first col-lg-6 col-sm-12 text-center mb-3">
                        <img src={require("../images/home-check.svg")} alt="" style={{ maxWidth: "400px", marginTop: "15vh", marginBottom: "10vh" }} />
                    </div>
                    <div className="order-sm-first col-lg-6 col-sm-12">
                        <h2 className="font-weight-bold " style={{ color: "#E0B000" }}>Crypto isn’t real money, but it has real-world exchange value.</h2>
                        <p className="text" style={{ fontSize: "20px", color: "#FFF" }}>Cryptocurrency is generated through users running computers to solve difficult computational problems in a process known as <i>mining</i>.</p>
                        <p className="text" style={{ fontSize: "20px", color: "#FFF" }}>When a problem is solved, the user is rewarded with units of that cryptocurrency (Monero). The more users that mine, the higher the exchange rate becomes.</p>
                        <p className="text" style={{ fontSize: "20px", color: "#FFF" }}>At the end of each mining period, we exchange the Monero for US dollars and donate the earnings to a rotating non-profit organization. </p>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- END SECTION INTERMEDIATE --> */}
        {/* <!-- START SECTION ADVANCED --> */}
        <section className="container-fluid section section_advanced" id="route3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-5">
                        <h2 className="font-weight-bold" style={{ color: "#E0B000" }}>Meet Our Team</h2>
                        <p className="text" style={{ fontSize: "20px", color: "#000" }}>We’re a group of high school innovators striving to create the next generation of technological activism.</p>
                        <p className="text" style={{ fontSize: "20px", color: "#000" }}>We believe that blockchain technology can revolutionize existing fundraising models and fuel social change.</p>
                        <p className="text" style={{ fontSize: "20px", color: "#000" }}> <Link to={"/about"}>Learn more</Link> about us.</p>
                    </div>


                    <div className="col-lg-6 col-sm-12 text-center mb-5">
                        <img src={require("../images/home-team.svg")} alt="" style={{ maxWidth: "400px"}} />
                    </div>
                </div>

            </div>
        </section>
        {/* <!-- END SECTION ADVANCED --> */}
        {/* <!-- START SECTION TRY --> */}
        <section className="container-fluid section section_try" id="route4">
            <div className="container">
                <div className="row">

                    <div className="order-last order-lg-first col-lg-6 col-sm-12 text-center mb-5">
                        <img src={require("../images/home-download.svg")} alt="" style={{ maxWidth: "400px" }} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <h2 className="font-weight-bold " style={{ color: "#E0B000" }}>Download Our Miner</h2>
                        <p className="text" style={{ fontSize: "20px", color: "#FFF" }}>You can download our secure <Link to={"/download"}>desktop app</Link> or you can try out our <Link to={"/web-miner"}>web miner</Link>.</p>
                        <p className="text" style={{ fontSize: "20px", color: "#FFF" }}>You can find all our source code on our <a href="https://github.com/Justice-Coin/" target="_blank"> github page</a>.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- END SECTION TRY --> */}
    </>)
}

export default InfoSections;