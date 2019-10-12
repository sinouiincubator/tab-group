import React from 'react';

interface TabContentContextState {
  inTabContent: boolean;
}

/**
 * 标签页内容上下文
 */
const TabContentContext = React.createContext<TabContentContextState | null>(
  null,
);

export default TabContentContext;
