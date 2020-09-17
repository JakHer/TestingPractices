import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./compontents/Header/Header";
import Users from "./views/Users";
import Contact from "./views/Contact";
import styles from "./App.module.scss";

const App = () => (
  <Router>
    <Header />
    <div className={styles.app}>
      <Route path="/" exact component={Users} />
      <Route path="/contact" exact component={Contact} />
    </div>
  </Router>
);

export default App;
