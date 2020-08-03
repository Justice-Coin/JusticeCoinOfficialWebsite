import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./Home/HomePage";
import FAQPage from "./FAQ/FAQPage";
import AboutPage from "./About/AboutPage";
import WebMiner from "./WebMiner/WebMinerPage";
import DownloadPage from "./Download/DownloadPage";
import Footer from "./Footer/Footer";
import PageNotFound from "./PageNotFound";

function App() {
  return (<>
    <Router>
      <Switch>
        <Route path="/" exact component={withRouter(HomePage)} />
        <Route path="/faq" exact component={withRouter(FAQPage)} />
        <Route path="/about" exact component={withRouter(AboutPage)} />
        <Route path="/webminer" exact component={withRouter(WebMiner)} />
        <Route path="/download" exact component={withRouter(DownloadPage)} />
        <Route path="/" component={withRouter(PageNotFound)} />
      </Switch>
      <Footer />
    </Router>
  </>
  );
}

export default App;
