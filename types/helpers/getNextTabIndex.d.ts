/**
 * 获取下一个可用的tab索引
 *
 * @param {number} selectedIndex
 * @param {string[]} tabs
 * @param {(tabId: string) => { disabled?: boolean }} getTabProps
 * @returns
 */
export default function getNextTabIndex(selectedIndex: number, tabs: string[], getTabProps: (tabId: string) => {
    disabled?: boolean;
}): number;
