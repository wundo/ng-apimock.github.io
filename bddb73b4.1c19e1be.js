(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(9),l=(a(0),a(168)),i={id:"set-variables",title:"Set variables",sidebar_label:"Set variables"},c={id:"api/set-variables",isDocsHomePage:!1,title:"Set variables",description:"Makes sure that @ng-apimock/core will add or update the variables.",source:"@site/docs/api/set-variables.md",permalink:"/docs/api/set-variables",editUrl:"https://github.com/ng-apimock/docs/master/docs/api/set-variables.md",lastUpdatedBy:"Mischa Dasberg",sidebar_label:"Set variables",sidebar:"docs",previous:{title:"Set variable",permalink:"/docs/api/set-variable"},next:{title:"Delete variable",permalink:"/docs/api/delete-variable"}},b=[{value:"Usage",id:"usage",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Example",id:"example",children:[]}],o={rightToc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Makes sure that ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ng-apimock/core"}),"@ng-apimock/core")," will add or update the variables."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"setVariables(variables);\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Details"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,Object(l.b)("var",null,"variables"))),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"object"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the key/value object")))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"setVariables({\n    now: new Date().getTime(), \n    hello: 'hi'\n});\n")),Object(l.b)("p",null,"Executing this will add the variables with:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"key ",Object(l.b)("inlineCode",{parentName:"li"},"now")," and value ",Object(l.b)("inlineCode",{parentName:"li"},"the current date time")),Object(l.b)("li",{parentName:"ul"},"key ",Object(l.b)("inlineCode",{parentName:"li"},"hello")," and value ",Object(l.b)("inlineCode",{parentName:"li"},"hi"))),Object(l.b)("p",null,"These variables will be used to interpolated with the mock response."))}p.isMDXComponent=!0},168:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||l;return a?n.a.createElement(m,c(c({ref:t},o),{},{components:a})):n.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);