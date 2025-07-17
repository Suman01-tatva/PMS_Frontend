import { toast,type ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultOptions = {
  position: 'top-right' as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light',
};

const toastService = {
  success: (message: string, options = {}) => {
    toast.success(message, { ...defaultOptions, ...options });
  },
  error: (message : string, options = {}) => {
    toast.error(message, { ...defaultOptions, ...options });
  },
  warning: (message : string, options = {}) => {
    toast.warn(message, { ...defaultOptions, ...options });
  },
  info: (message:string, options = {}) => {
    toast.info(message, { ...defaultOptions, ...options });
  },
  default: (message:string, options = {}) => {
    toast(message, { ...defaultOptions, ...options });
  },
};

export default toastService;