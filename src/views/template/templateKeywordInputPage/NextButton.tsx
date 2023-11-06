import useRouting from '@/hooks/useRouting';
import { Button } from '@radix-ui/themes';

type NextButtonProps = {
  path: string;
  name?: string;
};

function NextButton({ path, name = '다음' }: NextButtonProps) {
  const handleRouting = useRouting({ path });

  return (
    <div className="flex flex-col mb-2">
      <Button onClick={handleRouting}>{name}</Button>
    </div>
  );
}

export default NextButton;
