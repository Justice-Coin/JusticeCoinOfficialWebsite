import React, {useEffect} from "react";
import moment from "moment";
import { Link } from "react-router-dom";

function BlogPostsContainer(props) {

    return (<>
        {props.data.map((post) => {
            return <div key={post.id} className="row my-4">
                <div className="col-5 bg-white">
                    <Link to={{pathname: `/blog/posts/${post.id}`, state: post}} >
                        <div className="blog-thumbnail" >
                            <img className="blog-image" src={post.thumbnailURL} />
                            <div className="blog-overlay"></div>
                        </div>
                    </Link>
                </div>
                <div className="col-6 ml-3">
                    <div className="mt-5 mb-3">
                        <br />
                        <Link to={{pathname: `/blog/posts/${post.id}`, state: post}} ><h2 className="postTitle"><strong>{post.title}</strong></h2></Link>
                        <p className="text-secondary">{post.author} | {moment(new Date(post.datePublished)).format("MMM Do, YYYY")} | {post.category}</p>
                    </div>
                    <div>
                        <p className="text-dark" style={{ fontSize: "17px" }}>{post.description}</p>
                    </div>
                </div>
            </div>
        })}
    </>);
}

export default BlogPostsContainer;