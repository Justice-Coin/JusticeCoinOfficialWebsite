import React, { useEffect } from "react";

function SetTitle(props) {
    useEffect(() => {
        document.title = props.title;
    }, [])

    return null;
}

export default SetTitle;