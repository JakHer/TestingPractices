import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LangContext } from "../../context";

const Header = () => {
  const context = useContext(LangContext);

  return (
    <section className="hero is-primary">
      <div className="hero-head">
        <nav className="navbar">
          <div className="navbar-end">
            <button onClick={() => context.setLang("en")} className="button is-primary">
              EN
            </button>
            <button onClick={() => context.setLang("pl")} className="button is-primary">
              PL
            </button>
            <p>current lang: {context.currentLang}</p>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">Magia Reacta</h1>
          <h2 className="subtitle">kurs zaawansowany</h2>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="navbar-item">
                <NavLink exact activeClassName="has-text-weight-medium has-text-warning" to="/">
                  Users
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink exact activeClassName="has-text-weight-medium has-text-warning" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
