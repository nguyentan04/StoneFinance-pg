(this.webpackJsonpapxfinance=this.webpackJsonpapxfinance||[]).push([[18],{1576:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Te}));var a,r,c,i=t(2),o=t.n(i),l=t(16),u=t(44),s=t(0),m=t.n(s),d=t(818),f=t(36),p=t(41),b=t(59),x=t(787),h=t(37),O=t(977),g=t(1554),E=t(964),v=t(227),j=t(778),k=t(777),y=t(1127),N=t(1129),w=t(823),P=t(230),A=f.d.button(a||(a=Object(u.a)(["\n  align-items: center;\n  background-color: ",";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: ",";\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-size: ","px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n  pointer-events: ",";\n  width: 100%;\n  &:hover {\n    background-color: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.color.grey[900]}),(function(e){return e.boxShadow}),(function(e){return e.disabled?"".concat(e.color,"55"):e.color}),(function(e){return e.fontSize}),(function(e){return e.size}),(function(e){return e.padding}),(function(e){return e.padding}),(function(e){return e.disabled?"none":void 0}),(function(e){return e.color}),(function(e){return e.theme.color.grey[900]})),D=Object(f.d)(P.b)(r||(r=Object(u.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),T=f.d.a(c||(c=Object(u.a)(["\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ","px;\n  padding: 0 ","px;\n  text-decoration: none;\n"])),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),C=function(e){var n,t,a,r,c=e.children,i=e.disabled,o=e.href,l=e.onClick,u=e.size,d=e.text,p=e.to,b=e.variant,x=Object(s.useContext)(f.a),h=x.color,O=x.spacing;switch(b){case"secondary":n=h.teal[200];break;case"default":default:n=h.primary.main}switch(u){case"sm":a=O[3],t=36,r=14;break;case"lg":a=O[4],t=72,r=16;break;case"md":default:a=O[4],t=56,r=16}var g=Object(s.useMemo)((function(){return p?m.a.createElement(D,{to:p},d):o?m.a.createElement(T,{href:o,target:"__blank"},d):d}),[o,d,p]);return m.a.createElement(A,{boxShadow:void 0,color:n,disabled:i,fontSize:r,onClick:l,padding:a,size:t},c,g)},z=t(786),B=t(771),R=t(788),I=t(776),S=t(28),X=function(e){var n=e.max,t=e.title,a=e.description,r=e.onConfirm,c=e.onDismiss,i=e.action,o=e.tokenName,l=Object(s.useState)(""),u=Object(h.a)(l,2),d=u[0],f=u[1],p=Object(s.useMemo)((function(){return Object(S.b)(n)}),[n]),b=Object(s.useCallback)((function(e){return f(e.currentTarget.value)}),[f]),x=Object(s.useCallback)((function(){f(p)}),[p,f]);return m.a.createElement(z.a,null,m.a.createElement(R.a,{text:t}),m.a.createElement(I.a,{value:d,onSelectMax:x,onChange:b,max:p,symbol:o}),m.a.createElement(j.a,{text:a}),m.a.createElement(B.a,null,m.a.createElement(C,{text:"Cancel",variant:"secondary",onClick:c}),m.a.createElement(C,{text:i,onClick:function(){return r(d)}})))},F=t(780),M=t(773),U=t(98);var V,W,_,G,K,J,L,q,H,Q,Y,Z,$,ee,ne,te=function(){var e=Object(U.b)();return Object(s.useCallback)((function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Unexpected error is occurred.";n.catch((function(n){n.message.includes("User denied")||(console.error("Uncaught exception: ".concat(n.stack)),e({error:{message:t,stack:n.stack}}))}))}),[e])},ae=f.d.div(V||(V=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  height: 64px;\n  justify-content: center;\n  margin-top: ","px;\n"])),(function(e){return-e.theme.spacing[3]})),re=f.d.div(W||(W=Object(u.a)(["\n  width: 72px;\n  height: 72px;\n  border-radius: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[2]})),ce=f.d.div(_||(_=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[5]})),ie=f.d.div(G||(G=Object(u.a)(["\n  font-size: 20px;\n  padding-left: ","px;\n  padding-right: ","px;\n  padding-bottom: ","px;\n"])),(function(e){return e.theme.spacing[3]}),(function(e){return e.theme.spacing[3]}),(function(e){return e.theme.spacing[4]})),oe=f.d.div(K||(K=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n"]))),le=f.d.div(J||(J=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: ","px;\n  width: 100%;\n"])),(function(e){return e.theme.spacing[3]})),ue=f.d.span(L||(L=Object(u.a)([""]))),se=f.d.div(q||(q=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),me=function(e){var n=e.action,t=e.fromToken,a=e.fromTokenName,r=e.toToken,c=e.toTokenName,i=e.priceDesc,o=e.onExchange,l=e.disabled,u=void 0!==l&&l,s=e.disabledDescription,d=te(),f=Object(v.a)().contracts.Treasury,p=Object(M.b)(t,f.address),b=Object(h.a)(p,2),x=b[0],P=b[1],A=Object(F.a)(t),D=Object(w.a)(m.a.createElement(X,{title:n,description:i,max:A,onConfirm:function(e){o(e),z()},action:n,tokenName:a})),T=Object(h.a)(D,2),C=T[0],z=T[1];return m.a.createElement(O.a,null,m.a.createElement(E.a,null,m.a.createElement(se,null,m.a.createElement(ae,null,"".concat(n," ").concat(c)),m.a.createElement(ce,null,m.a.createElement(oe,null,m.a.createElement(re,null,m.a.createElement(k.a,{symbol:t.symbol,size:54})),m.a.createElement(j.a,{text:a,variant:"normal"})),m.a.createElement(ie,null,m.a.createElement(y.a,{icon:N.a})),m.a.createElement(oe,null,m.a.createElement(re,null,m.a.createElement(k.a,{symbol:r.symbol,size:54})),m.a.createElement(j.a,{text:c,variant:"normal"}))),m.a.createElement(ue,null,i),m.a.createElement(le,null,x===M.a.APPROVED||u?m.a.createElement(g.a,{color:"primary",variant:"contained",onClick:C,disabled:u},s||n):m.a.createElement(g.a,{color:"primary",variant:"contained",disabled:x===M.a.PENDING||x===M.a.UNKNOWN,onClick:function(){return d(P(),"Unable to approve ".concat(a))}},"Approve ".concat(a))))))},de=t(806),fe=t(893),pe=t(38),be=t(27),xe=function(){var e=Object(s.useState)(be.a.from(0)),n=Object(h.a)(e,2),t=n[0],a=n[1],r=Object(v.a)(),c=Object(s.useCallback)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,r.getTombPriceInLastTWAP();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[r]);return Object(s.useEffect)((function(){c().catch((function(e){return console.error("Failed to fetch APEX price: ".concat(e.stack))}));var e=setInterval(c,pe.b.refreshInterval);return function(){return clearInterval(e)}}),[a,r,c]),t},he=t(759),Oe=f.d.div(H||(H=Object(u.a)(["\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[2]})),ge=f.d.span(Q||(Q=Object(u.a)(["\n  //color: ",";\n  text-align: center;\n"])),(function(e){return e.theme.color.grey[300]})),Ee=f.d.div(Y||(Y=Object(u.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding-bottom: 50px;\n  padding: ","px;\n"])),(function(e){return e.theme.spacing[0]})),ve=function(e){var n=e.tokenName,t=e.description,a=e.price;return m.a.createElement(O.a,null,m.a.createElement(Ee,null,m.a.createElement(Oe,null,"\ud83d\udcb0 ".concat(n," = ").concat(a," FTM")),m.a.createElement(ge,null,t)))},je=function(){var e=Object(s.useState)(be.a.from(0)),n=Object(h.a)(e,2),t=n[0],a=n[1],r=Object(v.a)();return Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,r.getBondsPurchasable();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,r]),t},ke=be.a.from(10).pow(18),ye=ke.mul(101).div(100),Ne=t(732),we=Object(f.c)(Z||(Z=Object(u.a)(["\n  body {\n    // background-size: cover !important;\n    background-color: #181821;\n  }\n"]))),Pe=f.d.div($||($=Object(u.a)(["\n  display: flex;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n"]))),Ae=f.d.div(ee||(ee=Object(u.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n"]))),De=f.d.div(ne||(ne=Object(u.a)(["\n  display: flex;\n  flex: 0.8;\n  margin: 0 20px;\n  flex-direction: column;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    margin: 16px 0;\n  }\n"]))),Te=function(){var e=Object(p.g)().path,n=Object(b.b)().account,t=Object(v.a)(),a=Object(he.b)(),r=Object(fe.a)(),c=xe(),i=je(),u=Object(F.a)(null===t||void 0===t?void 0:t.ABOND),f=Object(s.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.buyBonds(n);case 2:r=e.sent,a(r,{summary:"Buy ".concat(Number(n).toFixed(2)," ABOND with ").concat(n," APEX")});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,a]),h=Object(s.useCallback)(function(){var e=Object(l.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.redeemBonds(n);case 2:r=e.sent,a(r,{summary:"Redeem ".concat(n," ABOND")});case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[t,a]),O=Object(s.useMemo)((function(){return c.gt(ye)}),[c]),g=Object(s.useMemo)((function(){return Number(null===r||void 0===r?void 0:r.tokenInFtm)<1.01}),[r]);return m.a.createElement(p.c,null,m.a.createElement(d.a,null,m.a.createElement(we,null),m.a.createElement("div",{className:"animateme"},m.a.createElement("ul",{className:"bg-bubbles"},m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null),m.a.createElement("li",null))),n?m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{exact:!0,path:e},m.a.createElement(Ne.a,{style:{color:"#fff"},align:"left",variant:"h5",gutterBottom:!0},"Buy & Redeem bonds")),m.a.createElement(Pe,null,m.a.createElement(Ae,null,m.a.createElement(me,{action:"Purchase",fromToken:t.APEX,fromTokenName:"APEX",toToken:t.ABOND,toTokenName:"ABOND",priceDesc:g?Object(S.a)(i,18,4)+" ABOND available for purchase":"APEX is over peg",onExchange:f,disabled:!r||O})),m.a.createElement(De,null,m.a.createElement(ve,{tokenName:"APEX",description:"Last-Hour TWAP Price",price:Object(S.a)(c,18,4)}),m.a.createElement(de.a,{size:"md"}),m.a.createElement(ve,{tokenName:"ABOND",description:"Current Price: (APEX)^2",price:Number(null===r||void 0===r?void 0:r.tokenInFtm).toFixed(2)||"-"})),m.a.createElement(Ae,null,m.a.createElement(me,{action:"Redeem",fromToken:t.ABOND,fromTokenName:"ABOND",toToken:t.APEX,toTokenName:"APEX",priceDesc:"".concat(Object(S.a)(u)," ABOND Available in wallet"),onExchange:h,disabled:!r||u.eq(0)||!O,disabledDescription:O?null:"Enabled when APEX > ".concat(1.01,"FTM")})))):m.a.createElement(x.a,null)))}},771:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var a,r,c,i=t(44),o=t(0),l=t.n(o),u=t(36),s=u.d.div(a||(a=Object(i.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),m=u.d.div(r||(r=Object(i.a)(["\n  flex: 1;\n"]))),d=u.d.div(c||(c=Object(i.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]})),f=function(e){var n=e.children,t=l.a.Children.toArray(n).length;return l.a.createElement(s,null,l.a.Children.map(n,(function(e,n){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null,e),n<t-1&&l.a.createElement(d,null))})))}},773:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a,r=t(2),c=t.n(r),i=t(16),o=t(96),l=t(27),u=t(0),s=t(759),m=t(781),d=o.a.constants.MaxUint256,f=l.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={})),n.b=function(e,n){var t=Object(s.a)(e.address,n),r=Object(m.a)(e,n,t),o=Object(u.useMemo)((function(){return r?r.lt(f)?t?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[r,t]),l=Object(s.b)(),p=Object(u.useCallback)(Object(i.a)(c.a.mark((function t(){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o===a.NOT_APPROVED){t.next=3;break}return console.error("approve was called unnecessarily"),t.abrupt("return");case 3:return t.next=5,e.approve(n,d);case 5:r=t.sent,l(r,{summary:"Approve ".concat(e.symbol),approval:{tokenAddress:e.address,spender:n}});case 7:case"end":return t.stop()}}),t)}))),[o,e,n,l]);return[o,p]}},787:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0),r=t.n(a),c=t(1575),i=t(846),o=function(){return r.a.createElement(c.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(i.a,null))}},806:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a,r=t(44),c=t(0),i=t.n(c),o=t(36),l=o.d.div(a||(a=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.size}),(function(e){return e.size})),u=function(e){var n,t=e.size,a=void 0===t?"md":t,r=Object(c.useContext)(o.a).spacing;switch(a){case"lg":n=r[6];break;case"sm":n=r[2];break;case"md":default:n=r[4]}return i.a.createElement(l,{size:n})}},893:function(e,n,t){"use strict";var a=t(2),r=t.n(a),c=t(16),i=t(37),o=t(0),l=t(227),u=t(748);n.a=function(){var e=Object(o.useState)(),n=Object(i.a)(e,2),t=n[0],a=n[1],s=Object(u.a)().slowRefresh,m=Object(l.a)();return Object(o.useEffect)((function(){function e(){return(e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,m.getBondStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,m,s]),t}}}]);
//# sourceMappingURL=18.0cb9ba19.chunk.js.map