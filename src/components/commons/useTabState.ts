import { useContext, useState, useEffect, useCallback } from 'react';
import getNextTabIndex from 'src/helpers/getNextTabIndex';
import getPrevTabIndex from 'src/helpers/getPrevTabIndex';
import TabPanelContext from '../TabPanelContext';
import TabListContext from '../TabListContext';
import TabContentContext from '../TabContentContext';

export interface TabState {
  isFirst: boolean;
  isLast: boolean;
  prev: (event: React.MouseEvent) => void;
  next: (event: React.MouseEvent) => void;
}

/**
 * 使用标签页状态
 */
export default function useTabState(): TabState {
  const tabId = useContext(TabPanelContext);
  const tabListContext = useContext(TabListContext);
  const tabContentContext = useContext(TabContentContext);
  const selectedIndex = tabListContext ? tabListContext.selectedIndex : -1;

  const [isFirst, setIsFirst] = useState(false);
  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    if (tabListContext) {
      const tabs = tabListContext.getTabs();
      const isFirstState = tabs[0] === tabId;
      const isLastState = tabs[tabs.length - 1] === tabId;
      setIsFirst(isFirstState);
      setIsLast(isLastState);
    }
  }, [tabId, tabListContext]);

  const next = useCallback(
    (event) => {
      if (tabListContext && tabContentContext) {
        const { getTabs, getTabProps } = tabListContext;
        const tabs = getTabs();
        const nextTab = getNextTabIndex(selectedIndex, tabs, getTabProps);
        tabContentContext.onSelect(nextTab, event);
      }
    },
    [selectedIndex, tabContentContext, tabListContext],
  );

  const prev = useCallback(
    (event) => {
      if (tabListContext && tabContentContext) {
        const { getTabs, getTabProps } = tabListContext;
        const tabs = getTabs();
        const prevTab = getPrevTabIndex(selectedIndex, tabs, getTabProps);
        tabContentContext.onSelect(prevTab, event);
      }
    },
    [selectedIndex, tabContentContext, tabListContext],
  );

  return { isFirst, isLast, next, prev };
}
