import styled, { css } from 'styled-components';

const transitionCss = css`
  transition: left 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
`;

const TabPanelListWrapper = styled.div<{ animateTransitions: boolean }>`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${(props) => props.animateTransitions && transitionCss}
`;

export default TabPanelListWrapper;
