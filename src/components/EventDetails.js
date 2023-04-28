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
            <p>{props.event.formData.notes}</p>
            <p>{props.event.formData.phoneNumber}</p>
            <p>{props.event.uniqueId}</p>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    )
}