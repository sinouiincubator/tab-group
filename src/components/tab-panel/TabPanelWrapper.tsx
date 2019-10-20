import styled, { css } from 'styled-components';

interface Props {
  active: boolean;
}

const hiddenCss = css`
  height: 0px;
`;

const TabPanelWrapper = styled.div<Props>`
  width: 100%;
  flex-shrink: 0;
  overflow: auto;

  ${(props) => !props.active && hiddenCss};
`;

export default TabPanelWrapper;
