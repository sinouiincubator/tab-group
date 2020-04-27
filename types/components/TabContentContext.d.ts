import React from 'react';
interface TabContentContextState {
    inTabContent: boolean;
    /**
     * 是否立即渲染所有的标签面板到 DOM 中。
     */
    forceRenderTabPanel?: boolean;
    /**
     * 设置启动标签面板渲染到 DOM 的缓存特性。
     */
    cacheable?: boolean;
    /**
     * 变更当前选项卡
     */
    onSelect: (tabIndex: number, event: React.MouseEvent | React.KeyboardEvent) => void;
}
/**
 * 标签页内容上下文
 */
declare const TabContentContext: React.Context<TabContentContextState | null>;
export default TabContentContext;
