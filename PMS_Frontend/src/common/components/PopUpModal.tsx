import React from "react";
import { Modal, Button } from "react-bootstrap";
import type { PopUpModalProps } from "../types/types";

const PopUpModal: React.FC<PopUpModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
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
        <Button className="btn-close" onClick={onClose} aria-label="Close">
          <i className="fa-solid fa-xmark text-gray-500 text-xl" />
        </Button>
      </Modal.Header>
      <Modal.Body className="text-center p-1">
        {typeof children === "string" ? <p>{children}</p> : children}
      </Modal.Body>
      {onConfirm && (
        <Modal.Footer className="d-flex justify-content-center border-0">
          <Button className="submit-btn" variant="primary" onClick={onConfirm}>
            {confirmText}
          </Button>
          <Button className="cancel-btn" variant="secondary" onClick={onClose}>
            {cancelText}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default PopUpModal;
