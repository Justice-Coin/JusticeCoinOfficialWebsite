import React from "react";
// import Typist from "react-typist";
// import Typing from "react-typing-animation";
import Typical from "react-typical";

function Typer() {
    const typistDelayTime = 2 * 1000;
    const stringsToType = [" is safe to use.", " is easy to setup.", " is decentralizing activism."];
    const stepsArray = []
    // for (let i = 0; i>stringsToType.length; i++) {
        
    // }
    return (<>
        <section className="container">
            <div className="col-lg-12 text-dark mt-4 mb-5" style={{ height: "100px", paddingBottom: "10px"}}>
                <h2 className="text-center text-dark font-weight-bold makesmall" style={{ color: "#000080" }}>
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