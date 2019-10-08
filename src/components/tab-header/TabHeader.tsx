import React, { useMemo, useRef, useEffect } from 'react';
import usePreventTransitionWhenMount from 'src/helpers/usePreventTransitionWhenMount';
import InkBar from '../InkBar';
import TabHeaderContext from '../TabHeaderContext';
import useRefValue from '../../helpers/useRefValue';
import TabHeaderWrapper from './TabHeaderWrapper';

interface Props {
  children?: React.ReactNode;
  dense?: boolean;
  value: string;
  onChange?: (tabId: string) => void;
}

/**
 * 选项卡头部组件
 *
 */
function TabHeader({ children, dense, value, onChange }: Props) {
  const onChangeRef = useRefValue(onChange);

  const context = useMemo(
    () => ({
      dense,
      activeTabId: value,
      onChange: (tabId: string) => {
        if (onChangeRef.current) {
          onChangeRef.current(tabId);
        }
      },
    }),
    [dense, onChangeRef, value],
  );

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
  }, [value]);

  return (
    <TabHeaderContext.Provider value={context}>
      <TabHeaderWrapper className="sinoui-tab-header">
        <div className="sinoui-tab-label-container">
          <div className="sinoui-tab-list" ref={tabListRef}>
            <div className="sinoui-tab-labels">{children}</div>
            <InkBar ref={inkBarRef} data-testid="inkbar" />
          </div>
        </div>
      </TabHeaderWrapper>
    </TabHeaderContext.Provider>
  );
}

export default TabHeader;
