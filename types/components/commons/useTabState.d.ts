/// <reference types="react" />
export interface TabState {
    /**
     * 是否是第一个标签页
     */
    isFirst: boolean;
    /**
     * 是否是最后一个标签页
     */
    isLast: boolean;
    /**
     * 跳转到上一页
     *
     * @param event 触发事件
     */
    prev(event?: React.MouseEvent): void;
    /**
     * 调整到下一页
     * @param event 触发事件
     */
    next(event?: React.MouseEvent): void;
}
/**
 * 使用标签页状态
 */
export default function useTabState(): TabState;
