import React, { useState } from 'react';
import logo from '../../images/logo.jpg'
import './navbar.css'
const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false)
    const handleMenuClick = ()=>{
        setMenuClick(!menuClick)
        console.log(menuClick)
    } 
    return (
        <nav className="nav-container">
            <img width="60px" src={logo} alt=""/>
            <div onClick={handleMenuClick} className="menu-bar">
                <i className={menuClick ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={menuClick ? 'active menu' : 'navigation menu'}>
                <li className="menu-item"><a href="#home" className="menu-link">Home</a></li>
                <li className="menu-item"><a href="#skills" className="menu-link">Skills</a></li>
                <li className="menu-item"><a href="#project" className="menu-link">Project</a></li>
                <li className="menu-item"><a href="#blog" className="menu-link">Blog</a></li>
                <li className="menu-item"><a href="https://drive.google.com/file/d/1xReX9LdKY46yjihm79znHJtQQUI5aJF0/view" className="menu-link">Resume</a></li>
                <li className="menu-item menu-item-contact"><a href="#contact" className="menu-link">Contact</a></li>
                
                
            </ul>
            
        </nav>
    );
};

export default Navbar;