import React, { useEffect, useState, useRef } from 'react';

/**
 * @typedef {Object} EventHeroProps
 * @property {string} title - The title of the event
 * @property {string} subtitle - The subtitle or category of the event
 * @property {string} description - A description of the event
 * @property {string} date - The date of the event
 * @property {string} time - The time of the event
 * @property {string} location - The location of the event
 * @property {string} imageUrl - URL of the background image
 */

/**
 * @param {EventHeroProps} props
 */
const EventHero = ({
  title,
  subtitle,
  description,
  date,
  time,
  location,
  imageUrl,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const cn = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      ref={ref}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80 mix-blend-multiply z-10"></div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 pt-20 z-10 relative">
        <div className="max-w-3xl">
          <div className={cn(
            "transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <span className="inline-block py-1 px-3 rounded-full bg-red-600/10 text-red-200 text-sm font-medium backdrop-blur-sm border border-red-500/20 mb-4">
              {subtitle}
            </span>
          </div>

          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 transition-all duration-700 delay-100 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            {title}
          </h1>

          <p className={cn(
            "text-lg text-white/90 mb-8 max-w-xl transition-all duration-700 delay-200 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            {description}
          </p>

          <div className={cn(
            "flex flex-col md:flex-row gap-4 mb-8 transition-all duration-700 delay-300 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <div className="flex items-center text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-red-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span>{date}</span>
            </div>
            <div className="flex items-center text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-red-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>{time}</span>
            </div>
            <div className="flex items-center text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-red-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{location}</span>
            </div>
          </div>

          <div className={cn(
            "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}>
            <button className="rounded-full bg-red-600 hover:bg-red-800 text-white px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300">
              Register Now
            </button>
            <button
              className="rounded-full border border-white/30 text-white hover:bg-white/10 px-8 py-3 backdrop-blur-sm transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
    </div>
  );
};

export default EventHero; 