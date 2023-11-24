import useTemplateStore from '@/store/useTemplateStore';
import MediaConcept from './MediaConcept';
import useIsClient from '@/hooks/useIsClient';

const MediaConceptContainer = () => {
  const templateData = useTemplateStore((state) => state.templateData);
  const isClient = useIsClient();
  if (!isClient) return null;
  return (
    <div className="mt-2 border border-gray-300 p-4 rounded-xl">
      {templateData?.info?.compositions?.map((composition, index) => {
        return (
          <MediaConcept
            composition={composition}
            index={index}
            key={`media-concept-${index}`}
          />
        );
      })}
    </div>
  );
};

export default MediaConceptContainer;
