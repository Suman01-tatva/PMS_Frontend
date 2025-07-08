import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Yes',
  cancelText = 'No',
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={false}
      animation={true}
    >
      <Modal.Header className="border-0">
        <Modal.Title as="h1" className="fs-5">
          {title}
        </Modal.Title>
        <button
          type="button"
          className="btn-close"
          onClick={onClose}
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark text-gray-500 text-xl" />
        </button>
      </Modal.Header>
      <Modal.Body className="text-center p-1">
        <i className="fa-solid fa-triangle-exclamation fa-2xl" style={{ color: '#FFD43B' }} />
        <p className="fw-bold mb-0">{message}</p>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center border-0">
        <Button variant="primary" onClick={onConfirm}>
          {confirmText}
        </Button>
        <Button variant="secondary" onClick={onClose}>
          {cancelText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;