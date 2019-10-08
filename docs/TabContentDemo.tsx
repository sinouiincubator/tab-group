import React, { useState, useCallback } from 'react';
import Button from 'sinoui-components/Button';
import TabContent from '../src/components/TabContent';
import TabPanel from '../src/components/TabPanel';

export default function TabContentDemo() {
  const [active, setActive] = useState(0);
  const handlePrevClick = useCallback(() => {
    if (active !== 0) {
      setActive(active - 1);
    } else {
      setActive(0);
    }
  }, [active]);

  const handleNextClick = useCallback(() => {
    if (active !== 2) {
      setActive(active + 1);
    } else {
      setActive(2);
    }
  }, [active]);

  return (
    <div>
      <TabContent active={active}>
        <TabPanel id={0} style={{ background: 'red' }}>
          内容1
        </TabPanel>
        <TabPanel id={1} style={{ background: 'yellow' }}>
          内容2
        </TabPanel>
        <TabPanel id={2} style={{ background: 'blue' }}>
          内容3
        </TabPanel>
      </TabContent>
      <Button onClick={handlePrevClick}>上一页</Button>
      <Button onClick={handleNextClick}>下一页</Button>
    </div>
  );
}
