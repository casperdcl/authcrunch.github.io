"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9505],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return b}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),h=s(n),b=r,d=h["".concat(c,".").concat(b)]||h[b]||p[b]||o;return n?a.createElement(d,i(i({ref:e},l),{},{components:n})):a.createElement(d,i({ref:e},l))}));function b(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},540:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],u={},c="Github",s={unversionedId:"authenticate/oauth/backend-oauth2-0007-github",id:"authenticate/oauth/backend-oauth2-0007-github",isDocsHomePage:!1,title:"Github",description:"Follow the instructions at https://github.com/settings/apps/new.",source:"@site/docs/authenticate/oauth/81-backend-oauth2-0007-github.md",sourceDirName:"authenticate/oauth",slug:"/authenticate/oauth/backend-oauth2-0007-github",permalink:"/docs/authenticate/oauth/backend-oauth2-0007-github",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/oauth/81-backend-oauth2-0007-github.md",tags:[],version:"current",sidebarPosition:81,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microsoft",permalink:"/docs/authenticate/oauth/backend-oauth2-0006-microsoft"},next:{title:"Facebook",permalink:"/docs/authenticate/oauth/backend-oauth2-0008-facebook"}},l=[],p={toc:l};function h(t){var e=t.components,u=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"github"},"Github"),(0,o.kt)("p",null,"Follow the instructions at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/settings/apps/new"),"."),(0,o.kt)("p",null,'GitHub App name: "My Gatekeeper"'),(0,o.kt)("p",null,'Description: "Caddy v2 Authentication Portal"'),(0,o.kt)("p",null,"Homepage URL: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:8443/")),(0,o.kt)("p",null,"User authorization callback URL: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://localhost:8443/auth/oauth2/github/authorization-code-callback")),(0,o.kt)("p",null,'Check "Expire user authorization tokens".'),(0,o.kt)("p",null,'Check "Request user authorization (OAuth) during installation"'),(0,o.kt)("p",null,"Upon successful completion of the instructions, you will get:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Settings - Developer settings - GitHub Apps - My Gatekeeper",src:n(155).Z})),(0,o.kt)("p",null,'Additionally, click "generate a private key" to sign access token requests.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Settings - Developer settings - GitHub Apps - My Gatekeeper - Private Keys",src:n(5528).Z})),(0,o.kt)("p",null,"The Caddyfile follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'app.contoso.com {\n  route /auth* {\n    authp {\n      backend github CLIENT_ID CLIENT_SECRET\n      transform user {\n        match origin github\n        action add role authp/user\n        ui link "My Website" / icon "las la-star"\n        ui link "My Identity" "/auth/whoami" icon "las la-star"\n      }\n      transform user {\n        match origin github\n        match email greenpau@contoso.com\n        action add role authp/admin\n      }\n    }\n  }\n\n  route {\n    authorize {\n      primary yes\n      allow roles authp/admin authp/user\n      validate bearer header\n      set auth url /auth/oauth2/github\n      inject headers with claims\n    }\n    respond * "my app" 200\n  }\n}\n')),(0,o.kt)("p",null,"The users authenticating via Github would have to accept the terms:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Settings - Developer settings - GitHub Apps - My Gatekeeper - Accept Terms Screen",src:n(903).Z})))}h.isMDXComponent=!0},903:function(t,e,n){e.Z=n.p+"assets/images/oauth2_github_accept_screen-ac0a4f520fbdfec69f5b53935bc8449b.png"},155:function(t,e,n){e.Z=n.p+"assets/images/oauth2_github_new_app-4da282a9cb8ecb91d9305703a0d1eb50.png"},5528:function(t,e,n){e.Z=n.p+"assets/images/oauth2_github_sign_keys-0b349eca4c05aaf70d76aee1d0e17546.png"}}]);