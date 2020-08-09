import React from "react";
import MainNavBar from "../Nav";
import PageTitle from "../PageTitle";

function BlogPage() {
    return <>
        <MainNavBar activePage="blog"/>
        <PageTitle title="Blog"/>
    </>;
}

export default BlogPage;