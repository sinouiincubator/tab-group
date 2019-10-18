import React, { useContext, useCallback } from 'react';
import classNames from 'classnames';
import { useRipple } from '@sinoui/ripple';
import {
  LEFT_KEY_CODE,
  TOP_KEY_CODE,
  RIGHT_KEY_CODE,
  BOTTOM_KEY_CODE,
} from '../../constants';
import TabHeaderItemWrapper from './TabHeaderItemWrapper';
import TabListContext from '../TabListContext';
import useTabRegister from '../commons/useTabRegister';
import TabHeaderContext from '../TabHeaderContext';

interface Props {
  /**
   * 标签标题
   */
  title: React.ReactNode;
  /**
   * 指定自定义样式名
   */
  className?: string;
  /**
   * 指定自定义样式
   */
  style?: React.CSSProperties;
  /**
   * 设置为 `true`，则禁用标签。
   */
  disabled?: boolean;
  /**
   * 指定标签页id
   */
  id?: string;
}

/**
 * 获取下一个可用的tab索引
 *
 * @param {number} selectedIndex
 * @param {string[]} tabs
 * @param {(tabId: string) => { disabled?: boolean }} getTabProps
 * @returns
 */
function getNextTabIndex(
  selectedIndex: number,
  tabs: string[],
  getTabProps: (tabId: string) => { disabled?: boolean },
): number {
  let i = selectedIndex + 1;
  for (; i < tabs.length; i += 1) {
    const tabId = tabs[i];
    const tabDisabled = getTabProps(tabId).disabled;
    if (!tabDisabled) {
      return i;
    }
  }

  if (i === tabs.length) {
    return getNextTabIndex(-1, tabs, getTabProps);
  }

  return 0;
}

/**
 * 获取上一个可用标签页的索引
 *
 * @param {number} selectedIndex
 * @param {string[]} tabs
 * @param {(tabId: string) => { disabled?: boolean }} getTabProps
 * @returns
 */
function getPrevTabIndex(
  selectedIndex: number,
  tabs: string[],
  getTabProps: (tabId: string) => { disabled?: boolean },
): number {
  let i = selectedIndex - 1;
  for (; i > 0; i -= 1) {
    const tabId = tabs[i];
    const tabDisabled = getTabProps(tabId).disabled;
    if (!tabDisabled) {
      return i;
    }
  }

  if (selectedIndex === 0) {
    return getPrevTabIndex(tabs.length, tabs, getTabProps);
  }

  return 0;
}

/**
 * 头部选项卡项组件
 */
function TabHeaderItem({
  title,
  className,
  style,
  disabled,
  id,
  ...rest
}: Props) {
  const tabListContext = useContext(TabListContext);
  const tabHeaderContext = useContext(TabHeaderContext);
  const [tabId, index] = useTabRegister({ disabled });
  const selectedIndex = tabListContext ? tabListContext.selectedIndex : -1;
  const isActive = index === selectedIndex;

  const rippleRef = useRipple<HTMLDivElement>(undefined, disabled);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      if (tabHeaderContext) {
        tabHeaderContext.onSelect(index, event);
      }
    },
    [index, tabHeaderContext],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      const { keyCode } = event;
      if (tabListContext && tabHeaderContext) {
        const { getTabs, getTabProps } = tabListContext;
        const tabs = getTabs();
        if (keyCode === RIGHT_KEY_CODE || keyCode === BOTTOM_KEY_CODE) {
          event.stopPropagation();
          event.preventDefault();
          const nextTab = getNextTabIndex(selectedIndex, tabs, getTabProps);
          tabHeaderContext.onSelect(nextTab, event);
        } else if (keyCode === LEFT_KEY_CODE || keyCode === TOP_KEY_CODE) {
          event.stopPropagation();
          event.preventDefault();
          const prevTab = getPrevTabIndex(selectedIndex, tabs, getTabProps);
          tabHeaderContext.onSelect(prevTab, event);
        }
      }
    },
    [selectedIndex, tabHeaderContext, tabListContext],
  );

  if (index === -1) {
    return null;
  }

  return (
    <TabHeaderItemWrapper
      className={classNames('sinoui-tab-label', className, {
        'sinoui-tab-label-active': isActive,
      })}
      style={style}
      disabled={disabled}
      active={isActive}
      onClick={disabled ? undefined : handleClick}
      ref={rippleRef}
      data-testid={`tab-header-item-${index}`}
      role="tab"
      tabIndex={isActive ? 0 : -1}
      aria-disabled={disabled}
      aria-selected={isActive}
      onKeyDown={disabled ? undefined : handleKeyDown}
      id={id || tabId}
      {...rest}
    >
      <div className="sinoui-tab-label-content">{title}</div>
    </TabHeaderItemWrapper>
  );
}

export default TabHeaderItem;
