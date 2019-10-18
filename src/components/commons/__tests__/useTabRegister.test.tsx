import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useTabRegister from '../useTabRegister';
import TabListContext from '../../TabListContext';
import mockTabListContext from './mockTabListContext';
import { reset } from '../../../helpers/uuid';

afterEach(reset);

it('创建标签组件时，注册标签', () => {
  const context = mockTabListContext();
  context.register.mockReturnValue(1);

  const Wrapper: React.SFC = ({ children }) => (
    <TabListContext.Provider value={context}>
      {children}
    </TabListContext.Provider>
  );
  const { result } = renderHook(() => useTabRegister(), { wrapper: Wrapper });

  expect(result.current).toEqual(['tab-0', 1]);
});

it('组件销毁时，取消注册标签', () => {
  const context = mockTabListContext();

  const Wrapper: React.SFC = ({ children }) => (
    <TabListContext.Provider value={context}>
      {children}
    </TabListContext.Provider>
  );
  const { unmount } = renderHook(() => useTabRegister(), { wrapper: Wrapper });

  expect(context.unregister).not.toBeCalled();

  act(() => {
    unmount();
  });

  expect(context.unregister).toBeCalled();
});

it('组件重绘时，会再次注册标签', () => {
  const context = mockTabListContext();

  const Wrapper: React.SFC = ({ children }) => (
    <TabListContext.Provider value={context}>
      {children}
    </TabListContext.Provider>
  );
  const { rerender } = renderHook(() => useTabRegister(), { wrapper: Wrapper });

  act(() => {
    rerender();
  });

  expect(context.register).toBeCalledTimes(2);
});

it('不在TabListContext中使用，返回 -1', () => {
  const { result } = renderHook(() => useTabRegister());
  expect(result.current).toEqual(['tab-0', -1]);
});
