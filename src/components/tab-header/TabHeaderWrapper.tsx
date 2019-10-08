import styled from 'styled-components';

const TabHeaderWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  .sinoui-tab-label-container {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
    z-index: 1;
  }

  .sinoui-tab-list {
    flex-grow: 1;
    position: relative;
    transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
  }

  .sinoui-tab-labels {
    display: flex;
    position: relative;
  }
`;

export default TabHeaderWrapper;
