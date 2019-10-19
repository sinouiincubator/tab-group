import styled, { css } from 'styled-components';

interface Props {
  borderless?: boolean;
}

const borderCss = css`
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

const TabHeaderWrapper = styled.div<Props>`
  display: flex;
  overflow: hidden;
  flex-shrink: 0;
  font-size: 1rem;
  color: ${(props) => props.theme.palette.text.primary};
  white-space: nowrap;
  ${(props) => !props.borderless && borderCss}

  .sinoui-tab-label-container {
    display: flex;
    flex: 1;
    overflow: hidden;
    z-index: 1;
  }

  .sinoui-tab-list {
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
  }

  .sinoui-tab-header-extra-content {
    line-height: 48px;
  }
`;

export default TabHeaderWrapper;
