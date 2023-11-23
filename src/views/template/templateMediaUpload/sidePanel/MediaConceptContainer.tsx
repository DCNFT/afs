import useTemplateStore from '@/store/useTemplateStore';
import MediaConcept from './MediaConcept';

const MediaConceptContainer = () => {
  const templateData = useTemplateStore((state) => state.templateData);

  return (
    <div className="mt-2 ">
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
