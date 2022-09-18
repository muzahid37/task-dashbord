import React from 'react';
import Card from '../Card/Card';
import "./MainContent.css"

const MainContent = () => {
    return (
        <div className='mainContant flex flex-col justify-evenly'>
            <h2>Dashboard</h2>
            <Card/>
            
        </div>
    );
};

export default MainContent;