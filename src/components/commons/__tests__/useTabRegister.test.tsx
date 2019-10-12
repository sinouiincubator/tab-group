import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useTabRegister from '../useTabRegister';
import TabListContext from '../../TabListContext';

it('创建标签组件时，注册标签', () => {
  const register = jest.fn();
  const unregister = jest.fn();
  const context = { register, unregister, selectedIndex: 0 };
  register.mockReturnValue(1);

  const Wrapper: React.SFC = ({ children }) => (
    <TabListContext.Provider value={context}>
      {children}
    </TabListContext.Provider>
  );
  const { result } = renderHook(() => useTabRegister(), { wrapper: Wrapper });

  expect(result.current).toBe(1);
});

it('组件销毁时，取消注册标签', () => {
  const register = jest.fn();
  const unregister = jest.fn();
  const context = { register, unregister, selectedIndex: 0 };

  const Wrapper: React.SFC = ({ children }) => (
    <TabListContext.Provider value={context}>
      {children}
    </TabListContext.Provider>
  );
  const { unmount } = renderHook(() => useTabRegister(), { wrapper: Wrapper });

  expect(unregister).not.toBeCalled();

  act(() => {
    unmount();
  });

  expect(unregister).toBeCalled();
});

it('组件重绘时，会再次注册标签', () => {
  const register = jest.fn();
  const unregister = jest.fn();
  const context = { register, unregister, selectedIndex: 0 };

  const Wrapper: React.SFC = ({ children }) => (
    <TabListContext.Provider value={context}>
      {children}
    </TabListContext.Provider>
  );
  const { rerender } = renderHook(() => useTabRegister(), { wrapper: Wrapper });

  act(() => {
    rerender();
  });

  expect(register).toBeCalledTimes(2);
});

it('不在TabListContext中使用，返回 -1', () => {
  const { result } = renderHook(() => useTabRegister());
  expect(result.current).toBe(-1);
});
