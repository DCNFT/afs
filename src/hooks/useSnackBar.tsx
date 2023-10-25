import { toast } from 'react-toastify';

// 모듈화, 추상화를 위해 별도의 커스텀 훅으로 만들었습니다.
export default function useSnackBar() {
  const enqueueDefaultBar = (message: string) => {
    toast(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
  };

  const enqueueSuccessBar = (message: string) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
  };

  const enqueueErrorBar = (message: string) => {
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
  };
  const enqueueWarningBar = (message: string) => {
    toast.warn(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
  };
  const enqueueInfoBar = (message: string) => {
    toast.info(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
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
