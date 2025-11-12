const DEFAULT_OFFSET = 80;

export const smoothScrollTo = (section, options = {}) => {
  if (typeof window === 'undefined' || !section) {
    return;
  }

  const target =
    typeof section === 'string' ? document.getElementById(section) : section;

  if (!target) {
    return;
  }

  const {
    offset = DEFAULT_OFFSET,
    duration,
    easing,
    immediate,
    lock,
    force,
  } = options;

  const lenis = window.lenis;

  if (lenis && typeof lenis.scrollTo === 'function') {
    lenis.scrollTo(target, {
      offset: -offset,
      duration,
      easing,
      immediate,
      lock,
      force,
    });
    return;
  }

  const targetPosition =
    target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
};

export default smoothScrollTo;

