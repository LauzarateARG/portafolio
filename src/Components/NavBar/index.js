import React from "react";
import "./index.css";

import { links } from "../../data";

function navBar() {
  return (
    <div className="navBar sticky">
      <ul className="menu">
        {links.map((link) => {
          return (
            <li>
              <a href={link.url} key={link.id} className="menu-item"> {link.text} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default navBar;
