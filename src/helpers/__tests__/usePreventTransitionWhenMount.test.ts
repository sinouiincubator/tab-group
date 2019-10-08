import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import usePreventTransitionWhenMount from '../usePreventTransitionWhenMount';

jest.useFakeTimers();

beforeEach(() => {
  window.requestAnimationFrame = (callback) => {
    return setTimeout(callback, 0);
  };
  window.cancelAnimationFrame = (id: number) => {
    clearTimeout(id);
  };
});

function createElementAndRef(): [HTMLElement, React.RefObject<HTMLElement>] {
  const element = document.createElement('div');
  element.style.transition = 'color 3s';
  const ref = React.createRef<HTMLElement>() as React.MutableRefObject<
    HTMLElement
  >;
  ref.current = element;

  return [element, ref];
}

it('在组件初次渲染时阻止 transition 动画', () => {
  const [element, ref] = createElementAndRef();

  renderHook(() => usePreventTransitionWhenMount(ref));

  expect(element.style.transition).toBe('none');

  jest.runAllTimers();

  expect(element).toHaveStyle('transition: color 3s');
});

it('组件二次渲染时，不阻止 transition 动画', () => {
  const [element, ref] = createElementAndRef();

  const { rerender } = renderHook(() => usePreventTransitionWhenMount(ref));

  jest.runAllTimers();

  // 重绘
  rerender();

  expect(element).toHaveStyle('transition: color 3s');
});

it('在组件销毁前，取消 transition 恢复的raf', () => {
  const [element, ref] = createElementAndRef();

  const { unmount } = renderHook(() => usePreventTransitionWhenMount(ref));

  // 销毁组件
  unmount();

  jest.runAllTimers();

  expect(element).toHaveStyle('transition: none');
});
