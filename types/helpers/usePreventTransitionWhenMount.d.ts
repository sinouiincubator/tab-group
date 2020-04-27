/// <reference types="react" />
/**
 * 在组件初次渲染时阻止 transition 动画
 */
declare function usePreventTransitionWhenMount<T extends HTMLElement>(elementRef: React.RefObject<T>): void;
export default usePreventTransitionWhenMount;
