import { animations } from '@velvet-ui/tokens';
import { usePrefersReducedMotion } from './useMediaQuery';

export function useAnimation() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const getAnimation = (animation: keyof typeof animations.spring) => {
    if (prefersReducedMotion) {
      return { type: 'tween', duration: 0.01 };
    }
    return animations.spring[animation];
  };

  const getDuration = (duration: keyof typeof animations.duration) => {
    if (prefersReducedMotion) {
      return 0.01;
    }
    return animations.duration[duration];
  };

  return { getAnimation, getDuration, prefersReducedMotion };
}