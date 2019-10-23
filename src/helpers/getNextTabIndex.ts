/**
 * 获取下一个可用的tab索引
 *
 * @param {number} selectedIndex
 * @param {string[]} tabs
 * @param {(tabId: string) => { disabled?: boolean }} getTabProps
 * @returns
 */
export default function getNextTabIndex(
  selectedIndex: number,
  tabs: string[],
  getTabProps: (tabId: string) => { disabled?: boolean },
): number {
  let i = selectedIndex + 1;
  for (; i < tabs.length; i += 1) {
    const tabId = tabs[i];
    const tabDisabled = getTabProps(tabId).disabled;
    if (!tabDisabled) {
      return i;
    }
  }

  if (i === tabs.length) {
    return getNextTabIndex(-1, tabs, getTabProps);
  }

  return 0;
}
