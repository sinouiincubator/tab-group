(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./docs/apis/TabPanel.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=n("./node_modules/docz/dist/index.esm.js"),o=n("./src/components/tab-panel/TabPanel.tsx"),c={},i="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)(i,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"tabpanel"},"TabPanel"),Object(s.b)(r.d,{of:o.a,mdxType:"Props"}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\apis\\TabPanel.mdx"}}),b.isMDXComponent=!0},"./src/components/TabContentContext.ts":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),s=n.n(a).a.createContext(null);t.a=s,"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabContentContext",filename:"src\\components\\TabContentContext.ts"}})},"./src/components/TabListContext.ts":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),s=n.n(a);"undefined"!==typeof TabProps&&TabProps&&TabProps===Object(TabProps)&&Object.isExtensible(TabProps)&&Object.defineProperty(TabProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabProps",filename:"src\\components\\TabListContext.ts"}}),"undefined"!==typeof TabListContextState&&TabListContextState&&TabListContextState===Object(TabListContextState)&&Object.isExtensible(TabListContextState)&&Object.defineProperty(TabListContextState,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabListContextState",filename:"src\\components\\TabListContext.ts"}});var r=s.a.createContext(null);t.a=r,"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabListContext",filename:"src\\components\\TabListContext.ts"}})},"./src/components/TabPanelContext.ts":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),s=n.n(a).a.createContext("");t.a=s,"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabPanelContext",filename:"src\\components\\TabPanelContext.ts"}})},"./src/components/commons/useTabRegister.ts":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),s=n("./src/helpers/useRefValue.ts"),r=n("./src/components/TabListContext.ts"),o=n("./src/helpers/uuid.ts");function c(){return Object(a.useMemo)(o.a,[])}var i=c;function b(e){var t=Object(a.useContext)(r.a),n=i(),o=t?t.register(n,e||{}):-1,c=Object(s.a)(t?t.unregister:void 0);return Object(a.useEffect)((function(){var e=c.current;if(e)return function(){return e(n)}}),[n,c]),[n,o]}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTabId",filename:"src\\components\\commons\\useTabId.ts"}});t.a=b;b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTabRegister",filename:"src\\components\\commons\\useTabRegister.ts"}})},"./src/components/tab-panel/TabPanel.tsx":function(e,t,n){"use strict";var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),o=n.n(r),c=n("./node_modules/classnames/index.js"),i=n.n(c),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),u=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function l(){var e=Object(b.a)(["\n  width: 100%;\n  flex-shrink: 0;\n  overflow: auto;\n\n  ",";\n"]);return l=function(){return e},e}function m(){var e=Object(b.a)(["\n  height: 0px;\n"]);return m=function(){return e},e}var d=Object(u.css)(m()),f=u.default.div(l(),(function(e){return!e.active&&d})),p=f;"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabPanelWrapper",filename:"src\\components\\tab-panel\\TabPanelWrapper.tsx"}});var j=n("./src/components/TabListContext.ts"),x=n("./src/components/commons/useTabRegister.ts"),O=n("./src/components/TabContentContext.ts"),T=n("./src/components/TabPanelContext.ts");function v(e){var t=e.children,n=e.className,c=e.forceRenderContent,b=e.cacheable,u=Object(s.a)(e,["children","className","forceRenderContent","cacheable"]),l=Object(x.a)(),m=Object(a.a)(l,2),d=m[0],f=m[1],v=function(e){var t=Object(r.useContext)(j.a);return e===(t?t.selectedIndex:0)}(f),_=function(e,t){var n=Object(r.useRef)(!1),a=t||e&&n.current;return Object(r.useEffect)((function(){t&&e&&(n.current=!0)})),a}(function(e){var t=Object(r.useContext)(O.a);return"boolean"===typeof e?e:!t||"boolean"!==typeof t.cacheable||t.cacheable}(b),v),P=function(e){var t=Object(r.useContext)(O.a);return"boolean"===typeof e?e:!!t&&t.forceRenderTabPanel}(c),C=function(e,t){var n=Object(r.useRef)(t),a=e?t:n.current;return Object(r.useEffect)((function(){e&&(n.current=t)})),a}(v,t);return-1===f?null:o.a.createElement(T.a.Provider,{value:d},o.a.createElement(p,Object.assign({"data-testid":"tab-panel-".concat(f),role:"tabpanel","aria-hidden":!v,"aria-labelledby":e.tabId,id:d},u,{className:i()("sinoui-tab-panel",{"sinoui-tab-panel--active":v},n),active:v}),_||P?C:null))}n.d(t,"a",(function(){return v})),v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabPanel",filename:"src\\components\\tab-panel\\TabPanel.tsx"}})},"./src/helpers/useRefValue.ts":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js");function s(e){var t=Object(a.useRef)(e);return t.current=e,t}t.a=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useRefValue",filename:"src\\helpers\\useRefValue.ts"}})},"./src/helpers/uuid.ts":function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=0;function s(){var e=a;return a+=1,"tab-".concat(e)}function r(){a=0}r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"reset",filename:"src\\helpers\\uuid.ts"}}),t.a=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"uuid",filename:"src\\helpers\\uuid.ts"}})}}]);
//# sourceMappingURL=docs-apis-tab-panel.720baaf5c99aa6027f52.js.map