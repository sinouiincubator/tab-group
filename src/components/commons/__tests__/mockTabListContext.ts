function mockTabListContext(selectedIndex = 0) {
  const register = jest.fn();
  const unregister = jest.fn();
  const getTabsCount = jest.fn();

  const context = { register, unregister, selectedIndex, getTabsCount };

  return context;
}

export default mockTabListContext;
