(this["webpackJsonpcovid19-norway"]=this["webpackJsonpcovid19-norway"]||[]).push([[0],{152:function(e,t,n){},153:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),l=n.n(o),c=(n(55),n(56),n(2)),i=n(18),u=(n(152),function(e){var t=e.x,n=e.total,a=e.daily,o=e.color1,l=e.color2,c={labels:t,datasets:[{label:"Totalt",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:o,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:o,pointBackgroundColor:o,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:o,pointHoverBorderColor:o,pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10,data:n},{label:"Nye",fill:!1,lineTension:.1,backgroundColor:l,borderColor:l,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:l,pointBackgroundColor:l,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:l,pointHoverBorderColor:l,pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10,data:a}]};return r.a.createElement("div",{className:"graphBackground"},r.a.createElement(i.b,{data:c,height:null,width:null,options:{aspectRatio:1.5}}))}),s=(n(153),n(47)),m=n.n(s),d=function(){return r.a.createElement("div",{className:"spinnerBox"},r.a.createElement("img",{src:m.a,className:"spinner",alt:"spinner"}),r.a.createElement("p",null,"Laster inn"))},p=n(11),b=n.n(p),f=n(29);function E(){return(E=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/cov19-norway","/norway.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(155);var v=function(e){var t=e.total,n=e.today;return r.a.createElement("div",{className:"summaryBox"},r.a.createElement("div",{className:"totalBoxContainer"},r.a.createElement("div",{className:"totalBox"},r.a.createElement("h4",null,"TOTALT"),r.a.createElement("h1",null,t))),r.a.createElement("div",{className:"todayBoxContainer"},r.a.createElement("div",{className:"todayBox"},r.a.createElement("h4",null,"I DAG"),r.a.createElement("h1",null,n))))},h=n(49),g=(n(156),function(e){var t=e.x,n=e.y;var a=function(){var e=[];return t.map((function(t,a){return e.push([t,n[a]])})),e.sort((function(e,t){return e[1]<t[1]}))}(),o={labels:a.map((function(e){return e[0]})),datasets:[{label:"Smittede",backgroundColor:"rgba(202,15,27,1)",borderColor:"rgba(202,15,27,1)",borderWidth:1,hoverBackgroundColor:"rgba(202,15,27,1)",hoverBorderColor:"rgba(202,15,27,1)",data:a.map((function(e){return e[1]}))}]};return r.a.createElement("div",null,r.a.createElement(i.a,{data:o,height:null,width:null,options:{aspectRatio:.6}}))}),O=(n(157),function(e){var t=e.stats;return r.a.createElement("div",{className:"municipTodayBox"},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",{align:"left"},"Kommune"),r.a.createElement("th",{align:"center"},"Antall")),t.map((function(e,t){return[r.a.createElement("tr",{className:t%2===0?"colorCell":null},r.a.createElement("td",{align:"left"},e.municip),r.a.createElement("td",{align:"center"},e.count))]}))))}),y=(n(158),function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)([]),i=Object(c.a)(l,2),s=i[0],m=i[1],p=Object(a.useState)([]),b=Object(c.a)(p,2),f=b[0],y=b[1],j=Object(a.useState)([]),S=Object(c.a)(j,2),B=S[0],C=S[1],w=Object(a.useState)(0),N=Object(c.a)(w,2),x=N[0],k=N[1],D=Object(a.useState)(0),R=Object(c.a)(D,2),H=R[0],T=R[1],I=Object(a.useState)([]),A=Object(c.a)(I,2),L=A[0],W=A[1],M=Object(a.useState)("Oslo"),K=Object(c.a)(M,2),F=K[0],J=K[1],G=Object(a.useState)([]),U=Object(c.a)(G,2),V=U[0],Y=U[1],P=Object(a.useState)([]),$=Object(c.a)(P,2),q=$[0],z=$[1],Q=Object(a.useState)([]),X=Object(c.a)(Q,2),Z=X[0],_=X[1],ee=Object(a.useState)([]),te=Object(c.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)([]),oe=Object(c.a)(re,2),le=oe[0],ce=oe[1],ie=Object(a.useState)([]),ue=Object(c.a)(ie,2),se=ue[0],me=ue[1];function de(e){var t,n=(t=0,function(e){return t+=parseInt(e)});return e.map(n)}function pe(e){return e[e.length-1]}return r.a.useEffect((function(){(function(){return E.apply(this,arguments)})().then((function(e){var t=function(e,t){var n=[],a=e;for(;a<t;)n.push(a),a=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1);return n}(new Date(e.startDate),new Date),n=t.map((function(e){var t=new Date(e),n=t.getDate().toString().padStart(2,"0"),a=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getFullYear().toString().substr(2,2);return"".concat(n,".").concat(a,".").concat(r)}));m(n);var a=e.entries;pe(a).municips;me(pe(a).municips);var r=new Array(n.length).fill(0),l=[];a.map((function(e,t){var n=[];e.municips.map((function(e){n.push(e.count)}));var a=n.reduce((function(e,t){return e+t}),0);r[t]=a}));var c=de(r);y(r),C(c),k(pe(r)),T(pe(c)),a.map((function(e,t){e.municips.map((function(e){var a=e.municip;if(!l.find((function(e){return e.municip===a}))){var r={};r.municip=a,r.daily=new Array(n.length).fill(0),l.push(r)}l.find((function(e){return e.municip===a})).daily[t]=e.count}))}));var i=l.sort((function(e,t){return e.municip>t.municip}));_(i);var u=i.map((function(e){return e.municip})).map((function(e){return{value:e,label:e}}));W(u);var s=i.find((function(e){return e.municip===F})).daily.slice();Y(s),z(de(s));var d=i.map((function(e){var t={};return t.total=e.daily.reduce((function(e,t){return e+t}),0),t.municip=e.municip,t}));d=d.sort((function(e,t){return e.total>t.total})),ae(d.map((function(e){return e.municip}))),ce(d.map((function(e){return e.total}))),o(!1)}))}),[]),n?r.a.createElement(d,null):r.a.createElement("div",{className:"content"},r.a.createElement(v,{total:H,today:x}),r.a.createElement("br",null),r.a.createElement(u,{x:s,total:B,daily:f,color1:"rgba(202,15,27,1)",color2:"rgba(231,128,0,1)"}),r.a.createElement("br",null),se.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h3",null,"NYE TILFELLER I DAG"),r.a.createElement("br",null),r.a.createElement(O,{stats:se}),r.a.createElement("br",null)):null,r.a.createElement("br",null),r.a.createElement("h3",null,"KOMMUNEUTVIKLING"),r.a.createElement("br",null),r.a.createElement(h.a,{className:"basic-single",classNamePrefix:"select",defaultValue:L.find((function(e){return e.label===F})),value:L.find((function(e){return e.label===F})),isDisabled:!1,isLoading:!1,isClearable:!1,isRtl:!1,isSearchable:!0,name:"color",options:L,onChange:function(e){return function(e){J(e);var t=Z.find((function(t){return t.municip===e})).daily;Y(t),z(de(t))}(e.value)}}),r.a.createElement("br",null),r.a.createElement(v,{today:pe(V),total:pe(q)}),r.a.createElement("br",null),r.a.createElement(u,{x:s,total:q,daily:V,color1:"rgba(21,177,48,1)",color2:"rgba(231,128,0,1)"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"KOMMUNEOVERSIKT"),r.a.createElement("br",null),r.a.createElement(g,{x:ne,y:le}),r.a.createElement("br",null),r.a.createElement("br",null))}),j=(n(159),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",{className:"heading"},"Coronavirus i Norge"))});var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,n){e.exports=n.p+"static/media/spinner.46497014.png"},50:function(e,t,n){e.exports=n(160)},55:function(e,t,n){},56:function(e,t,n){}},[[50,1,2]]]);
//# sourceMappingURL=main.4fd03679.chunk.js.map