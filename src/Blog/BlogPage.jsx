import React, { useState } from "react";
import MainNavBar from "../Nav";
import PageTitle from "../PageTopBlue";
import firebaseDB from "./firebaseDB";
import { useEffect } from "react";
import BlogPostsContainer from "./BlogPostsContainer";
import Footer from "../Footer/Footer";
import SetTitle from "../SetTitle";

function BlogPage() {
    const [blogData, setBlogData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    // const [searchMatches, setSearchMatches] = useState();

    useEffect(() => {
        let arrayOfDocuments = [];
        firebaseDB.collection("blogPosts").get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // console.log({ ...doc.data(), id: doc.id });
                    let currentDocument = { ...doc.data(), id: doc.id };
                    arrayOfDocuments.push(currentDocument);
                });
            }).then(() => {
                setDataLoaded(true);
                // Sort by date and set blog data to sorted array
                setBlogData(arrayOfDocuments);
            });
    }, []);

    useEffect(() => {
        if (dataLoaded) {
            document.getElementById("loader").remove();
            document.getElementById("blog-post-container-holder").style = "";
        }
    }, [blogData]);

    useEffect(() => {
        console.log(searchInput);
    }, [searchInput]);

    return (<>
        <SetTitle title="Blog" />
        <MainNavBar activePage="blog" />
        <PageTitle title="Blog" />
        <div className="container">
            <div className="row">
                <div className="col-md-9 col-sm-12" id="blog-post-container-holder" style={{ minHeight: "40vh" }}>
                    <div id="loader" className="mx-auto mt-5"></div>
                    <BlogPostsContainer data={blogData} />
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="container mt-5">
                        <h4 className="text-center">Search for posts</h4>
                        <input className="form-control" placeholder="Type To Search" value={searchInput} onChange={event => setSearchInput(event.target.value)}></input>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </>);
}

export default BlogPage;