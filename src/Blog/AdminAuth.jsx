import React, { useState } from "react";

function AdminAuth(props) {
    const [inputPassword, setInputPassword] = useState("");
    const [incorrectMessage, setIncorrectMessage] = useState("");
    function handleFormSubmit(event) {
        event.preventDefault();
        // Do something here to authenticate
        if (inputPassword === "weneedmoredata") {
            props.setIsAuth(true);
        } else {
            setIncorrectMessage("Incorrect password.");
        }
    }
    return (<>
        <div className="container">
            <div className="jumbotron mt-5 text-center" style={{backgroundColor: "#ddd"}}>
                <img src={require("../images/JusticeCoinLogoDark.png")} style={{ width: "50%"}} />
                <h5 className="mb-4">Enter the credentials to access the admin console</h5>
                <h6 className="text-danger">{incorrectMessage}</h6>
                <form>
                    {/* <div className="form-group row">
                        <label for="inputEmail" className="col-sm-2 col-form-label">Full Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="inputEmail" placeholder="Enter Your Full Name" />
                        </div>
                    </div> */}
                    <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword" placeholder="Password" onChange={event => setInputPassword(event.target.value)} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-12">
                            <button type="submit" onClick={handleFormSubmit} value={inputPassword} className="btn btn-outline-success"><strong>Login</strong></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>);
}

export default AdminAuth;