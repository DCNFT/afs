'use client';

import useRouting from '@/hooks/useRouting';
import {
  StarIcon,
  DotsVerticalIcon,
  TrashIcon,
  Pencil1Icon,
  FileIcon,
} from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';
import usePopoverMenu from '@/hooks/usePopoverMenu';
import { createPortal } from 'react-dom';
import useIsClient from '@/hooks/useIsClient';
import { Template } from '@/api/internal/creatomate/types';
import { formatDate } from '@/utils/date';

const CardHeader = () => {
  const handleRouting = useRouting({ path: '/template/keyword' });
  return (
    <div className="relative h-[140px]">
      <img
        src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        alt="Bold typography"
        style={{
          position: 'absolute',
          display: 'block',
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--gray-5)',
        }}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-4">
          <Button onClick={handleRouting}>편집하기</Button>
        </div>
      </div>
    </div>
  );
};

type TemplateCardProps = {
  templateInfo: Template;
};
const TemplateCard = ({ templateInfo }: TemplateCardProps) => {
  const {
    isOpen,
    targetRef,
    setTargetRef,
    tooltipRef,
    setTooltipRef,
    toggleMenu,
    styles,
    attributes,
  } = usePopoverMenu();
  const isClient = useIsClient();

  return (
    <div style={{ maxWidth: 240 }} className="border" id="destination">
      <CardHeader />
      <div className="flex justify-between p-2">
        <div>
          <div>
            <h1 className="font-bold text-xl pb-1">{templateInfo?.name}</h1>
            <p className="text-sm pb-1">
              [1111]{formatDate(templateInfo.updated_at)}
            </p>
          </div>
        </div>
        <div className="flex-col">
          <div className="flex justify-center items-center">
            <StarIcon />
          </div>
          <div className="flex justify-center items-center">
            <div onClick={toggleMenu} ref={setTargetRef}>
              <DotsVerticalIcon />
            </div>

            {isClient &&
              isOpen &&
              createPortal(
                <>
                  <div
                    ref={setTooltipRef}
                    style={styles.popper}
                    {...attributes.popper}
                  >
                    <div className="flex-col bg-white p-2 shadow-xl rounded">
                      <div className="flex p-1 items-center gap-1">
                        <Pencil1Icon />
                        <p>이름변경</p>
                      </div>
                      <div className="flex p-1  items-center gap-1">
                        <FileIcon />
                        <p>복사</p>
                      </div>
                      <div className="flex p-1 items-center gap-1">
                        <TrashIcon />
                        <p>삭제</p>
                      </div>
                    </div>
                  </div>
                </>,
                document.querySelector('#destination') as HTMLElement,
              )}
          </div>
        </div>
      </div>
      <div className="p-2">
        <Button>편집중</Button>
      </div>
    </div>
  );
};

export default TemplateCard;
