import React from 'react';
export interface Props {
    children?: React.ReactNode;
    /**
     * 指定自定义样式名
     */
    className?: string;
    /**
     * 指定自定义样式
     */
    style?: React.CSSProperties;
    /**
     * 设置当前选中的标签页。这是一个从 `0` 开始的索引，第一个标签页的索引为 `0`，第二个标签页的索引为 `1`，……
     */
    selectedIndex: number;
    /**
     * 默认情况下只有当前标签面板会渲染到 DOM 中（出于性能考量）。如果设置为 `true`，则所有的标签面板从一开始就会立即渲染到 DOM 中。默认为 `false`。
     */
    forceRenderTabPanel?: boolean;
    /**
     * 设置启动标签面板渲染到 DOM 的缓存特性。当`forceRenderTabPanel` 为 `false` 此配置才有效。默认为 `true`。如果设置为 `false`，则不会缓存标签面板的渲染，标签切换后，销毁该标签面板的DOM。
     */
    cacheable?: boolean;
    /**
     * 设置启用标签面板切换时内容高度过渡动画。默认为 `false`，不启用。设置为 `true`，启用高度过渡动画，但是可能会影响性能。
     */
    animateHeight?: boolean;
    /**
     * 默认为 `true`。设置为 `false`，禁止内容切换时的过度动画。
     */
    animateTransitions?: boolean;
    /**
     * 每次标签页切换时调用的事件处理器。这个函数的 `index` 参数是新的选中标签页索引，`lastIndex` 参数是变更之前选中的标签页索引，`event` 参数是引起页签切换的事件，可能是 `keydown` 或者 `click` 事件。如果 `index` 和 `lastIndex` 相同时，表示用户在当前选中的标签页上点击。
     */
    onSelect?: (index: number, lastIndex: number, event: React.MouseEvent | React.KeyboardEvent) => boolean | undefined | void;
}
/**
 * 选项卡组件的内容组件
 */
export default function TabContent(props: Props): JSX.Element;
