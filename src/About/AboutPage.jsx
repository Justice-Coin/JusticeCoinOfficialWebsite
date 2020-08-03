import React from "react";
import SetTitle from "../setTitle";
import Nav from "../Nav";
import PageTitle from "../PageTitle";
import teamData from "./teamData";
import MemberCard from "./MemberCard";

function AboutPage() {

    return (
        <>
        <SetTitle title="About | JusticeCoin | Decentralized Activism" />
        <Nav activePage="about" />
            <PageTitle title="Our Team" />
            <section className="container-fluid" style={{marginTop: "5vh"}}>
            <div className="row item-margin justify-content-center">
            {teamData.map(data => {
                return <MemberCard key={data.name} data={data}/>
            })}
            </div>
            </section>
    </>
    )
}

export default AboutPage