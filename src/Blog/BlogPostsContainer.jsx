import React from "react";
import moment from "moment";

function BlogPostsContainer(props) {
    return (<>
        {props.data.map((post) => {
            return <div key={post.id} className="blog">
                <div>
                    <h2>{post.title}</h2>
                    {/* <h4>{new Date(post.datePublished).toLocaleDateString(undefined, {month: "long", day: "numeric", year: "numeric"})}</h4> */}
                    <h4>{moment(new Date(post.datePublished)).format("MMM Do, YYYY")}</h4>
                </div>
                <div>
                    <p>{post.description}</p>
                </div>
            </div>
        })}
    </>);
}

export default BlogPostsContainer;