let count = 0;

/**
 * 生成新的标签id
 */
function uuid() {
  const id = count;
  count += 1;
  return `tab-${id}`;
}

/**
 *  重置计数器
 */
export function reset() {
  count = 0;
}

export default uuid;
