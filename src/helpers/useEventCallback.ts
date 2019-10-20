/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useLayoutEffect, useCallback, useEffect } from 'react';

// 兼容服务器渲染
const useEnhancedEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * useCallback() 的替代品
 *
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param fn 回调函数
 */
function useEventCallback<T extends Function>(fn: T): T {
  const ref = useRef<T>(fn);

  useEnhancedEffect(() => {
    ref.current = fn;
  });

  return useCallback(() => ref.current(), []) as any;
}

export default useEventCallback;
