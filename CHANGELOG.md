# 版本变更说明

## v2.0.3 - 2021.8.18

- improve: 采用正式版本的 @sinoui/core

## v2.0.2 - 2020.9.11

- fix: 修复发布包无 types 的缺陷

## v2.0.1 - 2020.4.27

- fix: 发布 tab-group 时不应带上除 dist 文件夹之外的文件夹

## v2.0.0 - 2020.4.27

- fix: 升级 @sinoui/theme
- fix: sinoui-components 库调整为引用 @sinoui/core
- fix: react-icons 库调整为引用 @sinoui/icons

### 破坏性变更

[详细介绍](https://github.com/sinoui/theme/blob/master/CHANGELOG.md#v100-beta1-2020224)

将 @sinoui/theme 库升级到最新的版本：

```shell
yarn add @sinoui/theme
```

## v1.1.5 - 2019.12.3

- fix: 修复全宽模式下文字垂直方向不居中的 bug

## v1.1.4 - 2019.11.8

- fix: 导航切换按钮在多次快速点击消失后，但是还是留下了 ripple 残影 ( #14 )
- fix: 在 TabContent 中使用 position: fixed，没有达到预期效果 ( #12 )

## v1.1.3 - 2019.11.1

- fix: 全宽模式在手机端或者有很多选项卡时出现滑动效果 ( #10 )
- fix: 导航按钮的鼠标样式不正确 ( #11 )

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
