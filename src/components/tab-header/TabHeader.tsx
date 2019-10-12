import React, { useMemo } from 'react';
import TabHeaderContext from '../TabHeaderContext';
import useRefValue from '../../helpers/useRefValue';
import InnerTabHeader from './InnerTabHeader';
import TabListContext from '../TabListContext';
import useTabList from '../commons/useTabList';
import { TabSelectCallback } from '../../types';

interface Props {
  children?: React.ReactNode;
  dense?: boolean;
  /**
   * 设置当前选中的标签页。这是一个从 `0` 开始的索引，第一个标签页的索引为 `0`，第二个标签页的索引为 `1`，……
   *
   * 默认值为 null。
   */
  selectedIndex: number;
  /**
   * 每次标签页切换时调用的事件处理器。这个函数的 `index` 参数是新的选中标签页索引，`lastIndex` 参数是变更之前选中的标签页索引，`event` 参数是引起页签切换的事件，可能是 `keydown` 或者 `click` 事件。如果 `index` 和 `lastIndex` 相同时，表示用户在当前选中的标签页上点击。
   */
  onSelect?: TabSelectCallback;
}

/**
 * 选项卡头部组件
 *
 */
function TabHeader({ children, dense, selectedIndex = 0, onSelect }: Props) {
  const tabList = useTabList(selectedIndex);

  const onSelectRef = useRefValue(onSelect);

  const context = useMemo(
    () => ({
      dense,
      onSelect: (
        tabIndex: number,
        event: React.MouseEvent | React.KeyboardEvent,
      ) => {
        if (onSelectRef.current) {
          onSelectRef.current(tabIndex, selectedIndex, event);
        }
      },
    }),
    [dense, onSelectRef, selectedIndex],
  );

  return (
    <TabListContext.Provider value={tabList}>
      <TabHeaderContext.Provider value={context}>
        <InnerTabHeader>{children}</InnerTabHeader>
      </TabHeaderContext.Provider>
    </TabListContext.Provider>
  );
}

export default TabHeader;
