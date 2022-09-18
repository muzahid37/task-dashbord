import React, { useState } from 'react';

import "./Sidebar.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
// import { UilBars } from "@iconscout/react-unicons";
// import { motion } from "framer-motion";

const Sidebar = () => {
    const [selected,setSelected]= useState(0);
    return (
        <div className='sidebar'>
            <div className="logo">
                <span>
                    Dash<span>b</span>oard
                </span>
            </div>
            {/* menu  */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div
                            className={selected === index ? "menuItem active" : "menuItem"}
                            key={index}
                            onClick={() => setSelected(index)}
                        >
                           {/* <div className='menuItem'> */}
                           <item.icon />
                            <span>{item.heading}</span>
                           {/* </div> */}
                        </div>
                    );
                })}
                {/* signoutIcon */}
                <div className="menuItem">
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;