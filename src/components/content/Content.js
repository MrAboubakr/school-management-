import classNames from "classnames";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import AdminDashboard from "../../pages/AdminDashboard";
import UploadStudents from "../../pages/UploadStudents";
import UploadTeachers from "../../pages/UploadTeachers";
import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    {/* if we usRoutes we ve to use elements like this instead of components!! */}
    <Routes>
      <Route exact path="/" element={<AdminDashboard/>} />
      <Route exact path="/about"  />
      <Route exact path="/exporting data" component={() => "Pages"} />
      {/* <Route exact path="/faq" component={() => "FAQ"} />
      <Route exact path="/contact" component={() => "Contact"} /> */}
      <Route exact path="/Home" component={() => "Home-1"} />
      <Route exact path="/upload-students" element={<UploadStudents/>} />
      <Route exact path="/upload-teachers" element={<UploadTeachers/>}  />
      <Route exact path="/page-1" component={() => "page-1"} />
      <Route exact path="/page-2" component={() => "page-2"} />
      <Route exact path="/page-3" component={() => "page-3"} />
    </Routes>
  </Container>
);

export default Content;
