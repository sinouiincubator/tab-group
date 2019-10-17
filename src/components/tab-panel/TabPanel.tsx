/* eslint-disable react/destructuring-assignment */
import React, { useContext, useRef, useEffect } from 'react';
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
  /**
   * 设置启用标签面板渲染到 DOM 的内容缓存。默认为 `true`。
   */
  cacheable?: boolean;
}

/**
 * 获取是否启用标签渲染缓存特性的hook。
 *
 * @param isCacheable 是否启用缓存特性的属性
 */
function useIsCacheable(isCacheable?: boolean) {
  const tabContentContext = useContext(TabContentContext);

  if (typeof isCacheable === 'boolean') {
    return isCacheable;
  }

  if (tabContentContext && typeof tabContentContext.cacheable === 'boolean') {
    return tabContentContext.cacheable;
  }

  return true;
}

/**
 * 判断是否需要渲染标签面板的hook。
 *
 * @param isCacheable 是否启用了标签面板内容缓存
 * @param isActive 是否是当前标签面板
 */
function useIsNeedRendered(isCacheable: boolean, isActive: boolean) {
  const isNeedRenderedRef = useRef(false);

  const isNeedRendered = isActive || (isCacheable && isNeedRenderedRef.current);

  useEffect(() => {
    if (isActive && isCacheable) {
      isNeedRenderedRef.current = true;
    }
  });

  return isNeedRendered;
}

/**
 * 判断是否是当前面板面板的hook。
 *
 * @param index 标签面板索引位置
 */
function useIsActive(index: number) {
  const context = useContext(TabListContext);
  const selectedIndex = context ? context.selectedIndex : 0;

  return index === selectedIndex;
}

/**
 * 判断是否强制渲染标签面板内容的hook。
 *
 * @param isForceRenderContent 是否强制渲染的属性
 */
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
  const {
    children,
    className,
    forceRenderContent,
    cacheable,
    ...other
  } = props;
  const index = useTabRegister();
  const isActive = useIsActive(index);
  const isCacheable = useIsCacheable(cacheable);
  const isNeedRendered = useIsNeedRendered(isCacheable, isActive);
  const isForceRenderContent = useIsForceRenderContent(forceRenderContent);

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
