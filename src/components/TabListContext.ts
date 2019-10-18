import React from 'react';

export interface TabProps {
  disabled?: boolean;
}

export interface TabListContextState {
  /**
   * 注册标签页
   */
  register: (tabId: string, props: TabProps) => number;
  /**
   * 取消注册标签页
   */
  unregister: (tabId: string) => void;
  /**
   * 当前选中标签页的索引。索引从 0 开始。
   */
  selectedIndex: number;
  /**
   * 获取所有标签页的id
   */
  getTabs(): string[];
  getTabProps(tabId: string): TabProps;
}

/**
 * 标签列表上下文
 */
const TabListContext = React.createContext<TabListContextState | null>(null);

export default TabListContext;
