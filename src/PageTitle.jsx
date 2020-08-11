import React from "react";

function PageTitle(props) {
    return (<>
          <section className="container-fluid pb-5" style={{backgroundColor: "#000080"}}>
    <div className="col-lg-12 py-4" >
    {/* style={{paddingTop:"100px"}} */}
      {/* <h1 className="text-center" style={{color: "#fff", fontSize: "50px"}}>{props.title}</h1> */}
    </div>
  </section>
    </>);
}

export default PageTitle;