import React from 'react';
import styled from 'styled-components';
import { useRipple } from '@sinoui/ripple/build';

const TabHeaderScrollButtonWrapper = styled.div`
  width: 40px;
  height: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  font-size: 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.palette.text.primary};
`;

/**
 * 标签条上的滚动按钮
 */
function TabHeaderScrollButton(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & { disabled?: boolean },
) {
  const { disabled, children, ...rest } = props;
  const ref = useRipple<HTMLDivElement>(undefined, disabled);
  return (
    <TabHeaderScrollButtonWrapper
      {...rest}
      ref={ref}
      className="sinoui-tab-header-scroll-button"
      aria-disabled={disabled}
    >
      {disabled ? null : children}
    </TabHeaderScrollButtonWrapper>
  );
}

export default TabHeaderScrollButton;
