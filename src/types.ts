/**
 * 标签选中事件回调函数类型
 */
export interface TabSelectCallback {
  /**
   * @param index 选中的标签页索引
   * @param lastIndex 之前选中的标签索引
   * @param event 触发标签切换的事件
   */
  (
    index: number,
    lastIndex: number,
    event: React.MouseEvent | React.KeyboardEvent,
  ): boolean | undefined | void;
}
