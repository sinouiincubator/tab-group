import React from 'react';
interface TabPanelProps {
    children: React.ReactNode;
    /**
     * 指定自定义样式名
     */
    className?: string;
    /**
     * 指定自定义样式
     */
    style?: React.CSSProperties;
    /**
     * 指定标签 id
     */
    tabId?: string;
    /**
     * 默认情况下，只有当前标签内容会渲染到 DOM 中。设置为 `true`，会在组件初始化时立即将标签内容渲染到 DOM 中。
     */
    forceRenderContent?: boolean;
    /**
     * 设置启用标签面板渲染到 DOM 的内容缓存。默认为 `true`。
     */
    cacheable?: boolean;
}
/**
 * 标签页面板组件
 */
export default function TabPanel(props: TabPanelProps): JSX.Element | null;
export {};
