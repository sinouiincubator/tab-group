import React from 'react';

interface TabContentContextState {
  inTabContent: boolean;
  /**
   * 是否立即渲染所有的标签面板到 DOM 中。
   */
  forceRenderTabPanel?: boolean;
}

/**
 * 标签页内容上下文
 */
const TabContentContext = React.createContext<TabContentContextState | null>(
  null,
);

export default TabContentContext;
