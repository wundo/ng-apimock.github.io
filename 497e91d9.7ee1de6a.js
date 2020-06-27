(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),c=(n(0),n(168)),i={id:"protractor-plugin",title:"Protractor plugin",sidebar_label:"Protractor plugin"},o={id:"plugins/protractor-plugin",isDocsHomePage:!1,title:"Protractor plugin",description:"npm",source:"@site/docs/plugins/protractor-plugin.md",permalink:"/docs/plugins/protractor-plugin",editUrl:"https://github.com/ng-apimock/ng-apimock.github.io/tree/develop/docs/docs/plugins/protractor-plugin.md",lastUpdatedBy:"Mischa Dasberg",sidebar_label:"Protractor plugin",sidebar:"docs",previous:{title:"Development interface",permalink:"/docs/plugins/dev-interface"},next:{title:"Webdriverio service",permalink:"/docs/plugins/wdio-ng-apimock-service"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Installing using npm / yarn",id:"installing-using-npm--yarn",children:[]},{value:"Usage",id:"usage",children:[{value:"Plugin configuration",id:"plugin-configuration",children:[]}]},{value:"Using in tests",id:"using-in-tests",children:[]},{value:"API",id:"api",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/ng-apimock/protractor-plugin"}),Object(c.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@ng-apimock/protractor-plugin?color=brightgreen",alt:"npm"})))," ",Object(c.b)("br",null),"\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ng-apimock/protractor-plugin"}),"@ng-apimock/protractor-plugin")," is the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.protractortest.org/#/"}),"protractor")," plugin for ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core"),"."),Object(c.b)("p",null,"This plugin connects to ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core")," middelware and makes the all its features available in the tests."),Object(c.b)("h2",{id:"requirements"},"Requirements"),Object(c.b)("p",null,"see Ng-apimock ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/#requirements"}),"requirements")),Object(c.b)("h2",{id:"installing-using-npm--yarn"},"Installing using npm / yarn"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @ng-apimock/protractor-plugin --save-dev\n")),Object(c.b)("p",null,"or "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @ng-apimock/protractor-plugin --dev\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Once the plugin has been installed, you can add it as a plugin to your ",Object(c.b)("inlineCode",{parentName:"p"},"protractor.conf.js")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"exports.config = {\n    plugins: [{\n        package: '@ng-apimock/protractor-plugin'\n    }]\n};\n")),Object(c.b)("h3",{id:"plugin-configuration"},"Plugin configuration"),Object(c.b)("p",null,"You can override the global name in the configuration. The plugin will now be available on a global scope under that name."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"exports.config = {\n    plugins: [{\n        package: '@ng-apimock/protractor-plugin',\n        options: {\n            globalName: 'client' // defaults to ngApimock\n        }\n    }]\n};\n")),Object(c.b)("h2",{id:"using-in-tests"},"Using in tests"),Object(c.b)("p",null,"Import the base client which contains the interface"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { Client } from '@ng-apimock/base-client';\n\ndeclare const client: Client; // the name of the constant should match the global name: \n")),Object(c.b)("p",null,"Now you can use it."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"describe('Some test', () => {\n    it('does something', async () => \n        await client.selectScenario('my-mock-name', 'some-scenario'));\n});\n")),Object(c.b)("h2",{id:"api"},"API"),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/select-scenario"}),"API")))}s.isMDXComponent=!0},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,m=u["".concat(i,".").concat(g)]||u[g]||b[g]||c;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);