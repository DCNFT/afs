import { Box, Tabs } from '@radix-ui/themes';
import Template from './Template';

const TemplateTab = () => {
  return (
    <div className="flex" style={{ flex: '2 1 0%' }}>
      <Tabs.Root defaultValue="ai" style={{ width: '100%' }}>
        <Tabs.List>
          <Tabs.Trigger value="all">전체</Tabs.Trigger>
          <Tabs.Trigger value="ai">AI 추천</Tabs.Trigger>
          <Tabs.Trigger value="my">찜한 템플릿</Tabs.Trigger>
        </Tabs.List>
        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="all"></Tabs.Content>
          <Tabs.Content value="ai">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <Template />
              <Template />
              <Template />
              <Template />
              <Template />
              <Template />
              <Template />
              <Template />
            </div>
          </Tabs.Content>
          <Tabs.Content value="my"></Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  );
};
export default TemplateTab;
