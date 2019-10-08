import React from 'react';

interface TabHeaderContextState {
  /**
   * 是否是密集模式
   */
  dense?: boolean;
  /**
   * 当前选项卡id
   */
  activeTabId: string;

  /**
   * 变更当前选项卡id
   */
  onChange: (tabId: string) => void;
}

const TabHeaderContext = React.createContext<TabHeaderContextState | null>(
  null,
);

export default TabHeaderContext;
