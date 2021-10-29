import { useEffect } from 'react';
import elementResizeDetectorMaker from 'element-resize-detector';
import { debounce } from '@sinoui/utils';
import usePreventTransitionWhenMount from '../../helpers/usePreventTransitionWhenMount';
import NODE_ENV from '../../helpers/env';

let erd: elementResizeDetectorMaker.Erd | undefined;

function getErd() {
  if (!erd) {
    erd = elementResizeDetectorMaker({
      strategy: 'scroll',
    });
  }

  return erd;
}

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
      const activeTab = tabList.querySelector(
        '.sinoui-tab--active',
      ) as HTMLElement;
      if (activeTab) {
        const listener = debounce(() => {
          const { width, left } = activeTab.getBoundingClientRect();
          const { left: containerLeft } = tabList.getBoundingClientRect();
          const { scrollLeft } = tabList;
          inkBar.style.width = `${width}px`;
          inkBar.style.transform = `translate3d(${
            left - containerLeft + scrollLeft
          }px, 0px, 0px)`;
        });

        const isTest = NODE_ENV === 'test';
        if (!isTest) {
          getErd().listenTo(activeTab, listener);
        }

        return () => {
          if (!isTest) {
            getErd().removeListener(activeTab, listener);
          }
        };
      }
    }
    return undefined;
  }, [inkBarRef, tabListRef, selectedIndex]);
}

export default useInkbarPositionSync;
