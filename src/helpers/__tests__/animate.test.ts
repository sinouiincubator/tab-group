import animate from '../animate';

jest.useFakeTimers();

const raf = window.requestAnimationFrame;
const cancelRaf = window.cancelAnimationFrame;
const { now } = Date;

beforeEach(() => {
  window.requestAnimationFrame = (callback: Function) => {
    return setTimeout(callback);
  };
  window.cancelAnimationFrame = (rafId: number) => {
    clearTimeout(rafId);
  };

  Date.now = jest.fn();
  (Date.now as jest.Mock).mockReturnValueOnce(0);
  (Date.now as jest.Mock).mockReturnValueOnce(16);
  (Date.now as jest.Mock).mockReturnValueOnce(32);
  (Date.now as jest.Mock).mockReturnValueOnce(48);
  (Date.now as jest.Mock).mockReturnValueOnce(64);
  (Date.now as jest.Mock).mockReturnValueOnce(80);
  (Date.now as jest.Mock).mockReturnValueOnce(96);
  (Date.now as jest.Mock).mockReturnValueOnce(112);
});

afterEach(() => {
  window.requestAnimationFrame = raf;
  window.cancelAnimationFrame = cancelRaf;
  Date.now = now;
});

it('执行动画', () => {
  const handleUpdate = jest.fn();

  animate(0, 100, 100, handleUpdate);

  jest.runAllTimers();

  expect(handleUpdate).toBeCalledTimes(7);
});

it('取消动画', () => {
  const handleUpdate = jest.fn();

  const cancel = animate(0, 100, 100, handleUpdate);

  cancel();

  jest.runAllTimers();

  expect(handleUpdate).toBeCalledTimes(1);
});
