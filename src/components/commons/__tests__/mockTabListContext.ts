function mockTabListContext(selectedIndex = 0) {
  const register = jest.fn();
  const unregister = jest.fn();
  const getTabs = jest.fn();
  const getTabProps = jest.fn();

  const context = { register, unregister, selectedIndex, getTabs, getTabProps };

  return context;
}

export default mockTabListContext;
