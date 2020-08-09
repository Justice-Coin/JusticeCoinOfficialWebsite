import React from 'react';
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
import BlogAdminPage from './Blog/BlogAdminPage';

function App() {
  // This is for JS stuff
  require('bootstrap');
  return (<>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={withRouter(HomePage)} />
        <Route path="/faq" exact component={withRouter(FAQPage)} />
        <Route path="/about" exact component={withRouter(AboutPage)} />
        <Route path="/webminer" exact component={withRouter(WebMiner)} />
        <Route path="/download" exact component={withRouter(DownloadPage)} />
        <Route path="/download/mac" exact render={withRouter((props) => (<DownloadPage {...props} OS="Mac OS" />))} />
        <Route path="/download/windows" exact render={withRouter((props) => (<DownloadPage {...props} OS="Windows" />))} />
        <Route path="/blog" exact component={withRouter(BlogPage)} />
        <Route path="/blog/auth/admin" exact component={withRouter(BlogAdminPage)} />
        <Route component={withRouter(PageNotFound)} />
      </Switch>
    </Router>
  </>
  );
}

export default App;
