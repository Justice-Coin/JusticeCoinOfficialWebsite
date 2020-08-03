import React from "react";
import SetTitle from "../setTitle.jsx";
import Nav from "../Nav.jsx";
import BigHeading from "./BigHeading";
import Typer from "./Typer";
import ChooseCardSection from "./ChooseCardSection";
import InfoSections from "./InfoSections";
import Contact from "./Contact";

function HomePage() {
    document.body.style.backgroundColor = "#EEEEEE";
    return (
        <>
            <SetTitle title="JusticeCoin | Decentralized Activism" />
            <Nav activePage="home" />
            <BigHeading />
            <Typer />
            <ChooseCardSection />
            <InfoSections />
            <Contact />
        </>
    )
}

export default HomePage