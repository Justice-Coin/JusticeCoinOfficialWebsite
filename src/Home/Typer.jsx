import React from "react";
// import Typist from "react-typist";
// import Typing from "react-typing-animation";
import Typical from "react-typical";

function Typer() {
    return (<>
        <section className="container-fluid>" style={{marginTop: "5vh"}}>
            <div className="col-lg-12 text-dark" style={{ fontSize: "30px", height: "10vh"}}>
                <h2 className="text-center text-dark font-weight-bold" style={{ color: "#000080" }}>
                <span style={{color: "#0000A0"}}>JusticeCoin</span>
                    <Typical
                        steps={[' is safe to use.', 2000, ' is easy to setup.', 2000, ' is decentralizing activism.', 2000]}
                        loop={Infinity}
                        wrapper="span"
                    />
                </h2>
            </div>
        </section>
    </>)
}

export default Typer;