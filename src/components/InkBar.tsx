import styled, { css } from 'styled-components';

const topCss = css`
  top: 0;
`;

interface Props {
  top?: boolean;
}

/**
 * 选择指示器
 */
const InkBar = styled.div.attrs({
  className: 'sinoui-ink-bar',
})<Props>`
  position: absolute;
  bottom: 0;
  ${(props) => props.top && topCss};
  left: 0;
  transition: ${(props) =>
    props.theme.transitions.create(['transform', 'width'])};
  height: 2px;
  background-color: ${(props) => props.theme.palette.primary[500]};
`;

export default InkBar;
