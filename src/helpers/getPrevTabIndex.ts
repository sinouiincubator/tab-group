/**
 * 获取上一个可用标签页的索引
 *
 * @param {number} selectedIndex
 * @param {string[]} tabs
 * @param {(tabId: string) => { disabled?: boolean }} getTabProps
 * @returns
 */
export default function getPrevTabIndex(
  selectedIndex: number,
  tabs: string[],
  getTabProps: (tabId: string) => { disabled?: boolean },
): number {
  let i = selectedIndex - 1;
  for (; i > 0; i -= 1) {
    const tabId = tabs[i];
    const tabDisabled = getTabProps(tabId).disabled;
    if (!tabDisabled) {
      return i;
    }
  }

  if (selectedIndex === 0) {
    return getPrevTabIndex(tabs.length, tabs, getTabProps);
  }

  return 0;
}
