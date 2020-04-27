/**
 * useCallback() 的替代品
 *
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param fn 回调函数
 */
declare function useEventCallback<T extends Function>(fn: T): T;
export default useEventCallback;
