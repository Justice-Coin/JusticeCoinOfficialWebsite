import React from "react";
import SetTitle from "../SetTitle";
import Nav from "../Nav";
import PageTitle from "../PageTopBlue";
import teamData from "./teamData";
import MemberCard from "./MemberCard";
import Footer from "../Footer/Footer";

function AboutPage() {

    return (
        <>
            <SetTitle title="About | JusticeCoin | Decentralized Activism" />
            <Nav activePage="about" />
            <PageTitle />
            <section className="container-fluid" style={{ marginTop: "5vh" }}>
                <h1 className="text-center my-4">Meet The Team</h1>
                <div className="row item-margin justify-content-center">
                    {teamData.map(data => {
                        return <MemberCard key={data.name} data={data} />
                    })}
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutPage