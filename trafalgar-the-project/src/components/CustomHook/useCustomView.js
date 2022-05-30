import { useRef, useState, useEffect } from "react";

const useCustomView = (options) => {
  const containerRef = useRef(null);

  const [inView, setInView] = useState(false);

  const callBack = (entries) => {
    const [entry] = entries;
    setInView(entry.isIntersecting);
  };

  useEffect(() => {
    const current = containerRef.current;

    const observer = new IntersectionObserver(callBack, options);

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, inView];
};

export default useCustomView;
