import React, { useMemo } from 'react';
import classNames from 'classnames';
import TabContentContext from './TabContentContext';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  active: number;
  style?: React.CSSProperties;
}

export default function TabContent(props: Props) {
  const { className, active, children } = props;
  const context = useMemo(() => ({ active }), [active]);
  return (
    <TabContentContext.Provider value={context}>
      <div className={classNames('sinoui-tab-content', className)}>
        {children}
      </div>
    </TabContentContext.Provider>
  );
}
