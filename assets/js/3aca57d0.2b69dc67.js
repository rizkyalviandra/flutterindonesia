(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=o(n),g=a,p=s["".concat(u,".").concat(g)]||s[g]||b[g]||i;return n?r.a.createElement(p,l(l({ref:t},c),{},{components:n})):r.a.createElement(p,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return r.a.createElement.apply(null,u)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},168:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pengenalan-widget-79c6e53a0bdc06969b3077b3bf3b9c8d.png"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),r=(n(0),n(118));const i={title:"Pengenalan Widget",slug:"/"},u={unversionedId:"01-pengenalan-widget",id:"01-pengenalan-widget",isDocsHomePage:!1,title:"Pengenalan Widget",description:"Widget di Flutter",source:"@site/docs/01-pengenalan-widget.md",slug:"/",permalink:"/flutterindonesia/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/01-pengenalan-widget.md",version:"current",sidebar:"docs",next:{title:"Layout di Flutter",permalink:"/flutterindonesia/docs/02-layout-di-flutter"}},l=[{value:"Widget di Flutter",id:"widget-di-flutter",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"Basic Widgets",id:"basic-widgets",children:[]},{value:"Material Component",id:"material-component",children:[]},{value:"Gesture",id:"gesture",children:[]},{value:"Mengubah Widget Sesuai Input",id:"mengubah-widget-sesuai-input",children:[]},{value:"Widget Lifecycle",id:"widget-lifecycle",children:[]},{value:"Keys",id:"keys",children:[]},{value:"Global Keys",id:"global-keys",children:[]},{value:"Referensi",id:"referensi",children:[]}],d={toc:l};function c({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"widget-di-flutter"},"Widget di Flutter"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Pengenalan Widget",src:n(168).default})),Object(r.b)("p",null,"Widget di flutter sangat terinspirasi oleh React, oleh karena itu akan sangat membantu jika sebelum membuat aplikasi menggunakan flutter anda pernah membuat aplikasi web menggunakan ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org"},"React"),"."),Object(r.b)("p",null,"Ketika membuat aplikasi menggunakan flutter anda akan membuatnya dengan menyusun berbagai macam widget kedalam sebuah UI tree. Baik UI yang sederhana sampai UI yang kompleks semuanya akan dibangun menggunakan widget. "),Object(r.b)("p",null,"Untuk merender sebuah widget ke UI flutter membutuhkan informasi berupa konfigurasi dan state, konfigurasi dan state inilah yang akan membantu flutter menentukan seperti apa sebuah widget ditampilkan. "),Object(r.b)("p",null,"State merupakan informasi yang istimewa yang dapat dimiliki oleh sebuah widget dimana ketika state mengalami perubahan widget yang bersangkutan akan dirender ulang. "),Object(r.b)("p",null,"Proses merender ulang ini ditangani oleh framework flutter secara internal. Perubahan ini dilakukan dengan mendeteksi perbedaan deskripsi widget sekarang dengan deskripsi widget sebelumnya sehingga dapat menemukan cara tercepat untuk merubah UI tree sesuai dengan state yang baru."),Object(r.b)("h2",{id:"hello-world"},"Hello World"),Object(r.b)("h2",{id:"basic-widgets"},"Basic Widgets"),Object(r.b)("h2",{id:"material-component"},"Material Component"),Object(r.b)("h2",{id:"gesture"},"Gesture"),Object(r.b)("h2",{id:"mengubah-widget-sesuai-input"},"Mengubah Widget Sesuai Input"),Object(r.b)("h2",{id:"widget-lifecycle"},"Widget Lifecycle"),Object(r.b)("h2",{id:"keys"},"Keys"),Object(r.b)("h2",{id:"global-keys"},"Global Keys"),Object(r.b)("h2",{id:"referensi"},"Referensi"))}c.isMDXComponent=!0}}]);