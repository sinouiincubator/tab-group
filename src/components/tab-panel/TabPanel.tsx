/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import TabPanelWrapper from './TabPanelWrapper';
import TabListContext from '../TabListContext';
import useTabRegister from '../commons/useTabRegister';

interface TabPanelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function useIsNeedRendered(isActive: boolean) {
  const [isNeedRendered, setIsNeedRendered] = useState(false);

  if (isActive && !isNeedRendered) {
    setIsNeedRendered(true);
  }

  return isNeedRendered;
}

function useIsActive(index: number) {
  const context = useContext(TabListContext);
  const selectedIndex = context ? context.selectedIndex : 0;

  return index === selectedIndex;
}

/**
 * 标签页面板组件
 */
export default function TabPanel(props: TabPanelProps) {
  const { children, className, ...other } = props;
  const index = useTabRegister();
  const isActive = useIsActive(index);
  const isNeedRendered = useIsNeedRendered(isActive);

  if (index === -1) {
    return null;
  }

  return (
    <TabPanelWrapper
      data-testid={`tab-panel-${index}`}
      {...other}
      className={classNames(
        'sinoui-tab-panel',
        {
          'sinoui-tab-panel-active': isActive,
          'sinoui-tab-panel-hidden': !isActive,
        },
        className,
      )}
    >
      {isNeedRendered ? children : null}
    </TabPanelWrapper>
  );
}
