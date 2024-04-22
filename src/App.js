import "bootstrap/dist/css/bootstrap.min.css";
import { default as React, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from "./components/content/Content";
import SideBar from "./components/sidebar/SideBar";
import ErrorBoundary from "./exceptions/ErrorBoundary";
// const App = () => {
//    // using the selzect sidbar buttons 
//     const [selectedComponent, setselectedComponent] = useState(null);

//     const handleSelection = (selection) => {
//       setselectedComponent(selection);
//   };

//const App = () => {
  // const routes = [
  //   { path: '/', name: 'Home', element: <Home /> },
  //   { path: '/admin-dashboard', name: 'Admin Dashboard', element: <AdminDashboard /> },
  //   { path: '/content/upload-teachers', name: 'Upload Teachers', element: <UploadTeachers /> },
  //   { path: '/content/upload-students', name: 'Upload Students', element: <UploadStudents /> },
  //   { path: '/upload-students/assign-rooms', name: 'Assign Rooms', element: <AssignRooms /> },
  //   { path: '/Single-teacher', name: 'Single Teacher', element: <SendSingleTeacher /> },
  // ];


  const App = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  
    return (
      <ErrorBoundary>
      <Router>
        <div className="App wrapper">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
        </div>
      </Router>
      </ErrorBoundary>
    );
  };

// function App() {
//   const [inactive, setInactive] = useState(false);
 

//   return (
//     <div className="App">
//     <DarkModeProvider>
//       <Router>
//         <Navbar />
//         <SideMenu
//           onCollapse={(inactive) => {
//             console.log(inactive);
//             setInactive(inactive);
//           }}
//         />
  
//     <div className={`container ${inactive ? 'inactive' : ''}`}>
//       {/* wrap the components with ErrorBoundary */}
//         <ErrorBoundary>
//           <Routes>
//             {menuItems.map((menu, index) => (
//               <React.Fragment key={menu.name}>
//                 <Route path={menu.to} element={menu.element} />
//                 {menu.subMenus && menu.subMenus.length > 0
//                   ? menu.subMenus.map((subMenu, i) => (
//                       <Route key={subMenu.name} path={subMenu.to} element={subMenu.element} />
//                     ))
//                   : null}
//               </React.Fragment>
//             ))}
//           </Routes>
//         </ErrorBoundary>
//     </div>
//       </Router>
//       </DarkModeProvider>    
//     </div>
//   );
// };  

export default App;

//  <Sidebar onSelection={handleSelection} />
//   const Home = () => <div>Default Dashboard Content</div>;
//   return (
//     <Router>
//        <div >
//         <Navbar />
//         <Sidebar onSelection={handleSelection} />
//         <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {selectedComponent === 'dashboard' && (
//             <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           )}
//           {selectedComponent === 'uploadTeachers' && (
//             <Route path="/upload-teachers" element={<UploadTeachers />} />
//           )}
//           {selectedComponent === 'uploadStudents' && (
//             <Route path="/upload-students" element={<UploadStudents />} />
//           )}
//           {selectedComponent === 'assignRooms' && (
//             <Route path="/assign-rooms" element={<AssignRooms />} />
//           )}
//          {selectedComponent === 'Single teacher' && (
//             <Route path="/Single-teacher" element={<SendSingleTeacher />} />
//           )}
//         </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

