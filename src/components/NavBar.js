import React from 'react';
import './NavBar.css';

const NavBar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('models')}>Models</li>
                <li onClick={() => scrollToSection('services')}>Services</li>
                <li onClick={() => scrollToSection('contacts')}>Contacts</li>
            </ul>
        </nav>
    );
}

export default NavBar;
