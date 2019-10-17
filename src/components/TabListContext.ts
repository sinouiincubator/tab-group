import React from 'react';

interface TabListContextState {
  /**
   * 注册标签页
   */
  register: (tabId: string) => number;
  /**
   * 取消注册标签页
   */
  unregister: (tabId: string) => void;
  /**
   * 当前选中标签页的索引。索引从 0 开始。
   */
  selectedIndex: number;
  /**
   * tab的总数
   */
  tabsCount: number;
  /**
   * 设置tabs个数
   */
  setTabsCount: (count: number) => void;
}

/**
 * 标签列表上下文
 */
const TabListContext = React.createContext<TabListContextState | null>(null);

export default TabListContext;
