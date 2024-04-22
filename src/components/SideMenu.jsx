import React, { useEffect, useState } from "react";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import logo from "../assets/logo/logo192.png";
import AdminDashboard from '../pages/AdminDashboard';
import UploadStudents from '../pages/UploadStudents';
import UploadTeachers from "../pages/UploadTeachers";
import MenuItem from "./MenuItem";
/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    element : <AdminDashboard />,
    icon: <MdSpaceDashboard />,
    exact: true,
    to: "/",
  },
  {
    name: "Content",
    icon: <BsDatabaseFillAdd />,
    exact: true,
    to: `/content`,
    subMenus: [
      { name: "teachers", to: "/content/upload-teachers", element : <UploadTeachers />, },
      { name: "students", to: "/content/upload-students" , element : <UploadStudents />,},
    ],
  },
  { name: "Design", to: `/design`,    element : <AdminDashboard />,
},
  {
    name: "Content 2",
    exact: true,
    to: `/content-2`,
    subMenus: [
      { name: "teachers", to: "/content-2/courses" },
      { name: "students", to: "/content-2/students" },
    ],
  },
  { name: "Design 2", to: `/design-2` },
  { name: "Design 3", to: `/design-3` },
  { name: "Design 4", to: `/design-4` },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
   
  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }
    props.onCollapse(inactive);
  }, [inactive,props]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="logo192" />
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i className="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              //iconClassName={menuItem.iconClassName}
              icon={menuItem.icon}
              //add here the subMenu items icons 
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
