# Tabs 组件

## API 设计

API1：（渲染出头部 + 内容区域）

```tsx
import React from 'react';
import TabGroup, { Tab } from '@sinouiincubator/tab-group';

function Demo() {
  return (
    <TabGroup>
      <Tab title="标签1">标签内容1</Tab>
      <Tab title="标签2">标签内容2</Tab>
      {test && <Tab title="标签3">标签内容3</Tab>}
      <Tab title="标签4">标签内容4</Tab>
    </TabGroup>
  );
}
```

API2：（只渲染出头部信息条）

```tsx
import React from 'react';
import { TabHeader, TabHeaderItem } from '@sinouiincubator/tab-group';

function Demo() {
  const [active, setActive] = React.useState(0);
  return (
    <TabHeader value={active} onChange={setActive}>
      <TabHeaderItem title="标签1" id={0} />
      <TabHeaderItem title="标签2" id={1} />
      <Test>
        <TabHeaderItem title="标签3" id={2} />
      </Test>
      <TabHeaderItem title="标签4" id={3} />
    </TabHeader>
  );
}
```

API3：（只渲染出内容）

```tsx
import { TabContent, TabPanel } from '@sinouiincubator/tab-group';

function Demo() {
  return (
    <TabContent active={0}>
      <TabPanel id={0}>内容1</TabPanel>
      <TabPanel id={1}>内容2</TabPanel>
      <TabPanel id={2}>内容3</TabPanel>
    </TabContent>
  );
}
```

## TabContent 和 TabPanel

要点：

- 切换时动画
- 延迟渲染：不可见的内容先不渲染
- 缓存渲染：做过渲染后，切换时不删除已渲染的内容

## TabHeader

要点：

- 支持超出部分出现滚动效果
