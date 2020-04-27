/**
 * 获取上一个可用标签页的索引
 *
 * @param {number} selectedIndex
 * @param {string[]} tabs
 * @param {(tabId: string) => { disabled?: boolean }} getTabProps
 * @returns
 */
export default function getPrevTabIndex(selectedIndex: number, tabs: string[], getTabProps: (tabId: string) => {
    disabled?: boolean;
}): number;
