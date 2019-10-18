import React, { useMemo, useRef, useEffect } from 'react';
import classNames from 'classnames';
import TabContentContext from '../TabContentContext';
import TabContentWrapper from './TabContentWrapper';
import TabPanelListWrapper from './TabPanelListWrapper';
import useTabList from '../commons/useTabList';
import TabListContext from '../TabListContext';

export interface Props {
  children?: React.ReactNode;
  /**
   * 指定自定义样式名
   */
  className?: string;
  /**
   * 指定自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 设置当前选中的标签页。这是一个从 `0` 开始的索引，第一个标签页的索引为 `0`，第二个标签页的索引为 `1`，……
   */
  selectedIndex: number;
  /**
   * 默认情况下只有当前标签面板会渲染到 DOM 中（出于性能考量）。如果设置为 `true`，则所有的标签面板从一开始就会立即渲染到 DOM 中。默认为 `false`。
   */
  forceRenderTabPanel?: boolean;
  /**
   * 设置启动标签面板渲染到 DOM 的缓存特性。当`forceRenderTabPanel` 为 `false` 此配置才有效。默认为 `true`。如果设置为 `false`，则不会缓存标签面板的渲染，标签切换后，销毁该标签面板的DOM。
   */
  cacheable?: boolean;
  /**
   * 设置启用标签面板切换时内容高度过渡动画。默认为 `false`，不启用。设置为 `true`，启用高度过渡动画，但是可能会影响性能。
   */
  animateHeight?: boolean;
}

/**
 * 应用高度动画的hook。
 *
 * @param animateHeight 是否启用高度动画
 * @param selectedIndex 当前标签的索引位置
 * @param tabContentRef 标签内容容器DOM
 */
function useAnimateHeight(
  animateHeight: boolean,
  selectedIndex: number,
  tabContentRef: React.RefObject<HTMLDivElement>,
) {
  const prevSelectedIndexRef = useRef(selectedIndex);

  useEffect(() => {
    const prevSelectedIndex = prevSelectedIndexRef.current;
    const tabContent = tabContentRef.current;
    prevSelectedIndexRef.current = selectedIndex;

    if (prevSelectedIndex === selectedIndex || !tabContent || !animateHeight) {
      return undefined;
    }

    const panels = tabContent.querySelectorAll('.sinoui-tab-panel');
    const prev = panels[prevSelectedIndex] as HTMLElement;
    const current = panels[selectedIndex] as HTMLElement;
    prev.style.height = 'auto';
    current.style.height = '';
    const { height: prevHeight } = prev.getBoundingClientRect();
    const { height } = current.getBoundingClientRect();

    tabContent.style.height = `${prevHeight}px`;
    tabContent.style.overflow = 'hidden';

    let isEnd = false;
    const reset = () => {
      isEnd = true;
      tabContent.style.transition = '';
      tabContent.style.height = '';
      tabContent.style.overflow = '';
      prev.style.height = '';
    };

    const rafId = requestAnimationFrame(() => {
      tabContent.style.height = `${height}px`;
    });

    const timeoutId = setTimeout(reset, 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      if (!isEnd) {
        reset();
      }
    };
  }, [animateHeight, selectedIndex, tabContentRef]);
}

/**
 * 选项卡组件的内容组件
 */
export default function TabContent(props: Props) {
  const {
    className,
    selectedIndex,
    children,
    forceRenderTabPanel,
    cacheable,
    animateHeight = false,
    ...rest
  } = props;
  const tabListContext = useTabList(selectedIndex);
  const context = useMemo(
    () => ({
      inTabContent: true,
      forceRenderTabPanel,
      cacheable,
    }),
    [cacheable, forceRenderTabPanel],
  );
  const transform = useMemo(
    () => `translate3d(-${100 * selectedIndex}%, 0px, 0px)`,
    [selectedIndex],
  );

  const tabContentRef = useRef<HTMLDivElement>(null);
  useAnimateHeight(animateHeight, selectedIndex, tabContentRef);

  return (
    <TabListContext.Provider value={tabListContext}>
      <TabContentContext.Provider value={context}>
        <TabContentWrapper
          className={classNames('sinoui-tab-content', className)}
          {...rest}
          ref={tabContentRef}
        >
          <TabPanelListWrapper
            style={{ transform }}
            className="sinoui-tab-panel-list"
          >
            {children}
          </TabPanelListWrapper>
        </TabContentWrapper>
      </TabContentContext.Provider>
    </TabListContext.Provider>
  );
}
