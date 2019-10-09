import React, { useContext, useMemo, useState, useEffect } from 'react';
import classNames from 'classnames';
import TabContentContext from '../TabContentContext';
import TabPanelWrapper from './TabPanelWrapper';

interface TabPanelProps {
  children: React.ReactNode;
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 标签页面板组件
 */
export default function TabPanel(props: TabPanelProps) {
  const { children, id, className, ...other } = props;
  const { active } = useContext(TabContentContext);
  const [isRendered, setIsRendered] = useState(false);
  const isShow = useMemo(() => active === id, [active, id]);

  useEffect(() => {
    if (isShow) {
      setIsRendered(true);
    }
  }, [isShow]);

  return (
    <TabPanelWrapper
      {...other}
      className={classNames(
        'sinoui-tab-panel',
        {
          'sinoui-tab-panel-active': active === id,
          'sinoui-tab-panel-hidden': !isShow,
        },
        className,
      )}
    >
      {isRendered ? children : null}
    </TabPanelWrapper>
  );
}
