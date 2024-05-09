(()=>{"use strict";var e={790:(e,n,t)=>{t.d(n,{A:()=>s});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const s=i},16:(e,n,t)=>{t.d(n,{A:()=>h});var o=t(601),r=t.n(o),a=t(314),i=t.n(a),s=t(417),c=t.n(s),l=new URL(t(538),t.b),d=new URL(t(987),t.b),p=new URL(t(498),t.b),u=i()(r()),f=c()(l),m=c()(d),b=c()(p);u.push([e.id,`@font-face {\n  font-family: "Roboto";\n  src: url(${f});\n}\n\n@font-face {\n  font-family: "Roboto-Bold";\n  src: url(${m});\n}\n\nbody {\n  font-family: "Roboto";\n  margin: 0;\n  height: 100vh;\n  font-size: 20px;\n}\n\n.hidden {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n:root {\n  --padding: 4.6875rem;\n}\n\n.spacing {\n  padding: var(--padding);\n}\n\nmain {\n  min-height: 100%;\n  background-color: wheat;\n  background-image: url(${b});\n  background-position: center;\n  background-size: cover;\n  color: white;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: var(--padding);\n  padding-right: 100px;\n  padding-top: var(--padding);\n  font-size: 1.875rem;\n}\n\nbutton {\n  font-family: "Roboto-Bold";\n  display: inline-block;\n  padding: 12px 20px;\n  font-size: 20px;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  background-color: rgb(102, 102, 98);\n  border: none;\n  border-radius: 4px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nbutton:hover {\n  background-color: rgb(98, 129, 158);\n}\n\nbutton:active {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n  transform: translateY(1px);\n}\n\n.intro {\n  display: flex;\n  justify-content: left;\n  color: white;\n  padding-top: clamp(100px, 10%, 500px);\n  padding-left: var(--padding);\n  width: clamp(100px, 30%, 400px);\n  line-height: 40px;\n}\n\n.menu,\n.about {\n  padding: var(--padding);\n  padding-top: 150px;\n  width: clamp(100px, 30%, 400px);\n  line-height: 30px;\n}\n\n.menu-title,\n.about-title {\n  padding-bottom: 20px;\n}\n`,""]);const h=u},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),n.push(d))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=r(f,o);o.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},987:(e,n,t)=>{e.exports=t.p+"f80816a5455d171f948d.ttf"},538:(e,n,t)=>{e.exports=t.p+"fc2b5060f7accec5cf74.ttf"},498:(e,n,t)=>{e.exports=t.p+"8d30cee7acad692506fb.jpg"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),o=t(825),r=t.n(o),a=t(659),i=t.n(a),s=t(56),c=t.n(s),l=t(540),d=t.n(l),p=t(113),u=t.n(p),f=t(790),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;var b=t(16),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),n()(b.A,h),b.A&&b.A.locals&&b.A.locals;class g{constructor(e,n,t){this.element=document.createElement(e),n&&this.element.classList.add(n),this.element.textContent=t}appendTo(e){e.appendChild(this.element)}}const y=new g("div","home","");new g("div","intro","Welcome to the Best Burger in Town!").appendTo(y.element);const v=new g("div","menu");new g("div","menu-title","Menu").appendTo(v.element);const x=new g("ul","menuList","");x.appendTo(v.element);const w=["Classic Burger ","Bacon Cheeseburger","Mushroom Swiss Burger","Veggie Burger","BBQ Bacon Burger"];for(let e=0;e<w.length;e++)new g("li","menuList",w[e]).appendTo(x.element);const T=new g("div","about","");new g("div","about-title","About").appendTo(T.element),new g("div","","Welcome to Burger Palace! Where we serve up the juiciest, most flavorful burgers in town. Our passion for quality ingredients and expert craftsmanship ensures every bite is a delight.").appendTo(T.element),new g("div","","123 Burger Street ").appendTo(T.element);const k=document.querySelector("#content"),S=document.querySelector("#menu-btn"),A=document.querySelector("#home-btn"),q=document.querySelector("#about-btn");y.appendTo(k),v.appendTo(k),T.appendTo(k);const B=document.querySelector(".home"),L=document.querySelector(".menu"),E=document.querySelector(".about");B.style.display="block",L.style.display="none",E.style.display="none",S.addEventListener("click",(function(){B.style.display="none",L.style.display="block",E.style.display="none"})),A.addEventListener("click",(function(){B.style.display="block",L.style.display="none",E.style.display="none"})),q.addEventListener("click",(function(){B.style.display="none",L.style.display="none",E.style.display="block"}))})()})();