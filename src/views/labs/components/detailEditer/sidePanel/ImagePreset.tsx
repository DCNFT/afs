import React from 'react';
import { ElementState } from '@creatomate/preview';
import VideoCreatorStore from '@/store/useVideoCreatorStore';

interface ImagePresetProps {
  activeElement: ElementState;
  url: string;
}

export const ImagePreset: React.FC<ImagePresetProps> = (props) => {
  const { preview } = VideoCreatorStore();
  return (
    <Main
      url={props.url}
      onClick={async () => {
        await preview?.applyModifications({
          [`${props.activeElement.source.id}.source`]: props.url,
        });
      }}
    />
  );
};

const Main = styled.div<{ url: string }>`
  position: relative;
  margin: 15px 0;
  height: 80px;
  background-image: url('${(props) => props.url}');
  background-size: cover;
  border-radius: 5px;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 50%)
    );
  }
`;
