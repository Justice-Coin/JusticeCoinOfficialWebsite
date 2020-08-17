import React from "react";
import SetTitle from "../SetTitle.jsx";
import Nav from "../Nav.jsx";
import BigHeading from "./BigHeading";
import Typer from "./Typer";
import ChooseCardSection from "./ChooseCardSection";
import InfoSections from "./InfoSections";
import Contact from "./Contact";
import Footer from "../Footer/Footer.jsx";

<html lang="en">
  <head>
    <meta property="og:title" content="__OG_TITLE__" />
    <meta property="og:description" content="__OG_DESCRIPTION__" />
  </head>
</html>

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
            <Footer />
        </>
    )
}

export default HomePage