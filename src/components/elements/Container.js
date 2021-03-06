import React, { Component } from 'react';
import ContactModal from "./ContactModal";
import TriggerButton from "./TriggerButton";

export class Container extends Component {

    showModal = () => {
        this.setState({ isShown: true }, () => {
            this.closeButton.focus();
            this.toggleScrollLock();
        });
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };
    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return
        this.closeModal();
    };

    state = { isShown: false };
    render() {
        return (
            <React.Fragment>
                <TriggerButton
                    showModal={this.showModal}
                    buttonRef={(n) => (this.TriggerButton = n)}
                    triggerText={this.props.triggerText}
                />
                {this.state.isShown ? (
                    <ContactModal
                        onSubmit={this.props.onSubmit}
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                    />
                ) : null
                }
            </React.Fragment>
        );
    }
}
export default Container;