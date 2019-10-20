import React, { useRef } from 'react';
import TabHeaderWrapper from './TabHeaderWrapper';
import InkBar from '../InkBar';
import TabHeaderScrollButton from './TabHeaderScrollButton';
import NextIcon from './NextIcon';
import PrevIcon from './PrevIcon';
import useInkbarPositionSync from './useInkbarPositionSync';
import useScrollState from './useScrollState';

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
   * 设置当前选中的标签页。这是一个从 `0` 开始的索引，第一个标签页的索引为 `0`，第二个标签页的索引为 `1`，……
   */
  selectedIndex: number;
}

function InnerTabHeader({
  children,
  extraContent,
  borderless,
  selectedIndex,
}: Props) {
  const tabListRef = useRef<HTMLDivElement>(null);
  const inkBarRef = useRef<HTMLDivElement>(null);

  useInkbarPositionSync(inkBarRef, tabListRef, selectedIndex);
  const {
    showScrollButtons,
    isPrevDisabled,
    isNextDisabled,
    prev,
    next,
  } = useScrollState(tabListRef);

  return (
    <TabHeaderWrapper
      className="sinoui-tab-header"
      role="tablist"
      borderless={borderless}
    >
      <div className="sinoui-tab-label-container">
        {showScrollButtons && (
          <TabHeaderScrollButton disabled={isPrevDisabled} onClick={prev}>
            <PrevIcon />
          </TabHeaderScrollButton>
        )}
        <div className="sinoui-tab-list" ref={tabListRef}>
          {children}
          <InkBar ref={inkBarRef} data-testid="inkbar" />
        </div>
        {showScrollButtons && (
          <TabHeaderScrollButton disabled={isNextDisabled} onClick={next}>
            <NextIcon />
          </TabHeaderScrollButton>
        )}
        {extraContent ? (
          <div className="sinoui-tab-header-extra-content">{extraContent}</div>
        ) : null}
      </div>
    </TabHeaderWrapper>
  );
}

export default InnerTabHeader;
