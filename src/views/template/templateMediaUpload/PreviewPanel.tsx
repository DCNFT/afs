import Preview from './Preview';

type PreviewPanelProps = {};
const PreviewPanel = (props: PreviewPanelProps) => {
  return (
    <div className="flex flex-col">
      <h3>템플릿에 어울리는 미디어 콘셉트를 추천합니다!</h3>
      <Preview formId={'da2da575-8886-4c03-8fa6-5ba7c0dbabe5'} />
    </div>
  );
};
export default PreviewPanel;
