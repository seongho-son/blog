(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6378:function(n,e){"use strict";function t(n,e,t,o){return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainLocale=t,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)},4580:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(2304).Z;t(5125).default,Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(4858).Z,i=t(4315).Z,u=r(t(2684)),c=t(5921),a=t(4079),f=t(3343),l=t(5566),s=t(3973),d=t(6378),p=t(2774),h={};function m(n,e,t,o){if(n&&c.isLocalURL(e)){Promise.resolve(n.prefetch(e,t,o)).catch(function(n){});var r=o&&void 0!==o.locale?o.locale:n&&n.locale;h[e+"%"+t+(r?"%"+r:"")]=!0}}var g=u.default.forwardRef(function(n,e){var t,r,g=n.href,v=n.as,x=n.children,w=n.prefetch,C=n.passHref,b=n.replace,Z=n.shallow,y=n.scroll,j=n.locale,k=n.onClick,P=n.onMouseEnter,I=n.onTouchStart,_=n.legacyBehavior,z=void 0===_?!0!==Boolean(!1):_,L=i(n,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);t=x,z&&("string"==typeof t||"number"==typeof t)&&(t=u.default.createElement("a",null,t));var M=!1!==w,R=u.default.useContext(f.RouterContext),E=u.default.useContext(l.AppRouterContext);E&&(R=E);var O=u.default.useMemo(function(){var n=o(c.resolveHref(R,g,!0),2),e=n[0],t=n[1];return{href:e,as:v?c.resolveHref(R,v):t||e}},[R,g,v]),T=O.href,N=O.as,S=u.default.useRef(T),B=u.default.useRef(N);z&&(r=u.default.Children.only(t));var U=z?r&&"object"==typeof r&&r.ref:e,A=o(s.useIntersection({rootMargin:"200px"}),3),F=A[0],H=A[1],X=A[2],$=u.default.useCallback(function(n){(B.current!==N||S.current!==T)&&(X(),B.current=N,S.current=T),F(n),U&&("function"==typeof U?U(n):"object"==typeof U&&(U.current=n))},[N,U,T,X,F]);u.default.useEffect(function(){var n=H&&M&&c.isLocalURL(T),e=void 0!==j?j:R&&R.locale,t=h[T+"%"+N+(e?"%"+e:"")];n&&!t&&m(R,T,N,{locale:e})},[N,T,H,j,M,R]);var D={ref:$,onClick:function(n){z||"function"!=typeof k||k(n),z&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(n),n.defaultPrevented||function(n,e,t,o,r,i,a,f,l,s){if("A"!==n.currentTarget.nodeName.toUpperCase()||(!(p=(d=n).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&c.isLocalURL(t)){n.preventDefault();var d,p,h=function(){"beforePopState"in e?e[r?"replace":"push"](t,o,{shallow:i,locale:f,scroll:a}):e[r?"replace":"push"](t,{forceOptimisticNavigation:!s})};l?u.default.startTransition(h):h()}}(n,R,T,N,b,Z,y,j,Boolean(E),M)},onMouseEnter:function(n){z||"function"!=typeof P||P(n),z&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(n),!(!M&&E)&&c.isLocalURL(T)&&m(R,T,N,{priority:!0})},onTouchStart:function(n){z||"function"!=typeof I||I(n),z&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(n),!(!M&&E)&&c.isLocalURL(T)&&m(R,T,N,{priority:!0})}};if(!z||C||"a"===r.type&&!("href"in r.props)){var K=void 0!==j?j:R&&R.locale,G=R&&R.isLocaleDomain&&d.getDomainLocale(N,K,R.locales,R.domainLocales);D.href=G||p.addBasePath(a.addLocale(N,K,R&&R.defaultLocale))}return z?u.default.cloneElement(r,D):u.default.createElement("a",Object.assign({},L,D),t)});e.default=g,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)},5566:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TemplateContext=e.GlobalLayoutRouterContext=e.LayoutRouterContext=e.AppRouterContext=void 0;var o=(0,t(4858).Z)(t(2684)),r=o.default.createContext(null);e.AppRouterContext=r;var i=o.default.createContext(null);e.LayoutRouterContext=i;var u=o.default.createContext(null);e.GlobalLayoutRouterContext=u;var c=o.default.createContext(null);e.TemplateContext=c},2691:function(n,e,t){n.exports=t(4580)},8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(110)}])},1430:function(n,e,t){"use strict";t.d(e,{R:function(){return P}});var o=t(638),r=t(8598),i=t(2684),u=t(9518),c=t(6178),a=t(3588),f=t(6059),l=t(8102),s=t(4376);function d(){var n=(0,o.Z)(["\n  @media "," {\n    padding: 40px;\n  }\n  z-index: 100;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  padding: 40px 80px;\n  align-items: end;\n  opacity: 0.9;\n  gap: 40px;\n  animation: menuFadeIn 600ms 1 ease;\n  background-color: ",";\n  span {\n    font-size: 72px;\n    color: ",";\n    cursor: pointer;\n    :hover {\n      text-decoration: underline;\n    }\n  }\n  .currentPage {\n    color: #114d89;\n  }\n  @keyframes menuFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0.9;\n    }\n  }\n"]);return d=function(){return n},n}var p=function(n){var e=n.onMenuClick,t=(0,s.useRouter)();return console.log(t),(0,r.jsxs)(h,{children:[(0,r.jsx)(a.cur,{size:24,color:l.r.color.white,style:{cursor:"pointer"},onClick:e}),(0,r.jsx)(f.xW,{className:"/about"===t.pathname?"currentPage":"",onClick:function(){return t.push("/about")},children:"About"}),(0,r.jsx)(f.xW,{className:"/"===t.pathname?"currentPage":"",onClick:function(){return t.push("/")},children:"Home"})]})},h=(0,u.ZP)(c.sg).withConfig({componentId:"sc-6bd06c99-0"})(d(),function(n){return n.theme.media.mobile},function(n){return n.theme.color.background2},function(n){return n.theme.color.white});function m(){var n=(0,o.Z)(["\n  @media "," {\n    padding: 40px;\n  }\n  padding: 40px 80px;\n  align-items: center;\n  justify-content: space-between;\n  span {\n    ","\n  }\n"]);return m=function(){return n},n}function g(){var n=(0,o.Z)(["\n  font-weight: ",";\n"]);return g=function(){return n},n}var v=function(n){var e=n.backgroundColor,t=(0,i.useState)(!1),o=t[0],u=t[1];return(0,r.jsxs)(x,{backgroundColor:e,children:[(0,r.jsx)(w,{children:"Many things"}),(0,r.jsx)(a.cur,{size:24,color:"white"===e?l.r.color.black:l.r.color.white,style:{cursor:"pointer"},onClick:function(){return u(!0)}}),o&&(0,r.jsx)(p,{onMenuClick:function(){return u(!1)}})]})},x=(0,u.ZP)(c.X2).withConfig({componentId:"sc-a1cb8ced-0"})(m(),function(n){return n.theme.media.mobile},function(n){return"black"===n.backgroundColor&&"color: ".concat(n.theme.color.white,";")}),w=(0,u.ZP)(f.Ml).withConfig({componentId:"sc-a1cb8ced-1"})(g(),function(n){return n.theme.weight.bold});function C(){var n=(0,o.Z)(["\n  @media "," {\n    font-size: ",";\n  }\n  &.date {\n    @media "," {\n      flex: 1;\n      text-align: end;\n    }\n    font-weight: ",";\n  }\n"]);return C=function(){return n},n}function b(){var n=(0,o.Z)(["\n  @media "," {\n    gap: 60px;\n  }\n  @media "," {\n    justify-content: space-between;\n    padding: 0 40px;\n  }\n  height: 60px;\n  align-items: center;\n  padding: 0 80px;\n  span {\n    ","\n  }\n"]);return b=function(){return n},n}var Z=function(n){var e=n.backgroundColor;return(0,r.jsxs)(j,{backgroundColor:e,children:[(0,r.jsx)(y,{children:"Contact By."}),(0,r.jsx)(y,{children:"Resume"}),(0,r.jsx)(y,{children:"Velog"}),(0,r.jsx)(y,{children:"Email"}),(0,r.jsx)(y,{className:"date",children:"@2023"})]})},y=(0,u.ZP)(f.k$).withConfig({componentId:"sc-5b52f71-0"})(C(),function(n){return n.theme.media.mobile},function(n){return n.theme.size.small},function(n){return n.theme.media.desktop},function(n){return n.theme.weight.light}),j=(0,u.ZP)(c.X2).withConfig({componentId:"sc-5b52f71-1"})(b(),function(n){return n.theme.media.desktop},function(n){return n.theme.media.mobile},function(n){return"black"===n.backgroundColor&&"color: ".concat(n.theme.color.white,";")});function k(){var n=(0,o.Z)(["\n  min-height: 100vh;\n  @keyframes frameFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  animation: frameFadeIn 1s 1 ease;\n  background-color: ",";\n"]);return k=function(){return n},n}var P=function(n){var e=n.children,t=n.backgroundColor,o=void 0===t?"white":t;return(0,r.jsxs)(I,{backgroundColor:o,children:[(0,r.jsx)(v,{backgroundColor:o}),e,(0,r.jsx)(Z,{backgroundColor:o})]})},I=(0,u.ZP)(c.sg).withConfig({componentId:"sc-fe1635b0-0"})(k(),function(n){return"white"===n.backgroundColor?n.theme.color.white:n.theme.color.background2})},6178:function(n,e,t){"use strict";t.d(e,{X2:function(){return s},pU:function(){return p},rj:function(){return d},sg:function(){return l}});var o=t(638),r=t(9518);function i(){var n=(0,o.Z)(["\n  ","\n  flex-direction: column;\n"]);return i=function(){return n},n}function u(){var n=(0,o.Z)(["\n  ","\n  flex-direction: row;\n"]);return u=function(){return n},n}function c(){var n=(0,o.Z)(["\n  display: grid;\n"]);return c=function(){return n},n}function a(){var n=(0,o.Z)(["\n  @media "," {\n    width: 1060px;\n    margin: 0 auto;\n  }\n  @media "," {\n    padding: 0 20px;\n  }\n"]);return a=function(){return n},n}var f={display:"flex"},l=r.ZP.div.withConfig({componentId:"sc-72c97d95-0"})(i(),f),s=r.ZP.div.withConfig({componentId:"sc-72c97d95-1"})(u(),f),d=r.ZP.div.withConfig({componentId:"sc-72c97d95-2"})(c()),p=r.ZP.div.withConfig({componentId:"sc-72c97d95-3"})(a(),function(n){return n.theme.media.desktop},function(n){return n.theme.media.mobile})},6059:function(n,e,t){"use strict";t.d(e,{Af:function(){return y},H$:function(){return k},Ml:function(){return P},S1:function(){return b},di:function(){return j},k$:function(){return C},ug:function(){return I},xW:function(){return Z}});var o=t(638),r=t(9518),i=t(8102);function u(){var n=(0,o.Z)(["\n  ","\n  ","\n  font-weight: ",";\n"]);return u=function(){return n},n}function c(){var n=(0,o.Z)(["\n  ","\n  font-weight: ",";\n  line-height: 1.8;\n"]);return c=function(){return n},n}function a(){var n=(0,o.Z)(["\n  font-weight: ",";\n"]);return a=function(){return n},n}function f(){var n=(0,o.Z)(["\n  font-weight: ",";\n"]);return f=function(){return n},n}function l(){var n=(0,o.Z)(["\n  font-weight: ",";\n"]);return l=function(){return n},n}function s(){var n=(0,o.Z)(["\n  font-weight: ",";\n"]);return s=function(){return n},n}function d(){var n=(0,o.Z)(["\n  font-weight: ",";\n"]);return d=function(){return n},n}function p(){var n=(0,o.Z)(["\n  font-size: ",";\n"]);return p=function(){return n},n}function h(){var n=(0,o.Z)(["\n  font-size: ",";\n"]);return h=function(){return n},n}function m(){var n=(0,o.Z)(["\n  font-size: ",";\n"]);return m=function(){return n},n}function g(){var n=(0,o.Z)(["\n  font-size: ",";\n"]);return g=function(){return n},n}function v(){var n=(0,o.Z)(["\n  font-size: ",";\n"]);return v=function(){return n},n}function x(){var n=(0,o.Z)(["\n  font-size: ",";\n"]);return x=function(){return n},n}var w={"font-style":"normal","font-size":i.r.size.default,"line-height":"1","white-space":"pre-wrap"},C=r.ZP.span.withConfig({componentId:"sc-f4aa5f95-0"})(u(),w,function(n){return n.color&&"color: ".concat(n.color,";")},function(n){return n.theme.weight.medium}),b=r.ZP.p.withConfig({componentId:"sc-f4aa5f95-1"})(c(),w,function(n){return n.theme.weight.regular});(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-2"})(a(),function(n){return n.theme.weight.light}),(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-3"})(f(),function(n){return n.theme.weight.regular}),(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-4"})(l(),function(n){return n.theme.weight.semiBold});var Z=(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-5"})(s(),function(n){return n.theme.weight.bold}),y=(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-6"})(d(),function(n){return n.theme.weight.extraBold});(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-7"})(p(),function(n){return n.theme.size.small});var j=(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-8"})(h(),function(n){return n.theme.size.h1}),k=(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-9"})(m(),function(n){return n.theme.size.h2});(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-10"})(g(),function(n){return n.theme.size.h3});var P=(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-11"})(v(),function(n){return n.theme.size.h4}),I=(0,r.ZP)(C).withConfig({componentId:"sc-f4aa5f95-12"})(x(),function(n){return n.theme.size.h5})},110:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return k},default:function(){return P}});var o=t(8598);t(2684);var r=t(1430),i=t(638),u=t(6178),c=t(9518),a=t(2691),f=t.n(a),l=t(71),s=t.n(l),d=t(6059),p=t(241),h=t(4528);function m(){var n=(0,i.Z)(["\n  gap: 16px;\n  cursor: pointer;\n"]);return m=function(){return n},n}function g(){var n=(0,i.Z)(["\n  color: ",";\n  font-weight: ",";\n"]);return g=function(){return n},n}var v=function(n){var e=n.item,t=(0,p.yQ)("title",e),r=(0,p.$Z)(e);return(0,o.jsx)(f(),{href:"".concat(h.O,"/posts/").concat(t),children:(0,o.jsxs)(x,{children:[(0,o.jsx)(s(),{src:"/images/".concat(r),alt:r,width:300,height:200,layout:"responsive",objectFit:"cover",priority:!0}),(0,o.jsx)(w,{children:t})]})})},x=(0,c.ZP)(u.sg).withConfig({componentId:"sc-fe63bd2c-0"})(m()),w=(0,c.ZP)(d.ug).withConfig({componentId:"sc-fe63bd2c-1"})(g(),function(n){return n.theme.color.white},function(n){return n.theme.weight.regular});function C(){var n=(0,i.Z)(["\n  @media "," {\n    padding: 40px 16px;\n  }\n  padding: 80px;\n"]);return C=function(){return n},n}function b(){var n=(0,i.Z)(["\n  @media "," {\n    grid-template-columns: repeat(1, 1fr);\n    gap: 80px;\n  }\n  gap: 40px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"]);return b=function(){return n},n}var Z=function(n){var e=n.data;return(0,o.jsx)(y,{children:(0,o.jsx)(j,{children:e.map(function(n,e){return(0,o.jsx)(v,{item:n},e)})})})},y=(0,c.ZP)(u.X2).withConfig({componentId:"sc-a5f3cf17-0"})(C(),function(n){return n.theme.media.mobile}),j=(0,c.ZP)(u.rj).withConfig({componentId:"sc-a5f3cf17-1"})(b(),function(n){return n.theme.media.mobile}),k=!0,P=function(n){var e=n.data;return(0,o.jsx)(r.R,{backgroundColor:"black",children:(0,o.jsx)(Z,{data:e})})}},241:function(n,e,t){"use strict";t.d(e,{$Z:function(){return r},cF:function(){return i},yQ:function(){return o}});var o=function(n,e){return e.split("".concat(n,"("))[1]?e.split("".concat(n,"("))[1].split(")")[0]:""},r=function(n){var e;return console.log(n),null===(e=n.split("/images/")[1])||void 0===e?void 0:e.split(")")[0]},i=function(n){return n.split("---").slice(2).join()}}},function(n){n.O(0,[152,985,774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);