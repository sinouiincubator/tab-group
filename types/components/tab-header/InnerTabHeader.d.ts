import React from 'react';
import { TabListContextState } from '../TabListContext';
interface Props {
    children: React.ReactNode;
    /**
     * 在标签右侧添加附加内容。
     */
    extraContent?: React.ReactNode;
    /**
     * 设置不显示底部线条。默认为 `false`。
     */
    borderless?: boolean;
    /**
     * 标签列表上下文状态
     */
    tabListContextState: TabListContextState;
    /**
     * 指示条颜色
     */
    inkBarColor?: string;
    /**
     * 全宽模式
     */
    fullWidth?: boolean;
}
declare function InnerTabHeader({ children, extraContent, borderless, tabListContextState, inkBarColor, fullWidth, ...rest }: Props): JSX.Element;
export default InnerTabHeader;
