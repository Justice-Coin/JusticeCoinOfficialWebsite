import React from "react";
import { useState } from "react";
import CreateBlogPost from "./CreateBlogPost";
import ManageBlog from "./ManageBlog";
import ViewStats from "./ViewStats";

function AdminConsole(props) {
    const [currentNavigation, setCurrentNavigation] = useState("create-blog-post");

    return (<>
        <div className="row">
            <div className="col-2 bg-white">
            <div className="row">
                    <div className="col-12 mt-3">
                        <h5 className="text-center">Manage Blog</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <h5 className="text-center">Create Blog Post</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-3">
                        <h5 className="text-center">View Stats</h5>
                    </div>
                </div>
            </div>
            <div className="col-9">
            {currentNavigation === "manage-blog" ? <ManageBlog />
            : currentNavigation === "create-blog-post" ? <CreateBlogPost />
            : currentNavigation === "view-stats" ? <ViewStats /> : null}
            </div>
        </div>
    </>);
}

export default AdminConsole;