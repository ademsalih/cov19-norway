(this["webpackJsonpcovid19-norway"]=this["webpackJsonpcovid19-norway"]||[]).push([[0],{152:function(e,t,n){},153:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(55),n(56),n(2)),l=n(18),u=(n(152),function(e){var t={labels:e.x,datasets:[{label:"Totalt",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(202,15,27,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(202,15,27,1)",pointBackgroundColor:"#CA0F1B",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(202,15,27,1)",pointHoverBorderColor:"rgba(202,15,27,1)",pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10,data:e.total},{label:"Nye",fill:!1,lineTension:.1,backgroundColor:"rgba(231,128,0,1)",borderColor:"rgba(231,128,0,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(231,128,0,1)",pointBackgroundColor:"#E77F00",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(231,128,0,1)",pointHoverBorderColor:"rgba(231,128,0,1)",pointHoverBorderWidth:2,pointRadius:3,pointHitRadius:10,data:e.daily}]};return r.a.createElement("div",{className:"graphBackground"},r.a.createElement(l.b,{data:t,height:null,width:null,options:{aspectRatio:1.9}}))}),s=(n(153),n(47)),m=n.n(s),d=function(){return r.a.createElement("div",{className:"spinnerBox"},r.a.createElement("img",{src:m.a,className:"spinner",alt:"spinner"}),r.a.createElement("p",null,"Laster inn"))},p=n(11),b=n.n(p),f=n(29);function v(){return(v=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/cov19-norway","/norway.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(155);var h=function(e){var t=e.total,n=e.today;return r.a.createElement("div",{className:"summaryBox"},r.a.createElement("div",{className:"totalBoxContainer"},r.a.createElement("div",{className:"totalBox"},r.a.createElement("h4",null,"TOTALT"),r.a.createElement("h1",null,t))),r.a.createElement("div",{className:"todayBoxContainer"},r.a.createElement("div",{className:"todayBox"},r.a.createElement("h4",null,"I DAG"),r.a.createElement("h1",null,n))))},E=n(49),g=(n(156),function(e){var t=e.x,n=e.y;var a=function(){var e=[];return t.map((function(t,a){return e.push([t,n[a]])})),e.sort((function(e,t){return e[1]<t[1]}))}(),o={labels:a.map((function(e){return e[0]})),datasets:[{label:"Smittede",backgroundColor:"rgba(202,15,27,1)",borderColor:"rgba(202,15,27,1)",borderWidth:1,hoverBackgroundColor:"rgba(202,15,27,1)",hoverBorderColor:"rgba(202,15,27,1)",data:a.map((function(e){return e[1]}))}]};return r.a.createElement("div",null,r.a.createElement(l.a,{data:o,height:null,width:null,options:{aspectRatio:.8}}))}),O=(n(157),function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)([]),l=Object(i.a)(c,2),s=l[0],m=l[1],p=Object(a.useState)([]),b=Object(i.a)(p,2),f=b[0],O=b[1],y=Object(a.useState)([]),j=Object(i.a)(y,2),S=j[0],B=j[1],C=Object(a.useState)(0),w=Object(i.a)(C,2),N=w[0],x=w[1],D=Object(a.useState)(0),k=Object(i.a)(D,2),R=k[0],H=k[1],T=Object(a.useState)([]),W=Object(i.a)(T,2),A=W[0],I=W[1],F=Object(a.useState)("Oslo"),M=Object(i.a)(F,2),J=M[0],L=M[1],V=Object(a.useState)([]),G=Object(i.a)(V,2),K=G[0],Y=G[1],P=Object(a.useState)([]),U=Object(i.a)(P,2),$=U[0],q=U[1],z=Object(a.useState)([]),Q=Object(i.a)(z,2),X=Q[0],Z=Q[1],_=Object(a.useState)([]),ee=Object(i.a)(_,2),te=ee[0],ne=ee[1],ae=Object(a.useState)([]),re=Object(i.a)(ae,2),oe=re[0],ce=re[1];function ie(e){var t,n=(t=0,function(e){return t+=parseInt(e)});return e.map(n)}function le(e){return e[e.length-1]}return r.a.useEffect((function(){(function(){return v.apply(this,arguments)})().then((function(e){var t=function(e,t){var n=[],a=e;for(;a<t;)n.push(a),a=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1);return n}(new Date(e.startDate),new Date),n=t.map((function(e){var t=new Date(e),n=t.getDate().toString().padStart(2,"0"),a=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getFullYear().toString().substr(2,2);return"".concat(n,".").concat(a,".").concat(r)}));m(n);var a=e.entries,r=[],c=[];a.map((function(e){var t=[];e.municips.map((function(e){t.push(e.count)}));var n=t.reduce((function(e,t){return e+t}),0);r.push(n)}));var i=ie(r);O(r),B(ie(r)),x(le(r)),H(le(i)),a.map((function(e,t){e.municips.map((function(e){var n=e.municip;if(!c.find((function(e){return e.municip===n}))){var a={};a.municip=n,a.daily=new Array(r.length).fill(0),c.push(a)}c.find((function(e){return e.municip===n})).daily[t]=e.count}))}));var l=c.sort((function(e,t){return e.municip>t.municip}));Z(l);var u=l.map((function(e){return e.municip})).map((function(e){return{value:e,label:e}}));I(u);var s=l.find((function(e){return e.municip===J})).daily;Y(s),q(ie(s));var d=l.map((function(e){var t={};return t.total=e.daily.reduce((function(e,t){return e+t}),0),t.municip=e.municip,t}));d=d.sort((function(e,t){return e.total>t.total})),ne(d.map((function(e){return e.municip}))),ce(d.map((function(e){return e.total}))),o(!1)}))}),[]),n?r.a.createElement(d,null):r.a.createElement("div",{className:"content"},r.a.createElement(h,{total:R,today:N}),r.a.createElement("br",null),r.a.createElement(u,{x:s,total:S,daily:f}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"KOMMUNEOVERSIKT"),r.a.createElement("br",null),r.a.createElement(E.a,{className:"basic-single",classNamePrefix:"select",defaultValue:A.filter((function(e){return"Oslo"===e.value})),isDisabled:!1,isLoading:!1,isClearable:!1,isRtl:!1,isSearchable:!0,name:"color",options:A,onChange:function(e){return function(e){console.log(e),L(e);var t=X.find((function(t){return t.municip===e})).daily;Y(t),q(ie(t))}(e.value)}}),r.a.createElement("br",null),r.a.createElement(h,{today:le(K),total:le($)}),r.a.createElement("br",null),r.a.createElement(u,{x:s,total:$,daily:K}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"FORDELING AV SMITTEDE"),r.a.createElement("br",null),r.a.createElement(g,{x:te,y:oe}),r.a.createElement("br",null),r.a.createElement("br",null))}),y=(n(158),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",{className:"heading"},"Coronavirus i Norge"))});var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,t,n){e.exports=n.p+"static/media/spinner.46497014.png"},50:function(e,t,n){e.exports=n(159)},55:function(e,t,n){},56:function(e,t,n){}},[[50,1,2]]]);
//# sourceMappingURL=main.ef21f380.chunk.js.map