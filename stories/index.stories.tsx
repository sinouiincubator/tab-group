/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@sinoui/theme';
import range from 'lodash/range';
import TabGroup, {
  Tab,
  TabHeader,
  TabHeaderItem,
  TabContent,
  TabPanel,
} from '../src';
import HideScrollbarDemo from './HideScrollbarDemo';

const TabbarDemo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={defaultTheme}>
      <TabHeader selectedIndex={selectedIndex} onSelect={setSelectedIndex}>
        <TabHeaderItem title="标签1" />
        <TabHeaderItem title="标签2" />
        <TabHeaderItem title="标签3" />
      </TabHeader>
    </ThemeProvider>
  );
};

const ScrollableTabsDemo = () => {
  const tabs = range(0, 20);

  return (
    <ThemeProvider theme={defaultTheme}>
      <TabGroup
        defaultIndex={18}
        tabHeaderExtraContent={<div>这是其他内容</div>}
      >
        {tabs.map((id) => (
          <Tab key={id} title={`标签${id}`}>
            标签内容{id}
          </Tab>
        ))}
      </TabGroup>
    </ThemeProvider>
  );
};

const TabContentDemo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <TabContent selectedIndex={selectedIndex}>
          <TabPanel>内容1</TabPanel>
          <TabPanel>内容2</TabPanel>
          <TabPanel>内容3</TabPanel>
        </TabContent>
        <button type="button" onClick={() => setSelectedIndex(0)}>
          标签1
        </button>
        <button type="button" onClick={() => setSelectedIndex(1)}>
          标签2
        </button>
        <button type="button" onClick={() => setSelectedIndex(2)}>
          标签3
        </button>
      </>
    </ThemeProvider>
  );
};

storiesOf('TabGroup', module)
  .add('简单示例', () => (
    <ThemeProvider theme={defaultTheme}>
      <TabGroup>
        <Tab title="标签1">标签内容1</Tab>
        <Tab title="标签2">标签内容2</Tab>
        <Tab title="标签3">标签内容3</Tab>
      </TabGroup>
    </ThemeProvider>
  ))
  .add('tabbar', () => <TabbarDemo />)
  .add('tabcontent', () => <TabContentDemo />)
  .add('HideScrollbarDemo', () => <HideScrollbarDemo />)
  .add('自动滚动的tabgroup', () => <ScrollableTabsDemo />);
