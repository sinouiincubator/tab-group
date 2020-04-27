/// <reference types="react" />
/// <reference types="@emotion/core" />
/// <reference types="theme-ui" />
/**
 * 使用同步的“变量”
 */
declare function useRefValue<T>(value: T): import("react").MutableRefObject<T>;
export default useRefValue;
