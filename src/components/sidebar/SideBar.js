import {
  faBriefcase,
  faChalkboardUser,
  faDashboard,
  faDatabase,
  faGraduationCap,
  faPaperPlane,
  faQuestion,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>School Management</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Admin Dashboard </p>
        {/* <SubMenu title="Home" icon={faHome} items={submenus[1]} /> */}
        <NavItem>
          <NavLink tag={Link} to={"/"}>
            <FontAwesomeIcon icon={faDashboard} className="mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <SubMenu title="exporting..." icon={faGraduationCap} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/exporting data"}>
            <FontAwesomeIcon icon={faDatabase} className="mr-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "upload students",
      target: "upload-students",
      icon: <FontAwesomeIcon icon={faUser} className="mr-2" />
    },
    {
      title: "upload teachers ",
      target: "upload-teachers",
      icon: <FontAwesomeIcon icon={faChalkboardUser} className="mr-2" />
    },
  ],
];

export default SideBar;
