import React from "react";

function PageTitle(props) {
    return (<>
          <section className="container-fluid" style={{backgroundColor: "#000050", height: "40vh"}}>
    <div className="col-lg-12" style={{paddingTop:"20vh"}}>
      <h1 className="text-center" style={{color: "#fff", fontSize: "50px"}}>{props.title}</h1>
    </div>
  </section>
    </>);
}

export default PageTitle;