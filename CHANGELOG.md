# 版本变更说明

## v1.1.2 - 2019.10.25

- fix: 修复滚动按钮的图标位置不正确的缺陷

## v1.1.1 - 2019.10.25

- fix: 修复滚动按钮出现的时机不正确的缺陷 ( #9 )

## v1.1.0 - 2019.10.25

- feat: TabGroup 和 TabHeader 支持全宽模式 ( #8 )

## v1.0.1 - 2019.10.25

- fix: 修复引用此模块时 ts 类型报错的缺陷
- chore: 去掉 lodash, lodash-es 依赖 ( #6 )
- fix: 在 Android Chrome 中点击时出现高亮背景 ( #7 )

## v1.0.0 - 2019.10.23

- feat: 定制标签页文本和指示条颜色
- feat: TabGroup 可以直接与 TabHeader、 TabContent 组合使用
- feat: 支持页签切换按钮
- feat: 支持断点的主题定制
- refactor: debounce 替换

## v1.0.0-beta.1 - 2019.10.22

- chore: 升级 @sinoui/ripple@1.0.1

## v1.0.0-beta.0 - 2019.10.20

- feat: 标签条滚动动画
- feat: 响应性设计：在手机端不显示滚动按钮
- feat: 监听窗口大小变化，更新滚动状态和滚动位置
- feat: 滚动标签条内容，确保当前标签出现在视口

## v0.9.2 - 2019.10.20

- feat: 遵循 BEM，调整组件的 DOM 结构和 css class name
- docs: 添加定制样式的基础指南
- feat: 标签过多，自动出现滚动按钮

## v0.9.1 - 2019.10.18

- breakchange: `reset()` -> `resetIdCounter()`

## v0.9.0 - 2019.10.18

@sinouiincubator/tab-group 基础实现。 :tada: :tada::tada:

主要特性：

- TabGroup + Tab
- TabHeader + TabHeaderItem
- TabContent + TabPanel
- 高度动画
- 嵌套使用
- 可访问性
- 受控模式
- 非受控模式
- 标签切换控制
