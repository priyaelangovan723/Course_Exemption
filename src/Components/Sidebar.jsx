import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFileCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        // Perform side effects based on selectedItem, if needed
        // For example, fetching data or updating UI
        console.log("Selected Item:", selectedItem);
    }, [selectedItem]);

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <div className="side-container">
            <p id="dash"><b>Dashboard</b></p>
            <Link to="/dashboard/">
            <div className={`dashboard ${selectedItem === 'dashboard' ? 'selected' : ''}`} onClick={() => handleItemClick('dashboard')}>
                <div className="dashboard-heading" >
                    <p><b>Dashboard</b></p>
                </div>
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="dashboard"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path></svg>
                </div>
            </div>
            </Link>
            <p id="dash"><b>Actions</b></p>
            <Link to="/dashboard/your-request">
            <div className={`dashboard ${selectedItem === 'your request' ? 'selected' : ''}`} onClick={() => handleItemClick('your request')}>
                <div className="dashboard-heading">
                    <p><b>Your Request</b></p>
                </div>
                <div className="logo1">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            </div>
            </Link>
            <br></br>
            
            <Link to="/dashboard/track-request">
            <div className={`dashboard ${selectedItem === 'track request' ? 'selected' : ''}`} onClick={() => handleItemClick('track request')}>
                <div className="dashboard-heading">
                    
                        <p><b>Track Request</b></p>
                    
                </div>
                <div className="logo2">
                    <FontAwesomeIcon icon={faFileCircleCheck} />
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Sidebar;
