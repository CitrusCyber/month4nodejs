import React from 'react';
import './Contacts.css';
import BMWLogo from '../images/bmw_logo.jpg';

const Contacts = () => {
    return (
        <div id="contacts" className="contacts">
            <h2>Contacts</h2>
            <div className="contact-card">
                <img src={BMWLogo} alt="BMW Logo" />
                <div className="contact-info">
                    <p>Telegram</p>
                    <a href="https://t.me/citrusssssss" target="_blank" rel="noopener noreferrer">
                        @citrusssssss
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
