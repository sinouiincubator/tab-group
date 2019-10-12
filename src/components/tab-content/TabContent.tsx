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
  selectedIndex: number;
}

/**
 * 选项卡组件的内容组件
 */
export default function TabContent(props: Props) {
  const { className, selectedIndex, children, ...rest } = props;
  const tabListContext = useTabList(selectedIndex);
  const context = useMemo(() => ({ inTabContent: true }), []);
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
