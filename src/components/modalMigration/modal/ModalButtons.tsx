import { ExitIcon, ArrowLeftIcon } from '@radix-ui/react-icons';
import { ModalProps } from '../types';

export const ModalCloseButton: React.FC<
  React.PropsWithChildren<{ onDismiss: ModalProps['onDismiss'] }>
> = ({ onDismiss }) => {
  return (
    <div onClick={onDismiss}>
      <ExitIcon color="primary" />;
    </div>
  );
};

export const ModalBackButton: React.FC<
  React.PropsWithChildren<{ onBack: ModalProps['onBack'] }>
> = ({ onBack }) => {
  return (
    <div onClick={onBack}>
      <ArrowLeftIcon color="primary" />
    </div>
  );
};
