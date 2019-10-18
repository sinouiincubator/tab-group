import React, { useEffect, useRef } from 'react';
import usePreventTransitionWhenMount from '../../helpers/usePreventTransitionWhenMount';
import TabHeaderWrapper from './TabHeaderWrapper';
import InkBar from '../InkBar';

interface Props {
  children: React.ReactNode;
  /**
   * 在标签右侧添加附件内容。
   */
  extraContent?: React.ReactNode;
  /**
   * 设置不显示底部线条。默认为 `false`。
   */
  borderless?: boolean;
}

function InnerTabHeader({ children, extraContent, borderless }: Props) {
  const tabListRef = useRef<HTMLDivElement>(null);
  const inkBarRef = useRef<HTMLDivElement>(null);

  usePreventTransitionWhenMount(inkBarRef);

  useEffect(() => {
    const inkBar = inkBarRef.current;
    const tabList = tabListRef.current;
    if (inkBar && tabList) {
      const activeTab = tabList.querySelector('.sinoui-tab-label-active');
      if (activeTab) {
        const { width, left } = activeTab.getBoundingClientRect();
        const { left: containerLeft } = tabList.getBoundingClientRect();
        inkBar.style.width = `${width}px`;
        inkBar.style.transform = `translate3d(${left -
          containerLeft}px, 0px, 0px)`;
      }
    }
  });

  return (
    <TabHeaderWrapper
      className="sinoui-tab-header"
      role="tablist"
      borderless={borderless}
    >
      <div className="sinoui-tab-label-container">
        <div className="sinoui-tab-list" ref={tabListRef}>
          <div className="sinoui-tab-labels">{children}</div>
          <InkBar ref={inkBarRef} data-testid="inkbar" />
        </div>
        {extraContent ? (
          <div className="sinoui-tab-header-extra-content">{extraContent}</div>
        ) : null}
      </div>
    </TabHeaderWrapper>
  );
}

export default InnerTabHeader;
