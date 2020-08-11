import React from "react";
import firebaseDB from "./firebaseDB";
import { useEffect } from "react";
import { useState } from "react";
import MainNavBar from "../Nav";
import PageTitle from "../PageTitle";
import Footer from "../Footer/Footer";
import moment from "moment";

function BlogPostPage(props) {
    const [postData, setPostData] = useState({ author: "", title: "", description: "", content: "" });
    const [error, setError] = useState("");
    let postID = props.match.params.postID;
    if (!postID.match(/^[0-9a-zA-Z]+$/)) {
        postID = "invalid";
        console.log("invalid Post ID");
    }


    // Below is to use with queries
    // const postID = props.match.params.postID;

    useEffect(() => {
        console.log("postID" + postID);
        if (postID === "invalid") {
            setError("post-not-found");
        } else {
            console.log("postID valid");
            if (typeof props.location.state !== 'undefined') {
                setPostData(props.location.state);
            } else {
                console.log("No Post Data Passed");
                getDataFromFirebase();
            }
        }
    }, []);

    function getDataFromFirebase() {
        console.log("Retrieving data from firebase");
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
    }

    return (<>
        <MainNavBar activePage="blog" />
        <PageTitle />

        {error === "post-not-found" ? <p className="text-center my-5">This blog post doesn't exist.</p>
            : error === "cant-get-post" ? <p className="text-center my-5">There was an error in retrieving this post. Please try again later</p>
                : <div className="container my-5">
                <h1 className="text-center">{postData.title}</h1>
                <p className="text-secondary text-center">{postData.author} | {moment(new Date(postData.datePublished)).format("MMM Do, YYYY")} | {postData.category}</p>
                <h6 className="text-center">{postData.description}</h6>
                    <div className=" container" dangerouslySetInnerHTML={{ __html: postData.content }}></div>
                </div>}
        <Footer />
    </>);
}

export default BlogPostPage;