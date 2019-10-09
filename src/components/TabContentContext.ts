import React from 'react';

interface TabContentContextState {
  active: number;
}

const TabContentContext = React.createContext<TabContentContextState>({
  active: 0,
});

export default TabContentContext;
