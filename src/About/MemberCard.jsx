import React from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import "./MemberCard.css";

function MemberCard(props) {
    return (<>
        <IconContext.Provider value={{ size: "25px"}}>
            <div className="card col-md-4 col-sm-6 bg-white team">
                <div className="d-flex flex-column text-center px-md-3">
                    <div className="mb-4 text-center">
                        <img className="" style={{ width: "90%", borderRadius: "50%", paddingTop: "10px" }} src={require(`../images/team/${props.data.name.split(" ")[0].toLowerCase()}.png`)} alt={`Pic of ${props.data.name}`} />
                    </div>
                    <div>
                        <h3 className="size-sm font-weight-semibold mb-3">{props.data.name}</h3>
                        <h6 className="text-uppercase font-weight-bold mb-3">{props.data.position}</h6>
                        <div className="container" style={{ width: "75%" }}>
                            <div className="row mb-3">
                                <div className="col-4 mb-3">
                                    <div className="bg-icon mx-auto">
                                        <a className="text-white social-icon" href={props.data.instagram}><FaInstagram /></a>
                                    </div>
                                </div>
                                <div className="col-4 mb-3">
                                    <div className="bg-icon mx-auto">
                                            <a className="text-white social-icon" href={props.data.linkedin}><FaLinkedinIn /></a>
                                    </div>
                                </div>
                                <div className="col-4 mb-3">
                                    <div className="bg-icon mx-auto">
                                        <a className="text-white social-icon" href={props.data.email}><FaEnvelope /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </IconContext.Provider></>);
}

export default MemberCard;