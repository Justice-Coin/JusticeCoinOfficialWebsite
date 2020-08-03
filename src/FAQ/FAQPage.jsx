import React from "react";
import PageTitle from "../PageTitle";
import faqData from "./faqData";
import Nav from "../Nav.jsx";
import SetTitle from "../setTitle.jsx";


function FAQPage() {
    document.body.style.backgroundColor = "#EEEEEE";
    // MAKE COLLAPSIBLE PANELS WITH REACT-BOOTSTRAP
    return (<>
        <SetTitle title="FAQs | JusticeCoin | Decentralized Activism" />
        <Nav activePage="faq" />
            <PageTitle title="FAQs" />
            <section class="container-fluid" style={{marginTop: "5vh"}}>

                <div class="text-center">
                    <h1>Frequently Asked Questions</h1>
                </div>
                {faqData.map((data, idx) => {
                    return <div key={idx} className="panel-group">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title mb-3">
                                    <a data-toggle="collapse" className="faq-question" href={'#collapse' + idx}> • {data.question}</a>
                                </h3>
                            </div>
                            <div id={'collapse' + idx} className="panel-collapse collapse">
                                <div className="panel-body faq-answer mb-3">{data.answer}</div>
                            </div>
                        </div>
                    </div>
                })}
            </section>
    </>)
}

export default FAQPage