import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
  const { name, subMenus, icon, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick}>
      {/* <Link
        exact
        to={to}
        className={`menu-item`}
      > */}
        <Link
            to={to}
             className={`menu-item${exact ? ' exact' : ''}`}
         > 
        {icon && <span className="menu-icon">{icon}</span>}
          <i className={icon}></i>       
          <span className="menu-text">{name}</span>
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;
