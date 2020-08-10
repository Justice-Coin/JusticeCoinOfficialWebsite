import React from "react";
import { useState } from "react";
import AdminAuth from "./AdminAuth";
import AdminConsole from "./AdminConsole";

function BlogAdminPage(props) {
    document.body.style.background = "#eee";
    const [isAuth, setIsAuth] = useState(false);

    return (<>
        {isAuth ? <AdminConsole /> : <AdminAuth isAuth={isAuth} setIsAuth = {setIsAuth} /> }
    </>);
}

export default BlogAdminPage;