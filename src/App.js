import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./Home/HomePage";
import FAQPage from "./FAQ/FAQPage";
import AboutPage from "./About/AboutPage";
import WebMiner from "./WebMiner/WebMinerPage";
import DownloadPage from "./Download/DownloadPage";
import PageNotFound from "./PageNotFound";
import ScrollToTop from "./ScrollToTop";
import BlogPage from './Blog/BlogPage';
// import BlogAdminPage from './Blog/BlogAdminPage';
import AdminConsole from './Blog/AdminConsole';
import AdminAuth from './Blog/AdminAuth';
import BlogPostPage from './Blog/BlogPostPage';

function App() {
  // This is for JS stuff
  require('bootstrap');
  const [isAuth, setIsAuth] = useState(false);
  return (<>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
      {/* WebSite Routes */}
        <Route path="/" exact component={withRouter(HomePage)} />
        <Route path="/faq" exact component={withRouter(FAQPage)} />
        <Route path="/about" exact component={withRouter(AboutPage)} />
        <Route path="/webminer" exact component={withRouter(WebMiner)} />
        <Route path="/download" exact component={withRouter(DownloadPage)} />
        <Route path="/download/mac" exact render={withRouter(props => <DownloadPage OS="Mac OS" />)} />
        <Route path="/download/windows" exact render={withRouter(props => <DownloadPage OS="Windows" />)} />
        <Route path="/blog" exact component={withRouter(BlogPage)} />
        <Route path="/blog/" component={withRouter(BlogPostPage)} />

        {/* Admin Routes */}
        <Route path="/admin-login/" exact component={withRouter(props => <AdminAuth isAuth={isAuth} setIsAuth={setIsAuth} />)} />
        <Route path={"/admin-console/view-stats", "/admin-console/"} exact component={withRouter(props => <AdminConsole isAuth={isAuth} nav="view-stats"/>)} />        
        <Route path="/admin-console/manage-blog" exact component={withRouter(props => <AdminConsole isAuth={isAuth} nav="manage-blog"/>)} />        
        <Route path="/admin-console/create-blog-post" exact component={withRouter(props => <AdminConsole isAuth={isAuth} nav="create-blog-post"/>)} />        
        <Route component={withRouter(PageNotFound)} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
