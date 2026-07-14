import { useEffect, useRef, useState } from 'react';

export function useTypingEffect(words, options = {}) {
  const {
    typingSpeed = 120,
    deletingSpeed = 70,
    pauseDuration = 1400,
  } = options;

  const [text, setText] = useState('');
  const wordIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const pauseRef = useRef(false);

  useEffect(() => {
    if (!words.length) return undefined;

    let timer;

    const tick = () => {
      if (pauseRef.current) return;

      const currentWord = words[wordIndex.current];

      if (!isDeleting.current) {
        charIndex.current += 1;
        setText(currentWord.slice(0, charIndex.current));

        if (charIndex.current === currentWord.length) {
          pauseRef.current = true;
          timer = setTimeout(() => {
            pauseRef.current = false;
            isDeleting.current = true;
            tick();
          }, pauseDuration);
          return;
        }
      } else {
        charIndex.current -= 1;
        setText(currentWord.slice(0, charIndex.current));

        if (charIndex.current === 0) {
          isDeleting.current = false;
          wordIndex.current = (wordIndex.current + 1) % words.length;
        }
      }

      const speed = isDeleting.current ? deletingSpeed : typingSpeed;
      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
