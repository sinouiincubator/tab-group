declare const easeInOutAnimate: (start: number, end: number, duration: number, update: (value: number) => void) => () => false | void;
export default easeInOutAnimate;
