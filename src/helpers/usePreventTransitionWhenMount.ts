import { useEffect } from 'react';

/**
 * 在组件初次渲染时阻止 transition 动画
 */
function usePreventTransitionWhenMount<T extends HTMLElement>(
  elementRef: React.RefObject<T>,
) {
  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const { transition } = element.style;
      element.style.transition = 'none';
      const rafId = requestAnimationFrame(() => {
        element.style.transition = transition;
      });

      return () => cancelAnimationFrame(rafId);
    }
    return undefined;
  }, [elementRef]);
}

export default usePreventTransitionWhenMount;
