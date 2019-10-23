function mockTabListContext(selectedIndex = 0) {
  const register = jest.fn();
  const unregister = jest.fn();
  const getTabs = jest.fn();
  const getTabProps = jest.fn().mockResolvedValue({ disabled: false });

  getTabs.mockReturnValue(['tab-0', 'tab-1', 'tab-2', 'tab-3']);

  const context = { register, unregister, selectedIndex, getTabs, getTabProps };

  return context;
}

export default mockTabListContext;
