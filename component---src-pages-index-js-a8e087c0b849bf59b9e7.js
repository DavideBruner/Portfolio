(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(150),u=n(156);t.default=function(){return r.a.createElement(u.a,null,r.a.createElement("h1",null,"Hi people"),r.a.createElement("p",null,"Welcome to your new Gatsby site."),r.a.createElement("p",null,"Now go build something great."),r.a.createElement(i.Link,{to:"/page-2/"},"Go to page 2"))}},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(1),u=n.n(i),o=n(149),c=n.n(o);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return o.withPrefix}),n.d(t,"navigate",function(){return o.navigate}),n.d(t,"push",function(){return o.push}),n.d(t,"replace",function(){return o.replace}),n.d(t,"navigateTo",function(){return o.navigateTo});var l=n(151),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(35);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},151:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex Sparrow"}}}}},153:function(e,t,n){"use strict";n.r(t);n(25);var a=n(0),r=n.n(a),i=n(1),u=n.n(i),o=n(50),c=n(3),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l},154:function(e,t,n){},156:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),u=n(1),o=n.n(u),c=n(157),l=n.n(c),s=n(150),d=n(51),m=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},p=(n(154),function(e){var t=e.count,n=e.increment;return i.a.createElement("div",null,i.a.createElement("p",null,"Count: ",t),i.a.createElement("button",{onClick:n},"Increment"))});p.propTypes={count:o.a.number.isRequired,increment:o.a.func.isRequired};var f=Object(d.b)(function(e){return{count:e.count}},function(e){return{increment:function(){return e({type:"INCREMENT"})}}})(p),g=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,i.a.createElement(f,null)))},data:a})};g.propTypes={children:o.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-js-a8e087c0b849bf59b9e7.js.map