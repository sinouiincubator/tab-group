import { useEffect } from 'react';
import usePreventTransitionWhenMount from '../../helpers/usePreventTransitionWhenMount';

/**
 * 同步指示条位置的hook
 *
 * @param inkBarRef 指示条元素引用
 * @param tabListRef 标签列表元素引用
 * @param selectedIndex 当前选中的索引
 */
function useInkbarPositionSync(
  inkBarRef: React.RefObject<HTMLDivElement>,
  tabListRef: React.RefObject<HTMLDivElement>,
  selectedIndex: number,
) {
  usePreventTransitionWhenMount(inkBarRef);

  useEffect(() => {
    const inkBar = inkBarRef.current;
    const tabList = tabListRef.current;
    if (inkBar && tabList) {
      const activeTab = tabList.querySelector('.sinoui-tab-label-active');
      if (activeTab) {
        const { width, left } = activeTab.getBoundingClientRect();
        const { left: containerLeft } = tabList.getBoundingClientRect();
        const { scrollLeft } = tabList;
        inkBar.style.width = `${width}px`;
        inkBar.style.transform = `translate3d(${left -
          containerLeft +
          scrollLeft}px, 0px, 0px)`;
      }
    }
  }, [inkBarRef, tabListRef, selectedIndex]);
}

export default useInkbarPositionSync;
