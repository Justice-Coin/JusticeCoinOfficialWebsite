import React from "react";
import firebaseDB from "./firebaseDB";
import { useEffect } from "react";
import { useState } from "react";
import MainNavBar from "../Nav";
import PageTitle from "../PageTitle";

function BlogPostPage(props) {
    const [postData, setPostData] = useState({})
    const [error, setError] = useState("");
    const postID = window.location.pathname.split("/").pop()
    useEffect(() => {
        firebaseDB.collection("blogPosts").doc(postID).get().then(function (doc) {
            if (doc.exists) {
                setPostData(doc.data());
            } else {
                setError("post-not-found");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
            setError("cant-get-post");
        });
    }, []);

    return (<>
        <MainNavBar activePage="blog" />
        <PageTitle />
        <div className="text-center" dangerouslySetInnerHTML={{ __html: postData.content }}>

        </div>
    </>);
}

export default BlogPostPage;