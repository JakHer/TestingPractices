import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./compontents/Header/Header";
import Users from "./views/Users";
import Contact from "./views/Contact";
import styles from "./App.module.scss";
import { LangContext } from "./context.js";

class App extends Component {
  setLang = (lang) => {
    this.setState({
      currentLang: lang,
    });
  };

  state = {
    currentLang: "en",
    setLang: this.setLang,
  };

  render() {
    return (
      <Router>
        <LangContext.Provider value={this.state}>
          <Header />
          <div className={styles.app}>
            <Route path="/" exact component={Users} />
            <Route path="/contact" exact component={Contact} />
          </div>
        </LangContext.Provider>
      </Router>
    );
  }
}

export default App;
