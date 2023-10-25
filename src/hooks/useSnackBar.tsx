import { ReactNode } from 'react';
import { ToastOptions, toast } from 'react-toastify';
const defaultToastOption: ToastOptions = {
  position: 'top-right',
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: false,
};

// 모듈화, 추상화를 위해 별도의 커스텀 훅으로 만들었습니다.
export default function useSnackBar() {
  const enqueueDefaultBar = (
    message: ReactNode,
    options: ToastOptions = {},
  ) => {
    toast(message, {
      ...defaultToastOption,
      // icon: <Icon name="cart" />,
      ...options,
    });
  };

  const enqueueSuccessBar = (message: string, options: ToastOptions = {}) => {
    toast.success(message, {
      ...defaultToastOption,
      // icon: <Icon name="cart" />,
      ...options,
    });
  };

  const enqueueErrorBar = (message: string,    options: ToastOptions = {},) => {
    toast.error(message, {
      ...defaultToastOption,
      // icon: <Icon name="cart" />,
      ...options,
    });
  };
  const enqueueWarningBar = (message: string,    options: ToastOptions = {}, => {
    toast.warn(message, {
      ...defaultToastOption,
      // icon: <Icon name="cart" />,
      ...options,
    });
  };
  const enqueueInfoBar = (message: string,    options: ToastOptions = {},) => {
    toast.info(message, {
      ...defaultToastOption,
      // icon: <Icon name="cart" />,
      ...options,
    });
  };

  const enqueueBarWithType = (
    message: string,
    type: 'default' | 'success' | 'error' | 'warning' | 'info',
  ) => {
    switch (type) {
      case 'default': {
        enqueueDefaultBar(message);
        return;
      }
      case 'success': {
        enqueueSuccessBar(message);
        return;
      }
      case 'error': {
        enqueueErrorBar(message);
        return;
      }
      case 'warning': {
        enqueueWarningBar(message);
        return;
      }
      case 'info': {
        enqueueInfoBar(message);
        return;
      }
      default: {
        enqueueDefaultBar(message);
        return;
      }
    }
  };

  return {
    enqueueDefaultBar,
    enqueueSuccessBar,
    enqueueErrorBar,
    enqueueWarningBar,
    enqueueInfoBar,
    enqueueBarWithType,
  };
}

// 기본 snackbar의 UI를 위해 별도로 만들어 사용중입니다.
// const DefaultSnackBar = ({
//   id,
//   status,
//   message,
// }: {
//   id: string;
//   status: string;
//   message: string;
// }) => {
//   return (
//     <FlexBox justify={'space-between'} align={'center'} gap={'0.5rem'}>
//       {status !== 'Default' && <StatusText bold="bold">{status}</StatusText>}
//       <FlexBox justify={'flex-start'}>
//         <MessageText>{message}</MessageText>
//       </FlexBox>
//       <Button variant="icon" onClick={() => toast.dismiss(id)}>
//         <CloseIcon />
//       </Button>
//     </FlexBox>
//   );
// };
