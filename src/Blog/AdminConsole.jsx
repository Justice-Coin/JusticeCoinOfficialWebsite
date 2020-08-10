import React, { useState, useEffect } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import getOptions from "./getOptions";

import firebaseDB from "./firebaseDB"; 

function AdminConsole(props) {
    const [currentConsole, setCurrentConsole] = useState("blog");
    const [sunEditorOptions, setSunEditorOptions] = useState(getOptions());
    const [blogPostAuthor, setBlogPostAuthor] = useState("");
    const [blogPostTitle, setBlogPostTitle] = useState("");
    const [blogPostContent, setBlogPostContent] = useState("");

    function sendPostToFirebase(event) {
        // console.log(event);
        // console.log(db);
        firebaseDB.collection("blogPosts").add({
            author: blogPostAuthor,
            title: blogPostTitle,
            content: blogPostContent,
            datePublished: Date.now(),
            dateLastEdited: Date.now()
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert("Successfully posted!");

            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                alert("ERROR: " + error);
            });
    };

    return (<>
        <div className="row">
            <div className="col-2 bg-white">
                <div className="row">
                    <p>Blog Editor</p>
                </div>
            </div>
            <div className="col-9" style={{ height: "90vh" }}>
                <div className="px-5 py-3">
                    <div>
                        <form>
                            <div className="row my-3">
                                <div className="col-6">
                                    <input type="text" className="form-control" id="authorInput" placeholder="Author Name" onChange={event => { setBlogPostAuthor(event.target.value) }} />
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control" id="titleInput" placeholder="Post Title" onChange={event => setBlogPostTitle(event.target.value)} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <SunEditor
                        setOptions={sunEditorOptions}
                        style={{ overflowY: "auto" }}
                        onChange={content => {
                            setBlogPostContent(content);
                        }}
                    />
                </div>
                <div>
                    <button className="btn btn-outline-secondary" onClick={event => sendPostToFirebase(event)}>Post</button>
                </div>
            </div>
        </div>
    </>);
}

export default AdminConsole;