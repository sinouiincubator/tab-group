import { animate } from '@sinoui/utils';
import easeInOut from './easeInOut';

const easeInOutAnimate = (
  start: number,
  end: number,
  duration: number,
  update: (value: number) => void,
) => animate(start, end, duration, update, easeInOut);

export default easeInOutAnimate;
