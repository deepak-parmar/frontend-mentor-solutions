var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a,l;function c(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function g(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $(t){l=t}function v(){const t=function(){if(!l)throw new Error("Function called outside component initialization");return l}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}const b=[],y=[],x=[],w=[],_=Promise.resolve();let R=!1;function k(t){x.push(t)}const E=new Set;let T=0;function A(){const t=l;do{for(;T<b.length;){const t=b[T];T++,$(t),C(t.$$)}for($(null),b.length=0,T=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];E.has(n)||(E.add(n),n())}x.length=0}while(b.length);for(;w.length;)w.pop()();R=!1,E.clear(),$(t)}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const L=new Set;let M;function S(t,n){t&&t.i&&(L.delete(t),t.i(n))}function q(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function H(t){t&&t.c()}function P(t,e,i,a){const{fragment:l,on_mount:c,on_destroy:s,after_update:u}=t.$$;l&&l.m(e,i),a||k((()=>{const e=c.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(k)}function j(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function N(t,n){-1===t.$$.dirty[0]&&(b.push(t),R||(R=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(n,r,i,a,c,s,f,d=[-1]){const p=l;$(n);const g=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:c,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:r.target||p.$$.root};f&&f(g.root);let h=!1;if(g.ctx=i?i(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return g.ctx&&c(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),h&&N(n,t)),e})):[],g.update(),h=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();r.intro&&S(n.$$.fragment),P(n,r.target,r.anchor,r.customElement),A()}$(p)}class B{$destroy(){j(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(t,n,e){const o=t.slice();return o[6]=n[e],o}function z(t){let n,e,o,r,i,a,l,m,$,v,b,y=t[6]+"";function x(){return t[4](t[6])}return{c(){n=f("div"),e=f("input"),i=p(),a=f("label"),l=d(y),$=p(),h(e,"class","hidden svelte-r4i6xa"),h(e,"type","radio"),h(e,"name","rating"),h(e,"id",o=t[6].toString()),e.value=r=t[6],h(a,"for",m=t[6].toString()),h(a,"class","svelte-r4i6xa"),h(n,"class","radio svelte-r4i6xa")},m(t,o){s(t,n,o),c(n,e),c(n,i),c(n,a),c(a,l),c(n,$),v||(b=g(e,"change",x),v=!0)},p(n,e){t=n},d(t){t&&u(n),v=!1,b()}}}function D(n){let e,o,r,i,a,l,d,m,$,v,b,y=n[2],x=[];for(let t=0;t<y.length;t+=1)x[t]=z(I(n,y,t));return{c(){e=f("section"),o=f("div"),o.innerHTML='<img src="images/icon-star.svg" width="17" height="16" alt="" class="svelte-r4i6xa"/>',r=p(),i=f("div"),i.innerHTML='<h1 class="svelte-r4i6xa">How did we do?</h1> \n    <p>Please let us know how we did with your support<br/>\n      request. All feedback is appreciated to help us<br/>\n      improve our offering!</p>',a=p(),l=f("form"),d=f("div");for(let t=0;t<x.length;t+=1)x[t].c();m=p(),$=f("button"),$.textContent="SUBMIT",h(d,"class","radio-group svelte-r4i6xa"),h($,"type","submit"),h($,"class","svelte-r4i6xa"),h(e,"class","wrapper")},m(t,u){s(t,e,u),c(e,o),c(e,r),c(e,i),c(e,a),c(e,l),c(l,d);for(let t=0;t<x.length;t+=1)x[t].m(d,null);var f;c(l,m),c(l,$),v||(b=g(l,"submit",(f=n[5],function(t){return t.preventDefault(),f.call(this,t)})),v=!0)},p(t,[n]){if(5&n){let e;for(y=t[2],e=0;e<y.length;e+=1){const o=I(t,y,e);x[e]?x[e].p(o,n):(x[e]=z(o),x[e].c(),x[e].m(d,null))}for(;e<x.length;e+=1)x[e].d(1);x.length=y.length}},i:t,o:t,d(t){t&&u(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(x,t),v=!1,b()}}}function F(t,n,e){const o=v();let{totalRating:r}=n,i=null,a=Array();for(let t=1;t<=r;t++)a.push(t);return t.$$set=t=>{"totalRating"in t&&e(3,r=t.totalRating)},[i,o,a,r,t=>{e(0,i=t)},()=>{null!=i&&o("submit",i)}]}class U extends B{constructor(t){super(),O(this,t,F,D,i,{totalRating:3})}}function W(n){let e,o,r,i,l,g,$,v,b,y,x,w,_;return{c(){var t,c,s,u,m,R;e=f("section"),o=f("img"),i=p(),l=f("div"),g=d("You selected "),$=d(n[0]),v=d(" out of "),b=d(n[1]),y=p(),x=f("h1"),x.textContent="Thank you!",w=p(),_=f("p"),_.innerHTML="We appreciate you taking the time to give a rating.<br/>\n    If you ever need more support, don&#39;t hesitate to<br/>\n    get in touch!",t=o.src,c=r="images/illustration-thank-you.svg",a||(a=document.createElement("a")),a.href=c,t!==a.href&&h(o,"src","images/illustration-thank-you.svg"),h(o,"width","162"),h(o,"height","108"),h(o,"alt",""),h(l,"class","rating svelte-1qv407m"),h(_,"class","svelte-1qv407m"),h(e,"class","wrapper"),s=e,u="align-items",null===(m="center")?s.style.removeProperty(u):s.style.setProperty(u,m,R?"important":"")},m(t,n){s(t,e,n),c(e,o),c(e,i),c(e,l),c(l,g),c(l,$),c(l,v),c(l,b),c(e,y),c(e,x),c(e,w),c(e,_)},p(t,[n]){1&n&&m($,t[0]),2&n&&m(b,t[1])},i:t,o:t,d(t){t&&u(e)}}}function Y(t,n,e){let{finalRating:o,totalRating:r}=n;return t.$$set=t=>{"finalRating"in t&&e(0,o=t.finalRating),"totalRating"in t&&e(1,r=t.totalRating)},[o,r]}class G extends B{constructor(t){super(),O(this,t,Y,W,i,{finalRating:0,totalRating:1})}}function J(n){let e,o;return e=new U({props:{totalRating:V}}),e.$on("submit",n[1]),{c(){H(e.$$.fragment)},m(t,n){P(e,t,n),o=!0},p:t,i(t){o||(S(e.$$.fragment,t),o=!0)},o(t){q(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}function K(t){let n,e;return n=new G({props:{totalRating:V,finalRating:t[0]}}),{c(){H(n.$$.fragment)},m(t,o){P(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.finalRating=t[0]),n.$set(o)},i(t){e||(S(n.$$.fragment,t),e=!0)},o(t){q(n.$$.fragment,t),e=!1},d(t){j(n,t)}}}function Q(t){let n,e,r,i;const a=[K,J],l=[];function c(t,n){return null!=t[0]?0:1}return e=c(t),r=l[e]=a[e](t),{c(){n=f("main"),r.c()},m(t,o){s(t,n,o),l[e].m(n,null),i=!0},p(t,[i]){let s=e;e=c(t),e===s?l[e].p(t,i):(M={r:0,c:[],p:M},q(l[s],1,1,(()=>{l[s]=null})),M.r||o(M.c),M=M.p,r=l[e],r?r.p(t,i):(r=l[e]=a[e](t),r.c()),S(r,1),r.m(n,null))},i(t){i||(S(r),i=!0)},o(t){q(r),i=!1},d(t){t&&u(n),l[e].d()}}}let V=5;function X(t,n,e){let o;return e(0,o=null),[o,t=>{e(0,o=t.detail)}]}return new class extends B{constructor(t){super(),O(this,t,X,Q,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
