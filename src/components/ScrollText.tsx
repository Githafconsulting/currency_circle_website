import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const ScrollText = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const text = t('scrollText.text');
  const words = text.split(' ');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate how far user has scrolled through this section
      const scrollStart = sectionTop - windowHeight;
      const scrollEnd = sectionTop + sectionHeight - windowHeight;
      const scrollDistance = scrollEnd - scrollStart;

      if (scrollY < scrollStart) {
        setScrollProgress(0);
      } else if (scrollY > scrollEnd) {
        setScrollProgress(1);
      } else {
        const progress = (scrollY - scrollStart) / scrollDistance;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate how many words should be highlighted based on scroll progress
  const highlightedWordCount = Math.floor(scrollProgress * words.length);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative min-h-[120vh] flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Flare background effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <img
          src="/flare.webp"
          alt=""
          className="w-full h-auto scale-150"
        />
      </div>

      {/* Sticky text container */}
      <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <p className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-snug text-center">
          {words.map((word, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-500 ease-out mx-0.5 sm:mx-1 md:mx-2"
              style={{
                opacity: index < highlightedWordCount ? 1 : 0.15,
                color: index < highlightedWordCount
                  ? '#ffffff'
                  : '#6b7280',
                transform: index < highlightedWordCount
                  ? 'scale(1)'
                  : 'scale(0.98)',
              }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Progress indicator */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <div className="w-32 sm:w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 transition-all duration-300"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* Scroll hint */}
        {scrollProgress < 0.95 && (
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-gray-500 text-xs sm:text-sm animate-pulse">
              {t('scrollText.scrollHint')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ScrollText;
