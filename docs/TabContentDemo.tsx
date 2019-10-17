import React, { useState, useCallback } from 'react';
import Button from 'sinoui-components/Button';
import { TabContent, TabPanel } from '../src';

export default function TabContentDemo() {
  const [active, setActive] = useState(0);
  const handlePrevClick = useCallback(() => {
    if (active === 0) {
      return;
    }

    setActive(active - 1);
  }, [active]);

  const handleNextClick = useCallback(() => {
    if (active === 2) {
      return;
    }
    setActive(active + 1);
  }, [active]);

  return (
    <>
      <TabContent selectedIndex={active}>
        <TabPanel>内容1</TabPanel>
        <TabPanel>内容2</TabPanel>
        <TabPanel>内容3</TabPanel>
      </TabContent>
      <Button onClick={handlePrevClick}>上一页</Button>
      <Button onClick={handleNextClick}>下一页</Button>
    </>
  );
}