import React from 'react';
import "./Contact.css";
import PropTypes from 'prop-types';

function Contact(props) {
    return (
        <div className="Contact">
            <img src={props.avatar} alt={props.name} class="avatar" />

            <div>
                <h4 class="name">{props.name}</h4>
                <div class="status">
                    <div class={ props.isOnline ? 'status-online' : 'status-offline' }></div>
                    <p class="status-text">{ props.isOnline ? 'Online' : 'Offline' }</p>
                </div>
            </div>

        </div>
    );
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default Contact;