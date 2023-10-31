import { useEffect, useState } from 'react';

// Define the options for the Intersection Observer.
const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

function useIntersectionObserver(
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = defaultOptions,
): boolean {
  const [intersected, setIntersected] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersected(true);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return intersected;
}

export default useIntersectionObserver;
