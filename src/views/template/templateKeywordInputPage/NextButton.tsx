import useRouting from '@/hooks/useRouting';
import { Button } from '@radix-ui/themes';

type NextButtonProps = {
  path: string;
  name?: string;
};

function NextButton({ path, name = '다음' }: NextButtonProps) {
  const handleRouting = useRouting({ path });

  return (
    <div className="flex flex-col mt-4 bg-violet-500">
      <Button className="bg-violet-500" onClick={handleRouting}>
        {name}
      </Button>
    </div>
  );
}

export default NextButton;
