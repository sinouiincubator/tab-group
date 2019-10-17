import React, { useMemo } from 'react';
import classNames from 'classnames';
import TabContentContext from '../TabContentContext';
import TabContentWrapper from './TabContentWrapper';
import TabPanelListWrapper from './TabPanelListWrapper';
import useTabList from '../commons/useTabList';
import TabListContext from '../TabListContext';

export interface Props {
  children?: React.ReactNode;
  className?: string;
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
    ...rest
  } = props;
  const tabListContext = useTabList(selectedIndex);
  const context = useMemo(
    () => ({ inTabContent: true, forceRenderTabPanel, cacheable }),
    [cacheable, forceRenderTabPanel],
  );
  const transform = useMemo(
    () => `translate3d(-${100 * selectedIndex}%, 0px, 0px)`,
    [selectedIndex],
  );

  return (
    <TabListContext.Provider value={tabListContext}>
      <TabContentContext.Provider value={context}>
        <TabContentWrapper
          className={classNames('sinoui-tab-content', className)}
          {...rest}
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
