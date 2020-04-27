/**
 * 加速进入减速退出的 js 缓动函数实现
 *
 * 摘自 [js-easing-functions](https://github.com/bameyrick/js-easing-functions)
 *
 * @param elapsed 当前时间
 * @param initialValue 初始值
 * @param amountOfChange 值变化的量
 * @param duration 时长
 */
declare function easeInOut(elapsed: number, initialValue: number, amountOfChange: number, duration: number): number;
export default easeInOut;
