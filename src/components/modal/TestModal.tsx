// ./components/modal/LoginModal/LoginModal.tsx

import BaseModal from './BaseModal';
// import './login.css';

export interface ITestModalProps {
  isOpen: boolean;
  onClose?: () => void;
}

export default function TestModal(props: ITestModalProps) {
  console.count('TestModal rendered');
  const handleClose = () => {
    if (props.onClose) props.onClose();
  };

  return (
    <BaseModal title="Sign In" show={props.isOpen} onClose={handleClose}>
      <div className="login-modal-content">
        <span className="close-btn" onClick={handleClose}>
          X
        </span>
        <div>
          <input type="text" placeholder="Username" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <button>Test!</button>
      </div>
    </BaseModal>
  );
}
