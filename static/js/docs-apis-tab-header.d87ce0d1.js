(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./docs/apis/TabHeader.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),c=n("./src/components/tab-header/TabHeader.tsx"),s={},o="wrapper";function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(o,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"tabheader"},"TabHeader"),Object(a.b)(i.d,{of:c.a,mdxType:"Props"}))}l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs\\apis\\TabHeader.mdx"}}),l.isMDXComponent=!0},"./src/components/TabHeaderContext.ts":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n.n(r).a.createContext(null);t.a=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabHeaderContext",filename:"src\\components\\TabHeaderContext.ts"}})},"./src/components/TabListContext.ts":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),a=n.n(r);"undefined"!==typeof TabProps&&TabProps&&TabProps===Object(TabProps)&&Object.isExtensible(TabProps)&&Object.defineProperty(TabProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabProps",filename:"src\\components\\TabListContext.ts"}}),"undefined"!==typeof TabListContextState&&TabListContextState&&TabListContextState===Object(TabListContextState)&&Object.isExtensible(TabListContextState)&&Object.defineProperty(TabListContextState,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabListContextState",filename:"src\\components\\TabListContext.ts"}});var i=a.a.createContext(null);t.a=i,"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabListContext",filename:"src\\components\\TabListContext.ts"}})},"./src/components/commons/useTabList.ts":function(e,t,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/react/index.js");function i(e){var t=Object(a.useState)(1),n=Object(r.a)(t,2),i=n[0],c=n[1],s=Object(a.useRef)(!1),o=Object(a.useRef)([]),l=Object(a.useRef)([]),u=Object(a.useRef)({});l.current=[],s.current=!1,Object(a.useEffect)((function(){s.current=!0}));var b=Object(a.useCallback)((function(e,t){var n=l.current,r=n.indexOf(e);if(s.current&&-1===r)return c((function(e){return e+1})),-1;if(-1!==o.current.indexOf(e)||(o.current.push(e),u.current[e]=t),-1!==r)return r;var a=n.length;return n.push(e),a}),[]),f=Object(a.useCallback)((function(e){var t=l.current,n=o.current,r=t.indexOf(e),a=n.indexOf(e);-1!==a&&(n.splice(a,1),delete u.current[e]),-1!==r&&(t.splice(r,1),c((function(e){return e+1})))}),[]),d=Object(a.useCallback)((function(){return l.current}),[]),m=Object(a.useCallback)((function(e){return u.current[e]}),[]);return Object(a.useMemo)((function(){return{register:b,unregister:f,selectedIndex:e,renderCount:i,getTabs:d,getTabProps:m}}),[m,d,b,i,e,f])}t.a=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTabList",filename:"src\\components\\commons\\useTabList.ts"}})},"./src/components/tab-header/TabHeader.tsx":function(e,t,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/react/index.js"),i=n.n(a),c=n("./src/components/TabHeaderContext.ts"),s=n("./src/helpers/useRefValue.ts"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),l=n("./node_modules/styled-components/dist/styled-components.browser.esm.js");function u(){var e=Object(o.a)(["\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  font-size: 1rem;\n  white-space: nowrap;\n  align-items: stretch;\n  ","\n"]);return u=function(){return e},e}function b(){var e=Object(o.a)(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n"]);return b=function(){return e},e}var f=Object(l.css)(b()),d=l.default.div(u(),(function(e){return!e.borderless&&f})),m=d;"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabHeaderWrapper",filename:"src\\components\\tab-header\\TabHeaderWrapper.tsx"}});var j=n("./node_modules/classnames/index.js"),p=n.n(j),O=n("./node_modules/sinoui-components/utils/colors.js");function v(){var e=Object(o.a)(["\n  position: absolute;\n  bottom: 0;\n  ",";\n  left: 0;\n  transition: ",";\n  height: 2px;\n  background-color: ",";\n"]);return v=function(){return e},e}function x(){var e=Object(o.a)(["\n  top: 0;\n"]);return x=function(){return e},e}var _=Object(l.css)(x()),h=l.default.div.attrs((function(e){return{className:p()("sinoui-ink-bar",e.className)}}))(v(),(function(e){return e.top&&_}),(function(e){return e.theme.transitions.create(["transform","width"])}),(function(e){return Object(O.b)(e,e.theme.palette.primary[500])})),E=h;"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InkBar",filename:"src\\components\\InkBar.tsx"}});var y=n("./node_modules/@sinoui/ripple/dist/index.js"),C=n("./node_modules/styled-components-breakpoint/dist/esm/index.js");function g(){var e=Object(o.a)(["\n    display: block;\n  "]);return g=function(){return e},e}function T(){var e=Object(o.a)(["\n  width: 40px;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  font-size: 1.25rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ",";\n\n  display: none;\n  ","\n"]);return T=function(){return e},e}var P=l.default.div(T(),(function(e){return e.theme.palette.text.primary}),Object(C.a)("sm")(g()));function L(e){var t=e.disabled,n=e.children,a=Object(r.a)(e,["disabled","children"]),c=Object(y.useRipple)(void 0,t);return i.a.createElement(P,Object.assign({},a,{ref:c,className:"sinoui-tab-header-scroll-button","aria-disabled":t}),t?null:n)}var w=L;function S(){return i.a.createElement("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation",fill:"currentColor",width:"1em",height:"1em"},i.a.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}))}L&&L===Object(L)&&Object.isExtensible(L)&&Object.defineProperty(L,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabHeaderScrollButton",filename:"src\\components\\tab-header\\TabHeaderScrollButton.tsx"}});var k=S;function I(){return i.a.createElement("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation",fill:"currentColor",width:"1em",height:"1em"},i.a.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}))}S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"NextIcon",filename:"src\\components\\tab-header\\NextIcon.tsx"}});var H=I;function B(e){Object(a.useEffect)((function(){var t=e.current;if(t){var n=t.style.transition;t.style.transition="none";var r=requestAnimationFrame((function(){t.style.transition=n}));return function(){return cancelAnimationFrame(r)}}}),[e])}I&&I===Object(I)&&Object.isExtensible(I)&&Object.defineProperty(I,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PrevIcon",filename:"src\\components\\tab-header\\PrevIcon.tsx"}});var R=B;function W(e,t,n){R(e),Object(a.useEffect)((function(){var n=e.current,r=t.current;if(n&&r){var a=r.querySelector(".sinoui-tab--active");if(a){var i=a.getBoundingClientRect(),c=i.width,s=i.left,o=r.getBoundingClientRect().left,l=r.scrollLeft;n.style.width="".concat(c,"px"),n.style.transform="translate3d(".concat(s-o+l,"px, 0px, 0px)")}}}),[e,t,n])}B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"usePreventTransitionWhenMount",filename:"src\\helpers\\usePreventTransitionWhenMount.ts"}});var D=W;W&&W===Object(W)&&Object.isExtensible(W)&&Object.defineProperty(W,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useInkbarPositionSync",filename:"src\\components\\tab-header\\useInkbarPositionSync.ts"}});var M=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),N=n("./node_modules/@sinoui/utils/dist/index.js"),z=n("./src/constants.ts"),A="undefined"!==typeof window?a.useLayoutEffect:a.useEffect;function F(e){var t=Object(a.useRef)(e);return A((function(){t.current=e})),Object(a.useCallback)((function(){return t.current()}),[])}var q=F;function K(e,t,n,r){return(e/=r/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}F&&F===Object(F)&&Object.isExtensible(F)&&Object.defineProperty(F,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useEventCallback",filename:"src\\helpers\\useEventCallback.ts"}});var V=K;function Y(e,t,n,r){var a=Date.now(),i=t-e,c=-1;return function t(){var s=Date.now()-a,o=V(s,e,i,n);r(o),c=s<n?requestAnimationFrame(t):-1}(),function(){return-1!==c&&cancelAnimationFrame(c)}}K&&K===Object(K)&&Object.isExtensible(K)&&Object.defineProperty(K,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"easeInOut",filename:"src\\helpers\\easeInOut.ts"}});var X=Y;function J(e,t){var n=Object(a.useState)(!1),r=Object(M.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)(!0),o=Object(M.a)(s,2),l=o[0],u=o[1],b=Object(a.useState)(!1),f=Object(M.a)(b,2),d=f[0],m=f[1],j=Object(a.useCallback)((function(t){var n=e.current;if(n){var r=n.scrollLeft;X(r,r+t,300,(function(e){n.scrollLeft=e}))}}),[e]),p=Object(a.useCallback)((function(){var t=e.current;if(t){var n=t.scrollWidth,r=t.clientWidth,a=t.scrollLeft;c(n>r),u(a<1),m(n-r===a)}}),[e]),O=q((function(){var n=t.getTabs()[t.selectedIndex],r=document.querySelector("#".concat(n)),a=e.current;if(r&&a){var i=a.getBoundingClientRect(),c=r.getBoundingClientRect();c.left<i.left?j(c.left-i.left):c.right>i.right&&j(c.right-i.right)}}));Object(a.useEffect)((function(){p()}),[p]),Object(a.useEffect)((function(){O()}),[O,i,t.selectedIndex]),Object(a.useEffect)((function(){var e=Object(N.debounce)((function(){p(),O()}),z.b);return window.addEventListener("resize",e,!1),function(){e.cancel(),window.removeEventListener("resize",e,!1)}}),[O,p]);var v=Object(a.useCallback)((function(){var t=e.current;if(t){var n=t.clientWidth;j(-n)}}),[j,e]),x=Object(a.useCallback)((function(){var t=e.current;if(t){var n=t.clientWidth;j(n)}}),[j,e]),_=Object(a.useMemo)((function(){return Object(N.debounce)(p,z.b)}),[p]);return Object(a.useEffect)((function(){return function(){return _.cancel()}}),[_]),{showScrollButtons:i,isPrevDisabled:l,isNextDisabled:d,prev:v,next:x,onTabListScroll:_}}Y&&Y===Object(Y)&&Object.isExtensible(Y)&&Object.defineProperty(Y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"animate",filename:"src\\helpers\\animate.ts"}});var G=J;function U(){var e=Object(o.a)(["\n  line-height: 48px;\n"]);return U=function(){return e},e}J&&J===Object(J)&&Object.isExtensible(J)&&Object.defineProperty(J,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useScrollState",filename:"src\\components\\tab-header\\useScrollState.ts"}});var Q=l.default.div(U()),Z=Q;function $(){var e=Object(o.a)(["\n  flex: 1;\n  position: relative;\n  transition: transform 0.5s cubic-bezier(0.35, 0, 0.25, 1);\n  display: flex;\n\n  /* \u9690\u85cf\u6eda\u52a8\u6761 */\n  &::-webkit-scrollbar {\n    display: none; /* chrome, safari, opera */\n  }\n  scrollbar-width: none; /* firefox */\n  -ms-overflow-style: none; /* IE 10+, edge */\n  overflow: -moz-scrollbars-none; /* old firefox */\n\n  overflow-x: scroll;\n\n  ",";\n"]);return $=function(){return e},e}function ee(){var e=Object(o.a)(["\n  & > * {\n    flex: 1;\n  }\n"]);return ee=function(){return e},e}"undefined"!==typeof Q&&Q&&Q===Object(Q)&&Object.isExtensible(Q)&&Object.defineProperty(Q,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabHeaderExtraContent",filename:"src\\components\\tab-header\\TabHeaderExtraContent.ts"}});var te=Object(l.css)(ee()),ne=l.default.div($(),(function(e){return e.fullWidth&&te})),re=ne;function ae(e){var t=e.children,n=e.extraContent,c=e.borderless,s=e.tabListContextState,o=e.inkBarColor,l=e.fullWidth,u=Object(r.a)(e,["children","extraContent","borderless","tabListContextState","inkBarColor","fullWidth"]),b=Object(a.useRef)(null),f=Object(a.useRef)(null);D(f,b,s.selectedIndex);var d=G(b,s),j=d.showScrollButtons,p=d.isPrevDisabled,O=d.isNextDisabled,v=d.prev,x=d.next,_=d.onTabListScroll;return i.a.createElement(m,Object.assign({className:"sinoui-tab-header",role:"tablist",borderless:c},u),j&&i.a.createElement(w,{disabled:p,onClick:v},i.a.createElement(H,null)),i.a.createElement(re,{className:"sinoui-tab-list",ref:b,onScroll:_,fullWidth:l},t,i.a.createElement(E,{ref:f,"data-testid":"inkbar",color:o})),j&&i.a.createElement(w,{disabled:O,onClick:x},i.a.createElement(k,null)),n?i.a.createElement(Z,{className:"sinoui-tab-header__extra-content"},n):null)}"undefined"!==typeof ne&&ne&&ne===Object(ne)&&Object.isExtensible(ne)&&Object.defineProperty(ne,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabList",filename:"src\\components\\tab-header\\TabList.ts"}});var ie=ae;ae&&ae===Object(ae)&&Object.isExtensible(ae)&&Object.defineProperty(ae,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"InnerTabHeader",filename:"src\\components\\tab-header\\InnerTabHeader.tsx"}});var ce=n("./src/components/TabListContext.ts"),se=n("./src/components/commons/useTabList.ts");function oe(e){var t=e.children,n=e.dense,o=e.selectedIndex,l=void 0===o?0:o,u=e.onSelect,b=e.extraContent,f=e.borderless,d=e.textColor,m=e.inkBarColor,j=Object(r.a)(e,["children","dense","selectedIndex","onSelect","extraContent","borderless","textColor","inkBarColor"]),p=Object(se.a)(l),O=Object(s.a)(u),v=Object(a.useMemo)((function(){return{dense:n,onSelect:function(e,t){O.current&&O.current(e,l,t)},textColor:d}}),[n,O,l,d]);return i.a.createElement(ce.a.Provider,{value:p},i.a.createElement(c.a.Provider,{value:v},i.a.createElement(ie,Object.assign({extraContent:b,borderless:f,tabListContextState:p,inkBarColor:m},j),t)))}t.a=oe;oe&&oe===Object(oe)&&Object.isExtensible(oe)&&Object.defineProperty(oe,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabHeader",filename:"src\\components\\tab-header\\TabHeader.tsx"}})},"./src/constants.ts":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var r=37;"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LEFT_KEY_CODE",filename:"src\\constants.ts"}});var a=38;"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TOP_KEY_CODE",filename:"src\\constants.ts"}});var i=39;"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RIGHT_KEY_CODE",filename:"src\\constants.ts"}});var c=40;"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BOTTOM_KEY_CODE",filename:"src\\constants.ts"}});var s=166;"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DEBOUNCE_WAIT",filename:"src\\constants.ts"}})},"./src/helpers/useRefValue.ts":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js");function a(e){var t=Object(r.useRef)(e);return t.current=e,t}t.a=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useRefValue",filename:"src\\helpers\\useRefValue.ts"}})}}]);
//# sourceMappingURL=docs-apis-tab-header.d8e6714640d0d8147f6b.js.map