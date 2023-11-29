import Icon from '@/components/Icon';
import { Button } from '@radix-ui/themes';

const TemplateEditBanner = () => {
  return (
    <div className="flex h-[64px] justify-between p-4 border border-b-2">
      <div>
        <Icon name="AlignLeftIcon" />
      </div>
      <div>스테이크 하우스 이벤트</div>
      <div className="flex gap-2">
        <Button>임시저장</Button>
        <Button>편집완료</Button>
      </div>
    </div>
  );
};

export default TemplateEditBanner;
