(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{27:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(2),s=c.n(r),a=c(18),o=c.n(a),i=(c(27),c(9)),u=c.n(i),d=c(19),j=c(21),l=c(3),b=c(5),p=c(20),O=c.n(p),h=c(7),m=function(e){return"number"===typeof e&&!isNaN(e)},x=[{id:1,name:"RUB"},{id:2,name:"CNY"},{id:3,name:"USD"}],f={id:0,name:"",currencyType:1,cost:"",complete:!1};function y(e){var t=e.addTask,c=Object(r.useState)(f),s=Object(b.a)(c,2),a=s[0],o=s[1],i=function(e){var t=e.target,c=t.name,n=t.value;"cost"!==c&&"currencyType"!==c||(n=Number(n)),o(Object(l.a)(Object(l.a)({},a),{},Object(h.a)({},c,n)))};return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){return"string"===typeof e&&""!==e}(a.name.replace(/(^\s*)|(\s*$)/g,""))&&m(a.cost)&&m(a.currencyType)&&(t(a),o(f))},children:[Object(n.jsx)("input",{className:"input",type:"text",placeholder:"\u4efb\u52a1",value:a.name,name:"name",required:!0,onChange:i}),Object(n.jsx)("input",{className:"input",type:"number",min:"0",value:a.cost,placeholder:"\u4ef7\u683c",name:"cost",required:!0,onChange:i}),Object(n.jsx)("select",{name:"currencyType",onChange:i,value:a.currencyType,children:x.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(n.jsx)("button",{className:"addBtn",children:"\u6dfb\u52a0"})]})}function v(e){var t=e.complete,c=e.todolist,r=e.editTask,s=e.total,a=t?c.every((function(e){return!e.complete})):c.every((function(e){return e.complete})),o=function(e){return function(t){r(Object(l.a)(Object(l.a)({},e),{},{complete:t.target.checked}))}};return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:t?"\u5df2\u5b8c\u6210\uff1a":"\u8ba1\u5212\uff1a"}),Object(n.jsx)("table",{width:"100%",children:Object(n.jsxs)("tbody",{children:[0===c.length||a?Object(n.jsx)("tr",{children:Object(n.jsx)("td",{className:"noData",colSpan:5,align:"center",children:"\u6682\u65e0\u6570\u636e"})}):c.map((function(e,c){if(t===e.complete)return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"30px",children:Object(n.jsx)("input",{type:"checkbox",checked:e.complete,onChange:o(e)})}),Object(n.jsx)("td",{width:"30%",className:e.complete?"complete":"",children:e.name}),Object(n.jsxs)("td",{children:["\uffe5",e.cny]}),Object(n.jsxs)("td",{children:["\u20bd",e.rub]}),Object(n.jsxs)("td",{children:["$",e.usd]})]},c)})),Object(n.jsxs)("tr",{className:"lastLine",children:[Object(n.jsx)("td",{colSpan:2,children:t?"\u4e00\u5171\u82b1\u4e86\uff1a":"\u5c06\u8981\u82b1\u8d39\uff1a"}),Object(n.jsxs)("td",{children:["\uffe5",s.cny]}),Object(n.jsxs)("td",{children:["\u20bd",s.rub]}),Object(n.jsxs)("td",{children:["$",s.usd]})]})]})})]})}function U(e){var t=e.todolist,c=e.editTask,s=Object(r.useMemo)((function(){var e={complete:{cny:0,rub:0,usd:0},todo:{cny:0,rub:0,usd:0}};return t.length>0&&t.every((function(e){return m(e.cny)&&m(e.rub)&&m(e.usd)}))&&t.forEach((function(t){t.complete?(e.complete.cny+=t.cny,e.complete.rub+=t.rub,e.complete.usd+=t.usd):(e.todo.cny+=t.cny,e.todo.rub+=t.rub,e.todo.usd+=t.usd)})),e}),[t]);return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(v,{complete:!1,todolist:t,total:s.todo,editTask:c}),Object(n.jsx)(v,{complete:!0,todolist:t,total:s.complete,editTask:c})]})}c(47);var N={1:"RUB",2:"CNY",3:"USD"};var S=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],s=t[1],a=Object(r.useState)({CNY:{},RUB:{},USD:{}}),o=Object(b.a)(a,2),i=o[0],p=o[1],h=function(e,t,c){return e===t?c:c*i[e][t]};return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,c,n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O()("https://api.globus.furniture/forex");case 3:for(r in t=e.sent,c=t.data,n={CNY:{},RUB:{},USD:{}},c)n.CNY[r]=c[r].value;n.USD.CNY=1/n.CNY.USD,n.USD.RUB=n.USD.CNY*n.CNY.RUB,n.RUB.CNY=1/n.CNY.RUB,n.RUB.USD=1/n.USD.RUB,p(Object(l.a)({},n)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),window.alert("Error occur!");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)(y,{addTask:function(e){var t=Object(l.a)(Object(l.a)({},e),{},{cny:h(N[e.currencyType],"CNY",e.cost),rub:h(N[e.currencyType],"RUB",e.cost),usd:h(N[e.currencyType],"USD",e.cost),id:c.length+1});s([].concat(Object(j.a)(c),[t]))}}),Object(n.jsxs)("div",{className:"right",children:[Object(n.jsxs)("span",{children:[i.CNY.RUB?i.CNY.RUB.toFixed(3):"...","\u20bd/\xa5 "]}),Object(n.jsxs)("span",{children:[i.USD.RUB?i.USD.RUB.toFixed(3):"...","\u20bd/$ "]}),Object(n.jsxs)("span",{children:[i.USD.CNY?i.USD.CNY.toFixed(3):"...","\xa5/$"]})]})]}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(U,{todolist:c,editTask:function(e){s(c.map((function(t){return t.id===e.id?e:t})))}})})]})};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.b0d0bc1e.chunk.js.map