import React, { useMemo } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import TabContentContext from './TabContentContext';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  active: number;
}

const Container = styled.div`
  overflow-x: hidden;
`;

const TabContentWrapper = styled.div`
  display: flex;
  transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;
`;

export default function TabContent(props: Props) {
  const { className, active, children } = props;
  const context = useMemo(() => ({ active }), [active]);
  const transform = useMemo(() => `translate3d(-${100 * active}%, 0px, 0px)`, [
    active,
  ]);

  return (
    <TabContentContext.Provider value={context}>
      <Container>
        <TabContentWrapper
          className={classNames('sinoui-tab-content', className)}
          style={{ transform }}
        >
          {children}
        </TabContentWrapper>
      </Container>
    </TabContentContext.Provider>
  );
}
