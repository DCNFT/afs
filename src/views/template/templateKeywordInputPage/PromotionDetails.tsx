import { Button, Select, TextField } from '@radix-ui/themes';

function PromotionDetails() {
  return (
    <div className="flex flex-col mb-2">
      <p className="text-base font-bold">
        홍보하고 싶은 특징을 담아서 간단하게 소개해주세요 (필수)
      </p>
      <TextField.Root>
        <TextField.Input placeholder="예시: 한우 100%, 한돈 100%, 신선한 재료, 매일 아침 만든 반찬 제공 " />
      </TextField.Root>
    </div>
  );
}
export default PromotionDetails;
