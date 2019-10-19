import { useEffect, useCallback, useState } from 'react';

/**
 * 使用滚动状态的hook
 * @param tabListRef 标签列表元素引用
 */
function useScrollState(tabListRef: React.RefObject<HTMLDivElement>) {
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

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

  const prev = useCallback(() => {
    const tabList = tabListRef.current;

    if (tabList) {
      tabList.scrollLeft -= 500;

      updateScrollButtonsState();
    }
  }, [tabListRef, updateScrollButtonsState]);

  const next = useCallback(() => {
    const tabList = tabListRef.current;

    if (tabList) {
      tabList.scrollLeft += 500;

      updateScrollButtonsState();
    }
  }, [tabListRef, updateScrollButtonsState]);

  return {
    showScrollButtons,
    isPrevDisabled,
    isNextDisabled,
    prev,
    next,
  };
}

export default useScrollState;
