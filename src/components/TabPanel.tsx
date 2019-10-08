import React, { useContext, useMemo, useState, useEffect } from 'react';
import classNames from 'classnames';
import TabContentContext from './TabContentContext';

interface TabPanelProps {
  children: React.ReactNode;
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
}

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

  return isRendered ? (
    <div {...other} className={classNames('sinoui-tab-panel', className)}>
      {children}
    </div>
  ) : null;
}
