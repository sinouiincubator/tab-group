import styled, { css } from 'styled-components';

const hoverCss = css`
  &:hover {
    opacity: 1;
  }
`;

const activeCss = css`
  color: ${(props) => props.theme.palette.primary[500]};
  opacity: 1;
`;

const disabledCss = css`
  cursor: not-allowed;
  color: ${(props) => props.theme.palette.text.disabled};
`;

interface TabHeaderItemWrapperProps {
  disabled?: boolean;
  active?: boolean;
}

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
  color: ${(props) => props.theme.palette.text.primary};
  outline: none;
  user-select: none;

  letter-spacing: 1.25px;
  font-weight: 500;

  position: relative;

  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  & > .sinoui-tab-label-content {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
  }

  ${(props) => !props.disabled && hoverCss};
  ${(props) => props.disabled && disabledCss};
  ${(props) => props.active && activeCss};
`;

export default TabHeaderItemWrapper;
