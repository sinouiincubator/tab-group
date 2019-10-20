/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-cond-assign */

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
function easeInOut(
  elapsed: number,
  initialValue: number,
  amountOfChange: number,
  duration: number,
): number {
  if ((elapsed /= duration / 2) < 1) {
    return (amountOfChange / 2) * elapsed * elapsed * elapsed + initialValue;
  }
  return (
    (amountOfChange / 2) * ((elapsed -= 2) * elapsed * elapsed + 2) +
    initialValue
  );
}

export default easeInOut;
