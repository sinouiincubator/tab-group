import React, { useContext, useCallback } from 'react';
import classNames from 'classnames';
import { useRipple } from '@sinoui/ripple';
import TabHeaderContext from '../TabHeaderContext';
import TabHeaderItemWrapper from './TabHeaderItemWrapper';

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
   * 指定选项卡id
   */
  id: string;
  /**
   * 是否可用
   */
  disabled?: boolean;
}

/**
 * 头部选项卡项组件
 */
function TabHeaderItem({
  id,
  title,
  className,
  style,
  disabled,
  ...rest
}: Props) {
  const context = useContext(TabHeaderContext);
  // eslint-disable-next-line react/destructuring-assignment
  const active = context ? context.activeTabId === id : false;

  const rippleRef = useRipple<HTMLDivElement>();

  const handleClick = useCallback(() => {
    if (context) {
      context.onChange(id);
    }
  }, [context, id]);

  return (
    <TabHeaderItemWrapper
      className={classNames('sinoui-tab-label', className, {
        'sinoui-tab-label-active': active,
      })}
      style={style}
      disabled={disabled}
      active={active}
      onClick={disabled ? undefined : handleClick}
      data-tab-id={id}
      ref={rippleRef}
      {...rest}
    >
      <div className="sinoui-tab-label-content">{title}</div>
    </TabHeaderItemWrapper>
  );
}

export default TabHeaderItem;
