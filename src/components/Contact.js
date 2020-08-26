import React from 'react';
import "./Contact.css";

const name = "Frank Mils";
const isOnline = true;

function Contact() {
    return (
        <div className="Contact">
            <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="avatar" class="avatar" />

            <div>
                <h4 class="name">{name}</h4>
                <div class="status">
                    <div class={ isOnline ? 'status-online' : 'status-offline' }></div>
                    <p class="status-text">{ isOnline ? 'Online' : 'Offline' }</p>
                </div>
            </div>

        </div>
    );
}

export default Contact;