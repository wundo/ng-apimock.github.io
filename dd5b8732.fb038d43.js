(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),c=(n(0),n(168)),i={id:"dev-interface",title:"Development interface",sidebar_label:"Development interface"},p={id:"plugins/dev-interface",isDocsHomePage:!1,title:"Development interface",description:"@ng-apimock/dev-interface is the development interface for @ng-apimock/core.",source:"@site/docs/plugins/dev-interface.md",permalink:"/docs/plugins/dev-interface",editUrl:"https://github.com/ng-apimock/ng-apimock.github.io/tree/develop/docs/docs/plugins/dev-interface.md",lastUpdatedBy:"Mischa Dasberg",sidebar_label:"Development interface",sidebar:"docs",previous:{title:"Plugin introduction",permalink:"/docs/plugins/plugin-introduction"},next:{title:"Protractor plugin",permalink:"/docs/plugins/protractor-plugin"}},o=[{value:"Requirements",id:"requirements",children:[]},{value:"Installing using npm / yarn",id:"installing-using-npm--yarn",children:[]},{value:"Usage",id:"usage",children:[{value:"Middleware",id:"middleware",children:[]},{value:"Minimal setup example",id:"minimal-setup-example",children:[]}]}],l={rightToc:o};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ng-apimock/dev-interface"}),"@ng-apimock/dev-interface")," is the development interface for ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core"),"."),Object(c.b)("p",null,"The development interface is a small web application that connects to the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core")," middelware and exposes all its features in the ui."),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/dev-interface.png",alt:"alt text",title:"Development interface"}))),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("p",null,"see Ng-apimock ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/#requirements"}),"requirements")),Object(c.b)("h2",{id:"installing-using-npm--yarn"},"Installing using npm / yarn"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @ng-apimock/dev-interface --save-dev\n")),Object(c.b)("p",null,"or "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @ng-apimock/dev-interface --dev\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Once the plugin has been installed, you can require it with this line of JavaScript:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const devInterface = require('@ng-apimock/dev-interface');\n")),Object(c.b)("h3",{id:"middleware"},"Middleware"),Object(c.b)("p",null,"The final step to take is to register ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core")," as middleware. It is compatible with both ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/connect"}),"Connect")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/express"}),"Express")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const connect = require('connect');\nconst app = connect();\n\napp.use('/dev-interface/', serveStatic(devInterface));\n")),Object(c.b)("p",null,"or "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const express = require('express');\nconst app = express();\n\napp.use('/dev-interface', express.static(devInterface));\n")),Object(c.b)("h3",{id:"minimal-setup-example"},"Minimal setup example"),Object(c.b)("p",null,"This is a minimal setup example of how you can manually use @ng-apimock/core"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const apimock = require('@ng-apimock/core');\nconst devInterface = require('@ng-apimock/dev-interface');\nconst express = require('express');\nconst app = express();\napp.set('port', 9999);\n\napimock.processor.process({\n    src: 'mocks'\n});\n\napp.use(apimock.middleware);\napp.use('/dev-interface', express.static(devInterface));\n\napp.listen(app.get('port'), () => {\n    console.log('@ng-apimock/core running on port', app.get('port'));\n    console.log('@ng-apimock/dev-interface is available under /dev-interface');\n});\n")),Object(c.b)("p",null,"To start up the script just type:  "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"node serve.js\n")),Object(c.b)("p",null,"The development interface can now be used by navigating to ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:9000/dev-interface"}),"http://localhost:9000/dev-interface"),"."))}s.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||b[m]||c;return n?r.a.createElement(d,p(p({ref:t},l),{},{components:n})):r.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);