/// <reference types="react" />
/**
 * 同步指示条位置的hook
 *
 * @param inkBarRef 指示条元素引用
 * @param tabListRef 标签列表元素引用
 * @param selectedIndex 当前选中的索引
 */
declare function useInkbarPositionSync(inkBarRef: React.RefObject<HTMLDivElement>, tabListRef: React.RefObject<HTMLDivElement>, selectedIndex: number): void;
export default useInkbarPositionSync;
