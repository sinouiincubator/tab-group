import React from 'react';
interface Props {
    /**
     * 标签标题
     */
    title: React.ReactNode;
    /**
     * 指定自定义样式名
     */
    className?: string;
    /**
     * 指定自定义样式
     */
    style?: React.CSSProperties;
    /**
     * 设置为 `true`，则禁用标签。
     */
    disabled?: boolean;
    /**
     * 指定标签页id
     */
    id?: string;
}
/**
 * 头部选项卡项组件
 */
declare function TabHeaderItem({ title, className, style, disabled, id, ...rest }: Props): JSX.Element | null;
export default TabHeaderItem;
