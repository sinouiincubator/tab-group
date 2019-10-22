import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { getColorFromTheme } from 'sinoui-components/utils/colors';

const topCss = css`
  top: 0;
`;

interface Props {
  top?: boolean;
  color?: string;
}

/**
 * 选择指示器
 */
const InkBar = styled.div.attrs((props) => ({
  className: classNames('sinoui-ink-bar', props.className),
}))<Props>`
  position: absolute;
  bottom: 0;
  ${(props) => props.top && topCss};
  left: 0;
  transition: ${(props) =>
    props.theme.transitions.create(['transform', 'width'])};
  height: 2px;
  background-color: ${(props) =>
    getColorFromTheme(props, props.theme.palette.primary[500])};
`;

export default InkBar;
