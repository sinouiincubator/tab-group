const NODE_ENV = (() => {
  try {
    return process.env.NODE_ENV;
  } catch (e) {
    return null;
  }
})();

export default NODE_ENV;
