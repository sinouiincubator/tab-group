import styled, { css } from 'styled-components';
import { getColorFromTheme } from 'sinoui-components/utils/colors';
import { Theme } from 'sinoui-components/styles';

interface TabHeaderItemWrapperProps {
  disabled?: boolean;
  active?: boolean;
  color?: string;
  theme: Theme;
}

const getTextColor = (props: TabHeaderItemWrapperProps) => {
  const { disabled, active, color } = props;

  if (color === 'inherit') {
    return color;
  }
  if (active) {
    return getColorFromTheme(props, props.theme.palette.primary[500]);
  }

  if (disabled) {
    return props.theme.palette.text.disabled;
  }

  return props.theme.palette.text.primary;
};

const hoverCss = css`
  &:hover {
    opacity: 1;
  }
`;

const activeCss = css`
  opacity: 1;
`;

const disabledCss = css`
  cursor: not-allowed;
`;

const TabHeaderItemWrapper = styled.div<TabHeaderItemWrapperProps>`
  height: 48px;
  padding: 0 24px;
  cursor: pointer;
  box-sizing: border-box;
  opacity: 0.6;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap; /* 不换行显示 */
  color: ${(props) => getTextColor(props)};
  outline: none;
  user-select: none;
  flex-shrink: 0;
  letter-spacing: 1.25px;
  font-weight: 500;
  position: relative;
  white-space: nowrap;
  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  ${(props) => !props.disabled && hoverCss};
  ${(props) => props.disabled && disabledCss};
  ${(props) => props.active && activeCss};
`;

export default TabHeaderItemWrapper;
