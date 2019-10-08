import { useRef } from 'react';

/**
 * 使用同步的“变量”
 */
function useRefValue<T>(value: T) {
  const ref = useRef(value);

  ref.current = value;

  return ref;
}

export default useRefValue;
