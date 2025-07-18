import React, { type ReactNode } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { PopUpModalProps } from "./types";
import type { ButtonProps } from "../button/types";
import Button from "../button/Button";

const PopUpModal: React.FC<{ popUpModalConfig: PopUpModalProps, children : ReactNode }> = ({
  popUpModalConfig, children
}) => {
  const {
    isOpen,
    onClose,
    onConfirm,
    title,
    confirmText = "Yes",
    cancelText = "No",
    size = "sm",
    showAction = true,
  } = popUpModalConfig;
  
  const confirmBtnConfig: Omit<ButtonProps, "children"> = {
    type: "button",
    className: "submit-btn",
    variant: "contained",
    onClick: onConfirm,
    fullWidth: false,
  };

  const cancelBtnConfig: Omit<ButtonProps, "children"> = {
    type: "button",
    className: "cancel-btn",
    variant: "contained",
    onClick: onClose,
    fullWidth: false,
  };

  const handleClose = (_e: unknown, reason?: string) => {
    if(reason === "backdropClick" || reason === "escapeKeyDown")
      return;
    onClose();
  }
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth={size}
      disableEscapeKeyDown
      aria-labelledby="pop-up-modal-title"
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Typography id="pop-up-modal-title" variant="h6">
          {title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {typeof children === "string" ? (
          <Typography>{children}</Typography>
        ) : (
          children
        )}
      </DialogContent>
      {showAction && onConfirm && (
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button buttonConfig={confirmBtnConfig}>{confirmText}</Button>
          <Button buttonConfig={cancelBtnConfig}>{cancelText}</Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default PopUpModal;
