/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import useRefValue from '../helpers/useRefValue';
import { TabSelectCallback } from '../types';
import TabHeader from './tab-header';
import TabContent from './tab-content';

interface Props {
  /**
   * 允许改变在初始渲染时显示第几个标签页的属性。默认为 `0`。这是一个从 `0` 开始的索引，第一个标签页的索引为 `0`，第二个标签页的索引为 `1`，……
   */
  defaultIndex?: number;
  /**
   * 设置当前选中的标签页。这是一个从 `0` 开始的索引，第一个标签页的索引为 `0`，第二个标签页的索引为 `1`，……
   *
   * 默认值为 null。
   */
  selectedIndex?: number;
  /**
   * 每次标签页切换时调用的事件处理器。这个函数的 `index` 参数是新的选中标签页索引，`lastIndex` 参数是变更之前选中的标签页索引，`event` 参数是引起页签切换的事件，可能是 `keydown` 或者 `click` 事件。如果 `index` 和 `lastIndex` 相同时，表示用户在当前选中的标签页上点击。
   */
  onSelect?: (
    index: number,
    lastIndex: number,
    event: React.MouseEvent | React.KeyboardEvent,
  ) => boolean | undefined | void;
  /**
   * 设置标签。可以是多个 `<Tab />` 元素。
   */
  children?: React.ReactNode;
  /**
   * 给标签页组件根元素指定新的样式名
   */
  className?: string;
  /**
   * 设置标签页组件根元素的样式
   */
  style?: React.CSSProperties;
  /**
   * 设置标签页在密集模式下展现。
   */
  dense?: boolean;
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

function InnerTabGroup({
  className,
  onSelect,
  selectedIndex = 0,
  children,
  dense,
  forceRenderTabPanel,
  cacheable,
  animateHeight,
  ...rest
}: Props) {
  return (
    <div className={classNames('sinoui-tab-group', className)} {...rest}>
      <TabHeader
        selectedIndex={selectedIndex}
        dense={dense}
        onSelect={onSelect}
      >
        {children}
      </TabHeader>
      <TabContent
        selectedIndex={selectedIndex}
        forceRenderTabPanel={forceRenderTabPanel}
        cacheable={cacheable}
        animateHeight={animateHeight}
      >
        {children}
      </TabContent>
    </div>
  );
}

/**
 * 受控模式的标签页组件
 */
function UnControlledTabGroup({ defaultIndex = 0, onSelect, ...rest }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  const onSelectRef = useRefValue(onSelect);

  const handleTabSelect: TabSelectCallback = useCallback(
    (tabIndex, prevSelectedIndex, event) => {
      const onSelectProps = onSelectRef.current;
      const preventTabChange =
        !!onSelectProps &&
        onSelectProps(tabIndex, prevSelectedIndex, event) === false;

      if (preventTabChange) {
        return;
      }

      setSelectedIndex(tabIndex);
    },
    [onSelectRef],
  );
  return (
    <InnerTabGroup
      {...rest}
      onSelect={handleTabSelect}
      selectedIndex={selectedIndex}
    />
  );
}

/**
 * 多标签页组件
 */
function TabGroup({ selectedIndex, ...rest }: Props) {
  const isUnControlled = useRef(selectedIndex === undefined);
  return isUnControlled.current ? (
    <UnControlledTabGroup {...rest} />
  ) : (
    <InnerTabGroup selectedIndex={selectedIndex} {...rest} />
  );
}

export default TabGroup;
