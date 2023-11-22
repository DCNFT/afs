import Icon from '@/components/Icon';

type InformationBoxProps = {
  title: string;
  description: string;
};
const InformationBox = ({ title, description }: InformationBoxProps) => {
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center gap-1">
          <Icon name="InfoCircledIcon" size="12px" />
          <p className="font-bold">{title}</p>
        </div>
      </div>
      <div className="px-[21px]">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InformationBox;
