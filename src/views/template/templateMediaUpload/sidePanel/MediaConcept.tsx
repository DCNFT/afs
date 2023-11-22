import Icon from '@/components/Icon';

const MediaConcept = ({}) => {
  return (
    <div className="flex gap-3">
      <p>장면 1</p>
      <div className="flex justify-center items-center gap-1">
        <Icon name="ImageIcon" size="12px" />
        <p>가게전경</p>
      </div>
      <p>1장</p>
    </div>
  );
};

export default MediaConcept;
