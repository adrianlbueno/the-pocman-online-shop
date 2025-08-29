import { useState, useRef, useEffect } from 'react';
import styles from './lazyImage.module.css';

const LazyImage = (imageProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!shouldLoad && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setShouldLoad(true);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [shouldLoad, placeholderRef]);
  return shouldLoad ? (
    <img {...imageProps} />
  ) : (
    <div className={styles.imgPlaceholder} ref={placeholderRef} />
  );
};
export default LazyImage;
