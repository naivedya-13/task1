import React from 'react'
import { FaEnvelope, FaInbox, FaFileInvoice, FaUser } from "react-icons/fa";
import { MdInbox, MdRequestQuote } from "react-icons/md";
import { useState } from "react"
import { MdMenu } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FaBars } from "react-icons/fa";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { MdPages } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { MdGridOn } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link
import { NavLink } from 'react-router-dom';

import { FaTable } from "react-icons/fa";
import {
    faChartPie,
    faLock,
    faCubes,
  } from "@fortawesome/free-solid-svg-icons";
 
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { MdCalendarToday } from "react-icons/md";
function Admin() {

    const [isOpen , setIsOpen ] = useState(false);
    const [isOpenDash , setIsOpenDash ] = useState(false);

const TasksDash = [
   
    { name: "eCommerce", path: "/eCommerce" },
  { name: "Analytics", path: "/pro-form-elements" },
  { name: "Marketing", path: "/form-layout" },
  { name: " CRM", path: "/pro-form-layout" },
  { name: " Stock", path: "/stock" }, // Add a route
];

const Tasks = [
  { name: "Form Elements", path: "/form3" },
  { name: "Pro Form Elements", path: "/form" },
  { name: "Form Layout", path: "/form2" },
  { name: "Pro Form Layout", path: "/pro-layout-form" }, // Add a route
];

    const TasksForm = [
      "Form Elements",
      "Pro Form Elements",
      "Form Layout",
      "Pro Form Layout",
    ];
  return (
    <div className='m-2 '>

        <div>
          <p className='m-2 text-white text-l'>MENU</p>
         
    
            <div className="flex flex-row justify-start items-center text-white m-2 ">
          <FaBars />
          <p className='ml-2 text-l'>DashBoard</p>
  
          <button onClick={() => setIsOpenDash(!isOpenDash)}>
            <svg
              className="w-5 h-5 ml-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        {isOpenDash && (
          <ul className="ml-4">
            {TasksDash.map((TasksDash, index) => (
              <li
                key={index}
                className="flex items-center justify-between mb-2 text-white"
              >
                {/* Task text */}
                {/* <span>  <Link to={TasksDash.path}>{TasksDash.name}</Link> </span> */}

                <NavLink
          to={TasksDash.path}
          className={({ isActive }) =>
            isActive
              ? "text-white font-normal"  // Active link (same color, same size)
              : "text-gray-300"            // Inactive link (dull color)
          }
        >
          {TasksDash.name}
        </NavLink>                {/* Button only for 2nd and 3rd tasks */}
                {(index === 1 || index === 2 || index==3 || index==4) && (
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2 mr-4"
                  >
                    Pro
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      

      

        </div>
       
        
     
        <div className="flex flex-row items-center justify-start text-white m-2">
  {/* Calendar Icon */}
  <MdCalendarToday className="cursor-pointer" />
  {/* Calendar Text */}
  <p className="ml-2 text-l">Calendar</p>
</div>

<div className="flex flex-row items-center justify-start text-white m-2">
  {/* Calendar Icon */}
  <FaUser className="cursor-pointer ml-0.5 text-l" />
  {/* Calendar Text */}
  <p className="ml-2 text-l">Profile</p>
</div>


        <div>
        
       
         <div  className="flex flex-row items-center justify-start  text-white m-2">
         <FontAwesomeIcon icon={faListCheck} size="l" color="white" />
         <h5 className='ml-2'>Task </h5>
        
        <button>
        <svg
          className="w-5 h-5 ml-16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg> 
        </button>
        </div>
       
    

            
             
        {/* </div> */}
 {/* for forms */}
        
        <div className="flex flex-row justify-start items-center text-white m-2">
          <FaBars />
          <h5 className='ml-2 text-l'>Forms</h5>
  
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-5 h-5 ml-[68px] "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <ul className="ml-4">
            {Tasks.map((task, index) => (
  <li
    key={index}
    className="flex items-center justify-between mb-2 text-white"
  >
                      {/* Main task link */}
                      <NavLink
                to="/pro-form-layout"
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-normal" // Active link (same color, same size)
                    : "text-gray-300" // Inactive link (dull color)
                }
              >
                {task.name}
              </NavLink>

              {/* Button that redirects to Pro page (separate Link, not affecting active state) */}
              {index === 3 && (
                <Link
                  to="/pro-form-layout" // Use the same path for the "Pro" button
                  className="bg-blue-500 text-white px-2 py-1 rounded-md ml-2 mr-4"
                >
                  Pro
                </Link>
              )}


  </li>
))}
          </ul>
        )}
    


        <div className="flex flex-row justify-start text-white m-2">
        
       
        <MdGridOn size="18" color="white" />
          <h5 className='ml-2'>Tables</h5>
  
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-5 h-5 ml-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        
        
    
      

        
        <div className="flex flex-row justify-start text-white m-2 ">
        <FaRegFileAlt size="18" color="White" />
          <h5 className='ml-2'>Pages</h5>
  
          <button >
            <svg
              className="w-5 h-5 ml-16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
   </div>
   {/* for Support  */}
   <div>
    <p className='text-white m-2'>Support</p>
    <div >
          {/* Messages Row */}
          <div className="flex flex-row justify-evenly items-center text-white  m-2">
          <FaEnvelope size={18} className="mr-2" title="Message Icon" />
          <h2 className="flex-1">Messages</h2>
          <div className="flex gap-2">
            <button className="px-2 py-1 rounded-md bg-blue-500 text-sm">$3</button>
            <button className="px-2 py-1 rounded-md bg-blue-500 text-sm">Pro</button>
          </div>
        </div>
    </div>
    <div >
                {/* Inbox Row */}
                <div className="flex items-center text-white m-2">
          <MdInbox size={20} className="mr-2" title="Inbox Icon" />
          <h2 className="flex-1">Inbox</h2>
          <div className="flex gap-2">
            <button className="px-2 py-1 rounded-md bg-blue-500 text-sm">Pro</button>
          </div>
        </div>
    </div>

    <div >
        {/* Invoice Row */}
        <div className="flex items-center text-white ml-2">
          <MdRequestQuote size={20} className="mr-2" title="Invoice Icon" />
          <h2 className="flex-1">Invoice</h2>
          <div className="flex gap-2">
            <button className="px-2 py-1 rounded-md bg-blue-500 text-sm mr-2">Pro</button>
          </div>
        </div>
    </div>
   </div>
   {/* for Others  */}
   
    <p className='text-lg text-white m-2'>Others</p>

             <div  className="flex flex-row justify-start items-center text-white m-2 ">
             <FontAwesomeIcon icon={faChartPie} size="l" color="white" />
             <h5 className='m-3'>Chart</h5>
            
            <button>
    
         
          
            <svg
              className="w-5 h-5 ml-14"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg> 
            </button>
            </div>
            
        
        <div>
        <div className="flex flex-row justify-start items-center text-white m-2 ">
            <FontAwesomeIcon icon={faCubes} size="l" color="white" />
              <h5 className='text-l ml-2'>UI Elements</h5>
      
              <button >
                <svg
                  className="w-5 h-5 ml-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
           
          
        </div>
        <div>
        <div className="flex flex-row justify-start items-center text-white m-2 ">
            <FontAwesomeIcon icon={faLock} size="l" color="white" />
              <h5 className='ml-2'>Authentication</h5>
      
              <button >
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
           
        </div>
   </div>

  )
}

export default Admin