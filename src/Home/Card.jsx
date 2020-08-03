import React from "react";

function Card(props) {
  function handleCardClick(event) {
    let path = event.target.id;
    console.log(path);
    document.querySelector(path).scrollIntoView({ scrollBehavior: 'smooth' });
  }
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <button onClick={handleCardClick} id={props.route} style={{ backgroundColor: "transparent", border: "none", height: "90%" }}>
        <div className="card" style={{pointerEvents: "none", backgroundColor: props.bgColor }} >
          <div className="card-body card-link">
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </button>
    </div>);
}

export default Card;