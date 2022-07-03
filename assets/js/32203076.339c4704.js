"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:1},a="Messaging Providers",i={unversionedId:"messaging/intro",id:"messaging/intro",title:"Messaging Providers",description:"The authenticate and authorize sub-systems require messaging capabilities,",source:"@site/docs/messaging/intro.md",sourceDirName:"messaging",slug:"/messaging/intro",permalink:"/docs/messaging/intro",draft:!1,editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/messaging/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Credentials Management",permalink:"/docs/credentials/intro"},next:{title:"Overview",permalink:"/docs/apps/intro"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"messaging-providers"},"Messaging Providers"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"authenticate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"authorize")," sub-systems require messaging capabilities,\ne.g. email, SMS, chat bots, etc."),(0,o.kt)("p",null,"The following configuration sets up email messaging provider. It\nuses ",(0,o.kt)("inlineCode",{parentName:"p"},"root@localhost")," credentials."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  security {\n    messaging email provider localhost-smtp-server {\n      address 127.0.0.1:1025\n      protocol smtp\n      credentials root@localhost\n      sender root@localhost "My Auth Portal"\n      bcc greenpau@localhost\n    }\n  }\n}\n')),(0,o.kt)("p",null,'It can also be "passwordless":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  security {\n    messaging email provider localhost-smtp-server {\n      address 127.0.0.1:1025\n      protocol smtp\n      passwordless\n      sender root@localhost "My Auth Portal"\n      bcc greenpau@localhost\n    }\n  }\n}\n')),(0,o.kt)("p",null,"It may support TLS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  security {\n    messaging email provider localhost-smtp-server {\n      address 127.0.0.1:1025\n      protocol smtps\n      passwordless\n      sender root@localhost "My Auth Portal"\n      bcc greenpau@localhost\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);