(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),i=(a(0),a(168)),c={id:"installation",title:"Installation",sidebar_label:"Installation"},o={id:"installation",isDocsHomePage:!0,title:"Installation",description:"Ng-apimock is essentially a set of npm packages that can be installed over npm.",source:"@site/docs/installation.md",permalink:"/docs/",editUrl:"https://github.com/ng-apimock/ng-apimock.github.io/tree/develop/docs/docs/installation.md",lastUpdatedBy:"Mischa Dasberg",sidebar_label:"Installation",sidebar:"docs",next:{title:"Mocks",permalink:"/docs/mocks"}},s=[{value:"Requirements",id:"requirements",children:[]},{value:"Installing using npm / yarn",id:"installing-using-npm--yarn",children:[]},{value:"Usage",id:"usage",children:[{value:"Processor",id:"processor",children:[]},{value:"Middleware",id:"middleware",children:[]},{value:"Minimal setup example",id:"minimal-setup-example",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ng-apimock is essentially a set of npm ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ng-apimock"}),"packages")," that can be installed over npm."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/en/download/"}),"Node.js")," version >= 10.15.1 or above (which can be checked by running ",Object(i.b)("inlineCode",{parentName:"li"},"node -v"),"). You can use ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/nvm-sh/nvm"}),"nvm")," for managing multiple Node versions on a single machine installed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://yarnpkg.com/en/"}),"Yarn")," version >= 1.5 (which can be checked by running ",Object(i.b)("inlineCode",{parentName:"li"},"yarn version"),"). Yarn is a performant package manager for JavaScript and replaces the ",Object(i.b)("inlineCode",{parentName:"li"},"npm")," client. It is not strictly necessary but highly encouraged.\nTo add the standard WireMock JAR as a project dependency, put the following in the dependencies section of your build file:")),Object(i.b)("h2",{id:"installing-using-npm--yarn"},"Installing using npm / yarn"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @ng-apimock/core --save-dev\n")),Object(i.b)("p",null,"or "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @ng-apimock/core --dev\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once the plugin has been installed, you can require it with this line of JavaScript:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const apimock = require('@ng-apimock/core');\n")),Object(i.b)("h3",{id:"processor"},"Processor"),Object(i.b)("p",null,"The next step is to tell ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core")," where it can find the mocks and / or presets.\nYou can do that by calling the processor."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"apimock.processor.process({\n    src: 'mocks', // required\n    patterns: { // optional\n        mocks: '**/*Mock.json', // optional: default is '**/*.mock.json'\n        presets: '**/*Preset.json' // optional: default is '**/*.preset.json'\n    },\n    watch: true // optional: default is 'false'\n});\n")),Object(i.b)("p",null,"There are 3 parameters here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"src"),": this is the directory that will be use to search for mocks and presets."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"patterns"),": there are 2 regex patterns that can be overridden, mocks and presets. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"watch"),": set to true will ensure that ng-apimock will watch for file changes.")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"As a side-effect, when a mock or preset change has been detected, the saved state will be reset."))),Object(i.b)("h3",{id:"middleware"},"Middleware"),Object(i.b)("p",null,"The final step to take is to register ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core")," as middleware. It is compatible with both ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/connect"}),"Connect")," and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/express"}),"Express")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const connect = require('connect');\nconst app = connect();\n\napp.use(apimock.middleware);\n")),Object(i.b)("p",null,"or "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const express = require('express');\nconst app = express();\n\napp.use(apimock.middleware);\n")),Object(i.b)("h4",{id:"middleware-body-limit"},"Middleware body limit"),Object(i.b)("p",null,"The default bodyParser library that is used has a body limit is ",Object(i.b)("inlineCode",{parentName:"p"},"100kb"),". In order to increase the limit you can set the limit like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"app.use(bodyParser.json({limit: '10mb'});\n")),Object(i.b)("h4",{id:"middleware-configuration"},"Middleware configuration"),Object(i.b)("p",null,"You can configure apimock with a configuration object."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"apimock.configure({\n    middleware:{\n        useHeader: true, // optional: indicator to use a header instead of a cookie to provide the identifier. (defaults to false)\n        identifier: 'my-identifier' // optional: name of the header or cookie that is used as the identifier. (defaults to 'apimockid')\n    }\n});\n")),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The cookie or header is used to make sure that parallel executed tests ",Object(i.b)("strong",{parentName:"p"},"do not interfere")," with each other. Each session is fully isolated.   "))),Object(i.b)("h3",{id:"minimal-setup-example"},"Minimal setup example"),Object(i.b)("p",null,"This is a minimal setup example of how you can manually use @ng-apimock/core"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const apimock = require('@ng-apimock/core');\nconst express = require('express');\nconst app = express();\napp.set('port', 9999);\n\napimock.processor.process({\n    src: 'mocks'\n});\n\napp.use(apimock.middleware);\n\napp.listen(app.get('port'), () => {\n    console.log('@ng-apimock/core running on port', app.get('port'));\n});\n")),Object(i.b)("p",null,"To start up the script just type:  "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"node serve.js\n")))}p.isMDXComponent=!0},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,u=b["".concat(c,".").concat(d)]||b[d]||m[d]||i;return a?r.a.createElement(u,o(o({ref:t},l),{},{components:a})):r.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);