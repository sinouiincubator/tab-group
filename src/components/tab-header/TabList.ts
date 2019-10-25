import styled, { css } from 'styled-components';

interface Props {
  /**
   * 全宽模式
   */
  fullWidth?: boolean;
}

const fullWidthCss = css`
  & > * {
    flex: 1;
  }
`;

const TabList = styled.div<Props>`
  flex: 1;
  position: relative;
  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);
  display: flex;

  /* 隐藏滚动条 */
  &::-webkit-scrollbar {
    display: none; /* chrome, safari, opera */
  }
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+, edge */
  overflow: -moz-scrollbars-none; /* old firefox */

  overflow-x: scroll;

  ${(props) => props.fullWidth && fullWidthCss};
`;

export default TabList;
