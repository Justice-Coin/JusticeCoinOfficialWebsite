import React from "react";
import { useState } from "react";
import CreateBlogPost from "./CreateBlogPost";
import ManageBlog from "./ManageBlog";
import ViewStats from "./ViewStats";
import { Redirect, Link } from "react-router-dom";

function AdminConsole(props) {
    document.body.style.overflowX = "hidden";
    return (<>
    {!props.isAuth && <Redirect to="/admin-login"/>}
    {/* Make the sidebar into a separate component */}
        <div className="row">
            <div className="col-2 bg-white">
            <div className="row">
                    <div className="col-12 mt-3">
                        <h5 className="text-center"><Link to="/admin-console/manage-blog">Manage Blog</Link></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <h5 className="text-center"><Link to="/admin-console/manage-blog">Create Blog Post</Link></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <h5 className="text-center"><Link to="/admin-console/manage-blog">View Stats</Link></h5>
                    </div>
                </div>
            </div>
            <div className="col-9">
            {props.nav === "manage-blog" ? <ManageBlog />
            : props.nav === "create-blog-post" ? <CreateBlogPost/>
            : props.nav === "view-stats" ? <ViewStats /> : null}
            </div>
        </div>
    </>);
}

export default AdminConsole;