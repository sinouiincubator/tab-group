import { useContext, useState, useEffect, useCallback } from 'react';
import getNextTabIndex from '../../helpers/getNextTabIndex';
import getPrevTabIndex from '../../helpers/getPrevTabIndex';
import TabPanelContext from '../TabPanelContext';
import TabListContext from '../TabListContext';
import TabContentContext from '../TabContentContext';

export interface TabState {
  /**
   * 是否是第一个标签页
   */
  isFirst: boolean;
  /**
   * 是否是最后一个标签页
   */
  isLast: boolean;
  /**
   * 跳转到上一页
   *
   * @param event 触发事件
   */
  prev(event?: React.MouseEvent): void;
  /**
   * 调整到下一页
   * @param event 触发事件
   */
  next(event?: React.MouseEvent): void;
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
