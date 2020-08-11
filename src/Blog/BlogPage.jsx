import React, { useState } from "react";
import MainNavBar from "../Nav";
import PageTitle from "../PageTopBlue";
import firebaseDB from "./firebaseDB";
import { useEffect } from "react";
import BlogPostsContainer from "./BlogPostsContainer";
import Footer from "../Footer/Footer";

function BlogPage() {
    const [blogData, setBlogData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        let arrayOfDocuments = [];
        firebaseDB.collection("blogPosts").get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log({ ...doc.data(), id: doc.id });
                    let currentDocument = { ...doc.data(), id: doc.id };
                    arrayOfDocuments.push(currentDocument);
                });
            }).then(() => {
                setDataLoaded(true);
                setBlogData(arrayOfDocuments);
            });
    }, []);

    useEffect(() => {
        if (dataLoaded) {
            document.getElementById("loader").remove();
            document.getElementById("blog-post-container-holder").style = "";
        }
    }, [blogData]);

    return (<>
        <MainNavBar activePage="blog" />
        <PageTitle title="Blog" />
        <div className="container"> 
            <div className="row">
                <div className="col-md-9 col-xs-12" id="blog-post-container-holder" style={{minHeight: "40vh"}}>
                    <div id="loader" className="mx-auto mt-5"></div>
                    <BlogPostsContainer data={blogData} />
                </div>
                <div className="col-md-3 col-xs-12">
                    Put Side Bar here
            </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default BlogPage;