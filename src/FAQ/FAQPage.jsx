import React from "react";
import PageTitle from "../PageTopBlue";
import faqData from "./faqData";
import Nav from "../Nav";
import { Accordion, Card } from "react-bootstrap";
import Footer from "../Footer/Footer";
import SetTitle from "../SetTitle.jsx";

function FAQPage() {
    // MAKE SEARCH BOX WORK (CHECK IF MATCH IN Q/A)

    document.body.style.backgroundColor = "#EEEEEE";
    return (<>
        <SetTitle title="FAQs | JusticeCoin | Decentralized Activism" />
        <Nav activePage="faq" />
        <PageTitle title="FAQs" />
        <section className="container-fluid mt-5">

            <div className="text-center">
                <h1>Frequently Asked Questions</h1>
            </div>

            <div className="container mt-5">
                <form className="text-center" action="/faq" method="POST">
                    <input type="text" autoComplete="off" name="faq-search" className="form-control form-control-lg" placeholder="Search For Questions" />
                </form>
            </div>

            <section className="container mt-5">
                <Accordion>
                    <div>
                        {faqData.map((data, idx) => {
                            return (<div key={idx}>
                                <div>
                                    <Accordion.Toggle className="faq-question" as={Card.Header} variant="link" eventKey={idx + 1} style={{ cursor: "pointer" }}>
                                        {data.question}
                                    </Accordion.Toggle>
                                </div>
                                <Accordion.Collapse eventKey={idx + 1}>
                                    <div className="panel-body faq-answer">
                                        <div className="p-4">{data.answer}</div>
                                    </div>
                                </Accordion.Collapse>
                            </div>);
                        })}
                    </div>
                </Accordion>
            </section>
        </section>
        <Footer />
    </>)
}

export default FAQPage