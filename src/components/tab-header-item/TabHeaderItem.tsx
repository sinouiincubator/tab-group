import React, { useContext, useCallback } from 'react';
import classNames from 'classnames';
import { useRipple } from '@sinoui/ripple';
import {
  LEFT_KEY_CODE,
  TOP_KEY_CODE,
  RIGHT_KEY_CODE,
  BOTTOM_KEY_CODE,
} from 'src/constants';
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
   * 是否可用
   */
  disabled?: boolean;
  /**
   * 指定标签页id
   */
  id?: string;
}

/**
 * 头部选项卡项组件
 */
function TabHeaderItem({ title, className, style, disabled, ...rest }: Props) {
  const tabListContext = useContext(TabListContext);
  const tabHeaderContext = useContext(TabHeaderContext);
  const index = useTabRegister();
  const selectedIndex = tabListContext ? tabListContext.selectedIndex : -1;
  const isActive = index === selectedIndex;

  const rippleRef = useRipple<HTMLDivElement>();

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
        const { getTabsCount } = tabListContext;
        const tabsCount = getTabsCount();
        if (keyCode === RIGHT_KEY_CODE || keyCode === BOTTOM_KEY_CODE) {
          event.stopPropagation();
          event.preventDefault();
          if (selectedIndex < tabsCount - 1) {
            tabHeaderContext.onSelect(selectedIndex + 1, event);
          } else {
            tabHeaderContext.onSelect(0, event);
          }
        } else if (keyCode === LEFT_KEY_CODE || keyCode === TOP_KEY_CODE) {
          event.stopPropagation();
          event.preventDefault();
          if (selectedIndex > 0) {
            tabHeaderContext.onSelect(selectedIndex - 1, event);
          } else {
            tabHeaderContext.onSelect(tabsCount - 1, event);
          }
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
      {...rest}
    >
      <div className="sinoui-tab-label-content">{title}</div>
    </TabHeaderItemWrapper>
  );
}

export default TabHeaderItem;
