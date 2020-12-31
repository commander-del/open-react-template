import React from 'react';
import Button from "react-bootstrap/cjs/Button";


const TriggerButton = ({ triggerText, buttonRef, showModal }) => {
    return (
        <Button
            variant="link"
            className="header-text"
            // className="btn btn-lg btn-primary center modal-button"
            ref={buttonRef}
            onClick={showModal}
        >
            {triggerText}
        </Button>
    );
};
export default TriggerButton;