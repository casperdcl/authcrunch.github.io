"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9128],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3531:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=["components"],l={},s="User Registration",c={unversionedId:"authenticate/local/user-registration",id:"authenticate/local/user-registration",title:"User Registration",description:"The following Caddyfile",source:"@site/docs/authenticate/local/40-user-registration.md",sourceDirName:"authenticate/local",slug:"/authenticate/local/user-registration",permalink:"/docs/authenticate/local/user-registration",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/local/40-user-registration.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Password Management",permalink:"/docs/authenticate/local/password-management"},next:{title:"LDAP Configuration",permalink:"/docs/authenticate/ldap/ldap"}},u={},p=[],d={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-registration"},"User Registration"),(0,a.kt)("p",null,"The following ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/authp/authp.github.io/blob/main/assets/conf/local/registration/Caddyfile"},(0,a.kt)("inlineCode",{parentName:"a"},"Caddyfile")),"\ncontains configuration with email-based registration."),(0,a.kt)("p",null,"The newly registered users will appear in the ",(0,a.kt)("inlineCode",{parentName:"p"},"registrations.json")," file.\nAn administrator must manually move entries from ",(0,a.kt)("inlineCode",{parentName:"p"},"registrations.json"),"\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"users.json")," file."),(0,a.kt)("p",null,"The parameters are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dropbox"),": The file path pointing to registration database."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"code"),": The registration code. A user must know what that code is to\nsuccessfully submit a registration request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"require accept terms"),": A user must accept terms and conditions, as well\nas privacy policy to proceed"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"disabled on"),": disables user registration"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"title"),": changes the title of the registration page"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"require domain mx"),": forces the check of domain MX record"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"admin email"),": defines the email recipients after a registrant clicked\nemail confirmation link and provided valid code")),(0,a.kt)("p",null,"This screenshot is the registration screen with default options:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6754).Z,width:"633",height:"548"})),(0,a.kt)("p",null,"The following is the registration screen with mandatory registration\ncode and the acceptable of terms and conditions:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1314).Z,width:"638",height:"647"})))}m.isMDXComponent=!0},6754:function(e,t,n){t.Z=n.p+"assets/images/portal_registration_simple-488dccf4e11066caf5acc9ac47c00190.png"},1314:function(e,t,n){t.Z=n.p+"assets/images/portal_registration_terms_code-aec7408b0552368c20ffde08d65428d2.png"}}]);