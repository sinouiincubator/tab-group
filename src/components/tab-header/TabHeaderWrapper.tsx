import styled, { css } from 'styled-components';

interface Props {
  borderless?: boolean;
}

const borderCss = css`
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;

const TabHeaderWrapper = styled.div<Props>`
  display: flex;
  overflow: hidden;
  flex-shrink: 0;
  font-size: 1rem;
  white-space: nowrap;
  align-items: stretch;
  ${(props) => !props.borderless && borderCss}
`;

export default TabHeaderWrapper;
