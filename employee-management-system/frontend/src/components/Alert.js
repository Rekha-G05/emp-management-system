import React from 'react';
import '../../src/styles.css';

const Alert = ({ message, onClose, onConfirm }) => {
    return (
        <div className="alert">
            <span>{message}</span>
            <div>
                <button className="alert-confirm" onClick={onConfirm}>Yes</button>
                <button className="alert-close" onClick={onClose}>No</button>
            </div>
        </div>
    );
};

export default Alert;
