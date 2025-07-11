interface Props {
  isOpen: boolean;
  drawerRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
  onLogoutClick: () => void;
}
