import React from 'react';
import Modal from "../Modal/Modal";
import classes from './ErrorModal.css';

const ErrorModal = props => {
  return (
    <div className={classes.ErrorButton}>
        <Modal show={props.show} closeModal={props.closeModal}>
          <h2>An Error Occurred!</h2>
          <p>{props.children}</p>
          <button type="button" onClick={props.closeModal}>
            Okay
          </button>
        </Modal>
    </div>
  );
};

export default ErrorModal;
