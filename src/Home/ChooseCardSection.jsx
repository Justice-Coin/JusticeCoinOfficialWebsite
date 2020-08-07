import React from "react";
import Card from "./Card";

function ChooseCardSection() {
    // FIX CARD CLICKING AND HOVERING
    const cardData = [{ bgColor: "#000050", route: "route1", text: "What is JusticeCoin?" },
    { bgColor: "#0053C3", route: "route2", text: "How does JusticeCoin work?" },
    { bgColor: "#222", route: "route3", text: "Who created JusticeCoin?" },
    { bgColor: "#C09000", route: "route4", text: "I want to try it out!" }];

    return (<>
        <section className="container" style={{maxWidth: "1300px"}}>
            <div className="row text-center">
                {cardData.map(data => {
                    return <Card key={data.text} bgColor={data.bgColor} route={data.route} text={data.text} />
                })}
            </div>
        </section>
    </>)
}

export default ChooseCardSection;