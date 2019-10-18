(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docs/apis/TabGroup.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),s=n("./node_modules/docz/dist/index.esm.js"),o=n("./src/components/TabGroup.tsx"),c={},i="wrapper";function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(i,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"tabgroup"},"TabGroup"),Object(r.b)(s.d,{of:o.a,mdxType:"Props"}))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\apis\\TabGroup.mdx"}}),l.isMDXComponent=!0},"./src/components/TabContentContext.ts":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a).a.createContext(null);t.a=r,"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabContentContext",filename:"src\\components\\TabContentContext.ts"}})},"./src/components/TabGroup.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=n("./node_modules/react/index.js"),o=n.n(s),c=n("./node_modules/classnames/index.js"),i=n.n(c),l=n("./src/helpers/useRefValue.ts"),u=n("./src/components/tab-header/index.ts"),b=n("./src/components/tab-content/index.ts");function d(e){var t=e.className,n=e.onSelect,a=e.selectedIndex,s=void 0===a?0:a,c=e.children,l=e.dense,d=e.forceRenderTabPanel,m=e.cacheable,f=e.animateHeight,p=e.tabHeaderExtraContent,j=e.borderless,x=Object(r.a)(e,["className","onSelect","selectedIndex","children","dense","forceRenderTabPanel","cacheable","animateHeight","tabHeaderExtraContent","borderless"]);return o.a.createElement("div",Object.assign({className:i()("sinoui-tab-group",t)},x),o.a.createElement(u.a,{selectedIndex:s,dense:l,onSelect:n,extraContent:p,borderless:j},c),o.a.createElement(b.a,{selectedIndex:s,forceRenderTabPanel:d,cacheable:m,animateHeight:f},c))}function m(e){var t=e.defaultIndex,n=void 0===t?0:t,c=e.onSelect,i=Object(r.a)(e,["defaultIndex","onSelect"]),u=Object(s.useState)(n),b=Object(a.a)(u,2),m=b[0],f=b[1],p=Object(l.a)(c),j=Object(s.useCallback)((function(e,t,n){var a=p.current;!!a&&!1===a(e,t,n)||f(e)}),[p]);return o.a.createElement(d,Object.assign({},i,{onSelect:j,selectedIndex:m}))}function f(e){var t=e.selectedIndex,n=Object(r.a)(e,["selectedIndex"]);return Object(s.useRef)(void 0===t).current?o.a.createElement(m,n):o.a.createElement(d,Object.assign({selectedIndex:t},n))}t.a=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabGroup",filename:"src\\components\\TabGroup.tsx"}})},"./src/components/TabHeaderContext.ts":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a).a.createContext(null);t.a=r,"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabHeaderContext",filename:"src\\components\\TabHeaderContext.ts"}})},"./src/components/TabListContext.ts":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a);"undefined"!==typeof TabProps&&TabProps&&TabProps===Object(TabProps)&&Object.isExtensible(TabProps)&&Object.defineProperty(TabProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabProps",filename:"src\\components\\TabListContext.ts"}}),"undefined"!==typeof TabListContextState&&TabListContextState&&TabListContextState===Object(TabListContextState)&&Object.isExtensible(TabListContextState)&&Object.defineProperty(TabListContextState,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabListContextState",filename:"src\\components\\TabListContext.ts"}});var s=r.a.createContext(null);t.a=s,"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabListContext",filename:"src\\components\\TabListContext.ts"}})},"./src/components/commons/useTabList.ts":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/react/index.js");function s(e){var t=Object(r.useState)(1),n=Object(a.a)(t,2),s=n[0],o=n[1],c=Object(r.useRef)(!1),i=Object(r.useRef)([]),l=Object(r.useRef)([]),u=Object(r.useRef)({});l.current=[],c.current=!1,Object(r.useEffect)((function(){c.current=!0}));var b=Object(r.useCallback)((function(e,t){var n=l.current,a=n.indexOf(e);if(c.current&&-1===a)return o((function(e){return e+1})),-1;if(-1!==i.current.indexOf(e)||(i.current.push(e),u.current[e]=t),-1!==a)return a;var r=n.length;return n.push(e),r}),[]),d=Object(r.useCallback)((function(e){var t=l.current,n=i.current,a=t.indexOf(e),r=n.indexOf(e);-1!==r&&(n.splice(r,1),delete u.current[e]),-1!==a&&(t.splice(a,1),o((function(e){return e+1})))}),[]),m=Object(r.useCallback)((function(){return l.current}),[]),f=Object(r.useCallback)((function(e){return u.current[e]}),[]);return Object(r.useMemo)((function(){return{register:b,unregister:d,selectedIndex:e,renderCount:s,getTabs:m,getTabProps:f}}),[f,m,b,s,e,d])}t.a=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTabList",filename:"src\\components\\commons\\useTabList.ts"}})},"./src/components/tab-content/TabContent.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),s=n.n(r),o=n("./node_modules/classnames/index.js"),c=n.n(o),i=n("./src/components/TabContentContext.ts"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function b(){var e=Object(l.a)(["\n  overflow-x: hidden;\n\n  transition: height 0.5s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;\n"]);return b=function(){return e},e}var d=u.d.div(b()),m=d;function f(){var e=Object(l.a)(["\n  display: flex;\n  align-items: flex-start;\n  transition: transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s;\n  will-change: transform;\n\n  & > .sinoui-tab-panel-hidden {\n    height: 0px;\n  }\n"]);return f=function(){return e},e}"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabContentWrapper",filename:"src\\components\\tab-content\\TabContentWrapper.tsx"}});var p=u.d.div(f()),j=p;"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabPanelListWrapper",filename:"src\\components\\tab-content\\TabPanelListWrapper.tsx"}});var x=n("./src/components/commons/useTabList.ts"),O=n("./src/components/TabListContext.ts");function v(e){var t=e.className,n=e.selectedIndex,o=e.children,l=e.forceRenderTabPanel,u=e.cacheable,b=e.animateHeight,d=void 0!==b&&b,f=Object(a.a)(e,["className","selectedIndex","children","forceRenderTabPanel","cacheable","animateHeight"]),p=Object(x.a)(n),v=Object(r.useMemo)((function(){return{inTabContent:!0,forceRenderTabPanel:l,cacheable:u}}),[u,l]),h=Object(r.useMemo)((function(){return"translate3d(-".concat(100*n,"%, 0px, 0px)")}),[n]),T=Object(r.useRef)(null);return function(e,t,n,a){var s=Object(r.useRef)(t);Object(r.useEffect)((function(){var r=s.current,o=n.current;if(s.current=t,r!==t&&o&&e){var c=a.getTabs(),i=o.querySelector("#".concat(c[r])),l=o.querySelector("#".concat(c[t]));i.style.height="auto",l.style.height="";var u=i.getBoundingClientRect().height,b=l.getBoundingClientRect().height;o.style.height="".concat(u,"px"),o.style.overflow="hidden";var d=!1,m=function(){d=!0,o.style.transition="",o.style.height="",o.style.overflow="",i.style.height=""},f=requestAnimationFrame((function(){o.style.height="".concat(b,"px")})),p=setTimeout(m,500);return function(){cancelAnimationFrame(f),clearTimeout(p),d||m()}}}),[e,t,n,a])}(d,n,T,p),s.a.createElement(O.a.Provider,{value:p},s.a.createElement(i.a.Provider,{value:v},s.a.createElement(m,Object.assign({className:c()("sinoui-tab-content",t)},f,{ref:T}),s.a.createElement(j,{style:{transform:h},className:"sinoui-tab-panel-list"},o))))}n.d(t,"a",(function(){return v})),"undefined"!==typeof Props&&Props&&Props===Object(Props)&&Object.isExtensible(Props)&&Object.defineProperty(Props,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Props",filename:"src\\components\\tab-content\\TabContent.tsx"}}),v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabContent",filename:"src\\components\\tab-content\\TabContent.tsx"}})},"./src/components/tab-content/index.ts":function(e,t,n){"use strict";var a=n("./src/components/tab-content/TabContent.tsx");t.a=a.a,"undefined"!==typeof a.a&&a.a&&a.a===Object(a.a)&&Object.isExtensible(a.a)&&Object.defineProperty(a.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabContent",filename:"src\\components\\tab-content\\index.ts"}})},"./src/components/tab-header/TabHeader.tsx":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a),s=n("./src/components/TabHeaderContext.ts"),o=n("./src/helpers/useRefValue.ts");function c(e){Object(a.useEffect)((function(){var t=e.current;if(t){var n=t.style.transition;t.style.transition="none";var a=requestAnimationFrame((function(){t.style.transition=n}));return function(){return cancelAnimationFrame(a)}}}),[e])}var i=c;c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"usePreventTransitionWhenMount",filename:"src\\helpers\\usePreventTransitionWhenMount.ts"}});var l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function b(){var e=Object(l.a)(["\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  font-size: 1rem;\n  color: ",";\n\n  ","\n\n  .sinoui-tab-label-container {\n    display: flex;\n    flex-grow: 1;\n    overflow: hidden;\n    z-index: 1;\n  }\n\n  .sinoui-tab-list {\n    flex-grow: 1;\n    position: relative;\n    transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  }\n\n  .sinoui-tab-labels {\n    display: flex;\n    position: relative;\n  }\n\n  .sinoui-tab-header-extra-content {\n    line-height: 48px;\n  }\n"]);return b=function(){return e},e}function d(){var e=Object(l.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n"]);return d=function(){return e},e}var m=Object(u.c)(d()),f=u.d.div(b(),(function(e){return e.theme.palette.text.primary}),(function(e){return!e.borderless&&m})),p=f;function j(){var e=Object(l.a)(["\n  position: absolute;\n  bottom: 0;\n  ",";\n  left: 0;\n  transition: ",";\n  height: 2px;\n  background-color: ",";\n"]);return j=function(){return e},e}function x(){var e=Object(l.a)(["\n  top: 0;\n"]);return x=function(){return e},e}"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabHeaderWrapper",filename:"src\\components\\tab-header\\TabHeaderWrapper.tsx"}});var O=Object(u.c)(x()),v=u.d.div.attrs({className:"sinoui-ink-bar"})(j(),(function(e){return e.top&&O}),(function(e){return e.theme.transitions.create(["transform","width"])}),(function(e){return e.theme.palette.primary[500]})),h=v;function T(e){var t=e.children,n=e.extraContent,s=e.borderless,o=Object(a.useRef)(null),c=Object(a.useRef)(null);return i(c),Object(a.useEffect)((function(){var e=c.current,t=o.current;if(e&&t){var n=t.querySelector(".sinoui-tab-label-active");if(n){var a=n.getBoundingClientRect(),r=a.width,s=a.left,i=t.getBoundingClientRect().left;e.style.width="".concat(r,"px"),e.style.transform="translate3d(".concat(s-i,"px, 0px, 0px)")}}})),r.a.createElement(p,{className:"sinoui-tab-header",role:"tablist",borderless:s},r.a.createElement("div",{className:"sinoui-tab-label-container"},r.a.createElement("div",{className:"sinoui-tab-list",ref:o},r.a.createElement("div",{className:"sinoui-tab-labels"},t),r.a.createElement(h,{ref:c,"data-testid":"inkbar"})),n?r.a.createElement("div",{className:"sinoui-tab-header-extra-content"},n):null))}"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InkBar",filename:"src\\components\\InkBar.tsx"}});var _=T;T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InnerTabHeader",filename:"src\\components\\tab-header\\InnerTabHeader.tsx"}});var g=n("./src/components/TabListContext.ts"),y=n("./src/components/commons/useTabList.ts");function C(e){var t=e.children,n=e.dense,c=e.selectedIndex,i=void 0===c?0:c,l=e.onSelect,u=e.extraContent,b=e.borderless,d=Object(y.a)(i),m=Object(o.a)(l),f=Object(a.useMemo)((function(){return{dense:n,onSelect:function(e,t){m.current&&m.current(e,i,t)}}}),[n,m,i]);return r.a.createElement(g.a.Provider,{value:d},r.a.createElement(s.a.Provider,{value:f},r.a.createElement(_,{extraContent:u,borderless:b},t)))}t.a=C;C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabHeader",filename:"src\\components\\tab-header\\TabHeader.tsx"}})},"./src/components/tab-header/index.ts":function(e,t,n){"use strict";var a=n("./src/components/tab-header/TabHeader.tsx");t.a=a.a,"undefined"!==typeof a.a&&a.a&&a.a===Object(a.a)&&Object.isExtensible(a.a)&&Object.defineProperty(a.a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabHeader",filename:"src\\components\\tab-header\\index.ts"}})},"./src/helpers/useRefValue.ts":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js");function r(e){var t=Object(a.useRef)(e);return t.current=e,t}t.a=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useRefValue",filename:"src\\helpers\\useRefValue.ts"}})}}]);
//# sourceMappingURL=docs-apis-tab-group.23dfbcbe81a98a026090.js.map