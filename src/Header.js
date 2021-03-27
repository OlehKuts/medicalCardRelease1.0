import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
// import { Text } from "./text";
import { Icon } from "./icon";
import { routes } from "./routesConfig";

export const Header = () => {
  return (
    <nav className="navbar">
      <div className="brand-title">
        <Icon name="logo" color="fireBrick" size="1.8rem" />
      </div>
      <div className="navbar-links">
        <ul id="navbar-router">
          <li>
            <NavLink to={routes.PATIENTFORM} activeClassName="selected">
              Новий пацієнт
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.PATIENTLIST} activeClassName="selected">
              Список пацієнтів
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.MAIN}>Огляд карти</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
//
