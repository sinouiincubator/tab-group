import styled from 'styled-components';

const TabPanelListWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
  will-change: transform;

  & > .sinoui-tab-panel-hidden {
    height: 0px;
  }
`;

export default TabPanelListWrapper;
