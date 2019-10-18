/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'sinoui-components/styles/defaultTheme';
import TabGroup, {
  Tab,
  TabHeader,
  TabHeaderItem,
  TabContent,
  TabPanel,
} from '../src';

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
  .add('tabcontent', () => <TabContentDemo />);
