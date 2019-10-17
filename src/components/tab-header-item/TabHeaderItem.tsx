import React, { useContext, useCallback } from 'react';
import classNames from 'classnames';
import { useRipple } from '@sinoui/ripple';
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
      {...rest}
    >
      <div className="sinoui-tab-label-content">{title}</div>
    </TabHeaderItemWrapper>
  );
}

export default TabHeaderItem;
