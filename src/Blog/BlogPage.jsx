import React, { useState } from "react";
import MainNavBar from "../Nav";
import PageTitle from "../PageTitle";
import firebaseDB from "./firebaseDB";
import { useEffect } from "react";
import BlogPostsContainer from "./BlogPostsContainer";
import Footer from "../Footer/Footer";
import { FaSpinner } from "react-icons/fa";

function BlogPage() {
    const [blogData, setBlogData] = useState([]);

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
                setBlogData(arrayOfDocuments);
            });
    }, []);

    return (<>
        <MainNavBar activePage="blog" />
        <PageTitle title="Blog" />
        <div className="container">
            <div className="row">
                <div className="col-md-9 col-xs-12">
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