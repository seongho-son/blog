(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6378:function(n,e){"use strict";function t(n,e,t,o){return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.getDomainLocale=t,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)},4580:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(2304).Z;t(5125).default,Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=t(4858).Z,i=t(4315).Z,c=r(t(2684)),u=t(5921),a=t(4079),l=t(3343),s=t(5566),f=t(3973),d=t(6378),p=t(2774),h={};function m(n,e,t,o){if(n&&u.isLocalURL(e)){Promise.resolve(n.prefetch(e,t,o)).catch(function(n){});var r=o&&void 0!==o.locale?o.locale:n&&n.locale;h[e+"%"+t+(r?"%"+r:"")]=!0}}var g=c.default.forwardRef(function(n,e){var t,r,g=n.href,x=n.as,v=n.children,b=n.prefetch,w=n.passHref,C=n.replace,j=n.shallow,y=n.scroll,k=n.locale,Z=n.onClick,_=n.onMouseEnter,P=n.onTouchStart,I=n.legacyBehavior,L=void 0===I?!0!==Boolean(!1):I,R=i(n,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);t=v,L&&("string"==typeof t||"number"==typeof t)&&(t=c.default.createElement("a",null,t));var M=!1!==b,E=c.default.useContext(l.RouterContext),B=c.default.useContext(s.AppRouterContext);B&&(E=B);var T=c.default.useMemo(function(){var n=o(u.resolveHref(E,g,!0),2),e=n[0],t=n[1];return{href:e,as:x?u.resolveHref(E,x):t||e}},[E,g,x]),N=T.href,z=T.as,O=c.default.useRef(N),S=c.default.useRef(z);L&&(r=c.default.Children.only(t));var H=L?r&&"object"==typeof r&&r.ref:e,W=o(f.useIntersection({rootMargin:"200px"}),3),D=W[0],U=W[1],q=W[2],A=c.default.useCallback(function(n){(S.current!==z||O.current!==N)&&(q(),S.current=z,O.current=N),D(n),H&&("function"==typeof H?H(n):"object"==typeof H&&(H.current=n))},[z,H,N,q,D]);c.default.useEffect(function(){var n=U&&M&&u.isLocalURL(N),e=void 0!==k?k:E&&E.locale,t=h[N+"%"+z+(e?"%"+e:"")];n&&!t&&m(E,N,z,{locale:e})},[z,N,U,k,M,E]);var X={ref:A,onClick:function(n){L||"function"!=typeof Z||Z(n),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(n),n.defaultPrevented||function(n,e,t,o,r,i,a,l,s,f){if("A"!==n.currentTarget.nodeName.toUpperCase()||(!(p=(d=n).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(t)){n.preventDefault();var d,p,h=function(){"beforePopState"in e?e[r?"replace":"push"](t,o,{shallow:i,locale:l,scroll:a}):e[r?"replace":"push"](t,{forceOptimisticNavigation:!f})};s?c.default.startTransition(h):h()}}(n,E,N,z,C,j,y,k,Boolean(B),M)},onMouseEnter:function(n){L||"function"!=typeof _||_(n),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(n),!(!M&&B)&&u.isLocalURL(N)&&m(E,N,z,{priority:!0})},onTouchStart:function(n){L||"function"!=typeof P||P(n),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(n),!(!M&&B)&&u.isLocalURL(N)&&m(E,N,z,{priority:!0})}};if(!L||w||"a"===r.type&&!("href"in r.props)){var F=void 0!==k?k:E&&E.locale,K=E&&E.isLocaleDomain&&d.getDomainLocale(z,F,E.locales,E.domainLocales);X.href=K||p.addBasePath(a.addLocale(z,F,E&&E.defaultLocale))}return L?c.default.cloneElement(r,X):c.default.createElement("a",Object.assign({},R,X),t)});e.default=g,("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),n.exports=e.default)},5566:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.TemplateContext=e.GlobalLayoutRouterContext=e.LayoutRouterContext=e.AppRouterContext=void 0;var o=(0,t(4858).Z)(t(2684)),r=o.default.createContext(null);e.AppRouterContext=r;var i=o.default.createContext(null);e.LayoutRouterContext=i;var c=o.default.createContext(null);e.GlobalLayoutRouterContext=c;var u=o.default.createContext(null);e.TemplateContext=u},2691:function(n,e,t){n.exports=t(4580)},8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(925)}])},9827:function(n,e,t){"use strict";t.d(e,{R:function(){return E}});var o=t(638),r=t(8598),i=t(2684),c=t(9518),u=t(6178),a=t(3588),l=t(6059),s=t(8102),f=t(4376),d=t(4528);function p(){var n=(0,o.Z)(["\n  @media "," {\n    padding: 20px;\n  }\n  z-index: 100;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  padding: 40px 80px;\n  align-items: end;\n  opacity: 0.9;\n  gap: 40px;\n  animation: menuFadeIn 600ms 1 ease;\n  background-color: ",";\n  span {\n    @media "," {\n      font-size: 82px;\n    }\n    font-size: 122px;\n    color: ",";\n    cursor: pointer;\n    &.selected {\n      color: ",";\n    }\n  }\n  @keyframes menuFadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0.9;\n    }\n  }\n"]);return p=function(){return n},n}var h=function(n){var e=n.onMenuClick,t=(0,f.useRouter)();return(0,r.jsxs)(m,{children:[(0,r.jsx)(a.cur,{size:24,color:s.r.color.white,style:{cursor:"pointer"},onClick:e}),(0,r.jsx)(l.xW,{className:"/about"===t.pathname?"selected":"",onClick:function(){return t.push("".concat(d.Bq,"/about/"))},children:"about"}),(0,r.jsx)(l.xW,{className:"/"===t.pathname?"selected":"",onClick:function(){return t.push("".concat(d.Bq,"/"))},children:"blog"}),(0,r.jsx)(l.xW,{className:"/learn"===t.pathname?"selected":"",onClick:function(){return t.push("".concat(d.Bq,"/learn/"))},children:"learn"})]})},m=(0,c.ZP)(u.sg).withConfig({componentId:"sc-36c40ef8-0"})(p(),function(n){return n.theme.media.mobile},function(n){return n.theme.color.background2},function(n){return n.theme.media.mobile},function(n){return n.theme.color.white},function(n){return n.theme.color.primary}),g=t(2049);function x(){var n=(0,o.Z)(["\n  @media "," {\n    padding: 20px;\n  }\n  z-index: 100;\n  padding: 40px 80px;\n  align-items: center;\n  justify-content: space-between;\n  span {\n    ","\n  }\n"]);return x=function(){return n},n}function v(){var n=(0,o.Z)(["\n  font-weight: ",";\n  cursor: pointer;\n"]);return v=function(){return n},n}var b=function(n){var e=n.backgroundColor,t=(0,f.useRouter)(),o=(0,i.useState)(!1),c=o[0],u=o[1];return(0,r.jsxs)(w,{backgroundColor:e,children:[(0,r.jsx)(C,{onClick:function(){return t.push("".concat(d.Bq,"/"))},children:"Many things"}),(0,r.jsx)(a.cur,{size:24,color:e===g.t.W||e===g.t.B1?s.r.color.black:s.r.color.white,style:{cursor:"pointer"},onClick:function(){return u(!0)}}),c&&(0,r.jsx)(h,{onMenuClick:function(){return u(!1)}})]})},w=(0,c.ZP)(u.X2).withConfig({componentId:"sc-3e2a8645-0"})(x(),function(n){return n.theme.media.mobile},function(n){return n.backgroundColor===g.t.B2&&"color: ".concat(n.theme.color.white,";")}),C=(0,c.ZP)(l.Ml).withConfig({componentId:"sc-3e2a8645-1"})(v(),function(n){return n.theme.weight.bold});function j(){var n=(0,o.Z)(["\n  @media "," {\n    font-size: ",";\n  }\n  &.date {\n    @media "," {\n      flex: 1;\n      text-align: end;\n    }\n    font-weight: ",";\n  }\n"]);return j=function(){return n},n}function y(){var n=(0,o.Z)(["\n  @media "," {\n    gap: 100px;\n  }\n  @media "," {\n    justify-content: space-between;\n    padding: 0 20px;\n  }\n  height: 80px;\n  align-items: center;\n  padding: 0 80px;\n  color: ",";\n  background-color: ",";\n  span {\n    ","\n  }\n"]);return y=function(){return n},n}var k=function(n){var e=n.backgroundColor;return(0,r.jsxs)(_,{backgroundColor:e,children:[(0,r.jsx)("a",{href:"https://github.com/dev-hand",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(Z,{children:"Github"})}),(0,r.jsx)("a",{href:"https://florentine-nutmeg-39b.notion.site/SHON-85ae96c1bfd54adf920e45d44e71560c",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(Z,{children:"Resume"})}),(0,r.jsx)(Z,{className:"date",children:"#Developer Hand"})]})},Z=(0,c.ZP)(l.xW).withConfig({componentId:"sc-a7a91cef-0"})(j(),function(n){return n.theme.media.mobile},function(n){return n.theme.size.small},function(n){return n.theme.media.desktop},function(n){return n.theme.weight.light}),_=(0,c.ZP)(u.X2).withConfig({componentId:"sc-a7a91cef-1"})(y(),function(n){return n.theme.media.desktop},function(n){return n.theme.media.mobile},function(n){return n.theme.color.white},function(n){return n.backgroundColor===g.t.W?n.theme.color.white:n.theme.color.primary},function(n){return n.backgroundColor===g.t.W&&"color: ".concat(n.theme.color.black)}),P=t(2444);function I(){var n=(0,o.Z)(["\n  z-index: 100;\n  width: 55px;\n  height: 55px;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  transition: 0.2s;\n  box-shadow: 0px 2px 8px 0px #14141485;\n  background-color: ",";\n  cursor: pointer;\n  @keyframes comeUpFloat {\n    0% {\n      opacity: 0;\n      bottom: 0px;\n    }\n    100% {\n      opacity: 1;\n      bottom: 40px;\n    }\n  }\n  animation: comeUpFloat 0.8s;\n  :hover {\n    background-color: ",";\n  }\n  :active {\n    background-color: ","00;\n  }\n"]);return I=function(){return n},n}var L=function(){var n=(0,i.useState)(0),e=n[0],t=n[1];(0,i.useEffect)(function(){return t(window.scrollY),window.addEventListener("scroll",o),function(){return window.removeEventListener("scroll",o)}},[]);var o=function(){return t(window.scrollY)};return(0,r.jsx)(R,{style:{display:e<700?"none":""},onClick:function(){return window.scroll({top:0,left:0,behavior:"smooth"})},children:(0,r.jsx)(P.y1n,{size:"24"})})},R=(0,c.ZP)(u.sg).withConfig({componentId:"sc-300f9ac7-0"})(I(),function(n){return n.theme.color.white},function(n){return n.theme.color.background1},function(n){return n.theme.color.white});function M(){var n=(0,o.Z)(["\n  min-height: 100vh;\n  animation: frameFadeIn 2000ms 1 ease;\n  background-color: ",";\n  @keyframes frameFadeIn {\n    0% {\n      opacity: 0;\n    }\n    20% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);return M=function(){return n},n}var E=function(n){var e=n.children,t=n.backgroundColor,o=void 0===t?g.t.W:t;return(0,r.jsxs)(B,{backgroundColor:o,children:[(0,r.jsx)(b,{backgroundColor:o}),e,(0,r.jsx)(k,{backgroundColor:o}),(0,r.jsx)(L,{})]})},B=(0,c.ZP)(u.sg).withConfig({componentId:"sc-5d720fb6-0"})(M(),function(n){return n.theme.color[n.backgroundColor]})},2049:function(n,e,t){"use strict";var o,r;t.d(e,{t:function(){return o}}),(r=o||(o={})).W="white",r.B1="background1",r.B2="background2"},925:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return ne},default:function(){return nt}});var o=t(638),r=t(8598),i=t(2684),c=t(9518),u=t(9827),a=t(6178),l=t(2691),s=t.n(l),f=t(71),d=t.n(f),p=t(6059),h=t(241),m=t(4528),g=t(1112);function x(){var n=(0,o.Z)([""]);return x=function(){return n},n}function v(){var n=(0,o.Z)(["\n  justify-content: space-between;\n  align-items: center;\n"]);return v=function(){return n},n}function b(){var n=(0,o.Z)(["\n  font-weight: ",";\n  color: ",";\n"]);return b=function(){return n},n}function w(){var n=(0,o.Z)(["\n  gap: 16px;\n  transition: 500ms;\n  cursor: pointer;\n  :hover {\n    opacity: 0.4;\n  }\n  color: ",";\n"]);return w=function(){return n},n}function C(){var n=(0,o.Z)(["\n  font-weight: ",";\n"]);return C=function(){return n},n}var j=function(n){var e=n.item,t=(0,h.DL)("title",e),o=(0,h.DL)("date",e),i=(0,h.s1)(e);return(0,r.jsx)(s(),{href:"".concat(m.Bq,"/posts/").concat(t,"/"),children:(0,r.jsxs)(_,{onClick:function(){return g.c.track("click_blog_item",{title:t})},children:[(0,r.jsx)(y,{children:(0,r.jsx)(d(),{src:"/images/".concat(i),alt:i,width:280,height:200,layout:"responsive",priority:!0})}),(0,r.jsxs)(k,{children:[(0,r.jsx)(P,{children:(0,r.jsx)("a",{href:"".concat(m.Bq,"/posts/").concat(t,"/"),children:t})}),(0,r.jsx)(Z,{children:o})]})]})})},y=c.ZP.div.withConfig({componentId:"sc-d140743e-0"})(x()),k=(0,c.ZP)(a.X2).withConfig({componentId:"sc-d140743e-1"})(v()),Z=(0,c.ZP)(p.KI).withConfig({componentId:"sc-d140743e-2"})(b(),function(n){return n.theme.weight.light},function(n){return n.theme.color.gray2}),_=(0,c.ZP)(a.sg).withConfig({componentId:"sc-d140743e-3"})(w(),function(n){return n.theme.color.white}),P=(0,c.ZP)(p.ug).withConfig({componentId:"sc-d140743e-4"})(C(),function(n){return n.theme.weight.regular});function I(){var n=(0,o.Z)(["\n  @media "," {\n    padding: 0 20px;\n  }\n  padding: 0 80px;\n"]);return I=function(){return n},n}function L(){var n=(0,o.Z)(["\n  @media "," {\n    grid-template-columns: repeat(1, 1fr);\n    gap: 40px;\n  }\n  gap: 40px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"]);return L=function(){return n},n}var R=function(n){var e=n.data;return(0,r.jsx)(M,{children:(0,r.jsx)(E,{children:e.map(function(n,e){return(0,r.jsx)(j,{item:n},e)})})})},M=(0,c.ZP)(a.X2).withConfig({componentId:"sc-52ea398d-0"})(I(),function(n){return n.theme.media.mobile}),E=(0,c.ZP)(a.rj).withConfig({componentId:"sc-52ea398d-1"})(L(),function(n){return n.theme.media.mobile}),B=t(2049),T=["developer","traveler","promoter","producer"],N=function(){var n=(0,i.useState)(T[0]),e=n[0],t=n[1];return(0,i.useEffect)(function(){var n=0;setInterval(function(){t(T[n]),3==++n&&(n=0)},2e3)},[]),(0,r.jsxs)(p.Af,{children:["#",e]})},z=t(5407);function O(){var n=(0,o.Z)(["\n  flex: 1;\n  .h1Title {\n    animation: "," 2500ms 1 ease;\n  }\n  .ultraTitle {\n    animation: "," 5000ms 1 ease;\n  }\n"]);return O=function(){return n},n}function S(){var n=(0,o.Z)(["\n  font-weight: ",";\n"]);return S=function(){return n},n}function H(){var n=(0,o.Z)(["\n  flex: 1;\n  gap: 20px;\n  animation: "," 7000ms 1 ease;\n"]);return H=function(){return n},n}function W(){var n=(0,o.Z)(["\n  @media "," {\n    align-items: center;\n  }\n  @media "," {\n    flex-direction: column;\n  }\n  gap: 40px;\n  justify-content: space-between;\n"]);return W=function(){return n},n}function D(){var n=(0,o.Z)(["\n  @media "," {\n    padding: 0 20px;\n  }\n  padding: 0 80px;\n  span {\n    color: ",";\n  }\n  a {\n    text-decoration: underline;\n  }\n"]);return D=function(){return n},n}function U(){var n=(0,o.Z)(["\n  @media "," {\n    font-size: 48px;\n  }\n  font-size: 58px;\n"]);return U=function(){return n},n}function q(){var n=(0,o.Z)(["\n  @media "," {\n    font-size: ",";\n  }\n"]);return q=function(){return n},n}var A=function(){return(0,r.jsx)(Y,{children:(0,r.jsxs)(G,{children:[(0,r.jsxs)(X,{children:[(0,r.jsx)(J,{className:"ultraTitle",children:"Hi I'm Hand"}),(0,r.jsx)(Q,{className:"h1Title",children:"It's Home"})]}),(0,r.jsx)(K,{children:(0,r.jsxs)(a.sg,{style:{gap:15},children:[(0,r.jsxs)(a.sg,{style:{gap:5},children:[(0,r.jsx)(F,{children:"Technical Blogs, Book Report and Memoirs."}),(0,r.jsxs)(F,{children:["You can see"," ",(0,r.jsx)(p.ug,{children:(0,r.jsx)(s(),{href:"".concat(m.Bq,"/about/"),children:"About Me."})})]})]}),(0,r.jsx)(N,{})]})})]})})},X=(0,c.ZP)(a.sg).withConfig({componentId:"sc-4f38e394-0"})(O(),z.n,z.n),F=(0,c.ZP)(p.ug).withConfig({componentId:"sc-4f38e394-1"})(S(),function(n){return n.theme.weight.light}),K=(0,c.ZP)(a.sg).withConfig({componentId:"sc-4f38e394-2"})(H(),z.n),G=(0,c.ZP)(a.X2).withConfig({componentId:"sc-4f38e394-3"})(W(),function(n){return n.theme.media.desktop},function(n){return n.theme.media.mobile}),Y=(0,c.ZP)(a.sg).withConfig({componentId:"sc-4f38e394-4"})(D(),function(n){return n.theme.media.mobile},function(n){return n.theme.color.white}),J=(0,c.ZP)(p.Af).withConfig({componentId:"sc-4f38e394-5"})(U(),function(n){return n.theme.media.mobile}),Q=(0,c.ZP)(p.di).withConfig({componentId:"sc-4f38e394-6"})(q(),function(n){return n.theme.media.mobile},function(n){return n.theme.size.h2});function V(){var n=(0,o.Z)(["\n  gap: 100px;\n  padding: 100px 0;\n"]);return V=function(){return n},n}var $=function(n){var e=n.data;return g.c.traffic("page_blog"),(0,r.jsx)(u.R,{backgroundColor:B.t.B2,children:(0,r.jsxs)(nn,{children:[(0,r.jsx)(A,{}),(0,r.jsx)(R,{data:e})]})})},nn=(0,c.ZP)(a.sg).withConfig({componentId:"sc-829d54a5-0"})(V()),ne=!0,nt=$},241:function(n,e,t){"use strict";t.d(e,{DL:function(){return o},S5:function(){return i},s1:function(){return r}});var o=function(n,e){return e.split("".concat(n,"("))[1]?e.split("".concat(n,"("))[1].split(")")[0]:""},r=function(n){var e;return null===(e=n.split("/images/")[1])||void 0===e?void 0:e.split(")")[0]},i=function(n){return n.split("---").slice(2).join()}}},function(n){n.O(0,[617,152,445,774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);