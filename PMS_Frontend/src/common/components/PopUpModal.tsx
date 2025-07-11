import React from "react";
import { Modal, Button } from "react-bootstrap";

const PopUpModal: React.FC<PopUpModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Yes",
  cancelText = "No",
  size = "sm",
  children = null,
}) => {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      centered
      backdrop="static"
      keyboard={false}
      animation={true}
      size={size}
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
        {children !== null ? (
          children
        ) : (
          <>
            <i
              className="fa-solid fa-triangle-exclamation fa-2xl"
              style={{ color: "#FFD43B" }}
            />
            <p className="fw-bold mb-0">{message}</p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center border-0">
        <Button className="submit-btn" variant="primary" onClick={onConfirm}>
          {confirmText}
        </Button>
        <Button className="cancel-btn" variant="secondary" onClick={onClose}>
          {cancelText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUpModal;
