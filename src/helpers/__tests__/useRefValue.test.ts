import { renderHook } from '@testing-library/react-hooks';
import useRefValue from '../useRefValue';

it('创建值引用', () => {
  const { result, rerender } = renderHook((value = '123') =>
    useRefValue(value),
  );

  expect(result.current.current).toBe('123');

  rerender('456');

  expect(result.current.current).toBe('456');
});
