(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{O6H6:function(e,t,n){"use strict";var a=n("vOnD"),r=n("u9kb"),l=n("aOgs"),c=n("q1tI"),i=n.n(c),o=n("7ljp"),b=n("pD55"),m=n("8Aig"),d=n("ReZb"),p=n("GCVy"),s=n("+6vE");var u=function(e){var t=e.children;return i.a.createElement(r.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},i.a.createElement(r.s,{fontFamily:"mono",fontSize:1},t))};var g=function(e){var t=e.children;return i.a.createElement("strong",null,t)},O=n("gnlW"),j=n("mwnC"),f=n("/Rw0"),N=n("dVM4"),h=Object(a.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function y(e){var t=e.items,n=e.depth;return i.a.createElement(h,{key:t,as:"ul",m:0,p:0},t.map((function(e){return i.a.createElement(r.e,{as:"li",key:e.url,pl:n>0?3:0},i.a.createElement(r.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?i.a.createElement(y,{items:e.items,depth:n+1}):null)})))}y.defaultProps={depth:0};var E=y,v=n("MfeC");function w(e){var t=v.a.getPath(e.location.pathname),n=v.a.getVariantAndPage(e.root,t);if(!n)return null;var a=v.a.getVariantsForPage(e.root,n.page),l=[],c=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(c=e),l.push(i.a.createElement(r.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),i.a.createElement(r.i,{overlay:e.overlay},i.a.createElement(r.i.Button,null,c.variant.title),i.a.createElement(w.Menu,{direction:e.direction,width:e.menuWidth},l)))}w.Menu=Object(a.f)(r.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var x=w,k=Object(a.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),C=Object(a.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),X=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),z=Object(a.f)(r.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),I=Object(a.f)(r.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,c=n.frontmatter,h=c.title,y=c.description,w=c.status,S=c.source,A=c.additionalContributors,H=void 0===A?[]:A,G=v.a.getVariantRoot(a.pathname);return i.a.createElement(o.a,{components:{Index:d.a,Note:p.a,Prompt:u,PromptReply:g,Screenshot:O.a}},i.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},i.a.createElement(b.a,{title:h,description:y}),i.a.createElement(m.b,{location:a,isSearchEnabled:n.isSearchEnabled}),i.a.createElement(k,{flex:"1 1 auto",flexDirection:"row"},i.a.createElement(r.e,{display:["none",null,null,"block"]},i.a.createElement(j.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),i.a.createElement(C,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},i.a.createElement(_,null,i.a.createElement(r.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},i.a.createElement(r.e,null,i.a.createElement(r.e,null,i.a.createElement(r.m,{as:"h1"},h),y))),null!=G?i.a.createElement(X,null,i.a.createElement(x,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:G,location:a})):null),n.tableOfContents.items?i.a.createElement(z,{display:["none",null,"block"],position:"sticky",top:m.a+24,mt:"6px",maxHeight:"calc(100vh - "+m.a+"px - 24px)"},i.a.createElement(r.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),i.a.createElement(E,{items:n.tableOfContents.items})):null,i.a.createElement(I,null,w||S?i.a.createElement(r.k,{mb:3,alignItems:"center"},w?i.a.createElement(N.a,{status:w}):null,i.a.createElement(r.e,{mx:"auto"}),S?i.a.createElement(f.a,{href:S}):null):null,n.tableOfContents.items?i.a.createElement(r.e,{display:["block",null,"none"],mb:3},i.a.createElement(r.h,null,(function(e){var t=e.open;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.s,{as:"summary",fontWeight:"bold"},t?i.a.createElement(r.r,{icon:l.b,mr:2}):i.a.createElement(r.r,{icon:l.c,mr:2}),"Table of contents"),i.a.createElement(r.e,{pt:1},i.a.createElement(E,{items:n.tableOfContents.items})))}))):null,t,i.a.createElement(s.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(H.map((function(e){return{login:e}})))}))))))}},b1rH:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),l=n("O6H6"),c={},i={_frontmatter:c},o=l.a;function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(o,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:"left"},"Action"),Object(r.b)("th",{parentName:"tr",align:"center"},"Billing manager"),Object(r.b)("th",{parentName:"tr",align:"center"},"Admin user"),Object(r.b)("th",{parentName:"tr",align:"center"},"End user"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Update payment method and billing info (via npm account manager)"),Object(r.b)("td",{parentName:"tr",align:"center"},"X"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Purchase additional seats (via npm account manager)"),Object(r.b)("td",{parentName:"tr",align:"center"},"X"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"View all users of the instance"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X"),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Activate users on the instance"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X"),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Deactivate users on the instance"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X"),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Configure an authentication provider"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X"),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"View, publish, and install packages from the instance registry"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X"),Object(r.b)("td",{parentName:"tr",align:"center"},"X")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Create organizations"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X"),Object(r.b)("td",{parentName:"tr",align:"center"},"X")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Add/remove users to/from organizations and instance"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X",Object(r.b)("sup",null,"1")),Object(r.b)("td",{parentName:"tr",align:"center"})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Add/remove users to/from organizations who are already initialized on the instance"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X",Object(r.b)("sup",null,"1")),Object(r.b)("td",{parentName:"tr",align:"center"},"X",Object(r.b)("sup",null,"1"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Create, delete, and manage teams"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X",Object(r.b)("sup",null,"2")),Object(r.b)("td",{parentName:"tr",align:"center"},"X",Object(r.b)("sup",null,"2"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Add/remove packages to/from organization teams"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X",Object(r.b)("sup",null,"2")),Object(r.b)("td",{parentName:"tr",align:"center"},"X",Object(r.b)("sup",null,"2"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:"left"},"Create and publish packages in the organization scope"),Object(r.b)("td",{parentName:"tr",align:"center"}),Object(r.b)("td",{parentName:"tr",align:"center"},"X"),Object(r.b)("td",{parentName:"tr",align:"center"},"X")))),Object(r.b)("sup",null,"1")," User must be an organization owner.",Object(r.b)("br",null),Object(r.b)("sup",null,"2")," User must be an organization owner or team admin.",Object(r.b)("br",null))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-enterprise-user-management-npm-enterprise-roles-and-permissions-mdx-dda5b702977959d2793a.js.map