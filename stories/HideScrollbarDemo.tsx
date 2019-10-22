/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import IconButton from 'sinoui-components/IconButton';
import SvgIcon from 'sinoui-components/SvgIcon';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { defaultTheme } from '@sinoui/theme';
import range from 'lodash/range';

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  flex: 1;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  height: 48px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  display: flex;
`;

const Item = styled.div`
  width: 100px;
  background: red;
  height: 48px;
  flex-shrink: 0;
`;

function HideScrollbarDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const next = useCallback(() => {
    const container = containerRef.current;

    if (container) {
      container.scrollLeft += 100;
    }
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Wrapper>
        <IconButton>
          <SvgIcon>
            <MdNavigateBefore />
          </SvgIcon>
        </IconButton>

        <Container ref={containerRef}>
          {range(0, 100).map((i) => (
            <Item>{i}</Item>
          ))}
        </Container>

        <IconButton onClick={next}>
          <SvgIcon>
            <MdNavigateNext />
          </SvgIcon>
        </IconButton>
      </Wrapper>
    </ThemeProvider>
  );
}

export default HideScrollbarDemo;
