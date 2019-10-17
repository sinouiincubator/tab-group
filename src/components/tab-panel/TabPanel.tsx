/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import TabPanelWrapper from './TabPanelWrapper';
import TabListContext from '../TabListContext';
import useTabRegister from '../commons/useTabRegister';
import TabContentContext from '../TabContentContext';

interface TabPanelProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 指定标签 id
   */
  tabId?: string;
  /**
   * 默认情况下，只有当前标签内容会渲染到 DOM 中。设置为 `true`，会在组件初始化时立即将标签内容渲染到 DOM 中。
   */
  forceRenderContent?: boolean;
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

function useIsForceRenderContent(isForceRenderContent?: boolean) {
  const tabContentContext = useContext(TabContentContext);

  if (typeof isForceRenderContent === 'boolean') {
    return isForceRenderContent;
  }
  return !!tabContentContext && tabContentContext.forceRenderTabPanel;
}

/**
 * 标签页面板组件
 */
export default function TabPanel(props: TabPanelProps) {
  const { children, className, ...other } = props;
  const index = useTabRegister();
  const isActive = useIsActive(index);
  const isNeedRendered = useIsNeedRendered(isActive);
  const isForceRenderContent = useIsForceRenderContent(
    props.forceRenderContent,
  );

  if (index === -1) {
    return null;
  }

  return (
    <TabPanelWrapper
      data-testid={`tab-panel-${index}`}
      role="tabpanel"
      aria-hidden={!isActive}
      aria-labelledby={props.tabId}
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
      {isNeedRendered || isForceRenderContent ? children : null}
    </TabPanelWrapper>
  );
}
