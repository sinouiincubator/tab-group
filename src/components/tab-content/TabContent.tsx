import React, { useMemo } from 'react';
import classNames from 'classnames';
import TabContentContext from '../TabContentContext';
import TabContentWrapper from './TabContentWrapper';
import TabPanelListWrapper from './TabPanelListWrapper';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  active: number;
}

/**
 * 选项卡组件的内容组件
 */
export default function TabContent(props: Props) {
  const { className, active, children } = props;
  const context = useMemo(() => ({ active }), [active]);
  const transform = useMemo(() => `translate3d(-${100 * active}%, 0px, 0px)`, [
    active,
  ]);

  return (
    <TabContentContext.Provider value={context}>
      <TabContentWrapper
        className={classNames('sinoui-tab-content', className)}
      >
        <TabPanelListWrapper
          style={{ transform }}
          className="sinoui-tab-panel-list"
        >
          {children}
        </TabPanelListWrapper>
      </TabContentWrapper>
    </TabContentContext.Provider>
  );
}
