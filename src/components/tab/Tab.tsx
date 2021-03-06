import React from 'react';
import useInTabHeader from './useInTabHeader';
import useInTabContent from './useInTabContent';
import TabHeaderItem from '../tab-header-item';
import TabPanel from '../tab-panel';

interface Props {
  /**
   * 指定标签页标题。
   */
  title: React.ReactNode;
  /**
   * 指定标签页内容。
   */
  children: React.ReactNode;

  /**
   * 设置为 `true` 则禁用标签。默认为 `false`。
   */
  disabled?: boolean;

  /**
   * 指定标签id
   */
  id?: string;

  /**
   * 默认情况下，只有当前标签的内容会渲染到 DOM 中。设置为 `true`，则组件初始化时立即渲染标签面板内容到 DOM 中。
   */
  forceRenderTabPanel?: boolean;
}

/**
 * 标签页组件
 *
 * @param {Props} props
 * @returns
 */
function Tab({ children, title, disabled, id, forceRenderTabPanel }: Props) {
  const isInTabHeader = useInTabHeader();
  const isInTabContent = useInTabContent();

  if (isInTabHeader) {
    return <TabHeaderItem title={title} disabled={disabled} id={id} />;
  }

  if (isInTabContent) {
    return (
      <TabPanel tabId={id} forceRenderContent={forceRenderTabPanel}>
        {children}
      </TabPanel>
    );
  }

  return null;
}

export default Tab;
