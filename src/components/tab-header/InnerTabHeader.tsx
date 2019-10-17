import React, { useEffect, useRef } from 'react';
import usePreventTransitionWhenMount from '../../helpers/usePreventTransitionWhenMount';

import TabHeaderWrapper from './TabHeaderWrapper';
import InkBar from '../InkBar';

interface Props {
  children: React.ReactNode;
}

function InnerTabHeader({ children }: Props) {
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
    <TabHeaderWrapper className="sinoui-tab-header" role="tablist">
      <div className="sinoui-tab-label-container">
        <div className="sinoui-tab-list" ref={tabListRef}>
          <div className="sinoui-tab-labels">{children}</div>
          <InkBar ref={inkBarRef} data-testid="inkbar" />
        </div>
      </div>
    </TabHeaderWrapper>
  );
}

export default InnerTabHeader;
