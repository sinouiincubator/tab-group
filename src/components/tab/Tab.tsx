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
   * 指定标签不可用。默认为 `false`。
   */
  disabled?: boolean;

  /**
   * 指定标签id
   */
  id?: string;
}

/**
 * 标签页组件
 *
 * @param {Props} props
 * @returns
 */
function Tab({ children, title, disabled, id }: Props) {
  const isInTabHeader = useInTabHeader();
  const isInTabContent = useInTabContent();

  if (isInTabHeader) {
    return <TabHeaderItem title={title} disabled={disabled} id={id} />;
  }

  if (isInTabContent) {
    return <TabPanel tabId={id}>{children}</TabPanel>;
  }

  return null;
}

export default Tab;
