import React from "react";
import DownloadWindowsPage from "./DownloadWindowsPage";
import DownloadMacPage from "./DownloadMacPage";
import OSNotSupported from "./OSNotSupported";
import Footer from "../Footer/Footer";
import Nav from "../Nav";

function DownloadPage(props) {

    function getOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        } else {
            os = 'Other';
        }

        return os;
    }

    const systemOS = props.OS || getOS();

    return (<>
    <Nav activePage="download"/>
        {systemOS === "Windows" ? <DownloadWindowsPage /> :
        systemOS === "Mac OS" ? <DownloadMacPage /> : 
        <OSNotSupported />}
        <Footer />
    </>)
}

export default DownloadPage