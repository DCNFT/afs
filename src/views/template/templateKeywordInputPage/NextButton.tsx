import useRouting from '@/hooks/useRouting';
import { Button } from '@radix-ui/themes';

type NextButtonProps = {
  path: string;
};

function NextButton({ path }: NextButtonProps) {
  const handleRouting = useRouting({ path });

  return (
    <div className="flex flex-col mb-2">
      <Button onClick={handleRouting}>다음</Button>
    </div>
  );
}

export default NextButton;
