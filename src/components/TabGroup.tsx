import React, { useRef, useState, useCallback } from 'react';
import classNames from 'classnames';
import useRefValue from 'src/helpers/useRefValue';
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
  onSelect?: TabSelectCallback;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  dense?: boolean;
}

function InnerTabGroup({
  className,
  onSelect,
  selectedIndex = 0,
  children,
  dense,
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
      <TabContent selectedIndex={selectedIndex}>{children}</TabContent>
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
