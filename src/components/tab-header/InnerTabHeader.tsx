import React, { useRef } from 'react';
import TabHeaderWrapper from './TabHeaderWrapper';
import InkBar from '../InkBar';
import TabHeaderScrollButton from './TabHeaderScrollButton';
import NextIcon from './NextIcon';
import PrevIcon from './PrevIcon';
import useInkbarPositionSync from './useInkbarPositionSync';
import useScrollState from './useScrollState';
import TabHeaderExtraContent from './TabHeaderExtraContent';
import TabList from './TabList';
import { TabListContextState } from '../TabListContext';

interface Props {
  children: React.ReactNode;
  /**
   * 在标签右侧添加附加内容。
   */
  extraContent?: React.ReactNode;
  /**
   * 设置不显示底部线条。默认为 `false`。
   */
  borderless?: boolean;
  /**
   * 标签列表上下文状态
   */
  tabListContextState: TabListContextState;
  /**
   * 指示条颜色
   */
  inkBarColor?: string;

  /**
   * 全宽模式
   */
  fullWidth?: boolean;
}

function InnerTabHeader({
  children,
  extraContent,
  borderless,
  tabListContextState,
  inkBarColor,
  fullWidth,
  ...rest
}: Props) {
  const tabListRef = useRef<HTMLDivElement>(null);
  const inkBarRef = useRef<HTMLDivElement>(null);

  useInkbarPositionSync(
    inkBarRef,
    tabListRef,
    tabListContextState.selectedIndex,
  );
  const {
    showScrollButtons,
    isPrevDisabled,
    isNextDisabled,
    prev,
    next,
    onTabListScroll,
  } = useScrollState(tabListRef, tabListContextState);

  return (
    <TabHeaderWrapper
      className="sinoui-tab-header"
      role="tablist"
      borderless={borderless}
      {...rest}
    >
      {showScrollButtons && (
        <TabHeaderScrollButton disabled={isPrevDisabled} onClick={prev}>
          <PrevIcon />
        </TabHeaderScrollButton>
      )}
      <TabList
        className="sinoui-tab-list"
        ref={tabListRef}
        onScroll={onTabListScroll}
        fullWidth={fullWidth}
      >
        {children}
        <InkBar ref={inkBarRef} data-testid="inkbar" color={inkBarColor} />
      </TabList>
      {showScrollButtons && (
        <TabHeaderScrollButton disabled={isNextDisabled} onClick={next}>
          <NextIcon />
        </TabHeaderScrollButton>
      )}
      {extraContent ? (
        <TabHeaderExtraContent className="sinoui-tab-header__extra-content">
          {extraContent}
        </TabHeaderExtraContent>
      ) : null}
    </TabHeaderWrapper>
  );
}

export default InnerTabHeader;
