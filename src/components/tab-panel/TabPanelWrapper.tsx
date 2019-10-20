import styled, { css } from 'styled-components';

const hiddenCss = css`
  height: 0px;
`;

const TabPanelWrapper = styled.div`
  width: 100%;
  flex-shrink: 0;
  overflow: auto;

  ${(props) => props.hidden && hiddenCss};
`;

export default TabPanelWrapper;
