import { useEffect, useState, useRef } from 'react';

/**
 * @typedef {Object} UseInViewOptions
 * @property {Element|null} [root]
 * @property {string} [rootMargin]
 * @property {number|number[]} [threshold]
 * @property {boolean} [triggerOnce]
 */

/**
 * Custom hook to detect when an element enters the viewport
 * @param {UseInViewOptions} [options]
 * @returns {[import('react').RefObject<HTMLDivElement>, boolean]}
 */
export function useInView(options = {}) {
  const {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    triggerOnce = false
  } = options;
  
  const ref = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting && triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      { root, rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [ref, isIntersecting];
}