/// <reference types="react" />
import { TabListContextState } from '../TabListContext';
/**
 * 使用滚动状态的hook
 * @param tabListRef 标签列表元素引用
 */
declare function useScrollState(tabListRef: React.RefObject<HTMLDivElement>, tabListContextState: TabListContextState): {
    showScrollButtons: boolean;
    isPrevDisabled: boolean;
    isNextDisabled: boolean;
    prev: () => void;
    next: () => void;
    onTabListScroll: {
        (...args: any[]): void;
        cancel(): void;
    };
};
export default useScrollState;
