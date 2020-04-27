import { TabProps } from '../TabListContext';
/**
 * 标签页列表状态管理
 */
declare function useTabList(selectedIndex: number): {
    register: (tabId: string, props: TabProps) => number;
    unregister: (tabId: string) => void;
    selectedIndex: number;
    renderCount: number;
    getTabs: () => string[];
    getTabProps: (tabId: string) => TabProps;
};
export default useTabList;
