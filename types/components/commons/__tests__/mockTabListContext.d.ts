/// <reference types="jest" />
declare function mockTabListContext(selectedIndex?: number): {
    register: jest.Mock<any, any>;
    unregister: jest.Mock<any, any>;
    selectedIndex: number;
    getTabs: jest.Mock<any, any>;
    getTabProps: jest.Mock<any, any>;
};
export default mockTabListContext;
