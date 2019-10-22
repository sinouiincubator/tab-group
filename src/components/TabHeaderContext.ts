import React from 'react';

interface TabHeaderContextState {
  /**
   * 是否是密集模式
   */
  dense?: boolean;

  /**
   * 变更当前选项卡
   */
  onSelect: (
    tabIndex: number,
    event: React.MouseEvent | React.KeyboardEvent,
  ) => void;
  /**
   * 标签文本颜色
   */
  textColor?: string;
}

/**
 * 标签头部上下文
 */
const TabHeaderContext = React.createContext<TabHeaderContextState | null>(
  null,
);

export default TabHeaderContext;
