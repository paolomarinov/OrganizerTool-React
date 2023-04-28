import React from 'react';
import Modal from 'react-modal';
import moment from 'moment';

Modal.setAppElement('#root')

export function EventDetailsModal(props){
    if(!props.isOpen){
        return null
    }

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose}>
            <h1>{props.event.formData.schoolName}</h1>
            <p>Notes: {props.event.formData.notes}</p>
            <p>Phone number: {props.event.formData.phoneNumber}</p>
            <p>Email: {props.event.formData.email}</p>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    )
}