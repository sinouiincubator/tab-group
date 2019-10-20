import { useEffect, useCallback, useState, useMemo } from 'react';
import debounce from 'lodash/debounce';
import { DEBOUNCE_WAIT } from '../../constants';

/**
 * 使用滚动状态的hook
 * @param tabListRef 标签列表元素引用
 */
function useScrollState(tabListRef: React.RefObject<HTMLDivElement>) {
  const [showScrollButtons, setShowScrollButtons] = useState(false); // 是否显示滚动按钮
  const [isPrevDisabled, setIsPrevDisabled] = useState(true); // 向前滚动按钮是否禁用
  const [isNextDisabled, setIsNextDisabled] = useState(false); // 向后滚动按钮是否禁用

  /**
   * 更新滚动按钮的状态
   */
  const updateScrollButtonsState = useCallback(() => {
    const tabList = tabListRef.current;

    if (tabList) {
      const { scrollWidth, clientWidth, scrollLeft } = tabList;
      setShowScrollButtons(scrollWidth > clientWidth);
      setIsPrevDisabled(scrollLeft < 1);
      setIsNextDisabled(scrollWidth - clientWidth === scrollLeft);
    }
  }, [tabListRef]);

  useEffect(updateScrollButtonsState, [updateScrollButtonsState]);

  /**
   * 向前（左）滚动
   */
  const prev = useCallback(() => {
    const tabList = tabListRef.current;

    if (tabList) {
      const { scrollLeft, clientWidth } = tabList;
      tabList.scrollLeft = scrollLeft - clientWidth;
    }
  }, [tabListRef]);

  /**
   * 向后（右）滚动
   */
  const next = useCallback(() => {
    const tabList = tabListRef.current;

    if (tabList) {
      const { scrollLeft, clientWidth } = tabList;
      tabList.scrollLeft = scrollLeft + clientWidth;
    }
  }, [tabListRef]);

  // 处理标签列表的滚动事件
  const handleTabListScroll = useMemo(
    () => debounce(updateScrollButtonsState, DEBOUNCE_WAIT),
    [updateScrollButtonsState],
  );

  useEffect(() => {
    return () => handleTabListScroll.cancel();
  }, [handleTabListScroll]);

  return {
    showScrollButtons,
    isPrevDisabled,
    isNextDisabled,
    prev,
    next,
    onTabListScroll: handleTabListScroll,
  };
}

export default useScrollState;
