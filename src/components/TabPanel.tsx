import React, { useContext, useMemo, useState, useEffect } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import TabContentContext from './TabContentContext';

interface TabPanelProps {
  children: React.ReactNode;
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const TabPanelWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
`;

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
      className={classNames('sinoui-tab-panel', className)}
    >
      {isRendered ? children : null}
    </TabPanelWrapper>
  );
}
