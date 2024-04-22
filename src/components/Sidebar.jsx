// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import { FaCommentAlt, FaRegFileAlt, FaTh, FaUserAlt } from 'react-icons/fa';
// import { MdOutlineCancel } from 'react-icons/md';
// import { SiShopware } from 'react-icons/si';
// import { NavLink } from 'react-router-dom';
// import { useStateContext } from '../contexts/ContextProvider';
// import AdminDashboard from '../pages/AdminDashboard';
// import SendSingleTeacher from '../pages/SendSingleTeacher'; // Import your component

// Filename - Sidebar.jsx
import React from "react";
import "./Sidebar.css"; // You can style your sidebar in a separate CSS file
// Sidebar.js
import { NavLink } from 'react-router-dom';

const Sidebar = ({ routes }) => {
    return (
      <div className="sidebar">
        {routes.map((route) => (
          <NavLink to={route.path} key={route.path}>
            {route.name}
          </NavLink>
        ))}
      </div>
    );
  };
  
export default Sidebar;




// const Sidebar = () => {
//   const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

//   const handleCloseSideBar = () => {
//     if (activeMenu !== undefined && screenSize <= 900) {
//       setActiveMenu(false);
//     }
//   };

//   const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
//   const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

//   const menuItem = [
//     {
//       path: '/',
//       name: 'Dashboard',
//       icon: <FaTh />,
//       component: <AdminDashboard/>,
//     },
//     {
//       path: '/implemet-data',
//       name: 'Data implement',
//       icon: <FaUserAlt />,
//       component: <SendSingleTeacher />,
//     },
//     {
//       path: '/Reports',
//       name: 'Reports',
//       icon: <FaRegFileAlt />,
//       component: <div>Reports Component</div>,
//     },
//     {
//       path: '/Single-teacher',
//       name: 'Single teacher',
//       icon: <FaCommentAlt />,
//       component: <SendSingleTeacher />,
//     },
//   ];

//   const renderLinks = () => {
//     return menuItem.map((item, index) => (
//       <NavLink
//         key={index}
//         to={item.path}
//         onClick={handleCloseSideBar}
//         style={({ isActive }) => ({
//           backgroundColor: isActive ? currentColor : '',
//         })}
//         className={({ isActive }) => (isActive ? activeLink : normalLink)}
//       >
//         <div className="icon">{item.icon}</div>
//         <div className="link_text">{item.name}</div>
//       </NavLink>
//     ));
//   };

//   return (
//     <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
//       {activeMenu && (
//         <>
//           <div className="flex justify-between items-center">
//             <NavLink to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
//               <SiShopware /> <span>Shoppy</span>
//             </NavLink>
//             <TooltipComponent content="Menu" position="BottomCenter">
//               <button
//                 type="button"
//                 onClick={() => setActiveMenu(!activeMenu)}
//                 style={{ color: currentColor }}
//                 className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
//               >
//                 <MdOutlineCancel />
//               </button>
//             </TooltipComponent>
//           </div>
//           <div className="mt-10">
//             {renderLinks()}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

//export default Sidebar;
