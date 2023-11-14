// Icon.tsx 파일을 수정해주세요
import { FC } from 'react';
import * as RadixIcons from '@radix-ui/react-icons';

interface IconProps {
  name: keyof typeof RadixIcons;
  size?: string;
}

const Icon: FC<IconProps> = ({ name, size = '1em' }) => {
  const IconComponent = RadixIcons[name];

  if (!IconComponent) {
    console.error(`Invalid icon name: ${name}`);
    return null;
  }

  return <IconComponent style={{ width: size, height: size }} />;
};

export default Icon;
