import React, { useState, useEffect, useRef } from "react";

const LazyImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  style,
  priority = false,
}) => {
  const [isInView, setIsInView] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  // Observe when the wrapper enters the viewport
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px", // Starts loading 50px before entering screen
        threshold: 0.05,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Handle images that are already cached by the browser
  useEffect(() => {
    if (isInView && imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [isInView, src]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-slate-100 ${wrapperClassName}`}
    >
      {/* Shimmer Placeholder while waiting or downloading */}
      {!isLoaded && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-slate-200/80"
        />
      )}

      {hasError ? (
        <div className="w-full h-full flex items-center justify-center text-xs font-medium text-slate-400 bg-slate-100">
          Image unavailable
        </div>
      ) : (
        isInView && (
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            style={style}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${className}`}
          />
        )
      )}
    </div>
  );
};

export default LazyImage;