(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{k7Sn:function(e,t){t.supportedLanguages={en:"English",kr:"한국어",jp:"日本語"}},"vPK/":function(e,t,n){},yZlL:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),l=n.n(r),o=n("Wbzz"),i=n("mwIZ"),s=n.n(i),c=(n("vPK/"),n("SbOt")),p=n("7oih"),u=n("EYWl");var m=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return l.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)},d=n("L6NH"),g=n("p3AD"),f=n("k7Sn"),h=function(e){return f.supportedLanguages[e].replace(/ /g," ")},b=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.translations;return l.a.createElement("div",{className:"translations"},l.a.createElement(m,{style:{fontFamily:'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif'}},e.length>0&&l.a.createElement("span",null,l.a.createElement("span",null,"Supported translations: "),e.map((function(t,n){return l.a.createElement(l.a.Fragment,{key:t.lang},l.a.createElement(o.Link,{to:t.path},t.lang),n===e.length-1?"":" • ")})))))},t}(l.a.Component),E=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=s()(this.props,"data.site.siteMetadata.title"),n=e.fields.langKey,a=this.props.pageContext,r=a.translations,i=a.translatedLinks,m=e.html;i.forEach((function(e){var t="/"+n+e;m=m.replace(new RegExp('"'+(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"'),"g"),'"'+t+'"')}));var f=e.fields.slug.replace("/"+n+"/","");return r=r.filter((function(e){return e!=n})).sort((function(e,t){return h(e)<h(t)?-1:1})).map((function(e){return{path:"/"+e+"/"+f,lang:h(e)}})),l.a.createElement(p.a,{location:this.props.location,title:t},l.a.createElement(u.a,{lang:n,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),l.a.createElement("main",null,l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),l.a.createElement("p",{style:Object.assign({},Object(g.b)(-.2),{display:"block",marginBottom:Object(g.a)(1),marginTop:Object(g.a)(-.8)})},Object(d.a)(e.frontmatter.date,n)," • "+Object(d.b)(e.timeToRead)),r.length>0&&l.a.createElement(b,{translations:r})),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}))),l.a.createElement("aside",null,l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(g.a)(.25)}},l.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--yellow)"},to:"/"+n},"hellomh")),l.a.createElement(c.a,null)))},t}(l.a.Component);t.default=E}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-712c67377d64eded43c1.js.map