import { ExitIcon, ArrowLeftIcon } from '@radix-ui/react-icons';
import { ModalProps } from '../types';
import IconComponent from '@/components/Icon';
export const ModalCloseButton: React.FC<
  React.PropsWithChildren<{ onDismiss: ModalProps['onDismiss'] }>
> = ({ onDismiss }) => {
  return (
    <div onClick={onDismiss} className="cursor-pointer">
      <IconComponent name="Cross2Icon" size="1.2em" />
    </div>
  );
};

export const ModalBackButton: React.FC<
  React.PropsWithChildren<{ onBack: ModalProps['onBack'] }>
> = ({ onBack }) => {
  return (
    <div onClick={onBack}>
      <IconComponent name="ArrowLeftIcon" size="1em" />
    </div>
  );
};
