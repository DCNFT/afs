import { Composition } from '@/api/internal/abs/types';
import Icon from '@/components/Icon';

type MediaConceptProps = {
  composition: Composition;
  index: number;
};
const MediaConcept = ({ composition, index }: MediaConceptProps) => {
  return (
    <div className="flex gap-3">
      <p className="w-[50px]">장면 {index + 1}</p>
      <div className="flex justify-start items-center gap-1 w-[150px]">
        <Icon name="ImageIcon" size="12px" />
        <p>{composition?.style}</p>
      </div>
      <p className="">
        {`${
          composition.media.filter(
            (mediaElement) => mediaElement.format === 'MEDIA',
          )?.length
        }장`}
      </p>
    </div>
  );
};

export default MediaConcept;
