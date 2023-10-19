import React from 'react';
import { ElementState } from '@creatomate/preview';
import useVideoCreatorStore from '@/store/useVideoCreatorStore';

const Main = 'absolute bottom-25 left-1/2 transform -translate-x-1/2 flex';

const Item = 'cursor-pointer';

const Separator = 'm-0 mx-10 opacity-60';

export const CompositionNavigation: React.FC = () => {
  const preview = useVideoCreatorStore((state) => state.preview);
  const activeCompositionId = useVideoCreatorStore(
    (state) => state.activeCompositionId,
  );

  if (!preview) {
    return null;
  }

  // Don't show the composition navigation when the main composition is active
  if (activeCompositionId == null) {
    return null;
  }

  const compositionTrail = [];

  // Start from the current active composition and scan up to the root composition, collecting all compositions in between
  let currentComposition = preview.findElement(
    (element) => element.source.id === activeCompositionId,
  );
  while (currentComposition) {
    compositionTrail.unshift(currentComposition);

    // Find the parent composition
    currentComposition = preview.findElement((element: any) => {
      return !!element.elements?.some(
        (element: ElementState) =>
          element.source.id === currentComposition?.source.id,
      );
    });
  }

  const breadcrumbs = [
    <div
      className={Main}
      key="main-item"
      onClick={() => {
        // This sets the active composition to the root
        preview.setActiveComposition(null);
      }}
    >
      Main Composition
    </div>,
  ];

  // Create breadcrumbs so a user can navigate to a higher level composition
  for (const composition of compositionTrail) {
    breadcrumbs.push(
      <div className={Separator} key={`${composition.source.id}-separator`}>
        /
      </div>,
    );
    breadcrumbs.push(
      <div
        className={Item}
        key={`${composition.source.id}-item`}
        onClick={() => {
          // Make the clicked composition active
          preview.setActiveComposition(composition.source.id);
        }}
      >
        {composition.source.name ?? 'Composition'}
      </div>,
    );
  }

  return <div className={Main}>{breadcrumbs}</div>;
};
