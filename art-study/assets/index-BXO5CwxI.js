var $_=Object.defineProperty;var dd=n=>{throw TypeError(n)};var K_=(n,e,t)=>e in n?$_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Cn=(n,e,t)=>K_(n,typeof e!="symbol"?e+"":e,t),ou=(n,e,t)=>e.has(n)||dd("Cannot "+t);var k=(n,e,t)=>(ou(n,e,"read from private field"),t?t.call(n):e.get(n)),Ae=(n,e,t)=>e.has(n)?dd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),he=(n,e,t,r)=>(ou(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t),et=(n,e,t)=>(ou(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const ku=!1;var lp=Array.isArray,Y_=Array.prototype.indexOf,Tl=Array.from,Q_=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,X_=Object.getOwnPropertyDescriptors,J_=Object.prototype,Z_=Array.prototype,up=Object.getPrototypeOf,fd=Object.isExtensible;function ev(n){for(var e=0;e<n.length;e++)n[e]()}function cp(){var n,e,t=new Promise((r,i)=>{n=r,e=i});return{promise:t,resolve:n,reject:e}}const It=2,yc=4,wc=8,tv=1<<24,ur=16,cr=32,bi=64,Il=128,bn=512,Ot=1024,Kt=2048,Bn=4096,rn=8192,Dr=16384,Ec=32768,is=65536,pd=1<<17,hp=1<<18,ms=1<<19,nv=1<<20,Xn=1<<25,_i=32768,Du=1<<21,Tc=1<<22,Nr=1<<23,ya=Symbol("$state"),rv=Symbol(""),Gi=new class extends Error{constructor(){super(...arguments);Cn(this,"name","StaleReactionError");Cn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function iv(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function sv(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ov(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function av(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function lv(n){throw new Error("https://svelte.dev/e/effect_orphan")}function uv(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function cv(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function hv(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function dv(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function fv(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const pv=1,gv=2,dp=4,mv=8,_v=16,vv=1,yv=2,kt=Symbol(),wv="http://www.w3.org/1999/xhtml";function Ev(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function fp(n){return n===this.v}function Tv(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function pp(n){return!Tv(n,this.v)}let Po=!1,Iv=!1;function bv(){Po=!0}let ut=null;function ss(n){ut=n}function Ai(n,e=!1,t){ut={p:ut,i:!1,c:null,e:null,s:n,x:null,l:Po&&!e?{s:null,u:null,$:[]}:null}}function Si(n){var e=ut,t=e.e;if(t!==null){e.e=null;for(var r of t)Op(r)}return e.i=!0,ut=e.p,{}}function ko(){return!Po||ut!==null&&ut.l===null}let si=[];function gp(){var n=si;si=[],ev(n)}function _s(n){if(si.length===0&&!Qs){var e=si;queueMicrotask(()=>{e===si&&gp()})}si.push(n)}function Av(){for(;si.length>0;)gp()}function mp(n){var e=Oe;if(e===null)return Ie.f|=Nr,n;if(e.f&Ec)os(n,e);else{if(!(e.f&Il))throw n;e.b.error(n)}}function os(n,e){for(;e!==null;){if(e.f&Il)try{e.b.error(n);return}catch(t){n=t}e=e.parent}throw n}const la=new Set;let ve=null,wa=null,at=null,hn=[],bl=null,Nu=!1,Qs=!1;var es,ts,ai,li,So,ns,rs,Tt,Ou,Us,Vu,_p,vp;const yl=class yl{constructor(){Ae(this,Tt);Cn(this,"committed",!1);Cn(this,"current",new Map);Cn(this,"previous",new Map);Ae(this,es,new Set);Ae(this,ts,new Set);Ae(this,ai,0);Ae(this,li,0);Ae(this,So,null);Ae(this,ns,new Set);Ae(this,rs,new Set);Cn(this,"skipped_effects",new Set);Cn(this,"is_fork",!1)}is_deferred(){return this.is_fork||k(this,li)>0}process(e){var r;hn=[],wa=null,this.apply();var t={parent:null,effect:null,effects:[],render_effects:[]};for(const i of e)et(this,Tt,Ou).call(this,i,t);this.is_fork||et(this,Tt,_p).call(this),this.is_deferred()?(et(this,Tt,Us).call(this,t.effects),et(this,Tt,Us).call(this,t.render_effects)):(wa=this,ve=null,gd(t.render_effects),gd(t.effects),wa=null,(r=k(this,So))==null||r.resolve()),at=null}capture(e,t){this.previous.has(e)||this.previous.set(e,t),e.f&Nr||(this.current.set(e,e.v),at==null||at.set(e,e.v))}activate(){ve=this,this.apply()}deactivate(){ve===this&&(ve=null,at=null)}flush(){if(this.activate(),hn.length>0){if(yp(),ve!==null&&ve!==this)return}else k(this,ai)===0&&this.process([]);this.deactivate()}discard(){for(const e of k(this,ts))e(this);k(this,ts).clear()}increment(e){he(this,ai,k(this,ai)+1),e&&he(this,li,k(this,li)+1)}decrement(e){he(this,ai,k(this,ai)-1),e&&he(this,li,k(this,li)-1),this.revive()}revive(){for(const e of k(this,ns))k(this,rs).delete(e),Vt(e,Kt),vi(e);for(const e of k(this,rs))Vt(e,Bn),vi(e);this.flush()}oncommit(e){k(this,es).add(e)}ondiscard(e){k(this,ts).add(e)}settled(){return(k(this,So)??he(this,So,cp())).promise}static ensure(){if(ve===null){const e=ve=new yl;la.add(ve),Qs||yl.enqueue(()=>{ve===e&&e.flush()})}return ve}static enqueue(e){_s(e)}apply(){}};es=new WeakMap,ts=new WeakMap,ai=new WeakMap,li=new WeakMap,So=new WeakMap,ns=new WeakMap,rs=new WeakMap,Tt=new WeakSet,Ou=function(e,t){var f;e.f^=Ot;for(var r=e.first;r!==null;){var i=r.f,s=(i&(cr|bi))!==0,a=s&&(i&Ot)!==0,l=a||(i&rn)!==0||this.skipped_effects.has(r);if(r.f&Il&&((f=r.b)!=null&&f.is_pending())&&(t={parent:t,effect:r,effects:[],render_effects:[]}),!l&&r.fn!==null){s?r.f^=Ot:i&yc?t.effects.push(r):No(r)&&(r.f&ur&&k(this,ns).add(r),mo(r));var u=r.first;if(u!==null){r=u;continue}}var h=r.parent;for(r=r.next;r===null&&h!==null;)h===t.effect&&(et(this,Tt,Us).call(this,t.effects),et(this,Tt,Us).call(this,t.render_effects),t=t.parent),r=h.next,h=h.parent}},Us=function(e){for(const t of e)t.f&Kt?k(this,ns).add(t):t.f&Bn&&k(this,rs).add(t),et(this,Tt,Vu).call(this,t.deps),Vt(t,Ot)},Vu=function(e){if(e!==null)for(const t of e)!(t.f&It)||!(t.f&_i)||(t.f^=_i,et(this,Tt,Vu).call(this,t.deps))},_p=function(){if(k(this,li)===0){for(const e of k(this,es))e();k(this,es).clear()}k(this,ai)===0&&et(this,Tt,vp).call(this)},vp=function(){var s;if(la.size>1){this.previous.clear();var e=at,t=!0,r={parent:null,effect:null,effects:[],render_effects:[]};for(const a of la){if(a===this){t=!1;continue}const l=[];for(const[h,f]of this.current){if(a.current.has(h))if(t&&f!==a.current.get(h))a.current.set(h,f);else continue;l.push(h)}if(l.length===0)continue;const u=[...a.current.keys()].filter(h=>!this.current.has(h));if(u.length>0){var i=hn;hn=[];const h=new Set,f=new Map;for(const g of l)wp(g,u,h,f);if(hn.length>0){ve=a,a.apply();for(const g of hn)et(s=a,Tt,Ou).call(s,g,r);a.deactivate()}hn=i}}ve=null,at=e}this.committed=!0,la.delete(this)};let Jn=yl;function Sv(n){var e=Qs;Qs=!0;try{for(var t;;){if(Av(),hn.length===0&&(ve==null||ve.flush(),hn.length===0))return bl=null,t;yp()}}finally{Qs=e}}function yp(){var n=gi;Nu=!0;var e=null;try{var t=0;for(qa(!0);hn.length>0;){var r=Jn.ensure();if(t++>1e3){var i,s;Cv()}r.process(hn),Or.clear()}}finally{Nu=!1,qa(n),bl=null}}function Cv(){try{uv()}catch(n){os(n,bl)}}let vn=null;function gd(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var r=n[t++];if(!(r.f&(Dr|rn))&&No(r)&&(vn=new Set,mo(r),r.deps===null&&r.first===null&&r.nodes===null&&(r.teardown===null&&r.ac===null?Mp(r):r.fn=null),(vn==null?void 0:vn.size)>0)){Or.clear();for(const i of vn){if(i.f&(Dr|rn))continue;const s=[i];let a=i.parent;for(;a!==null;)vn.has(a)&&(vn.delete(a),s.push(a)),a=a.parent;for(let l=s.length-1;l>=0;l--){const u=s[l];u.f&(Dr|rn)||mo(u)}}vn.clear()}}vn=null}}function wp(n,e,t,r){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const i of n.reactions){const s=i.f;s&It?wp(i,e,t,r):s&(Tc|ur)&&!(s&Kt)&&Ep(i,e,r)&&(Vt(i,Kt),vi(i))}}function Ep(n,e,t){const r=t.get(n);if(r!==void 0)return r;if(n.deps!==null)for(const i of n.deps){if(e.includes(i))return!0;if(i.f&It&&Ep(i,e,t))return t.set(i,!0),!0}return t.set(n,!1),!1}function vi(n){for(var e=bl=n;e.parent!==null;){e=e.parent;var t=e.f;if(Nu&&e===Oe&&t&ur&&!(t&hp))return;if(t&(bi|cr)){if(!(t&Ot))return;e.f^=Ot}}hn.push(e)}function Rv(n){let e=0,t=yi(0),r;return()=>{po()&&(q(t),Sc(()=>(e===0&&(r=Sl(()=>n(()=>Xs(t)))),e+=1,()=>{_s(()=>{e-=1,e===0&&(r==null||r(),r=void 0,Xs(t))})})))}}var Pv=is|ms|Il;function kv(n,e,t){new Dv(n,e,t)}var ln,un,vc,Pn,ui,kn,cn,zt,Dn,Qn,Sr,ci,Cr,hi,Rr,wl,_t,Nv,Ov,xu,Ea,Ta,Mu;class Dv{constructor(e,t,r){Ae(this,_t);Cn(this,"parent");Ae(this,ln,!1);Ae(this,un);Ae(this,vc,null);Ae(this,Pn);Ae(this,ui);Ae(this,kn);Ae(this,cn,null);Ae(this,zt,null);Ae(this,Dn,null);Ae(this,Qn,null);Ae(this,Sr,null);Ae(this,ci,0);Ae(this,Cr,0);Ae(this,hi,!1);Ae(this,Rr,null);Ae(this,wl,Rv(()=>(he(this,Rr,yi(k(this,ci))),()=>{he(this,Rr,null)})));he(this,un,e),he(this,Pn,t),he(this,ui,r),this.parent=Oe.b,he(this,ln,!!k(this,Pn).pending),he(this,kn,Cc(()=>{Oe.b=this;{var i=et(this,_t,xu).call(this);try{he(this,cn,dn(()=>r(i)))}catch(s){this.error(s)}k(this,Cr)>0?et(this,_t,Ta).call(this):he(this,ln,!1)}return()=>{var s;(s=k(this,Sr))==null||s.remove()}},Pv))}is_pending(){return k(this,ln)||!!this.parent&&this.parent.is_pending()}has_pending_snippet(){return!!k(this,Pn).pending}update_pending_count(e){et(this,_t,Mu).call(this,e),he(this,ci,k(this,ci)+e),k(this,Rr)&&as(k(this,Rr),k(this,ci))}get_effect_pending(){return k(this,wl).call(this),q(k(this,Rr))}error(e){var t=k(this,Pn).onerror;let r=k(this,Pn).failed;if(k(this,hi)||!t&&!r)throw e;k(this,cn)&&($t(k(this,cn)),he(this,cn,null)),k(this,zt)&&($t(k(this,zt)),he(this,zt,null)),k(this,Dn)&&($t(k(this,Dn)),he(this,Dn,null));var i=!1,s=!1;const a=()=>{if(i){Ev();return}i=!0,s&&fv(),Jn.ensure(),he(this,ci,0),k(this,Dn)!==null&&pi(k(this,Dn),()=>{he(this,Dn,null)}),he(this,ln,this.has_pending_snippet()),he(this,cn,et(this,_t,Ea).call(this,()=>(he(this,hi,!1),dn(()=>k(this,ui).call(this,k(this,un)))))),k(this,Cr)>0?et(this,_t,Ta).call(this):he(this,ln,!1)};var l=Ie;try{Wt(null),s=!0,t==null||t(e,a),s=!1}catch(u){os(u,k(this,kn)&&k(this,kn).parent)}finally{Wt(l)}r&&_s(()=>{he(this,Dn,et(this,_t,Ea).call(this,()=>{Jn.ensure(),he(this,hi,!0);try{return dn(()=>{r(k(this,un),()=>e,()=>a)})}catch(u){return os(u,k(this,kn).parent),null}finally{he(this,hi,!1)}}))})}}ln=new WeakMap,un=new WeakMap,vc=new WeakMap,Pn=new WeakMap,ui=new WeakMap,kn=new WeakMap,cn=new WeakMap,zt=new WeakMap,Dn=new WeakMap,Qn=new WeakMap,Sr=new WeakMap,ci=new WeakMap,Cr=new WeakMap,hi=new WeakMap,Rr=new WeakMap,wl=new WeakMap,_t=new WeakSet,Nv=function(){try{he(this,cn,dn(()=>k(this,ui).call(this,k(this,un))))}catch(e){this.error(e)}he(this,ln,!1)},Ov=function(){const e=k(this,Pn).pending;e&&(he(this,zt,dn(()=>e(k(this,un)))),Jn.enqueue(()=>{var t=et(this,_t,xu).call(this);he(this,cn,et(this,_t,Ea).call(this,()=>(Jn.ensure(),dn(()=>k(this,ui).call(this,t))))),k(this,Cr)>0?et(this,_t,Ta).call(this):(pi(k(this,zt),()=>{he(this,zt,null)}),he(this,ln,!1))}))},xu=function(){var e=k(this,un);return k(this,ln)&&(he(this,Sr,tr()),k(this,un).before(k(this,Sr)),e=k(this,Sr)),e},Ea=function(e){var t=Oe,r=Ie,i=ut;zn(k(this,kn)),Wt(k(this,kn)),ss(k(this,kn).ctx);try{return e()}catch(s){return mp(s),null}finally{zn(t),Wt(r),ss(i)}},Ta=function(){const e=k(this,Pn).pending;k(this,cn)!==null&&(he(this,Qn,document.createDocumentFragment()),k(this,Qn).append(k(this,Sr)),Up(k(this,cn),k(this,Qn))),k(this,zt)===null&&he(this,zt,dn(()=>e(k(this,un))))},Mu=function(e){var t;if(!this.has_pending_snippet()){this.parent&&et(t=this.parent,_t,Mu).call(t,e);return}he(this,Cr,k(this,Cr)+e),k(this,Cr)===0&&(he(this,ln,!1),k(this,zt)&&pi(k(this,zt),()=>{he(this,zt,null)}),k(this,Qn)&&(k(this,un).before(k(this,Qn)),he(this,Qn,null)))};function Vv(n,e,t,r){const i=ko()?Ic:Ip;if(t.length===0&&n.length===0){r(e.map(i));return}var s=ve,a=Oe,l=xv();function u(){Promise.all(t.map(h=>Mv(h))).then(h=>{l();try{r([...e.map(i),...h])}catch(f){a.f&Dr||os(f,a)}s==null||s.deactivate(),ja()}).catch(h=>{os(h,a)})}n.length>0?Promise.all(n).then(()=>{l();try{return u()}finally{s==null||s.deactivate(),ja()}}):u()}function xv(){var n=Oe,e=Ie,t=ut,r=ve;return function(s=!0){zn(n),Wt(e),ss(t),s&&(r==null||r.activate())}}function ja(){zn(null),Wt(null),ss(null)}function Ic(n){var e=It|Kt,t=Ie!==null&&Ie.f&It?Ie:null;return Oe!==null&&(Oe.f|=ms),{ctx:ut,deps:null,effects:null,equals:fp,f:e,fn:n,reactions:null,rv:0,v:kt,wv:0,parent:t??Oe,ac:null}}function Mv(n,e){let t=Oe;t===null&&sv();var r=t.b,i=void 0,s=yi(kt),a=!Ie,l=new Map;return Kv(()=>{var p;var u=cp();i=u.promise;try{Promise.resolve(n()).then(u.resolve,u.reject).then(()=>{h===ve&&h.committed&&h.deactivate(),ja()})}catch(E){u.reject(E),ja()}var h=ve;if(a){var f=!r.is_pending();r.update_pending_count(1),h.increment(f),(p=l.get(h))==null||p.reject(Gi),l.delete(h),l.set(h,u)}const g=(E,A=void 0)=>{if(h.activate(),A)A!==Gi&&(s.f|=Nr,as(s,A));else{s.f&Nr&&(s.f^=Nr),as(s,E);for(const[S,C]of l){if(l.delete(S),S===h)break;C.reject(Gi)}}a&&(r.update_pending_count(-1),h.decrement(f))};u.promise.then(g,E=>g(null,E||"unknown"))}),Np(()=>{for(const u of l.values())u.reject(Gi)}),new Promise(u=>{function h(f){function g(){f===i?u(s):h(i)}f.then(g,g)}h(i)})}function Tp(n){const e=Ic(n);return jp(e),e}function Ip(n){const e=Ic(n);return e.equals=pp,e}function bp(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)$t(e[t])}}function Lv(n){for(var e=n.parent;e!==null;){if(!(e.f&It))return e.f&Dr?null:e;e=e.parent}return null}function bc(n){var e,t=Oe;zn(Lv(n));try{n.f&=~_i,bp(n),e=Hp(n)}finally{zn(t)}return e}function Ap(n){var e=bc(n);if(n.equals(e)||(ve!=null&&ve.is_fork||(n.v=e),n.wv=zp()),!vs)if(at!==null)(po()||ve!=null&&ve.is_fork)&&at.set(n,e);else{var t=n.f&bn?Ot:Bn;Vt(n,t)}}let Lu=new Set;const Or=new Map;let Sp=!1;function yi(n,e){var t={f:0,v:n,reactions:null,equals:fp,rv:0,wv:0};return t}function Ue(n,e){const t=yi(n);return jp(t),t}function Fv(n,e=!1,t=!0){var i;const r=yi(n);return e||(r.equals=pp),Po&&t&&ut!==null&&ut.l!==null&&((i=ut.l).s??(i.s=[])).push(r),r}function pe(n,e,t=!1){Ie!==null&&(!Vn||Ie.f&pd)&&ko()&&Ie.f&(It|ur|Tc|pd)&&!(jt!=null&&jt.includes(n))&&dv();let r=t?fn(e):e;return as(n,r)}function as(n,e){if(!n.equals(e)){var t=n.v;vs?Or.set(n,e):Or.set(n,t),n.v=e;var r=Jn.ensure();r.capture(n,t),n.f&It&&(n.f&Kt&&bc(n),Vt(n,n.f&bn?Ot:Bn)),n.wv=zp(),Cp(n,Kt),ko()&&Oe!==null&&Oe.f&Ot&&!(Oe.f&(cr|bi))&&(on===null?Xv([n]):on.push(n)),!r.is_fork&&Lu.size>0&&!Sp&&Uv()}return e}function Uv(){Sp=!1;var n=gi;qa(!0);const e=Array.from(Lu);try{for(const t of e)t.f&Ot&&Vt(t,Bn),No(t)&&mo(t)}finally{qa(n)}Lu.clear()}function Xs(n){pe(n,n.v+1)}function Cp(n,e){var t=n.reactions;if(t!==null)for(var r=ko(),i=t.length,s=0;s<i;s++){var a=t[s],l=a.f;if(!(!r&&a===Oe)){var u=(l&Kt)===0;if(u&&Vt(a,e),l&It){var h=a;at==null||at.delete(h),l&_i||(l&bn&&(a.f|=_i),Cp(h,Bn))}else u&&(l&ur&&vn!==null&&vn.add(a),vi(a))}}}function fn(n){if(typeof n!="object"||n===null||ya in n)return n;const e=up(n);if(e!==J_&&e!==Z_)return n;var t=new Map,r=lp(n),i=Ue(0),s=mi,a=l=>{if(mi===s)return l();var u=Ie,h=mi;Wt(null),vd(s);var f=l();return Wt(u),vd(h),f};return r&&t.set("length",Ue(n.length)),new Proxy(n,{defineProperty(l,u,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&cv();var f=t.get(u);return f===void 0?f=a(()=>{var g=Ue(h.value);return t.set(u,g),g}):pe(f,h.value,!0),!0},deleteProperty(l,u){var h=t.get(u);if(h===void 0){if(u in l){const f=a(()=>Ue(kt));t.set(u,f),Xs(i)}}else pe(h,kt),Xs(i);return!0},get(l,u,h){var E;if(u===ya)return n;var f=t.get(u),g=u in l;if(f===void 0&&(!g||(E=Ys(l,u))!=null&&E.writable)&&(f=a(()=>{var A=fn(g?l[u]:kt),S=Ue(A);return S}),t.set(u,f)),f!==void 0){var p=q(f);return p===kt?void 0:p}return Reflect.get(l,u,h)},getOwnPropertyDescriptor(l,u){var h=Reflect.getOwnPropertyDescriptor(l,u);if(h&&"value"in h){var f=t.get(u);f&&(h.value=q(f))}else if(h===void 0){var g=t.get(u),p=g==null?void 0:g.v;if(g!==void 0&&p!==kt)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return h},has(l,u){var p;if(u===ya)return!0;var h=t.get(u),f=h!==void 0&&h.v!==kt||Reflect.has(l,u);if(h!==void 0||Oe!==null&&(!f||(p=Ys(l,u))!=null&&p.writable)){h===void 0&&(h=a(()=>{var E=f?fn(l[u]):kt,A=Ue(E);return A}),t.set(u,h));var g=q(h);if(g===kt)return!1}return f},set(l,u,h,f){var M;var g=t.get(u),p=u in l;if(r&&u==="length")for(var E=h;E<g.v;E+=1){var A=t.get(E+"");A!==void 0?pe(A,kt):E in l&&(A=a(()=>Ue(kt)),t.set(E+"",A))}if(g===void 0)(!p||(M=Ys(l,u))!=null&&M.writable)&&(g=a(()=>Ue(void 0)),pe(g,fn(h)),t.set(u,g));else{p=g.v!==kt;var S=a(()=>fn(h));pe(g,S)}var C=Reflect.getOwnPropertyDescriptor(l,u);if(C!=null&&C.set&&C.set.call(f,h),!p){if(r&&typeof u=="string"){var O=t.get("length"),x=Number(u);Number.isInteger(x)&&x>=O.v&&pe(O,x+1)}Xs(i)}return!0},ownKeys(l){q(i);var u=Reflect.ownKeys(l).filter(g=>{var p=t.get(g);return p===void 0||p.v!==kt});for(var[h,f]of t)f.v!==kt&&!(h in l)&&u.push(h);return u},setPrototypeOf(){hv()}})}var Fu,Rp,Pp,kp;function jv(){if(Fu===void 0){Fu=window,Rp=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Pp=Ys(e,"firstChild").get,kp=Ys(e,"nextSibling").get,fd(n)&&(n.__click=void 0,n.__className=void 0,n.__attributes=null,n.__style=void 0,n.__e=void 0),fd(t)&&(t.__t=void 0)}}function tr(n=""){return document.createTextNode(n)}function Ba(n){return Pp.call(n)}function Do(n){return kp.call(n)}function ie(n,e){return Ba(n)}function za(n,e=!1){{var t=Ba(n);return t instanceof Comment&&t.data===""?Do(t):t}}function ce(n,e=1,t=!1){let r=n;for(;e--;)r=Do(r);return r}function Bv(n){n.textContent=""}function Dp(){return!1}let md=!1;function zv(){md||(md=!0,document.addEventListener("reset",n=>{Promise.resolve().then(()=>{var e;if(!n.defaultPrevented)for(const t of n.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function Al(n){var e=Ie,t=Oe;Wt(null),zn(null);try{return n()}finally{Wt(e),zn(t)}}function qv(n,e,t,r=t){n.addEventListener(e,()=>Al(t));const i=n.__on_r;i?n.__on_r=()=>{i(),r(!0)}:n.__on_r=()=>r(!0),zv()}function Hv(n){Oe===null&&(Ie===null&&lv(),av()),vs&&ov()}function Gv(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function hr(n,e,t){var r=Oe;r!==null&&r.f&rn&&(n|=rn);var i={ctx:ut,deps:null,nodes:null,f:n|Kt|bn,first:null,fn:e,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null};if(t)try{mo(i),i.f|=Ec}catch(l){throw $t(i),l}else e!==null&&vi(i);var s=i;if(t&&s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&!(s.f&ms)&&(s=s.first,n&ur&&n&is&&s!==null&&(s.f|=is)),s!==null&&(s.parent=r,r!==null&&Gv(s,r),Ie!==null&&Ie.f&It&&!(n&bi))){var a=Ie;(a.effects??(a.effects=[])).push(s)}return i}function po(){return Ie!==null&&!Vn}function Np(n){const e=hr(wc,null,!1);return Vt(e,Ot),e.teardown=n,e}function Ac(n){Hv();var e=Oe.f,t=!Ie&&(e&cr)!==0&&(e&Ec)===0;if(t){var r=ut;(r.e??(r.e=[])).push(n)}else return Op(n)}function Op(n){return hr(yc|nv,n,!1)}function Wv(n){Jn.ensure();const e=hr(bi|ms,n,!0);return(t={})=>new Promise(r=>{t.outro?pi(e,()=>{$t(e),r(void 0)}):($t(e),r(void 0))})}function $v(n){return hr(yc,n,!1)}function Kv(n){return hr(Tc|ms,n,!0)}function Sc(n,e=0){return hr(wc|e,n,!0)}function fi(n,e=[],t=[],r=[]){Vv(r,e,t,i=>{hr(wc,()=>n(...i.map(q)),!0)})}function Cc(n,e=0){var t=hr(ur|e,n,!0);return t}function dn(n){return hr(cr|ms,n,!0)}function Vp(n){var e=n.teardown;if(e!==null){const t=vs,r=Ie;_d(!0),Wt(null);try{e.call(null)}finally{_d(t),Wt(r)}}}function xp(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const i=t.ac;i!==null&&Al(()=>{i.abort(Gi)});var r=t.next;t.f&bi?t.parent=null:$t(t,e),t=r}}function Yv(n){for(var e=n.first;e!==null;){var t=e.next;e.f&cr||$t(e),e=t}}function $t(n,e=!0){var t=!1;(e||n.f&hp)&&n.nodes!==null&&n.nodes.end!==null&&(Qv(n.nodes.start,n.nodes.end),t=!0),xp(n,e&&!t),Ha(n,0),Vt(n,Dr);var r=n.nodes&&n.nodes.t;if(r!==null)for(const s of r)s.stop();Vp(n);var i=n.parent;i!==null&&i.first!==null&&Mp(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=null}function Qv(n,e){for(;n!==null;){var t=n===e?null:Do(n);n.remove(),n=t}}function Mp(n){var e=n.parent,t=n.prev,r=n.next;t!==null&&(t.next=r),r!==null&&(r.prev=t),e!==null&&(e.first===n&&(e.first=r),e.last===n&&(e.last=t))}function pi(n,e,t=!0){var r=[];Lp(n,r,!0);var i=()=>{t&&$t(n),e&&e()},s=r.length;if(s>0){var a=()=>--s||i();for(var l of r)l.out(a)}else i()}function Lp(n,e,t){if(!(n.f&rn)){n.f^=rn;var r=n.nodes&&n.nodes.t;if(r!==null)for(const l of r)(l.is_global||t)&&e.push(l);for(var i=n.first;i!==null;){var s=i.next,a=(i.f&is)!==0||(i.f&cr)!==0&&(n.f&ur)!==0;Lp(i,e,a?t:!1),i=s}}}function Rc(n){Fp(n,!0)}function Fp(n,e){if(n.f&rn){n.f^=rn,n.f&Ot||(Vt(n,Kt),vi(n));for(var t=n.first;t!==null;){var r=t.next,i=(t.f&is)!==0||(t.f&cr)!==0;Fp(t,i?e:!1),t=r}var s=n.nodes&&n.nodes.t;if(s!==null)for(const a of s)(a.is_global||e)&&a.in()}}function Up(n,e){if(n.nodes)for(var t=n.nodes.start,r=n.nodes.end;t!==null;){var i=t===r?null:Do(t);e.append(t),t=i}}let gi=!1;function qa(n){gi=n}let vs=!1;function _d(n){vs=n}let Ie=null,Vn=!1;function Wt(n){Ie=n}let Oe=null;function zn(n){Oe=n}let jt=null;function jp(n){Ie!==null&&(jt===null?jt=[n]:jt.push(n))}let Ut=null,Zt=0,on=null;function Xv(n){on=n}let Bp=1,go=0,mi=go;function vd(n){mi=n}function zp(){return++Bp}function No(n){var e=n.f;if(e&Kt)return!0;if(e&It&&(n.f&=~_i),e&Bn){var t=n.deps;if(t!==null)for(var r=t.length,i=0;i<r;i++){var s=t[i];if(No(s)&&Ap(s),s.wv>n.wv)return!0}e&bn&&at===null&&Vt(n,Ot)}return!1}function qp(n,e,t=!0){var r=n.reactions;if(r!==null&&!(jt!=null&&jt.includes(n)))for(var i=0;i<r.length;i++){var s=r[i];s.f&It?qp(s,e,!1):e===s&&(t?Vt(s,Kt):s.f&Ot&&Vt(s,Bn),vi(s))}}function Hp(n){var A;var e=Ut,t=Zt,r=on,i=Ie,s=jt,a=ut,l=Vn,u=mi,h=n.f;Ut=null,Zt=0,on=null,Ie=h&(cr|bi)?null:n,jt=null,ss(n.ctx),Vn=!1,mi=++go,n.ac!==null&&(Al(()=>{n.ac.abort(Gi)}),n.ac=null);try{n.f|=Du;var f=n.fn,g=f(),p=n.deps;if(Ut!==null){var E;if(Ha(n,Zt),p!==null&&Zt>0)for(p.length=Zt+Ut.length,E=0;E<Ut.length;E++)p[Zt+E]=Ut[E];else n.deps=p=Ut;if(po()&&n.f&bn)for(E=Zt;E<p.length;E++)((A=p[E]).reactions??(A.reactions=[])).push(n)}else p!==null&&Zt<p.length&&(Ha(n,Zt),p.length=Zt);if(ko()&&on!==null&&!Vn&&p!==null&&!(n.f&(It|Bn|Kt)))for(E=0;E<on.length;E++)qp(on[E],n);return i!==null&&i!==n&&(go++,on!==null&&(r===null?r=on:r.push(...on))),n.f&Nr&&(n.f^=Nr),g}catch(S){return mp(S)}finally{n.f^=Du,Ut=e,Zt=t,on=r,Ie=i,jt=s,ss(a),Vn=l,mi=u}}function Jv(n,e){let t=e.reactions;if(t!==null){var r=Y_.call(t,n);if(r!==-1){var i=t.length-1;i===0?t=e.reactions=null:(t[r]=t[i],t.pop())}}t===null&&e.f&It&&(Ut===null||!Ut.includes(e))&&(Vt(e,Bn),e.f&bn&&(e.f^=bn,e.f&=~_i),bp(e),Ha(e,0))}function Ha(n,e){var t=n.deps;if(t!==null)for(var r=e;r<t.length;r++)Jv(n,t[r])}function mo(n){var e=n.f;if(!(e&Dr)){Vt(n,Ot);var t=Oe,r=gi;Oe=n,gi=!0;try{e&(ur|tv)?Yv(n):xp(n),Vp(n);var i=Hp(n);n.teardown=typeof i=="function"?i:null,n.wv=Bp;var s;ku&&Iv&&n.f&Kt&&n.deps}finally{gi=r,Oe=t}}}async function Zv(){await Promise.resolve(),Sv()}function q(n){var e=n.f,t=(e&It)!==0;if(Ie!==null&&!Vn){var r=Oe!==null&&(Oe.f&Dr)!==0;if(!r&&!(jt!=null&&jt.includes(n))){var i=Ie.deps;if(Ie.f&Du)n.rv<go&&(n.rv=go,Ut===null&&i!==null&&i[Zt]===n?Zt++:Ut===null?Ut=[n]:Ut.includes(n)||Ut.push(n));else{(Ie.deps??(Ie.deps=[])).push(n);var s=n.reactions;s===null?n.reactions=[Ie]:s.includes(Ie)||s.push(Ie)}}}if(vs){if(Or.has(n))return Or.get(n);if(t){var a=n,l=a.v;return(!(a.f&Ot)&&a.reactions!==null||Wp(a))&&(l=bc(a)),Or.set(a,l),l}}else t&&(!(at!=null&&at.has(n))||ve!=null&&ve.is_fork&&!po())&&(a=n,No(a)&&Ap(a),gi&&po()&&!(a.f&bn)&&Gp(a));if(at!=null&&at.has(n))return at.get(n);if(n.f&Nr)throw n.v;return n.v}function Gp(n){if(n.deps!==null){n.f^=bn;for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),e.f&It&&!(e.f&bn)&&Gp(e)}}function Wp(n){if(n.v===kt)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(Or.has(e)||e.f&It&&Wp(e))return!0;return!1}function Sl(n){var e=Vn;try{return Vn=!0,n()}finally{Vn=e}}const ey=-7169;function Vt(n,e){n.f=n.f&ey|e}const ty=["touchstart","touchmove"];function ny(n){return ty.includes(n)}const $p=new Set,Uu=new Set;function ry(n,e,t,r={}){function i(s){if(r.capture||js.call(e,s),!s.cancelBubble)return Al(()=>t==null?void 0:t.call(this,s))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?_s(()=>{e.addEventListener(n,i,r)}):e.addEventListener(n,i,r),i}function iy(n,e,t,r,i){var s={capture:r,passive:i},a=ry(n,e,t,s);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&Np(()=>{e.removeEventListener(n,a,s)})}function Oo(n){for(var e=0;e<n.length;e++)$p.add(n[e]);for(var t of Uu)t(n)}let yd=null;function js(n){var C;var e=this,t=e.ownerDocument,r=n.type,i=((C=n.composedPath)==null?void 0:C.call(n))||[],s=i[0]||n.target;yd=n;var a=0,l=yd===n&&n.__root;if(l){var u=i.indexOf(l);if(u!==-1&&(e===document||e===window)){n.__root=e;return}var h=i.indexOf(e);if(h===-1)return;u<=h&&(a=u)}if(s=i[a]||n.target,s!==e){Q_(n,"currentTarget",{configurable:!0,get(){return s||t}});var f=Ie,g=Oe;Wt(null),zn(null);try{for(var p,E=[];s!==null;){var A=s.assignedSlot||s.parentNode||s.host||null;try{var S=s["__"+r];S!=null&&(!s.disabled||n.target===s)&&S.call(s,n)}catch(O){p?E.push(O):p=O}if(n.cancelBubble||A===e||A===null)break;s=A}if(p){for(let O of E)queueMicrotask(()=>{throw O});throw p}}finally{n.__root=e,delete n.currentTarget,Wt(f),zn(g)}}}function sy(n){var e=document.createElement("template");return e.innerHTML=n.replaceAll("<!>","<!---->"),e.content}function Ga(n,e){var t=Oe;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function $e(n,e){var t=(e&vv)!==0,r=(e&yv)!==0,i,s=!n.startsWith("<!>");return()=>{i===void 0&&(i=sy(s?n:"<!>"+n),t||(i=Ba(i)));var a=r||Rp?document.importNode(i,!0):i.cloneNode(!0);if(t){var l=Ba(a),u=a.lastChild;Ga(l,u)}else Ga(a,a);return a}}function wd(n=""){{var e=tr(n+"");return Ga(e,e),e}}function ju(){var n=document.createDocumentFragment(),e=document.createComment(""),t=tr();return n.append(e,t),Ga(e,t),n}function xe(n,e){n!==null&&n.before(e)}function Tn(n,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(n.__t??(n.__t=n.nodeValue))&&(n.__t=t,n.nodeValue=t+"")}function oy(n,e){return ay(n,e)}const Li=new Map;function ay(n,{target:e,anchor:t,props:r={},events:i,context:s,intro:a=!0}){jv();var l=new Set,u=g=>{for(var p=0;p<g.length;p++){var E=g[p];if(!l.has(E)){l.add(E);var A=ny(E);e.addEventListener(E,js,{passive:A});var S=Li.get(E);S===void 0?(document.addEventListener(E,js,{passive:A}),Li.set(E,1)):Li.set(E,S+1)}}};u(Tl($p)),Uu.add(u);var h=void 0,f=Wv(()=>{var g=t??e.appendChild(tr());return kv(g,{pending:()=>{}},p=>{if(s){Ai({});var E=ut;E.c=s}i&&(r.$$events=i),h=n(p,r)||{},s&&Si()}),()=>{var A;for(var p of l){e.removeEventListener(p,js);var E=Li.get(p);--E===0?(document.removeEventListener(p,js),Li.delete(p)):Li.set(p,E)}Uu.delete(u),g!==t&&((A=g.parentNode)==null||A.removeChild(g))}});return ly.set(h,f),h}let ly=new WeakMap;var yn,Nn,tn,di,Co,Ro,El;class uy{constructor(e,t=!0){Cn(this,"anchor");Ae(this,yn,new Map);Ae(this,Nn,new Map);Ae(this,tn,new Map);Ae(this,di,new Set);Ae(this,Co,!0);Ae(this,Ro,()=>{var e=ve;if(k(this,yn).has(e)){var t=k(this,yn).get(e),r=k(this,Nn).get(t);if(r)Rc(r),k(this,di).delete(t);else{var i=k(this,tn).get(t);i&&(k(this,Nn).set(t,i.effect),k(this,tn).delete(t),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of k(this,yn)){if(k(this,yn).delete(s),s===e)break;const l=k(this,tn).get(a);l&&($t(l.effect),k(this,tn).delete(a))}for(const[s,a]of k(this,Nn)){if(s===t||k(this,di).has(s))continue;const l=()=>{if(Array.from(k(this,yn).values()).includes(s)){var h=document.createDocumentFragment();Up(a,h),h.append(tr()),k(this,tn).set(s,{effect:a,fragment:h})}else $t(a);k(this,di).delete(s),k(this,Nn).delete(s)};k(this,Co)||!r?(k(this,di).add(s),pi(a,l,!1)):l()}}});Ae(this,El,e=>{k(this,yn).delete(e);const t=Array.from(k(this,yn).values());for(const[r,i]of k(this,tn))t.includes(r)||($t(i.effect),k(this,tn).delete(r))});this.anchor=e,he(this,Co,t)}ensure(e,t){var r=ve,i=Dp();if(t&&!k(this,Nn).has(e)&&!k(this,tn).has(e))if(i){var s=document.createDocumentFragment(),a=tr();s.append(a),k(this,tn).set(e,{effect:dn(()=>t(a)),fragment:s})}else k(this,Nn).set(e,dn(()=>t(this.anchor)));if(k(this,yn).set(r,e),i){for(const[l,u]of k(this,Nn))l===e?r.skipped_effects.delete(u):r.skipped_effects.add(u);for(const[l,u]of k(this,tn))l===e?r.skipped_effects.delete(u.effect):r.skipped_effects.add(u.effect);r.oncommit(k(this,Ro)),r.ondiscard(k(this,El))}else k(this,Ro).call(this)}}yn=new WeakMap,Nn=new WeakMap,tn=new WeakMap,di=new WeakMap,Co=new WeakMap,Ro=new WeakMap,El=new WeakMap;function wt(n,e,t=!1){var r=new uy(n),i=t?is:0;function s(a,l){r.ensure(a,l)}Cc(()=>{var a=!1;e((l,u=!0)=>{a=!0,s(u,l)}),a||s(!1,null)},i)}function Js(n,e){return e}function cy(n,e,t){for(var r=[],i=e.length,s,a=e.length,l=0;l<i;l++){let g=e[l];pi(g,()=>{if(s){if(s.pending.delete(g),s.done.add(g),s.pending.size===0){var p=n.outrogroups;Bu(Tl(s.done)),p.delete(s),p.size===0&&(n.outrogroups=null)}}else a-=1},!1)}if(a===0){var u=r.length===0&&t!==null;if(u){var h=t,f=h.parentNode;Bv(f),f.append(h),n.items.clear()}Bu(e,!u)}else s={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(s)}function Bu(n,e=!0){for(var t=0;t<n.length;t++)$t(n[t],e)}var Ed;function Zs(n,e,t,r,i,s=null){var a=n,l=new Map,u=(e&dp)!==0;if(u){var h=n;a=h.appendChild(tr())}var f=null,g=Ip(()=>{var O=t();return lp(O)?O:O==null?[]:Tl(O)}),p,E=!0;function A(){C.fallback=f,hy(C,p,a,e,r),f!==null&&(p.length===0?f.f&Xn?(f.f^=Xn,Bs(f,null,a)):Rc(f):pi(f,()=>{f=null}))}var S=Cc(()=>{p=q(g);for(var O=p.length,x=new Set,M=ve,L=Dp(),$=0;$<O;$+=1){var z=p[$],w=r(z,$),_=E?null:l.get(w);_?(_.v&&as(_.v,z),_.i&&as(_.i,$),L&&M.skipped_effects.delete(_.e)):(_=dy(l,E?a:Ed??(Ed=tr()),z,w,$,i,e,t),E||(_.e.f|=Xn),l.set(w,_)),x.add(w)}if(O===0&&s&&!f&&(E?f=dn(()=>s(a)):(f=dn(()=>s(Ed??(Ed=tr()))),f.f|=Xn)),!E)if(L){for(const[v,T]of l)x.has(v)||M.skipped_effects.add(T.e);M.oncommit(A),M.ondiscard(()=>{})}else A();q(g)}),C={effect:S,items:l,outrogroups:null,fallback:f};E=!1}function hy(n,e,t,r,i){var T,I,b,y,Ve,ke,He,rt,Ke;var s=(r&mv)!==0,a=e.length,l=n.items,u=n.effect.first,h,f=null,g,p=[],E=[],A,S,C,O;if(s)for(O=0;O<a;O+=1)A=e[O],S=i(A,O),C=l.get(S).e,C.f&Xn||((I=(T=C.nodes)==null?void 0:T.a)==null||I.measure(),(g??(g=new Set)).add(C));for(O=0;O<a;O+=1){if(A=e[O],S=i(A,O),C=l.get(S).e,n.outrogroups!==null)for(const Ge of n.outrogroups)Ge.pending.delete(C),Ge.done.delete(C);if(C.f&Xn)if(C.f^=Xn,C===u)Bs(C,null,t);else{var x=f?f.next:u;C===n.effect.last&&(n.effect.last=C.prev),C.prev&&(C.prev.next=C.next),C.next&&(C.next.prev=C.prev),vr(n,f,C),vr(n,C,x),Bs(C,x,t),f=C,p=[],E=[],u=f.next;continue}if(C.f&rn&&(Rc(C),s&&((y=(b=C.nodes)==null?void 0:b.a)==null||y.unfix(),(g??(g=new Set)).delete(C))),C!==u){if(h!==void 0&&h.has(C)){if(p.length<E.length){var M=E[0],L;f=M.prev;var $=p[0],z=p[p.length-1];for(L=0;L<p.length;L+=1)Bs(p[L],M,t);for(L=0;L<E.length;L+=1)h.delete(E[L]);vr(n,$.prev,z.next),vr(n,f,$),vr(n,z,M),u=M,f=z,O-=1,p=[],E=[]}else h.delete(C),Bs(C,u,t),vr(n,C.prev,C.next),vr(n,C,f===null?n.effect.first:f.next),vr(n,f,C),f=C;continue}for(p=[],E=[];u!==null&&u!==C;)(h??(h=new Set)).add(u),E.push(u),u=u.next;if(u===null)continue}C.f&Xn||p.push(C),f=C,u=C.next}if(n.outrogroups!==null){for(const Ge of n.outrogroups)Ge.pending.size===0&&(Bu(Tl(Ge.done)),(Ve=n.outrogroups)==null||Ve.delete(Ge));n.outrogroups.size===0&&(n.outrogroups=null)}if(u!==null||h!==void 0){var w=[];if(h!==void 0)for(C of h)C.f&rn||w.push(C);for(;u!==null;)!(u.f&rn)&&u!==n.fallback&&w.push(u),u=u.next;var _=w.length;if(_>0){var v=r&dp&&a===0?t:null;if(s){for(O=0;O<_;O+=1)(He=(ke=w[O].nodes)==null?void 0:ke.a)==null||He.measure();for(O=0;O<_;O+=1)(Ke=(rt=w[O].nodes)==null?void 0:rt.a)==null||Ke.fix()}cy(n,w,v)}}s&&_s(()=>{var Ge,At;if(g!==void 0)for(C of g)(At=(Ge=C.nodes)==null?void 0:Ge.a)==null||At.apply()})}function dy(n,e,t,r,i,s,a,l){var u=a&pv?a&_v?yi(t):Fv(t,!1,!1):null,h=a&gv?yi(i):null;return{v:u,i:h,e:dn(()=>(s(e,u??t,h??i,l),()=>{n.delete(r)}))}}function Bs(n,e,t){if(n.nodes)for(var r=n.nodes.start,i=n.nodes.end,s=e&&!(e.f&Xn)?e.nodes.start:t;r!==null;){var a=Do(r);if(s.before(r),r===i)return;r=a}}function vr(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}const Td=[...` 	
\r\f \v\uFEFF`];function fy(n,e,t){var r=n==null?"":""+n;if(t){for(var i in t)if(t[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var l=a+s;(a===0||Td.includes(r[a-1]))&&(l===r.length||Td.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function py(n,e){return n==null?null:String(n)}function Ia(n,e,t,r,i,s){var a=n.__className;if(a!==t||a===void 0){var l=fy(t,r,s);l==null?n.removeAttribute("class"):n.className=l,n.__className=t}else if(s&&i!==s)for(var u in s){var h=!!s[u];(i==null||h!==!!i[u])&&n.classList.toggle(u,h)}return s}function zu(n,e,t,r){var i=n.__style;if(i!==e){var s=py(e);s==null?n.removeAttribute("style"):n.style.cssText=s,n.__style=e}return r}const gy=Symbol("is custom element"),my=Symbol("is html");function On(n,e,t,r){var i=_y(n);i[e]!==(i[e]=t)&&(e==="loading"&&(n[rv]=t),t==null?n.removeAttribute(e):typeof t!="string"&&vy(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function _y(n){return n.__attributes??(n.__attributes={[gy]:n.nodeName.includes("-"),[my]:n.namespaceURI===wv})}var Id=new Map;function vy(n){var e=n.getAttribute("is")||n.nodeName,t=Id.get(e);if(t)return t;Id.set(e,t=[]);for(var r,i=n,s=Element.prototype;s!==i;){r=X_(i);for(var a in r)r[a].set&&t.push(a);i=up(i)}return t}function yy(n,e,t=e){var r=new WeakSet;qv(n,"input",async i=>{var s=i?n.defaultValue:n.value;if(s=au(n)?lu(s):s,t(s),ve!==null&&r.add(ve),await Zv(),s!==(s=e())){var a=n.selectionStart,l=n.selectionEnd,u=n.value.length;if(n.value=s??"",l!==null){var h=n.value.length;a===l&&l===u&&h>u?(n.selectionStart=h,n.selectionEnd=h):(n.selectionStart=a,n.selectionEnd=Math.min(l,h))}}}),Sl(e)==null&&n.value&&(t(au(n)?lu(n.value):n.value),ve!==null&&r.add(ve)),Sc(()=>{var i=e();if(n===document.activeElement){var s=wa??ve;if(r.has(s))return}au(n)&&i===lu(n.value)||n.type==="date"&&!i&&!n.value||i!==n.value&&(n.value=i??"")})}function au(n){var e=n.type;return e==="number"||e==="range"}function lu(n){return n===""?null:+n}function bd(n,e){return n===e||(n==null?void 0:n[ya])===e}function ba(n={},e,t,r){return $v(()=>{var i,s;return Sc(()=>{i=s,s=[],Sl(()=>{n!==t(...s)&&(e(n,...s),i&&bd(t(...i),n)&&e(null,...i))})}),()=>{_s(()=>{s&&bd(t(...s),n)&&e(null,...s)})}}),n}function qu(n,e,t,r){var i=r,s=!0,a=()=>(s&&(s=!1,i=r),i),l;l=n[e],l===void 0&&r!==void 0&&(l=a());var u;return u=()=>{var h=n[e];return h===void 0?a():(s=!0,h)},u}function Pc(n){ut===null&&iv(),Po&&ut.l!==null?wy(ut).m.push(n):Ac(()=>{const e=Sl(n);if(typeof e=="function")return e})}function wy(n){var e=n.l;return e.u??(e.u={a:[],b:[],m:[]})}const Ey="5";var ap;typeof window<"u"&&((ap=window.__svelte??(window.__svelte={})).v??(ap.v=new Set)).add(Ey);const Ty=()=>{};var Ad={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Iy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Yp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let p=(l&15)<<2|h>>6,E=h&63;u||(E=64,a||(p=64)),r.push(t[f],t[g],t[p],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Kp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Iy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new by;const p=s<<2|l>>4;if(r.push(p),h!==64){const E=l<<4&240|h>>2;if(r.push(E),g!==64){const A=h<<6&192|g;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class by extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ay=function(n){const e=Kp(n);return Yp.encodeByteArray(e,!0)},Wa=function(n){return Ay(n).replace(/\./g,"")},Qp=function(n){try{return Yp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=()=>Sy().__FIREBASE_DEFAULTS__,Ry=()=>{if(typeof process>"u"||typeof Ad>"u")return;const n=Ad.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Py=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Qp(n[1]);return e&&JSON.parse(e)},Cl=()=>{try{return Ty()||Cy()||Ry()||Py()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xp=n=>{var e,t;return(t=(e=Cl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ky=n=>{const e=Xp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Jp=()=>{var n;return(n=Cl())===null||n===void 0?void 0:n.config},Zp=n=>{var e;return(e=Cl())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function eg(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ny(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Wa(JSON.stringify(t)),Wa(JSON.stringify(a)),""].join(".")}const eo={};function Oy(){const n={prod:[],emulator:[]};for(const e of Object.keys(eo))eo[e]?n.emulator.push(e):n.prod.push(e);return n}function Vy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Sd=!1;function tg(n,e){if(typeof window>"u"||typeof document>"u"||!ys(window.location.host)||eo[n]===e||eo[n]||Sd)return;eo[n]=e;function t(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=Oy().prod.length>0;function a(){const p=document.getElementById(r);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function u(p,E){p.setAttribute("width","24"),p.setAttribute("id",E),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function h(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Sd=!0,a()},p}function f(p,E){p.setAttribute("id",E),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function g(){const p=Vy(r),E=t("text"),A=document.getElementById(E)||document.createElement("span"),S=t("learnmore"),C=document.getElementById(S)||document.createElement("a"),O=t("preprendIcon"),x=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const M=p.element;l(M),f(C,S);const L=h();u(x,O),M.append(x,A,C,L),document.body.appendChild(M)}s?(A.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(x.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function My(){var n;const e=(n=Cl())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ly(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Uy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jy(){const n=xt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function By(){return!My()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zy(){try{return typeof indexedDB=="object"}catch{return!1}}function qy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="FirebaseError";class dr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Hy,Object.setPrototypeOf(this,dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vo.prototype.create)}}class Vo{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Gy(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new dr(i,l,r)}}function Gy(n,e){return n.replace(Wy,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Wy=/\{\$([^}]+)}/g;function $y(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Cd(s)&&Cd(a)){if(!wi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Cd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ky(n,e){const t=new Yy(n,e);return t.subscribe.bind(t)}class Yy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Qy(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=uu),i.error===void 0&&(i.error=uu),i.complete===void 0&&(i.complete=uu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function uu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n){return n&&n._delegate?n._delegate:n}class Ei{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zy(e))try{this.getOrInitializeService({instanceIdentifier:ri})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ri){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ri){return this.instances.has(e)}getOptions(e=ri){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ri){return this.component?this.component.multipleInstances?e:ri:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jy(n){return n===ri?void 0:n}function Zy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(we||(we={}));const tw={debug:we.DEBUG,verbose:we.VERBOSE,info:we.INFO,warn:we.WARN,error:we.ERROR,silent:we.SILENT},nw=we.INFO,rw={[we.DEBUG]:"log",[we.VERBOSE]:"log",[we.INFO]:"info",[we.WARN]:"warn",[we.ERROR]:"error"},iw=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=rw[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=nw,this._logHandler=iw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in we))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,we.DEBUG,...e),this._logHandler(this,we.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,we.VERBOSE,...e),this._logHandler(this,we.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,we.INFO,...e),this._logHandler(this,we.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,we.WARN,...e),this._logHandler(this,we.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,we.ERROR,...e),this._logHandler(this,we.ERROR,...e)}}const sw=(n,e)=>e.some(t=>n instanceof t);let Rd,Pd;function ow(){return Rd||(Rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aw(){return Pd||(Pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ng=new WeakMap,Hu=new WeakMap,rg=new WeakMap,cu=new WeakMap,Dc=new WeakMap;function lw(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Vr(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ng.set(t,n)}).catch(()=>{}),Dc.set(e,n),e}function uw(n){if(Hu.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Hu.set(n,e)}let Gu={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hu.get(n);if(e==="objectStoreNames")return n.objectStoreNames||rg.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cw(n){Gu=n(Gu)}function hw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(hu(this),e,...t);return rg.set(r,e.sort?e.sort():[e]),Vr(r)}:aw().includes(n)?function(...e){return n.apply(hu(this),e),Vr(ng.get(this))}:function(...e){return Vr(n.apply(hu(this),e))}}function dw(n){return typeof n=="function"?hw(n):(n instanceof IDBTransaction&&uw(n),sw(n,ow())?new Proxy(n,Gu):n)}function Vr(n){if(n instanceof IDBRequest)return lw(n);if(cu.has(n))return cu.get(n);const e=dw(n);return e!==n&&(cu.set(n,e),Dc.set(e,n)),e}const hu=n=>Dc.get(n);function fw(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Vr(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Vr(a.result),u.oldVersion,u.newVersion,Vr(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const pw=["get","getKey","getAll","getAllKeys","count"],gw=["put","add","delete","clear"],du=new Map;function kd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(du.get(e))return du.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=gw.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pw.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return du.set(e,s),s}cw(n=>({...n,get:(e,t,r)=>kd(e,t)||n.get(e,t,r),has:(e,t)=>!!kd(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_w(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _w(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wu="@firebase/app",Dd="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new kc("@firebase/app"),vw="@firebase/app-compat",yw="@firebase/analytics-compat",ww="@firebase/analytics",Ew="@firebase/app-check-compat",Tw="@firebase/app-check",Iw="@firebase/auth",bw="@firebase/auth-compat",Aw="@firebase/database",Sw="@firebase/data-connect",Cw="@firebase/database-compat",Rw="@firebase/functions",Pw="@firebase/functions-compat",kw="@firebase/installations",Dw="@firebase/installations-compat",Nw="@firebase/messaging",Ow="@firebase/messaging-compat",Vw="@firebase/performance",xw="@firebase/performance-compat",Mw="@firebase/remote-config",Lw="@firebase/remote-config-compat",Fw="@firebase/storage",Uw="@firebase/storage-compat",jw="@firebase/firestore",Bw="@firebase/ai",zw="@firebase/firestore-compat",qw="firebase",Hw="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="[DEFAULT]",Gw={[Wu]:"fire-core",[vw]:"fire-core-compat",[ww]:"fire-analytics",[yw]:"fire-analytics-compat",[Tw]:"fire-app-check",[Ew]:"fire-app-check-compat",[Iw]:"fire-auth",[bw]:"fire-auth-compat",[Aw]:"fire-rtdb",[Sw]:"fire-data-connect",[Cw]:"fire-rtdb-compat",[Rw]:"fire-fn",[Pw]:"fire-fn-compat",[kw]:"fire-iid",[Dw]:"fire-iid-compat",[Nw]:"fire-fcm",[Ow]:"fire-fcm-compat",[Vw]:"fire-perf",[xw]:"fire-perf-compat",[Mw]:"fire-rc",[Lw]:"fire-rc-compat",[Fw]:"fire-gcs",[Uw]:"fire-gcs-compat",[jw]:"fire-fst",[zw]:"fire-fst-compat",[Bw]:"fire-vertex","fire-js":"fire-js",[qw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Map,Ww=new Map,Ku=new Map;function Nd(n,e){try{n.container.addComponent(e)}catch(t){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ls(n){const e=n.name;if(Ku.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;Ku.set(e,n);for(const t of $a.values())Nd(t,n);for(const t of Ww.values())Nd(t,n);return!0}function Nc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function En(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Vo("app","Firebase",$w);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ei("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=Hw;function ig(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$u,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(t||(t=Jp()),!t)throw xr.create("no-options");const s=$a.get(i);if(s){if(wi(t,s.options)&&wi(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const a=new ew(i);for(const u of Ku.values())a.addComponent(u);const l=new Kw(t,r,a);return $a.set(i,l),l}function sg(n=$u){const e=$a.get(n);if(!e&&n===$u&&Jp())return ig();if(!e)throw xr.create("no-app",{appName:n});return e}function Mr(n,e,t){var r;let i=(r=Gw[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(l.join(" "));return}ls(new Ei(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="firebase-heartbeat-database",Qw=1,_o="firebase-heartbeat-store";let fu=null;function og(){return fu||(fu=fw(Yw,Qw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_o)}catch(t){console.warn(t)}}}}).catch(n=>{throw xr.create("idb-open",{originalErrorMessage:n.message})})),fu}async function Xw(n){try{const t=(await og()).transaction(_o),r=await t.objectStore(_o).get(ag(n));return await t.done,r}catch(e){if(e instanceof dr)ir.warn(e.message);else{const t=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(t.message)}}}async function Od(n,e){try{const r=(await og()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,ag(n)),await r.done}catch(t){if(t instanceof dr)ir.warn(t.message);else{const r=xr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ir.warn(r.message)}}}function ag(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=1024,Zw=30;class eE{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nE(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>Zw){const a=rE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vd(),{heartbeatsToSend:r,unsentEntries:i}=tE(this._heartbeatsCache.heartbeats),s=Wa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ir.warn(t),""}}}function Vd(){return new Date().toISOString().substring(0,10)}function tE(n,e=Jw){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),xd(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),xd(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class nE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zy()?qy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Od(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Od(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function xd(n){return Wa(JSON.stringify({version:2,heartbeats:n})).length}function rE(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(n){ls(new Ei("platform-logger",e=>new mw(e),"PRIVATE")),ls(new Ei("heartbeat",e=>new eE(e),"PRIVATE")),Mr(Wu,Dd,n),Mr(Wu,Dd,"esm2017"),Mr("fire-js","")}iE("");function Oc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function lg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sE=lg,ug=new Vo("auth","Firebase",lg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new kc("@firebase/auth");function oE(n,...e){Ka.logLevel<=we.WARN&&Ka.warn(`Auth (${ws}): ${n}`,...e)}function Aa(n,...e){Ka.logLevel<=we.ERROR&&Ka.error(`Auth (${ws}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(n,...e){throw Vc(n,...e)}function xn(n,...e){return Vc(n,...e)}function cg(n,e,t){const r=Object.assign(Object.assign({},sE()),{[e]:t});return new Vo("auth","Firebase",r).create(e,{appName:n.name})}function Lr(n){return cg(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ug.create(n,...e)}function ae(n,e,...t){if(!n)throw Vc(e,...t)}function Zn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Aa(e),new Error(e)}function or(n,e){n||Zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function aE(){return Md()==="http:"||Md()==="https:"}function Md(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aE()||Fy()||"connection"in navigator)?navigator.onLine:!0}function uE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.shortDelay=e,this.longDelay=t,or(t>e,"Short delay should be less than long delay!"),this.isMobile=xy()||Uy()}get(){return lE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(n,e){or(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dE=new Mo(3e4,6e4);function Rl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Es(n,e,t,r,i={}){return dg(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=xo(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},s);return Ly()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ys(n.emulatorConfig.host)&&(h.credentials="include"),hg.fetch()(await pg(n,n.config.apiHost,t,l),h)})}async function dg(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cE),e);try{const i=new fE(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ua(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ua(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ua(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw cg(n,f,h);sr(n,f)}}catch(i){if(i instanceof dr)throw i;sr(n,"network-request-failed",{message:String(i)})}}async function fg(n,e,t,r,i={}){const s=await Es(n,e,t,r,i);return"mfaPendingCredential"in s&&sr(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function pg(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?xc(n.config,i):`${n.config.apiScheme}://${i}`;return hE.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}class fE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),dE.get())})}}function ua(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=xn(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(n,e){return Es(n,"POST","/v1/accounts:delete",e)}async function Ya(n,e){return Es(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gE(n,e=!1){const t=Yt(n),r=await t.getIdToken(e),i=Mc(r);ae(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:to(pu(i.auth_time)),issuedAtTime:to(pu(i.iat)),expirationTime:to(pu(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pu(n){return Number(n)*1e3}function Mc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Aa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Qp(t);return i?JSON.parse(i):(Aa("Failed to decode base64 JWT payload"),null)}catch(i){return Aa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ld(n){const e=Mc(n);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof dr&&mE(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function mE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(n){var e;const t=n.auth,r=await n.getIdToken(),i=await vo(n,Ya(t,{idToken:r}));ae(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gg(s.providerUserInfo):[],l=yE(n.providerData,a),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Qu(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function vE(n){const e=Yt(n);await Qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yE(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gg(n){return n.map(e=>{var{providerId:t}=e,r=Oc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(n,e){const t=await dg(n,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await pg(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&ys(n.emulatorConfig.host)&&(u.credentials="include"),hg.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function EE(n,e){return Es(n,"POST","/v2/accounts:revokeToken",Rl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const t=Ld(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await wE(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Yi;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(ae(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(ae(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yi,this.toJSON())}_performRefresh(){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n,e){ae(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Oc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _E(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await vo(this,this.stsTokenManager.getToken(this.auth,e));return ae(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gE(this,e)}reload(){return vE(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(En(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await vo(this,pE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,h,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(i=t.email)!==null&&i!==void 0?i:void 0,E=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,A=(a=t.photoURL)!==null&&a!==void 0?a:void 0,S=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,O=(h=t.createdAt)!==null&&h!==void 0?h:void 0,x=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:L,isAnonymous:$,providerData:z,stsTokenManager:w}=t;ae(M&&w,e,"internal-error");const _=Yi.fromJSON(this.name,w);ae(typeof M=="string",e,"internal-error"),yr(g,e.name),yr(p,e.name),ae(typeof L=="boolean",e,"internal-error"),ae(typeof $=="boolean",e,"internal-error"),yr(E,e.name),yr(A,e.name),yr(S,e.name),yr(C,e.name),yr(O,e.name),yr(x,e.name);const v=new In({uid:M,auth:e,email:p,emailVerified:L,displayName:g,isAnonymous:$,photoURL:A,phoneNumber:E,tenantId:S,stsTokenManager:_,createdAt:O,lastLoginAt:x});return z&&Array.isArray(z)&&(v.providerData=z.map(T=>Object.assign({},T))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,t,r=!1){const i=new Yi;i.updateFromServerResponse(t);const s=new In({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Qa(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ae(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?gg(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Yi;l.updateFromIdToken(r);const u=new In({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Qu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd=new Map;function er(n){or(n instanceof Function,"Expected a class definition");let e=Fd.get(n);return e?(or(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mg.type="NONE";const Ud=mg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(n,e,t){return`firebase:${n}:${e}:${t}`}class Qi{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sa("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ya(this.auth,{idToken:e}).catch(()=>{});return t?In._fromGetAccountInfoResponse(this.auth,t,e):null}return In._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Qi(er(Ud),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||er(Ud);const a=Sa(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const p=await Ya(e,{idToken:f}).catch(()=>{});if(!p)break;g=await In._fromGetAccountInfoResponse(e,p,f)}else g=In._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Qi(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Qi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_g(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tg(e))return"Blackberry";if(Ig(e))return"Webos";if(vg(e))return"Safari";if((e.includes("chrome/")||yg(e))&&!e.includes("edge/"))return"Chrome";if(Eg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _g(n=xt()){return/firefox\//i.test(n)}function vg(n=xt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yg(n=xt()){return/crios\//i.test(n)}function wg(n=xt()){return/iemobile/i.test(n)}function Eg(n=xt()){return/android/i.test(n)}function Tg(n=xt()){return/blackberry/i.test(n)}function Ig(n=xt()){return/webos/i.test(n)}function Lc(n=xt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function TE(n=xt()){var e;return Lc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IE(){return jy()&&document.documentMode===10}function bg(n=xt()){return Lc(n)||Eg(n)||Ig(n)||Tg(n)||/windows phone/i.test(n)||wg(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n,e=[]){let t;switch(n){case"Browser":t=jd(xt());break;case"Worker":t=`${jd(xt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ws}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(n,e={}){return Es(n,"GET","/v2/passwordPolicy",Rl(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=6;class CE{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:SE,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bd(this),this.idTokenSubscription=new Bd(this),this.beforeStateQueue=new bE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ug,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=er(t)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Qi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ya(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(En(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qa(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(En(this.app))return Promise.reject(Lr(this));const t=e?Yt(e):null;return t&&ae(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return En(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return En(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(er(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AE(this),t=new CE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Vo("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await EE(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&er(e)||this._popupRedirectResolver;ae(t,this,"argument-error"),this.redirectPersistenceManager=await Qi.create(this,[er(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ag(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(En(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&oE(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Pl(n){return Yt(n)}class Bd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ky(t=>this.observer=t)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PE(n){Fc=n}function kE(n){return Fc.loadJS(n)}function DE(){return Fc.gapiScript}function NE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(n,e){const t=Nc(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(wi(s,e??{}))return i;sr(i,"already-initialized")}return t.initialize({options:e})}function VE(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(er);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xE(n,e,t){const r=Pl(n);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Sg(e),{host:a,port:l}=ME(e),u=l===null?"":`:${l}`,h={url:`${s}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(wi(h,r.config.emulator)&&wi(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ys(a)?(eg(`${s}//${a}${u}`),tg("Auth",!0)):LE()}function Sg(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ME(n){const e=Sg(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zd(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:zd(a)}}}function zd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function LE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zn("not implemented")}_getIdTokenResponse(e){return Zn("not implemented")}_linkToIdToken(e,t){return Zn("not implemented")}_getReauthenticationResolver(e){return Zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(n,e){return fg(n,"POST","/v1/accounts:signInWithIdp",Rl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="http://localhost";class Ti extends Cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ti(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Oc(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Ti(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Xi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Xi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xi(e,t)}buildRequest(){const e={requestUri:FE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends Rg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends Lo{constructor(){super("facebook.com")}static credential(e){return Ti._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Er.credential(e.oauthAccessToken)}catch{return null}}}Er.FACEBOOK_SIGN_IN_METHOD="facebook.com";Er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends Lo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ti._fromParams({providerId:Tr.PROVIDER_ID,signInMethod:Tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tr.credentialFromTaggedObject(e)}static credentialFromError(e){return Tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Tr.credential(t,r)}catch{return null}}}Tr.GOOGLE_SIGN_IN_METHOD="google.com";Tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Lo{constructor(){super("github.com")}static credential(e){return Ti._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch{return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Lo{constructor(){super("twitter.com")}static credential(e,t){return Ti._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return br.credential(t,r)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UE(n,e){return fg(n,"POST","/v1/accounts:signUp",Rl(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await In._fromIdTokenResponse(e,r,i),a=qd(r);return new Br({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=qd(r);return new Br({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function qd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jE(n){var e;if(En(n.app))return Promise.reject(Lr(n));const t=Pl(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Br({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await UE(t,{returnSecureToken:!0}),i=await Br._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends dr{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Xa(e,t,r,i)}}function Pg(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xa._fromErrorAndOperation(n,s,e,r):s})}async function BE(n,e,t=!1){const r=await vo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Br._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zE(n,e,t=!1){const{auth:r}=n;if(En(r.app))return Promise.reject(Lr(r));const i="reauthenticate";try{const s=await vo(n,Pg(r,i,e,n),t);ae(s.idToken,r,"internal-error");const a=Mc(s.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(n.uid===l,r,"user-mismatch"),Br._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&sr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(n,e,t=!1){if(En(n.app))return Promise.reject(Lr(n));const r="signIn",i=await Pg(n,r,e),s=await Br._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function HE(n,e,t,r){return Yt(n).onIdTokenChanged(e,t,r)}function GE(n,e,t){return Yt(n).beforeAuthStateChanged(e,t)}const Ja="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ja,"1"),this.storage.removeItem(Ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=1e3,$E=10;class Dg extends kg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);IE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$E):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},WE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Dg.type="LOCAL";const KE=Dg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng extends kg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ng.type="SESSION";const Og=Ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),u=await YE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Uc("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(g){const p=g;if(p.data.eventId===h)switch(p.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(p.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function XE(n){Mn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return typeof Mn().WorkerGlobalScope<"u"&&typeof Mn().importScripts=="function"}async function JE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function eT(){return Vg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="firebaseLocalStorageDb",tT=1,Za="firebaseLocalStorage",Mg="fbase_key";class Fo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dl(n,e){return n.transaction([Za],e?"readwrite":"readonly").objectStore(Za)}function nT(){const n=indexedDB.deleteDatabase(xg);return new Fo(n).toPromise()}function Xu(){const n=indexedDB.open(xg,tT);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Za,{keyPath:Mg})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Za)?e(r):(r.close(),await nT(),e(await Xu()))})})}async function Hd(n,e,t){const r=Dl(n,!0).put({[Mg]:e,value:t});return new Fo(r).toPromise()}async function rT(n,e){const t=Dl(n,!1).get(e),r=await new Fo(t).toPromise();return r===void 0?null:r.value}function Gd(n,e){const t=Dl(n,!0).delete(e);return new Fo(t).toPromise()}const iT=800,sT=3;class Lg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xu(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kl._getInstance(eT()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await JE(),!this.activeServiceWorker)return;this.sender=new QE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xu();return await Hd(e,Ja,"1"),await Gd(e,Ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>rT(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dl(i,!1).getAll();return new Fo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lg.type="LOCAL";const oT=Lg;new Mo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n,e){return e?er(e):(ae(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc extends Cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lT(n){return qE(n.auth,new jc(n),n.bypassAuthState)}function uT(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),zE(t,new jc(n),n.bypassAuthState)}async function cT(n){const{auth:e,user:t}=n;return ae(t,e,"internal-error"),BE(t,new jc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lT;case"linkViaPopup":case"linkViaRedirect":return cT;case"reauthViaPopup":case"reauthViaRedirect":return uT;default:sr(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new Mo(2e3,1e4);class Wi extends Fg{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hT.get())};e()}}Wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT="pendingRedirect",Ca=new Map;class fT extends Fg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ca.get(this.auth._key());if(!e){try{const r=await pT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ca.set(this.auth._key(),e)}return this.bypassAuthState||Ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pT(n,e){const t=_T(e),r=mT(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function gT(n,e){Ca.set(n._key(),e)}function mT(n){return er(n._redirectPersistence)}function _T(n){return Sa(dT,n.config.apiKey,n.name)}async function vT(n,e,t=!1){if(En(n.app))return Promise.reject(Lr(n));const r=Pl(n),i=aT(r,e),a=await new fT(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=10*60*1e3;class wT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ET(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ug(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xn(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wd(e))}saveEventToCache(e){this.cachedEventUids.add(Wd(e)),this.lastProcessedEventTime=Date.now()}}function Wd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ug({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ET(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ug(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(n,e={}){return Es(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bT=/^https?/;async function AT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await TT(n);for(const t of e)try{if(ST(t))return}catch{}sr(n,"unauthorized-domain")}function ST(n){const e=Yu(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!bT.test(t))return!1;if(IT.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Mo(3e4,6e4);function $d(){const n=Mn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function RT(n){return new Promise((e,t)=>{var r,i,s;function a(){$d(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$d(),t(xn(n,"network-request-failed"))},timeout:CT.get()})}if(!((i=(r=Mn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Mn().gapi)===null||s===void 0)&&s.load)a();else{const l=NE("iframefcb");return Mn()[l]=()=>{gapi.load?a():t(xn(n,"network-request-failed"))},kE(`${DE()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ra=null,e})}let Ra=null;function PT(n){return Ra=Ra||RT(n),Ra}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new Mo(5e3,15e3),DT="__/auth/iframe",NT="emulator/auth/iframe",OT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xT(n){const e=n.config;ae(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xc(e,NT):`https://${n.config.authDomain}/${DT}`,r={apiKey:e.apiKey,appName:n.name,v:ws},i=VT.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${xo(r).slice(1)}`}async function MT(n){const e=await PT(n),t=Mn().gapi;return ae(t,n,"internal-error"),e.open({where:document.body,url:xT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=xn(n,"network-request-failed"),l=Mn().setTimeout(()=>{s(a)},kT.get());function u(){Mn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FT=500,UT=600,jT="_blank",BT="http://localhost";class Kd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zT(n,e,t,r=FT,i=UT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},LT),{width:r.toString(),height:i.toString(),top:s,left:a}),h=xt().toLowerCase();t&&(l=yg(h)?jT:t),_g(h)&&(e=e||BT,u.scrollbars="yes");const f=Object.entries(u).reduce((p,[E,A])=>`${p}${E}=${A},`,"");if(TE(h)&&l!=="_self")return qT(e||"",l),new Kd(null);const g=window.open(e||"",l,f);ae(g,n,"popup-blocked");try{g.focus()}catch{}return new Kd(g)}function qT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="__/auth/handler",GT="emulator/auth/handler",WT=encodeURIComponent("fac");async function Yd(n,e,t,r,i,s){ae(n.config.authDomain,n,"auth-domain-config-required"),ae(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ws,eventId:i};if(e instanceof Rg){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",$y(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Lo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${WT}=${encodeURIComponent(u)}`:"";return`${$T(n)}?${xo(l).slice(1)}${h}`}function $T({config:n}){return n.emulator?xc(n,GT):`https://${n.authDomain}/${HT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="webStorageSupport";class KT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Og,this._completeRedirectFn=vT,this._overrideRedirectResult=gT}async _openPopup(e,t,r,i){var s;or((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Yd(e,t,r,Yu(),i);return zT(e,a,Uc())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Yd(e,t,r,Yu(),i);return XE(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(or(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await MT(e),r=new wT(e);return t.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gu,{type:gu},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gu];a!==void 0&&t(!!a),sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=AT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return bg()||vg()||Lc()}}const YT=KT;var Qd="@firebase/auth",Xd="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function JT(n){ls(new Ei("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ag(n)},h=new RE(r,i,s,u);return VE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ls(new Ei("auth-internal",e=>{const t=Pl(e.getProvider("auth").getImmediate());return(r=>new QT(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mr(Qd,Xd,XT(n)),Mr(Qd,Xd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=5*60,eI=Zp("authIdTokenMaxAge")||ZT;let Jd=null;const tI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>eI)return;const i=t==null?void 0:t.token;Jd!==i&&(Jd=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function nI(n=sg()){const e=Nc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=OE(n,{popupRedirectResolver:YT,persistence:[oT,KE,Og]}),r=Zp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=tI(s.toString());GE(t,a,()=>a(t.currentUser)),HE(t,l=>a(l))}}const i=Xp("auth");return i&&xE(t,`http://${i}`),t}function rI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}PE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=xn("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",rI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});JT("Browser");var iI="firebase",sI="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mr(iI,sI,"app");var Zd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fr,jg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function v(){}v.prototype=_.prototype,w.D=_.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,I,b){for(var y=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)y[Ve-2]=arguments[Ve];return _.prototype[I].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,v){v||(v=0);var T=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)T[I]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(I=0;16>I;++I)T[I]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=w.g[0],v=w.g[1],I=w.g[2];var b=w.g[3],y=_+(b^v&(I^b))+T[0]+3614090360&4294967295;_=v+(y<<7&4294967295|y>>>25),y=b+(I^_&(v^I))+T[1]+3905402710&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(v^b&(_^v))+T[2]+606105819&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(_^I&(b^_))+T[3]+3250441966&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(b^v&(I^b))+T[4]+4118548399&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(I^_&(v^I))+T[5]+1200080426&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(v^b&(_^v))+T[6]+2821735955&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(_^I&(b^_))+T[7]+4249261313&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(b^v&(I^b))+T[8]+1770035416&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(I^_&(v^I))+T[9]+2336552879&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(v^b&(_^v))+T[10]+4294925233&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(_^I&(b^_))+T[11]+2304563134&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(b^v&(I^b))+T[12]+1804603682&4294967295,_=v+(y<<7&4294967295|y>>>25),y=b+(I^_&(v^I))+T[13]+4254626195&4294967295,b=_+(y<<12&4294967295|y>>>20),y=I+(v^b&(_^v))+T[14]+2792965006&4294967295,I=b+(y<<17&4294967295|y>>>15),y=v+(_^I&(b^_))+T[15]+1236535329&4294967295,v=I+(y<<22&4294967295|y>>>10),y=_+(I^b&(v^I))+T[1]+4129170786&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(_^v))+T[6]+3225465664&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(b^_))+T[11]+643717713&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(I^b))+T[0]+3921069994&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^b&(v^I))+T[5]+3593408605&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(_^v))+T[10]+38016083&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(b^_))+T[15]+3634488961&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(I^b))+T[4]+3889429448&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^b&(v^I))+T[9]+568446438&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(_^v))+T[14]+3275163606&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(b^_))+T[3]+4107603335&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(I^b))+T[8]+1163531501&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(I^b&(v^I))+T[13]+2850285829&4294967295,_=v+(y<<5&4294967295|y>>>27),y=b+(v^I&(_^v))+T[2]+4243563512&4294967295,b=_+(y<<9&4294967295|y>>>23),y=I+(_^v&(b^_))+T[7]+1735328473&4294967295,I=b+(y<<14&4294967295|y>>>18),y=v+(b^_&(I^b))+T[12]+2368359562&4294967295,v=I+(y<<20&4294967295|y>>>12),y=_+(v^I^b)+T[5]+4294588738&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^I)+T[8]+2272392833&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^v)+T[11]+1839030562&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^_)+T[14]+4259657740&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^b)+T[1]+2763975236&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^I)+T[4]+1272893353&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^v)+T[7]+4139469664&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^_)+T[10]+3200236656&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^b)+T[13]+681279174&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^I)+T[0]+3936430074&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^v)+T[3]+3572445317&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^_)+T[6]+76029189&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(v^I^b)+T[9]+3654602809&4294967295,_=v+(y<<4&4294967295|y>>>28),y=b+(_^v^I)+T[12]+3873151461&4294967295,b=_+(y<<11&4294967295|y>>>21),y=I+(b^_^v)+T[15]+530742520&4294967295,I=b+(y<<16&4294967295|y>>>16),y=v+(I^b^_)+T[2]+3299628645&4294967295,v=I+(y<<23&4294967295|y>>>9),y=_+(I^(v|~b))+T[0]+4096336452&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~I))+T[7]+1126891415&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~v))+T[14]+2878612391&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~_))+T[5]+4237533241&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~b))+T[12]+1700485571&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~I))+T[3]+2399980690&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~v))+T[10]+4293915773&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~_))+T[1]+2240044497&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~b))+T[8]+1873313359&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~I))+T[15]+4264355552&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~v))+T[6]+2734768916&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~_))+T[13]+1309151649&4294967295,v=I+(y<<21&4294967295|y>>>11),y=_+(I^(v|~b))+T[4]+4149444226&4294967295,_=v+(y<<6&4294967295|y>>>26),y=b+(v^(_|~I))+T[11]+3174756917&4294967295,b=_+(y<<10&4294967295|y>>>22),y=I+(_^(b|~v))+T[2]+718787259&4294967295,I=b+(y<<15&4294967295|y>>>17),y=v+(b^(I|~_))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+I&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var v=_-this.blockSize,T=this.B,I=this.h,b=0;b<_;){if(I==0)for(;b<=v;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<_;)if(T[I++]=w.charCodeAt(b++),I==this.blockSize){i(this,T),I=0;break}}else for(;b<_;)if(T[I++]=w[b++],I==this.blockSize){i(this,T),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var v=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=v&255,v/=256;for(this.u(w),w=Array(16),_=v=0;4>_;++_)for(var T=0;32>T;T+=8)w[v++]=this.g[_]>>>T&255;return w};function s(w,_){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=_(w)}function a(w,_){this.h=_;for(var v=[],T=!0,I=w.length-1;0<=I;I--){var b=w[I]|0;T&&b==_||(v[I]=b,T=!1)}this.g=v}var l={};function u(w){return-128<=w&&128>w?s(w,function(_){return new a([_|0],0>_?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return C(h(-w));for(var _=[],v=1,T=0;w>=v;T++)_[T]=w/v|0,v*=4294967296;return new a(_,0)}function f(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return C(f(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),T=g,I=0;I<w.length;I+=8){var b=Math.min(8,w.length-I),y=parseInt(w.substring(I,I+b),_);8>b?(b=h(Math.pow(_,b)),T=T.j(b).add(h(y))):(T=T.j(v),T=T.add(h(y)))}return T}var g=u(0),p=u(1),E=u(16777216);n=a.prototype,n.m=function(){if(S(this))return-C(this).m();for(var w=0,_=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*_,_*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(S(this))return"-"+C(this).toString(w);for(var _=h(Math.pow(w,6)),v=this,T="";;){var I=L(v,_).g;v=O(v,I.j(_));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=I,A(v))return b+T;for(;6>b.length;)b="0"+b;T=b+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function S(w){return w.h==-1}n.l=function(w){return w=O(this,w),S(w)?-1:A(w)?0:1};function C(w){for(var _=w.g.length,v=[],T=0;T<_;T++)v[T]=~w.g[T];return new a(v,~w.h).add(p)}n.abs=function(){return S(this)?C(this):this},n.add=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],T=0,I=0;I<=_;I++){var b=T+(this.i(I)&65535)+(w.i(I)&65535),y=(b>>>16)+(this.i(I)>>>16)+(w.i(I)>>>16);T=y>>>16,b&=65535,y&=65535,v[I]=y<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function O(w,_){return w.add(C(_))}n.j=function(w){if(A(this)||A(w))return g;if(S(this))return S(w)?C(this).j(C(w)):C(C(this).j(w));if(S(w))return C(this.j(C(w)));if(0>this.l(E)&&0>w.l(E))return h(this.m()*w.m());for(var _=this.g.length+w.g.length,v=[],T=0;T<2*_;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<w.g.length;I++){var b=this.i(T)>>>16,y=this.i(T)&65535,Ve=w.i(I)>>>16,ke=w.i(I)&65535;v[2*T+2*I]+=y*ke,x(v,2*T+2*I),v[2*T+2*I+1]+=b*ke,x(v,2*T+2*I+1),v[2*T+2*I+1]+=y*Ve,x(v,2*T+2*I+1),v[2*T+2*I+2]+=b*Ve,x(v,2*T+2*I+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new a(v,0)};function x(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function M(w,_){this.g=w,this.h=_}function L(w,_){if(A(_))throw Error("division by zero");if(A(w))return new M(g,g);if(S(w))return _=L(C(w),_),new M(C(_.g),C(_.h));if(S(_))return _=L(w,C(_)),new M(C(_.g),_.h);if(30<w.g.length){if(S(w)||S(_))throw Error("slowDivide_ only works with positive integers.");for(var v=p,T=_;0>=T.l(w);)v=$(v),T=$(T);var I=z(v,1),b=z(T,1);for(T=z(T,2),v=z(v,2);!A(T);){var y=b.add(T);0>=y.l(w)&&(I=I.add(v),b=y),T=z(T,1),v=z(v,1)}return _=O(w,I.j(_)),new M(I,_)}for(I=g;0<=w.l(_);){for(v=Math.max(1,Math.floor(w.m()/_.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),b=h(v),y=b.j(_);S(y)||0<y.l(w);)v-=T,b=h(v),y=b.j(_);A(b)&&(b=p),I=I.add(b),w=O(w,y)}return new M(I,w)}n.A=function(w){return L(this,w).h},n.and=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)&w.i(T);return new a(v,this.h&w.h)},n.or=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)|w.i(T);return new a(v,this.h|w.h)},n.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)^w.i(T);return new a(v,this.h^w.h)};function $(w){for(var _=w.g.length+1,v=[],T=0;T<_;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(v,w.h)}function z(w,_){var v=_>>5;_%=32;for(var T=w.g.length-v,I=[],b=0;b<T;b++)I[b]=0<_?w.i(b+v)>>>_|w.i(b+v+1)<<32-_:w.i(b+v);return new a(I,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Fr=a}).apply(typeof Zd<"u"?Zd:typeof self<"u"?self:typeof window<"u"?window:{});var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bg,zs,zg,Pa,Ju,qg,Hg,Gg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ca=="object"&&ca];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var R=o[m];if(!(R in d))break e;d=d[R]}o=o[o.length-1],m=d[o],c=c(m),c!=m&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,m=!1,R={next:function(){if(!m&&d<o.length){var P=d++;return{value:c(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function g(o,c,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function p(o,c,d){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,p.apply(null,arguments)}function E(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function A(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,R,P){for(var B=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)B[Me-2]=arguments[Me];return c.prototype[R].apply(m,B)}}function S(o){const c=o.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=o[m];return d}return[]}function C(o,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const R=o.length||0,P=m.length||0;o.length=R+P;for(let B=0;B<P;B++)o[R+B]=m[B]}else o.push(m)}}class O{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var $=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function z(o,c,d){for(const m in o)c.call(d,o[m],m,o)}function w(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function _(o){const c={};for(const d in o)c[d]=o[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)o[d]=m[d];for(let P=0;P<v.length;P++)d=v[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function I(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function b(o){l.setTimeout(()=>{throw o},0)}function y(){var o=Ge;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Ve{constructor(){this.h=this.g=null}add(c,d){const m=ke.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var ke=new O(()=>new He,o=>o.reset());class He{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let rt,Ke=!1,Ge=new Ve,At=()=>{const o=l.Promise.resolve(void 0);rt=()=>{o.then(Qt)}};var Qt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){b(d)}var c=ke;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Ke=!1};function ft(){this.s=this.s,this.C=this.C}ft.prototype.s=!1,ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Je(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Je.prototype.h=function(){this.defaultPrevented=!0};var As=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function An(o,c){if(Je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if($){e:{try{L(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ss[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&An.aa.h.call(this)}}A(An,Je);var Ss={2:"touch",3:"pen",4:"mouse"};An.prototype.h=function(){An.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var pr="closure_listenable_"+(1e6*Math.random()|0),Cs=0;function ne(o,c,d,m,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=R,this.key=++Cs,this.da=this.fa=!1}function le(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function de(o){this.src=o,this.g={},this.h=0}de.prototype.add=function(o,c,d,m,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var B=D(o,c,m,R);return-1<B?(c=o[B],d||(c.fa=!1)):(c=new ne(c,this.src,P,!!m,R),c.fa=d,o.push(c)),c};function X(o,c){var d=c.type;if(d in o.g){var m=o.g[d],R=Array.prototype.indexOf.call(m,c,void 0),P;(P=0<=R)&&Array.prototype.splice.call(m,R,1),P&&(le(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function D(o,c,d,m){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==c&&P.capture==!!d&&P.ha==m)return R}return-1}var U="closure_lm_"+(1e6*Math.random()|0),F={};function Y(o,c,d,m,R){if(Array.isArray(c)){for(var P=0;P<c.length;P++)Y(o,c[P],d,m,R);return null}return d=Be(d),o&&o[pr]?o.K(c,d,h(m)?!!m.capture:!1,R):H(o,c,d,!1,m,R)}function H(o,c,d,m,R,P){if(!c)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,Me=fe(o);if(Me||(o[U]=Me=new de(o)),d=Me.add(c,d,m,B,P),d.proxy)return d;if(m=Z(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)As||(R=B),R===void 0&&(R=!1),o.addEventListener(c.toString(),m,R);else if(o.attachEvent)o.attachEvent(Q(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Z(){function o(d){return c.call(o.src,o.listener,d)}const c=De;return o}function W(o,c,d,m,R){if(Array.isArray(c))for(var P=0;P<c.length;P++)W(o,c[P],d,m,R);else m=h(m)?!!m.capture:!!m,d=Be(d),o&&o[pr]?(o=o.i,c=String(c).toString(),c in o.g&&(P=o.g[c],d=D(P,d,m,R),-1<d&&(le(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[c],o.h--)))):o&&(o=fe(o))&&(c=o.g[c.toString()],o=-1,c&&(o=D(c,d,m,R)),(d=-1<o?c[o]:null)&&J(d))}function J(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[pr])X(c.i,o);else{var d=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(d,m,o.capture):c.detachEvent?c.detachEvent(Q(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=fe(c))?(X(d,o),d.h==0&&(d.src=null,c[U]=null)):le(o)}}}function Q(o){return o in F?F[o]:F[o]="on"+o}function De(o,c){if(o.da)o=!0;else{c=new An(c,this);var d=o.listener,m=o.ha||o.src;o.fa&&J(o),o=d.call(m,c)}return o}function fe(o){return o=o[U],o instanceof de?o:null}var Ce="__closure_events_fn_"+(1e9*Math.random()>>>0);function Be(o){return typeof o=="function"?o:(o[Ce]||(o[Ce]=function(c){return o.handleEvent(c)}),o[Ce])}function me(){ft.call(this),this.i=new de(this),this.M=this,this.F=null}A(me,ft),me.prototype[pr]=!0,me.prototype.removeEventListener=function(o,c,d,m){W(this,o,c,d,m)};function Pe(o,c){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new Je(c,o);else if(c instanceof Je)c.target=c.target||o;else{var R=c;c=new Je(m,o),T(c,R)}if(R=!0,d)for(var P=d.length-1;0<=P;P--){var B=c.g=d[P];R=_e(B,m,!0,c)&&R}if(B=c.g=o,R=_e(B,m,!0,c)&&R,R=_e(B,m,!1,c)&&R,d)for(P=0;P<d.length;P++)B=c.g=d[P],R=_e(B,m,!1,c)&&R}me.prototype.N=function(){if(me.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],m=0;m<d.length;m++)le(d[m]);delete o.g[c],o.h--}}this.F=null},me.prototype.K=function(o,c,d,m){return this.i.add(String(o),c,!1,d,m)},me.prototype.L=function(o,c,d,m){return this.i.add(String(o),c,!0,d,m)};function _e(o,c,d,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,P=0;P<c.length;++P){var B=c[P];if(B&&!B.da&&B.capture==d){var Me=B.listener,vt=B.ha||B.src;B.fa&&X(o.i,B),R=Me.call(vt,m)!==!1&&R}}return R&&!m.defaultPrevented}function Ne(o,c,d){if(typeof o=="function")d&&(o=p(o,d));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Ye(o){o.g=Ne(()=>{o.g=null,o.i&&(o.i=!1,Ye(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Ze extends ft{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ct(o){ft.call(this),this.h=o,this.g={}}A(ct,ft);var Mt=[];function Wn(o){z(o.g,function(c,d){this.g.hasOwnProperty(d)&&J(c)},o),o.g={}}ct.prototype.N=function(){ct.aa.N.call(this),Wn(this)},ct.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ki=l.JSON.stringify,$n=l.JSON.parse,Sn=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Yr(){}Yr.prototype.h=null;function Di(o){return o.h||(o.h=o.i())}function sn(){}var Ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qr(){Je.call(this,"d")}A(Qr,Je);function $l(){Je.call(this,"c")}A($l,Je);var Xr={},Ih=null;function $o(){return Ih=Ih||new me}Xr.La="serverreachability";function bh(o){Je.call(this,Xr.La,o)}A(bh,Je);function Rs(o){const c=$o();Pe(c,new bh(c))}Xr.STAT_EVENT="statevent";function Ah(o,c){Je.call(this,Xr.STAT_EVENT,o),this.stat=c}A(Ah,Je);function Lt(o){const c=$o();Pe(c,new Ah(c,o))}Xr.Ma="timingevent";function Sh(o,c){Je.call(this,Xr.Ma,o),this.size=c}A(Sh,Je);function Ps(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function b_(o,c,d,m,R,P){o.info(function(){if(o.g)if(P)for(var B="",Me=P.split("&"),vt=0;vt<Me.length;vt++){var Re=Me[vt].split("=");if(1<Re.length){var St=Re[0];Re=Re[1];var Ct=St.split("_");B=2<=Ct.length&&Ct[1]=="type"?B+(St+"="+Re+"&"):B+(St+"=redacted&")}}else B=null;else B=P;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+c+`
`+d+`
`+B})}function A_(o,c,d,m,R,P,B){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+c+`
`+d+`
`+P+" "+B})}function Oi(o,c,d,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+C_(o,d)+(m?" "+m:"")})}function S_(o,c){o.info(function(){return"TIMEOUT: "+c})}ks.prototype.info=function(){};function C_(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return ki(d)}catch{return c}}var Ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ch={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Kl;function Yo(){}A(Yo,Yr),Yo.prototype.g=function(){return new XMLHttpRequest},Yo.prototype.i=function(){return{}},Kl=new Yo;function gr(o,c,d,m){this.j=o,this.i=c,this.l=d,this.R=m||1,this.U=new ct(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rh}function Rh(){this.i=null,this.g="",this.h=!1}var Ph={},Yl={};function Ql(o,c,d){o.L=1,o.v=Zo(Kn(c)),o.m=d,o.P=!0,kh(o,null)}function kh(o,c){o.F=Date.now(),Qo(o),o.A=Kn(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Hh(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Rh,o.g=ld(o.j,d?c:null,!o.m),0<o.O&&(o.M=new Ze(p(o.Y,o,o.g),o.O)),c=o.U,d=o.g,m=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Mt[0]=R.toString()),R=Mt);for(var P=0;P<R.length;P++){var B=Y(d,R[P],m||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Rs(),b_(o.i,o.u,o.A,o.l,o.R,o.m)}gr.prototype.ca=function(o){o=o.target;const c=this.M;c&&Yn(o)==3?c.j():this.Y(o)},gr.prototype.Y=function(o){try{if(o==this.g)e:{const Ct=Yn(this.g);var c=this.g.Ba();const Mi=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||Xh(this.g)))){this.J||Ct!=4||c==7||(c==8||0>=Mi?Rs(3):Rs(2)),Xl(this);var d=this.g.Z();this.X=d;t:if(Dh(this)){var m=Xh(this.g);o="";var R=m.length,P=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Jr(this),Ds(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(P&&c==R-1)});m.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,A_(this.i,this.u,this.A,this.l,this.R,Ct,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,vt=this.g;if((Me=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(Me)){var Re=Me;break t}}Re=null}if(d=Re)Oi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jl(this,d);else{this.o=!1,this.s=3,Lt(12),Jr(this),Ds(this);break e}}if(this.P){d=!0;let mn;for(;!this.J&&this.C<B.length;)if(mn=R_(this,B),mn==Yl){Ct==4&&(this.s=4,Lt(14),d=!1),Oi(this.i,this.l,null,"[Incomplete Response]");break}else if(mn==Ph){this.s=4,Lt(15),Oi(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Oi(this.i,this.l,mn,null),Jl(this,mn);if(Dh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||B.length!=0||this.h.h||(this.s=1,Lt(16),d=!1),this.o=this.o&&d,!d)Oi(this.i,this.l,B,"[Invalid Chunked Response]"),Jr(this),Ds(this);else if(0<B.length&&!this.W){this.W=!0;var St=this.j;St.g==this&&St.ba&&!St.M&&(St.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),iu(St),St.M=!0,Lt(11))}}else Oi(this.i,this.l,B,null),Jl(this,B);Ct==4&&Jr(this),this.o&&!this.J&&(Ct==4?id(this.j,this):(this.o=!1,Qo(this)))}else G_(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Jr(this),Ds(this)}}}catch{}finally{}};function Dh(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function R_(o,c){var d=o.C,m=c.indexOf(`
`,d);return m==-1?Yl:(d=Number(c.substring(d,m)),isNaN(d)?Ph:(m+=1,m+d>c.length?Yl:(c=c.slice(m,m+d),o.C=m+d,c)))}gr.prototype.cancel=function(){this.J=!0,Jr(this)};function Qo(o){o.S=Date.now()+o.I,Nh(o,o.I)}function Nh(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ps(p(o.ba,o),c)}function Xl(o){o.B&&(l.clearTimeout(o.B),o.B=null)}gr.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(S_(this.i,this.A),this.L!=2&&(Rs(),Lt(17)),Jr(this),this.s=2,Ds(this)):Nh(this,this.S-o)};function Ds(o){o.j.G==0||o.J||id(o.j,o)}function Jr(o){Xl(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Wn(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Jl(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||Zl(d.h,o))){if(!o.K&&Zl(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)sa(d),ra(d);else break e;ru(d),Lt(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ps(p(d.Za,d),6e3));if(1>=xh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ei(d,11)}else if((o.K||d.g==o)&&sa(d),!x(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let Re=R[c];if(d.T=Re[0],Re=Re[1],d.G==2)if(Re[0]=="c"){d.K=Re[1],d.ia=Re[2];const St=Re[3];St!=null&&(d.la=St,d.j.info("VER="+d.la));const Ct=Re[4];Ct!=null&&(d.Aa=Ct,d.j.info("SVER="+d.Aa));const Mi=Re[5];Mi!=null&&typeof Mi=="number"&&0<Mi&&(m=1.5*Mi,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const mn=o.g;if(mn){const aa=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(aa){var P=m.h;P.g||aa.indexOf("spdy")==-1&&aa.indexOf("quic")==-1&&aa.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(eu(P,P.h),P.h=null))}if(m.D){const su=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;su&&(m.ya=su,Fe(m.I,m.D,su))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var B=o;if(m.qa=ad(m,m.J?m.ia:null,m.W),B.K){Mh(m.h,B);var Me=B,vt=m.L;vt&&(Me.I=vt),Me.B&&(Xl(Me),Qo(Me)),m.g=B}else nd(m);0<d.i.length&&ia(d)}else Re[0]!="stop"&&Re[0]!="close"||ei(d,7);else d.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?ei(d,7):nu(d):Re[0]!="noop"&&d.l&&d.l.ta(Re),d.v=0)}}Rs(4)}catch{}}var P_=class{constructor(o,c){this.g=o,this.map=c}};function Oh(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Vh(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function xh(o){return o.h?1:o.g?o.g.size:0}function Zl(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function eu(o,c){o.g?o.g.add(c):o.h=c}function Mh(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Oh.prototype.cancel=function(){if(this.i=Lh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Lh(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return S(o.i)}function k_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,m=0;m<d;m++)c.push(o[m]);return c}c=[],d=0;for(m in o)c[d++]=o[m];return c}function D_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const m in o)c[d++]=m;return c}}}function Fh(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=D_(o),m=k_(o),R=m.length,P=0;P<R;P++)c.call(void 0,m[P],d&&d[P],o)}var Uh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function N_(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),R=null;if(0<=m){var P=o[d].substring(0,m);R=o[d].substring(m+1)}else P=o[d];c(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Zr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Zr){this.h=o.h,Xo(this,o.j),this.o=o.o,this.g=o.g,Jo(this,o.s),this.l=o.l;var c=o.i,d=new Vs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),jh(this,d),this.m=o.m}else o&&(c=String(o).match(Uh))?(this.h=!1,Xo(this,c[1]||"",!0),this.o=Ns(c[2]||""),this.g=Ns(c[3]||"",!0),Jo(this,c[4]),this.l=Ns(c[5]||"",!0),jh(this,c[6]||"",!0),this.m=Ns(c[7]||"")):(this.h=!1,this.i=new Vs(null,this.h))}Zr.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Os(c,Bh,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Os(c,Bh,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Os(d,d.charAt(0)=="/"?x_:V_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Os(d,L_)),o.join("")};function Kn(o){return new Zr(o)}function Xo(o,c,d){o.j=d?Ns(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Jo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function jh(o,c,d){c instanceof Vs?(o.i=c,F_(o.i,o.h)):(d||(c=Os(c,M_)),o.i=new Vs(c,o.h))}function Fe(o,c,d){o.i.set(c,d)}function Zo(o){return Fe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ns(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Os(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,O_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function O_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Bh=/[#\/\?@]/g,V_=/[#\?:]/g,x_=/[#\?]/g,M_=/[#\?@]/g,L_=/#/g;function Vs(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function mr(o){o.g||(o.g=new Map,o.h=0,o.i&&N_(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=Vs.prototype,n.add=function(o,c){mr(this),this.i=null,o=Vi(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function zh(o,c){mr(o),c=Vi(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function qh(o,c){return mr(o),c=Vi(o,c),o.g.has(c)}n.forEach=function(o,c){mr(this),this.g.forEach(function(d,m){d.forEach(function(R){o.call(c,R,m,this)},this)},this)},n.na=function(){mr(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const R=o[m];for(let P=0;P<R.length;P++)d.push(c[m])}return d},n.V=function(o){mr(this);let c=[];if(typeof o=="string")qh(this,o)&&(c=c.concat(this.g.get(Vi(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return mr(this),this.i=null,o=Vi(this,o),qh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Hh(o,c,d){zh(o,c),0<d.length&&(o.i=null,o.g.set(Vi(o,c),S(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const P=encodeURIComponent(String(m)),B=this.V(m);for(m=0;m<B.length;m++){var R=P;B[m]!==""&&(R+="="+encodeURIComponent(String(B[m]))),o.push(R)}}return this.i=o.join("&")};function Vi(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function F_(o,c){c&&!o.j&&(mr(o),o.i=null,o.g.forEach(function(d,m){var R=m.toLowerCase();m!=R&&(zh(this,m),Hh(this,R,d))},o)),o.j=c}function U_(o,c){const d=new ks;if(l.Image){const m=new Image;m.onload=E(_r,d,"TestLoadImage: loaded",!0,c,m),m.onerror=E(_r,d,"TestLoadImage: error",!1,c,m),m.onabort=E(_r,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=E(_r,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function j_(o,c){const d=new ks,m=new AbortController,R=setTimeout(()=>{m.abort(),_r(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(R),P.ok?_r(d,"TestPingServer: ok",!0,c):_r(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),_r(d,"TestPingServer: error",!1,c)})}function _r(o,c,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function B_(){this.g=new Sn}function z_(o,c,d){const m=d||"";try{Fh(o,function(R,P){let B=R;h(R)&&(B=ki(R)),c.push(m+P+"="+encodeURIComponent(B))})}catch(R){throw c.push(m+"type="+encodeURIComponent("_badmap")),R}}function ea(o){this.l=o.Ub||null,this.j=o.eb||!1}A(ea,Yr),ea.prototype.g=function(){return new ta(this.l,this.j)},ea.prototype.i=function(o){return function(){return o}}({});function ta(o,c){me.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(ta,me),n=ta.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Ms(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ms(this)),this.g&&(this.readyState=3,Ms(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Gh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Gh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?xs(this):Ms(this),this.readyState==3&&Gh(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,xs(this))},n.Qa=function(o){this.g&&(this.response=o,xs(this))},n.ga=function(){this.g&&xs(this)};function xs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ms(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Ms(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ta.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wh(o){let c="";return z(o,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function tu(o,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Wh(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Fe(o,c,d))}function Qe(o){me.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Qe,me);var q_=/^https?$/i,H_=["POST","PUT"];n=Qe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kl.g(),this.v=this.o?Di(this.o):Di(Kl),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){$h(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(H_,c,void 0))||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,B]of d)this.g.setRequestHeader(P,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qh(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){$h(this,P)}};function $h(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Kh(o),na(o)}function Kh(o){o.A||(o.A=!0,Pe(o,"complete"),Pe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pe(this,"complete"),Pe(this,"abort"),na(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),na(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Yh(this):this.bb())},n.bb=function(){Yh(this)};function Yh(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Yn(o)!=4||o.Z()!=2)){if(o.u&&Yn(o)==4)Ne(o.Ea,0,o);else if(Pe(o,"readystatechange"),Yn(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=B===0){var R=String(o.D).match(Uh)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),m=!q_.test(R?R.toLowerCase():"")}d=m}if(d)Pe(o,"complete"),Pe(o,"success");else{o.m=6;try{var P=2<Yn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Kh(o)}}finally{na(o)}}}}function na(o,c){if(o.g){Qh(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Pe(o,"ready");try{d.onreadystatechange=m}catch{}}}function Qh(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Yn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),$n(c)}};function Xh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function G_(o){const c={};o=(o.g&&2<=Yn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(x(o[m]))continue;var d=I(o[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=c[R]||[];c[R]=P,P.push(d)}w(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Jh(o){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,o),this.cb=Ls("retryDelaySeedMs",1e4,o),this.Wa=Ls("forwardChannelMaxRetries",2,o),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Oh(o&&o.concurrentRequestLimit),this.Da=new B_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Jh.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,m){Lt(0),this.W=o,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ad(this,null,this.W),ia(this)};function nu(o){if(Zh(o),o.G==3){var c=o.U++,d=Kn(o.I);if(Fe(d,"SID",o.K),Fe(d,"RID",c),Fe(d,"TYPE","terminate"),Fs(o,d),c=new gr(o,o.j,c),c.L=2,c.v=Zo(Kn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=ld(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Qo(c)}od(o)}function ra(o){o.g&&(iu(o),o.g.cancel(),o.g=null)}function Zh(o){ra(o),o.u&&(l.clearTimeout(o.u),o.u=null),sa(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ia(o){if(!Vh(o.h)&&!o.s){o.s=!0;var c=o.Ga;rt||At(),Ke||(rt(),Ke=!0),Ge.add(c,o),o.B=0}}function W_(o,c){return xh(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ps(p(o.Ga,o,c),sd(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new gr(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=td(this,R,c),d=Kn(this.I),Fe(d,"RID",o),Fe(d,"CVER",22),this.D&&Fe(d,"X-HTTP-Session-Id",this.D),Fs(this,d),P&&(this.O?c="headers="+encodeURIComponent(String(Wh(P)))+"&"+c:this.m&&tu(d,this.m,P)),eu(this.h,R),this.Ua&&Fe(d,"TYPE","init"),this.P?(Fe(d,"$req",c),Fe(d,"SID","null"),R.T=!0,Ql(R,d,null)):Ql(R,d,c),this.G=2}}else this.G==3&&(o?ed(this,o):this.i.length==0||Vh(this.h)||ed(this))};function ed(o,c){var d;c?d=c.l:d=o.U++;const m=Kn(o.I);Fe(m,"SID",o.K),Fe(m,"RID",d),Fe(m,"AID",o.T),Fs(o,m),o.m&&o.o&&tu(m,o.m,o.o),d=new gr(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=td(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),eu(o.h,d),Ql(d,m,c)}function Fs(o,c){o.H&&z(o.H,function(d,m){Fe(c,m,d)}),o.l&&Fh({},function(d,m){Fe(c,m,d)})}function td(o,c,d){d=Math.min(o.i.length,d);var m=o.l?p(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const B=["count="+d];P==-1?0<d?(P=R[0].g,B.push("ofs="+P)):P=0:B.push("ofs="+P);let Me=!0;for(let vt=0;vt<d;vt++){let Re=R[vt].g;const St=R[vt].map;if(Re-=P,0>Re)P=Math.max(0,R[vt].g-100),Me=!1;else try{z_(St,B,"req"+Re+"_")}catch{m&&m(St)}}if(Me){m=B.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,m}function nd(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;rt||At(),Ke||(rt(),Ke=!0),Ge.add(c,o),o.v=0}}function ru(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ps(p(o.Fa,o),sd(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,rd(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ps(p(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),ra(this),rd(this))};function iu(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function rd(o){o.g=new gr(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Kn(o.qa);Fe(c,"RID","rpc"),Fe(c,"SID",o.K),Fe(c,"AID",o.T),Fe(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Fe(c,"TO",o.ja),Fe(c,"TYPE","xmlhttp"),Fs(o,c),o.m&&o.o&&tu(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Zo(Kn(c)),d.m=null,d.P=!0,kh(d,o)}n.Za=function(){this.C!=null&&(this.C=null,ra(this),ru(this),Lt(19))};function sa(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function id(o,c){var d=null;if(o.g==c){sa(o),iu(o),o.g=null;var m=2}else if(Zl(o.h,c))d=c.D,Mh(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;m=$o(),Pe(m,new Sh(m,d)),ia(o)}else nd(o);else if(R=c.s,R==3||R==0&&0<c.X||!(m==1&&W_(o,c)||m==2&&ru(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:ei(o,5);break;case 4:ei(o,10);break;case 3:ei(o,6);break;default:ei(o,2)}}}function sd(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function ei(o,c){if(o.j.info("Error code "+c),c==2){var d=p(o.fb,o),m=o.Xa;const R=!m;m=new Zr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Xo(m,"https"),Zo(m),R?U_(m.toString(),d):j_(m.toString(),d)}else Lt(2);o.G=0,o.l&&o.l.sa(c),od(o),Zh(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function od(o){if(o.G=0,o.ka=[],o.l){const c=Lh(o.h);(c.length!=0||o.i.length!=0)&&(C(o.ka,c),C(o.ka,o.i),o.h.i.length=0,S(o.i),o.i.length=0),o.l.ra()}}function ad(o,c,d){var m=d instanceof Zr?Kn(d):new Zr(d);if(m.g!="")c&&(m.g=c+"."+m.g),Jo(m,m.s);else{var R=l.location;m=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var P=new Zr(null);m&&Xo(P,m),c&&(P.g=c),R&&Jo(P,R),d&&(P.l=d),m=P}return d=o.D,c=o.ya,d&&c&&Fe(m,d,c),Fe(m,"VER",o.la),Fs(o,m),m}function ld(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Qe(new ea({eb:d})):new Qe(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ud(){}n=ud.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function oa(){}oa.prototype.g=function(o,c){return new Xt(o,c)};function Xt(o,c){me.call(this),this.g=new Jh(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!x(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!x(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new xi(this)}A(Xt,me),Xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Xt.prototype.close=function(){nu(this.g)},Xt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=ki(o),o=d);c.i.push(new P_(c.Ya++,o)),c.G==3&&ia(c)},Xt.prototype.N=function(){this.g.l=null,delete this.j,nu(this.g),delete this.g,Xt.aa.N.call(this)};function cd(o){Qr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}A(cd,Qr);function hd(){$l.call(this),this.status=1}A(hd,$l);function xi(o){this.g=o}A(xi,ud),xi.prototype.ua=function(){Pe(this.g,"a")},xi.prototype.ta=function(o){Pe(this.g,new cd(o))},xi.prototype.sa=function(o){Pe(this.g,new hd)},xi.prototype.ra=function(){Pe(this.g,"b")},oa.prototype.createWebChannel=oa.prototype.g,Xt.prototype.send=Xt.prototype.o,Xt.prototype.open=Xt.prototype.m,Xt.prototype.close=Xt.prototype.close,Gg=function(){return new oa},Hg=function(){return $o()},qg=Xr,Ju={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ko.NO_ERROR=0,Ko.TIMEOUT=8,Ko.HTTP_ERROR=6,Pa=Ko,Ch.COMPLETE="complete",zg=Ch,sn.EventType=Ni,Ni.OPEN="a",Ni.CLOSE="b",Ni.ERROR="c",Ni.MESSAGE="d",me.prototype.listen=me.prototype.K,zs=sn,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Bg=Qe}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});const ef="@firebase/firestore",tf="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ts="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new kc("@firebase/firestore");function ji(){return Ii.logLevel}function G(n,...e){if(Ii.logLevel<=we.DEBUG){const t=e.map(Bc);Ii.debug(`Firestore (${Ts}): ${n}`,...t)}}function ar(n,...e){if(Ii.logLevel<=we.ERROR){const t=e.map(Bc);Ii.error(`Firestore (${Ts}): ${n}`,...t)}}function zr(n,...e){if(Ii.logLevel<=we.WARN){const t=e.map(Bc);Ii.warn(`Firestore (${Ts}): ${n}`,...t)}}function Bc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Wg(n,r,t)}function Wg(n,e,t){let r=`FIRESTORE (${Ts}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ar(r),new Error(r)}function Le(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Wg(e,i,r)}function Ee(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Dt.UNAUTHENTICATED))}shutdown(){}}class aI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class lI{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Le(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Ur;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ur,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ur)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string",31837,{l:r}),new $g(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class uI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class cI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new uI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,En(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Le(this.o===void 0,3512);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new nf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Le(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=dI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function ge(n,e){return n<e?-1:n>e?1:0}function Zu(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return ge(r,i);{const s=Kg(),a=fI(s.encode(rf(n,t)),s.encode(rf(e,t)));return a!==0?a:ge(r,i)}}t+=r>65535?2:1}return ge(n.length,e.length)}function rf(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function fI(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ge(n[t],e[t]);return ge(n.length,e.length)}function us(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="__name__";class Rn{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Rn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Rn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Rn.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ge(e.length,t.length)}static compareSegments(e,t){const r=Rn.isNumericId(e),i=Rn.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Rn.extractNumericId(e).compare(Rn.extractNumericId(t)):Zu(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fr.fromString(e.substring(4,e.length-2))}}class je extends Rn{construct(e,t,r){return new je(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new je(t)}static emptyPath(){return new je([])}}const pI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends Rn{construct(e,t,r){return new Nt(e,t,r)}static isValidIdentifier(e){return pI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sf}static keyField(){return new Nt([sf])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new K(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nt(t)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(je.fromString(e))}static fromName(e){return new te(je.fromString(e).popFirst(5))}static empty(){return new te(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new je(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n,e,t){if(!t)throw new K(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mI(n,e,t,r){if(e===!0&&r===!0)throw new K(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function of(n){if(!te.isDocumentKey(n))throw new K(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function qc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function el(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new K(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qc(n);throw new K(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Uo(n,e){if(!Yg(n))throw new K(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new K(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=-62135596800,lf=1e6;class qe{static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*lf);return new qe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<af)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lf}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Uo(e,qe._jsonSchema))return new qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-af;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}qe._jsonSchemaVersion="firestore/timestamp/1.0",qe._jsonSchema={type:lt("string",qe._jsonSchemaVersion),seconds:lt("number"),nanoseconds:lt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new qe(0,0))}static max(){return new oe(new qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=-1;function _I(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new qe(t+1,0):new qe(t,r));return new qr(i,te.empty(),e)}function vI(n){return new qr(n.readTime,n.key,yo)}class qr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qr(oe.min(),te.empty(),yo)}static max(){return new qr(oe.max(),te.empty(),yo)}}function yI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=te.comparator(n.documentKey,e.documentKey),t!==0?t:ge(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==wI)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):N.reject(t)}static resolve(e){return new N((t,r)=>{t(e)})}static reject(e){return new N((t,r)=>{r(e)})}static waitFor(e){return new N((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next(i=>i?N.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new N((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new N((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function TI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Is(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ol.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=-1;function jo(n){return n==null}function tl(n){return n===0&&1/n==-1/0}function bI(n){return typeof n=="number"&&Number.isInteger(n)&&!tl(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="";function AI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uf(e)),e=SI(n.get(t),e);return uf(e)}function SI(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Qg:t+="";break;default:t+=s}}return t}function uf(n){return n+Qg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ci(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Xg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,t){this.comparator=e,this.root=t||Et.EMPTY}insert(e,t){return new nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Et.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Et.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ha(this.root,e,this.comparator,!0)}}class ha{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Et{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Et.RED,this.left=i??Et.EMPTY,this.right=s??Et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Et(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Et.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Et.EMPTY=null,Et.RED=!0,Et.BLACK=!1;Et.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Et(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hf(this.data.getIterator())}getIteratorFrom(e){return new hf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new dt(this.comparator);return t.data=e,t}}class hf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.fields=e,e.sort(Nt.comparator)}static empty(){return new gn([])}unionWith(e){let t=new dt(Nt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new gn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return us(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Jg("Invalid base64 string: "+s):s}}(e);return new bt(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const CI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(n){if(Le(!!n,39018),typeof n=="string"){let e=0;const t=CI.exec(n);if(Le(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:tt(n.seconds),nanos:tt(n.nanos)}}function tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gr(n){return typeof n=="string"?bt.fromBase64String(n):bt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="server_timestamp",em="__type__",tm="__previous_value__",nm="__local_write_time__";function Hc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[em])===null||t===void 0?void 0:t.stringValue)===Zg}function Vl(n){const e=n.mapValue.fields[tm];return Hc(e)?Vl(e):e}function wo(n){const e=Hr(n.mapValue.fields[nm].timestampValue);return new qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,t,r,i,s,a,l,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const nl="(default)";class Eo{constructor(e,t){this.projectId=e,this.database=t||nl}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database===nl}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="__type__",PI="__max__",da={mapValue:{}},im="__vector__",rl="value";function Wr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hc(n)?4:DI(n)?9007199254740991:kI(n)?10:11:ee(28295,{value:n})}function qn(n,e){if(n===e)return!0;const t=Wr(n);if(t!==Wr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return wo(n).isEqual(wo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Hr(i.timestampValue),l=Hr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Gr(i.bytesValue).isEqual(Gr(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return tt(i.geoPointValue.latitude)===tt(s.geoPointValue.latitude)&&tt(i.geoPointValue.longitude)===tt(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return tt(i.integerValue)===tt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=tt(i.doubleValue),l=tt(s.doubleValue);return a===l?tl(a)===tl(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return us(n.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(cf(a)!==cf(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!qn(a[u],l[u])))return!1;return!0}(n,e);default:return ee(52216,{left:n})}}function To(n,e){return(n.values||[]).find(t=>qn(t,e))!==void 0}function cs(n,e){if(n===e)return 0;const t=Wr(n),r=Wr(e);if(t!==r)return ge(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ge(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=tt(s.integerValue||s.doubleValue),u=tt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return df(n.timestampValue,e.timestampValue);case 4:return df(wo(n),wo(e));case 5:return Zu(n.stringValue,e.stringValue);case 6:return function(s,a){const l=Gr(s),u=Gr(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ge(l[h],u[h]);if(f!==0)return f}return ge(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ge(tt(s.latitude),tt(a.latitude));return l!==0?l:ge(tt(s.longitude),tt(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return ff(n.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const g=s.fields||{},p=a.fields||{},E=(l=g[rl])===null||l===void 0?void 0:l.arrayValue,A=(u=p[rl])===null||u===void 0?void 0:u.arrayValue,S=ge(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((f=A==null?void 0:A.values)===null||f===void 0?void 0:f.length)||0);return S!==0?S:ff(E,A)}(n.mapValue,e.mapValue);case 11:return function(s,a){if(s===da.mapValue&&a===da.mapValue)return 0;if(s===da.mapValue)return 1;if(a===da.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const p=Zu(u[g],f[g]);if(p!==0)return p;const E=cs(l[u[g]],h[f[g]]);if(E!==0)return E}return ge(u.length,f.length)}(n.mapValue,e.mapValue);default:throw ee(23264,{le:t})}}function df(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ge(n,e);const t=Hr(n),r=Hr(e),i=ge(t.seconds,r.seconds);return i!==0?i:ge(t.nanos,r.nanos)}function ff(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=cs(t[i],r[i]);if(s)return s}return ge(t.length,r.length)}function hs(n){return ec(n)}function ec(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Hr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gr(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return te.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=ec(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${ec(t.fields[a])}`;return i+"}"}(n.mapValue):ee(61005,{value:n})}function ka(n){switch(Wr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vl(n);return e?16+ka(e):16;case 5:return 2*n.stringValue.length;case 6:return Gr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ka(s),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Ci(r.fields,(s,a)=>{i+=s.length+ka(a)}),i}(n.mapValue);default:throw ee(13486,{value:n})}}function tc(n){return!!n&&"integerValue"in n}function Gc(n){return!!n&&"arrayValue"in n}function pf(n){return!!n&&"nullValue"in n}function gf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mu(n){return!!n&&"mapValue"in n}function kI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rm])===null||t===void 0?void 0:t.stringValue)===im}function no(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ci(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=no(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=no(n.arrayValue.values[t]);return e}return Object.assign({},n)}function DI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===PI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!mu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(t)}setAll(e){let t=Nt.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=no(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());mu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];mu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ci(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ht(no(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new gt(e,0,oe.min(),oe.min(),oe.min(),Ht.empty(),0)}static newFoundDocument(e,t,r,i){return new gt(e,1,t,oe.min(),r,i,0)}static newNoDocument(e,t){return new gt(e,2,t,oe.min(),oe.min(),Ht.empty(),0)}static newUnknownDocument(e,t){return new gt(e,3,t,oe.min(),oe.min(),Ht.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){this.position=e,this.inclusive=t}}function mf(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=te.comparator(te.fromName(a.referenceValue),t.key):r=cs(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _f(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t="asc"){this.field=e,this.dir=t}}function NI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{}class ht extends sm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new VI(e,t,r):t==="array-contains"?new LI(e,r):t==="in"?new FI(e,r):t==="not-in"?new UI(e,r):t==="array-contains-any"?new jI(e,r):new ht(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new xI(e,r):new MI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(cs(t,this.value)):t!==null&&Wr(this.value)===Wr(t)&&this.matchesComparison(cs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends sm{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Hn(e,t)}matches(e){return om(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function om(n){return n.op==="and"}function am(n){return OI(n)&&om(n)}function OI(n){for(const e of n.filters)if(e instanceof Hn)return!1;return!0}function nc(n){if(n instanceof ht)return n.field.canonicalString()+n.op.toString()+hs(n.value);if(am(n))return n.filters.map(e=>nc(e)).join(",");{const e=n.filters.map(t=>nc(t)).join(",");return`${n.op}(${e})`}}function lm(n,e){return n instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.field.isEqual(i.field)&&qn(r.value,i.value)}(n,e):n instanceof Hn?function(r,i){return i instanceof Hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&lm(a,i.filters[l]),!0):!1}(n,e):void ee(19439)}function um(n){return n instanceof ht?function(t){return`${t.field.canonicalString()} ${t.op} ${hs(t.value)}`}(n):n instanceof Hn?function(t){return t.op.toString()+" {"+t.getFilters().map(um).join(" ,")+"}"}(n):"Filter"}class VI extends ht{constructor(e,t,r){super(e,t,r),this.key=te.fromName(r.referenceValue)}matches(e){const t=te.comparator(e.key,this.key);return this.matchesComparison(t)}}class xI extends ht{constructor(e,t){super(e,"in",t),this.keys=cm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class MI extends ht{constructor(e,t){super(e,"not-in",t),this.keys=cm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cm(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>te.fromName(r.referenceValue))}class LI extends ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gc(t)&&To(t.arrayValue,this.value)}}class FI extends ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&To(this.value.arrayValue,t)}}class UI extends ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!To(this.value.arrayValue,t)}}class jI extends ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Pe=null}}function vf(n,e=null,t=[],r=[],i=null,s=null,a=null){return new BI(n,e,t,r,i,s,a)}function Wc(n){const e=Ee(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>nc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),jo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>hs(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>hs(r)).join(",")),e.Pe=t}return e.Pe}function $c(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!NI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!lm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_f(n.startAt,e.startAt)&&_f(n.endAt,e.endAt)}function rc(n){return te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function zI(n,e,t,r,i,s,a,l){return new xl(n,e,t,r,i,s,a,l)}function Kc(n){return new xl(n)}function yf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qI(n){return n.collectionGroup!==null}function ro(n){const e=Ee(n);if(e.Te===null){e.Te=[];const t=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new dt(Nt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Te.push(new sl(s,r))}),t.has(Nt.keyField().canonicalString())||e.Te.push(new sl(Nt.keyField(),r))}return e.Te}function Ln(n){const e=Ee(n);return e.Ie||(e.Ie=HI(e,ro(n))),e.Ie}function HI(n,e){if(n.limitType==="F")return vf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new sl(i.field,s)});const t=n.endAt?new il(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new il(n.startAt.position,n.startAt.inclusive):null;return vf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function ic(n,e,t){return new xl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ml(n,e){return $c(Ln(n),Ln(e))&&n.limitType===e.limitType}function hm(n){return`${Wc(Ln(n))}|lt:${n.limitType}`}function Bi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>um(i)).join(", ")}]`),jo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>hs(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>hs(i)).join(",")),`Target(${r})`}(Ln(n))}; limitType=${n.limitType})`}function Ll(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):te.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of ro(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=mf(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,ro(r),i)||r.endAt&&!function(a,l,u){const h=mf(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,ro(r),i))}(n,e)}function GI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function dm(n){return(e,t)=>{let r=!1;for(const i of ro(n)){const s=WI(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WI(n,e,t){const r=n.field.isKeyField()?te.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?cs(u,h):ee(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Xg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=new nt(te.comparator);function $r(){return $I}const fm=new nt(te.comparator);function qs(...n){let e=fm;for(const t of n)e=e.insert(t.key,t);return e}function KI(n){let e=fm;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function oi(){return io()}function pm(){return io()}function io(){return new Ri(n=>n.toString(),(n,e)=>n.isEqual(e))}const YI=new dt(te.comparator);function Se(...n){let e=YI;for(const t of n)e=e.add(t);return e}const QI=new dt(ge);function XI(){return QI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tl(e)?"-0":e}}function gm(n){return{integerValue:""+n}}function JI(n,e){return bI(e)?gm(e):Yc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(){this._=void 0}}function ZI(n,e,t){return n instanceof ol?function(i,s){const a={fields:{[em]:{stringValue:Zg},[nm]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Hc(s)&&(s=Vl(s)),s&&(a.fields[tm]=s),{mapValue:a}}(t,e):n instanceof Io?mm(n,e):n instanceof bo?_m(n,e):function(i,s){const a=t0(i,s),l=wf(a)+wf(i.Ee);return tc(a)&&tc(i.Ee)?gm(l):Yc(i.serializer,l)}(n,e)}function e0(n,e,t){return n instanceof Io?mm(n,e):n instanceof bo?_m(n,e):t}function t0(n,e){return n instanceof al?function(r){return tc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ol extends Fl{}class Io extends Fl{constructor(e){super(),this.elements=e}}function mm(n,e){const t=vm(e);for(const r of n.elements)t.some(i=>qn(i,r))||t.push(r);return{arrayValue:{values:t}}}class bo extends Fl{constructor(e){super(),this.elements=e}}function _m(n,e){let t=vm(e);for(const r of n.elements)t=t.filter(i=>!qn(i,r));return{arrayValue:{values:t}}}class al extends Fl{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function wf(n){return tt(n.integerValue||n.doubleValue)}function vm(n){return Gc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function n0(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Io&&i instanceof Io||r instanceof bo&&i instanceof bo?us(r.elements,i.elements,qn):r instanceof al&&i instanceof al?qn(r.Ee,i.Ee):r instanceof ol&&i instanceof ol}(n.transform,e.transform)}class pn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new pn}static exists(e){return new pn(void 0,e)}static updateTime(e){return new pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Da(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ul{}function ym(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Qc(n.key,pn.none()):new Bo(n.key,n.data,pn.none());{const t=n.data,r=Ht.empty();let i=new dt(Nt.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Pi(n.key,r,new gn(i.toArray()),pn.none())}}function r0(n,e,t){n instanceof Bo?function(i,s,a){const l=i.value.clone(),u=Tf(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Pi?function(i,s,a){if(!Da(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Tf(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(wm(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function so(n,e,t,r){return n instanceof Bo?function(s,a,l,u){if(!Da(s.precondition,a))return l;const h=s.value.clone(),f=If(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Pi?function(s,a,l,u){if(!Da(s.precondition,a))return l;const h=If(s.fieldTransforms,u,a),f=a.data;return f.setAll(wm(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,l){return Da(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Ef(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&us(r,i,(s,a)=>n0(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Bo extends Ul{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pi extends Ul{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function wm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Tf(n,e,t){const r=new Map;Le(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,e0(a,l,t[i]))}return r}function If(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,ZI(s,a,e))}return r}class Qc extends Ul{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Em extends Ul{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&r0(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=so(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=so(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=pm();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=ym(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Se())}isEqual(e){return this.batchId===e.batchId&&us(this.mutations,e.mutations,(t,r)=>Ef(t,r))&&us(this.baseMutations,e.baseMutations,(t,r)=>Ef(t,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it,be;function a0(n){switch(n){case V.OK:return ee(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function Tm(n){if(n===void 0)return ar("GRPC error has no .code"),V.UNKNOWN;switch(n){case it.OK:return V.OK;case it.CANCELLED:return V.CANCELLED;case it.UNKNOWN:return V.UNKNOWN;case it.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case it.INTERNAL:return V.INTERNAL;case it.UNAVAILABLE:return V.UNAVAILABLE;case it.UNAUTHENTICATED:return V.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case it.NOT_FOUND:return V.NOT_FOUND;case it.ALREADY_EXISTS:return V.ALREADY_EXISTS;case it.PERMISSION_DENIED:return V.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case it.ABORTED:return V.ABORTED;case it.OUT_OF_RANGE:return V.OUT_OF_RANGE;case it.UNIMPLEMENTED:return V.UNIMPLEMENTED;case it.DATA_LOSS:return V.DATA_LOSS;default:return ee(39323,{code:n})}}(be=it||(it={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=new Fr([4294967295,4294967295],0);function bf(n){const e=Kg().encode(n),t=new jg;return t.update(e),new Uint8Array(t.digest())}function Af(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fr([t,r],0),new Fr([i,s],0)]}class Xc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Hs(`Invalid padding: ${t}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Fr.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(Fr.fromNumber(r)));return i.compare(l0)===1&&(i=new Fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=bf(e),[r,i]=Af(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);if(!this.ye(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Xc(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.fe===0)return;const t=bf(e),[r,i]=Af(t);for(let s=0;s<this.hashCount;s++){const a=this.pe(r,i,s);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,zo.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new jl(oe.min(),i,new nt(ge),$r(),Se())}}class zo{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new zo(r,t,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class Im{constructor(e,t){this.targetId=e,this.De=t}}class bm{constructor(e,t,r=bt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Sf{constructor(){this.ve=0,this.Ce=Cf(),this.Fe=bt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Se(),t=Se(),r=Se();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ee(38017,{changeType:s})}}),new zo(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Cf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Le(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class u0{constructor(e){this.We=e,this.Ge=new Map,this.ze=$r(),this.je=fa(),this.Je=fa(),this.He=new nt(ge)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,i)=>{this.nt(i)&&t(i)})}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const s=i.target;if(rc(s))if(r===0){const a=new te(s.path);this.Xe(t,a,gt.newNoDocument(a,oe.min()))}else Le(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),u=l?this.ut(l,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Gr(r).toUint8Array()}catch(u){if(u instanceof Jg)return zr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Xc(a,i,s)}catch(u){return zr(u instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,s,null),i++)}),i}Pt(e){const t=new Map;this.Ge.forEach((s,a)=>{const l=this.st(a);if(l){if(s.current&&rc(l.target)){const u=new te(l.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,gt.newNoDocument(u,e))}s.Ne&&(t.set(a,s.Le()),s.ke())}});let r=Se();this.Je.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,a)=>a.setReadTime(e));const i=new jl(e,t,this.He,this.ze,r);return this.ze=$r(),this.je=fa(),this.Je=fa(),this.He=new nt(ge),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Sf,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new dt(ge),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new dt(ge),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Sf),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function fa(){return new nt(te.comparator)}function Cf(){return new nt(te.comparator)}const c0={asc:"ASCENDING",desc:"DESCENDING"},h0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d0={and:"AND",or:"OR"};class f0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sc(n,e){return n.useProto3Json||jo(e)?e:{value:e}}function ll(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Am(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function p0(n,e){return ll(n,e.toTimestamp())}function nr(n){return Le(!!n,49232),oe.fromTimestamp(function(t){const r=Hr(t);return new qe(r.seconds,r.nanos)}(n))}function Jc(n,e){return oc(n,e).canonicalString()}function oc(n,e){const t=function(i){return new je(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Sm(n){const e=je.fromString(n);return Le(Dm(e),10190,{key:e.toString()}),e}function ul(n,e){return Jc(n.databaseId,e.path)}function oo(n,e){const t=Sm(e);if(t.get(1)!==n.databaseId.projectId)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new K(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new te(Rm(t))}function Cm(n,e){return Jc(n.databaseId,e)}function g0(n){const e=Sm(n);return e.length===4?je.emptyPath():Rm(e)}function Rf(n){return new je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rm(n){return Le(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Pf(n,e,t){return{name:ul(n,e),fields:t.value.mapValue.fields}}function m0(n,e){return"found"in e?function(r,i){Le(!!i.found,43571),i.found.name,i.found.updateTime;const s=oo(r,i.found.name),a=nr(i.found.updateTime),l=i.found.createTime?nr(i.found.createTime):oe.min(),u=new Ht({mapValue:{fields:i.found.fields}});return gt.newFoundDocument(s,a,l,u)}(n,e):"missing"in e?function(r,i){Le(!!i.missing,3894),Le(!!i.readTime,22933);const s=oo(r,i.missing),a=nr(i.readTime);return gt.newNoDocument(s,a)}(n,e):ee(7234,{result:e})}function _0(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(Le(f===void 0||typeof f=="string",58123),bt.fromBase64String(f||"")):(Le(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),bt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?V.UNKNOWN:Tm(h.code);return new K(f,h.message||"")}(a);t=new bm(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=oo(n,r.document.name),s=nr(r.document.updateTime),a=r.document.createTime?nr(r.document.createTime):oe.min(),l=new Ht({mapValue:{fields:r.document.fields}}),u=gt.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Na(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=oo(n,r.document),s=r.readTime?nr(r.readTime):oe.min(),a=gt.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Na([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=oo(n,r.document),s=r.removedTargetIds||[];t=new Na([],s,i,null)}else{if(!("filter"in e))return ee(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new o0(i,s),l=r.targetId;t=new Im(l,a)}}return t}function v0(n,e){let t;if(e instanceof Bo)t={update:Pf(n,e.key,e.value)};else if(e instanceof Qc)t={delete:ul(n,e.key)};else if(e instanceof Pi)t={update:Pf(n,e.key,e.data),updateMask:S0(e.fieldMask)};else{if(!(e instanceof Em))return ee(16599,{Rt:e.type});t={verify:ul(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof ol)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Io)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof bo)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof al)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw ee(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:p0(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee(27497)}(n,e.precondition)),t}function y0(n,e){return{documents:[Cm(n,e.path)]}}function w0(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Cm(n,i);const s=function(h){if(h.length!==0)return km(Hn.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(p){return{field:zi(p.field),direction:I0(p.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=sc(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:i}}function E0(n){let e=g0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Le(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(g){const p=Pm(g);return p instanceof Hn&&am(p)?p.getFilters():[p]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(p=>function(A){return new sl(qi(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(p))}(t.orderBy));let l=null;t.limit&&(l=function(g){let p;return p=typeof g=="object"?g.value:g,jo(p)?null:p}(t.limit));let u=null;t.startAt&&(u=function(g){const p=!!g.before,E=g.values||[];return new il(E,p)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const p=!g.before,E=g.values||[];return new il(E,p)}(t.endAt)),zI(e,i,a,s,l,"F",u,h)}function T0(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=qi(t.unaryFilter.field);return ht.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qi(t.unaryFilter.field);return ht.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qi(t.unaryFilter.field);return ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=qi(t.unaryFilter.field);return ht.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(n):n.fieldFilter!==void 0?function(t){return ht.create(qi(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Hn.create(t.compositeFilter.filters.map(r=>Pm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(t.compositeFilter.op))}(n):ee(30097,{filter:n})}function I0(n){return c0[n]}function b0(n){return h0[n]}function A0(n){return d0[n]}function zi(n){return{fieldPath:n.canonicalString()}}function qi(n){return Nt.fromServerFormat(n.fieldPath)}function km(n){return n instanceof ht?function(t){if(t.op==="=="){if(gf(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NAN"}};if(pf(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gf(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NOT_NAN"}};if(pf(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zi(t.field),op:b0(t.op),value:t.value}}}(n):n instanceof Hn?function(t){const r=t.getFilters().map(i=>km(i));return r.length===1?r[0]:{compositeFilter:{op:A0(t.op),filters:r}}}(n):ee(54877,{filter:n})}function S0(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Dm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t,r,i,s=oe.min(),a=oe.min(),l=bt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this.gt=e}}function R0(n){const e=E0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ic(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this.Dn=new k0}addToCollectionParentIndex(e,t){return this.Dn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(qr.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(qr.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class k0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new dt(je.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new dt(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nm=41943040;class qt{static withCacheSize(e){return new qt(e,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt.DEFAULT_COLLECTION_PERCENTILE=10,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qt.DEFAULT=new qt(Nm,qt.DEFAULT_COLLECTION_PERCENTILE,qt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qt.DISABLED=new qt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ds(0)}static ur(){return new ds(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="LruGarbageCollector",D0=1048576;function Nf([n,e],[t,r]){const i=ge(n,t);return i===0?ge(e,r):i}class N0{constructor(e){this.Tr=e,this.buffer=new dt(Nf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Nf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class O0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){G(Df,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Is(t)?G(Df,"Ignoring IndexedDB error during garbage collection: ",t):await Nl(t)}await this.Rr(3e5)})}}class V0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Ol.ue);const r=new N0(t);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(kf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kf):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,s,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,a=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(s=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),ji()<=we.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function x0(n,e){return new V0(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.changes=new Ri(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&so(r.mutation,i,gn.empty(),qe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Se()){const i=oi();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=qs();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=oi();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Se()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=$r();const a=io(),l=function(){return io()}();return t.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Pi)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),so(f.mutation,h,f.mutation.getFieldMask(),qe.now())):a.set(h.key,gn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var g;return l.set(h,new L0(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=io();let i=new nt((a,l)=>a-l),s=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||gn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||Se()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=pm();f.forEach(p=>{if(!s.has(p)){const E=ym(t.get(p),r.get(p));E!==null&&g.set(p,E),s=s.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return N.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return te.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):N.resolve(oi());let l=yo,u=s;return a.next(h=>N.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?N.resolve():this.remoteDocumentCache.getEntry(e,f).next(p=>{u=u.insert(f,p)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Se())).next(f=>({batchId:l,changes:KI(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new te(t)).next(r=>{let i=qs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=qs();return this.indexManager.getCollectionParents(e,s).next(l=>N.forEach(l,u=>{const h=function(g,p){return new xl(p,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,p)=>{a=a.insert(g,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,gt.newInvalidDocument(f)))});let l=qs();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&so(f.mutation,h,gn.empty(),qe.now()),Ll(t,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return N.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(i){return{id:i.id,version:i.version,createTime:nr(i.createTime)}}(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(i){return{name:i.name,query:R0(i.bundledQuery),readTime:nr(i.readTime)}}(t)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(){this.overlays=new nt(te.comparator),this.kr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=oi();return N.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.wt(e,t,s)}),N.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const i=oi(),s=t.length+1,a=new te(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return N.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new nt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=oi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=oi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return N.resolve(l)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new s0(t,r));let s=this.kr.get(t);s===void 0&&(s=Se(),this.kr.set(t,s)),this.kr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.qr=new dt(pt.Qr),this.$r=new dt(pt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new pt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new pt(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new te(new je([])),r=new pt(t,e),i=new pt(t,e+1),s=[];return this.$r.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new te(new je([])),r=new pt(t,e),i=new pt(t,e+1);let s=Se();return this.$r.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new pt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return te.comparator(e.key,t.key)||ge(e.Hr,t.Hr)}static Ur(e,t){return ge(e.Hr,t.Hr)||te.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new dt(pt.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new i0(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Yr=this.Yr.add(new pt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?II:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pt(t,0),i=new pt(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],a=>{const l=this.Zr(a.Hr);s.push(l)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new dt(ge);return t.forEach(i=>{const s=new pt(i,0),a=new pt(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,a],l=>{r=r.add(l.Hr)})}),N.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;te.isDocumentKey(s)||(s=s.child(""));const a=new pt(new te(s),0);let l=new dt(ge);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},a),N.resolve(this.ei(l))}ei(e){const t=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Le(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return N.forEach(t.mutations,i=>{const s=new pt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new pt(t,0),i=this.Yr.firstAfterOrEqual(r);return N.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q0{constructor(e){this.ni=e,this.docs=function(){return new nt(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(t))}getEntries(e,t){let r=$r();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=$r();const a=t.path,l=new te(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||yI(vI(f),r)<=0||(i.has(f.key)||Ll(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ee(9500)}ri(e,t){return N.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new H0(this)}getSize(e){return N.resolve(this.size)}}class H0 extends M0{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),N.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.persistence=e,this.ii=new Ri(t=>Wc(t),$c),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.si=0,this.oi=new Zc,this.targetCount=0,this._i=ds.ar()}forEachTarget(e,t){return this.ii.forEach((r,i)=>t(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),N.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ds(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.hr(t),N.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ol(0),this.ci=!1,this.ci=!0,this.li=new B0,this.referenceDelegate=e(this),this.hi=new G0(this),this.indexManager=new P0,this.remoteDocumentCache=function(i){return new q0(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new C0(t),this.Ti=new U0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new j0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new z0(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new W0(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,t){return N.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class W0 extends EI{constructor(e){super(),this.currentSequenceNumber=e}}class eh{constructor(e){this.persistence=e,this.Ai=new Zc,this.Ri=null}static Vi(e){return new eh(e)}get mi(){if(this.Ri)return this.Ri;throw ee(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,r=>{const i=te.fromPath(r);return this.fi(e,i).next(s=>{s||t.removeEntry(i,oe.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return N.or([()=>N.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class cl{constructor(e,t){this.persistence=e,this.gi=new Ri(r=>AI(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=x0(this,t)}static Vi(e,t){return new cl(e,t)}Ii(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return N.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?N.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,a=>this.Sr(e,a,t).next(l=>{l||(r++,s.removeEntry(a,oe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ka(e.data.value)),t}Sr(e,t,r){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return N.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=Se(),i=Se();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new th(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return By()?8:TI(xt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ps(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ys(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new $0;return this.ws(e,t,a).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,t,a,l.size)})}).next(()=>s.result)}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(ji()<=we.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Bi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(ji()<=we.DEBUG&&G("QueryEngine","Query:",Bi(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(ji()<=we.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Bi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ln(t))):N.resolve())}ps(e,t){if(yf(t))return N.resolve(null);let r=Ln(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=ic(t,null,"F"),r=Ln(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Se(...s);return this.gs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(t,l);return this.Ds(t,h,a,u.readTime)?this.ps(e,ic(t,null,"F")):this.vs(e,h,t,u)}))})))}ys(e,t,r,i){return yf(t)||i.isEqual(oe.min())?N.resolve(null):this.gs.getDocuments(e,r).next(s=>{const a=this.bs(t,s);return this.Ds(t,a,r,i)?N.resolve(null):(ji()<=we.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Bi(t)),this.vs(e,a,t,_I(i,yo)).next(l=>l))})}bs(e,t){let r=new dt(dm(e));return t.forEach((i,s)=>{Ll(e,s)&&(r=r.add(s))}),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,t,r){return ji()<=we.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Bi(t)),this.gs.getDocumentsMatchingQuery(e,t,qr.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="LocalStore",Y0=3e8;class Q0{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new nt(ge),this.Ms=new Ri(s=>Wc(s),$c),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function X0(n,e,t,r){return new Q0(n,e,t,r)}async function Vm(n,e){const t=Ee(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Se();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:l}))})})}function xm(n){const e=Ee(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function J0(n,e){const t=Ee(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const l=[];e.targetChanges.forEach((f,g)=>{const p=i.get(g);if(!p)return;l.push(t.hi.removeMatchingKeys(s,f.removedDocuments,g).next(()=>t.hi.addMatchingKeys(s,f.addedDocuments,g)));let E=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(bt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),i=i.insert(g,E),function(S,C,O){return S.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=Y0?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,E,f)&&l.push(t.hi.updateTargetData(s,E))});let u=$r(),h=Se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Z0(s,a,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(oe.min())){const f=t.hi.getLastRemoteSnapshotVersion(s).next(g=>t.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return N.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(t.Fs=i,s))}function Z0(n,e,t){let r=Se(),i=Se();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=$r();return t.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(oe.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):G(nh,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:a,ks:i}})}function eb(n,e){const t=Ee(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.hi.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):t.hi.allocateTargetId(r).next(a=>(i=new Pr(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function ac(n,e,t){const r=Ee(n),i=r.Fs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Is(a))throw a;G(nh,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Of(n,e,t){const r=Ee(n);let i=oe.min(),s=Se();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,h,f){const g=Ee(u),p=g.Ms.get(f);return p!==void 0?N.resolve(g.Fs.get(p)):g.hi.getTargetData(h,f)}(r,a,Ln(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?i:oe.min(),t?s:Se())).next(l=>(tb(r,GI(e),l),{documents:l,qs:s})))}function tb(n,e,t){let r=n.xs.get(e)||oe.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.xs.set(e,r)}class Vf{constructor(){this.activeTargetIds=XI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nb{constructor(){this.Fo=new Vf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Vf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="ConnectivityMonitor";class Mf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){G(xf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){G(xf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa=null;function lc(){return pa===null?pa=function(){return 268435456+Math.round(2147483648*Math.random())}():pa++,"0x"+pa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="RestConnection",ib={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===nl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const a=lc(),l=this.Go(e,t.toUriEncodedString());G(_u,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=ys(h);return this.jo(e,l,u,r,f).then(g=>(G(_u,`Received RPC '${e}' ${a}: `,g),g),g=>{throw zr(_u,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g})}Jo(e,t,r,i,s,a){return this.Wo(e,t,r,i,s)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ts}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,t){const r=ib[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="WebChannelConnection";class ab extends sb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,s){const a=lc();return new Promise((l,u)=>{const h=new Bg;h.setWithCredentials(!0),h.listenOnce(zg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Pa.NO_ERROR:const g=h.getResponseJson();G(Rt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case Pa.TIMEOUT:G(Rt,`RPC '${e}' ${a} timed out`),u(new K(V.DEADLINE_EXCEEDED,"Request time out"));break;case Pa.HTTP_ERROR:const p=h.getStatus();if(G(Rt,`RPC '${e}' ${a} failed with status:`,p,"response text:",h.getResponseText()),p>0){let E=h.getResponseJson();Array.isArray(E)&&(E=E[0]);const A=E==null?void 0:E.error;if(A&&A.status&&A.message){const S=function(O){const x=O.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(x)>=0?x:V.UNKNOWN}(A.status);u(new K(S,A.message))}else u(new K(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new K(V.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{G(Rt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(i);G(Rt,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",f,r,15)})}P_(e,t,r){const i=lc(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Gg(),l=Hg(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");G(Rt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);this.T_(g);let p=!1,E=!1;const A=new ob({Ho:C=>{E?G(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(G(Rt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),p=!0),G(Rt,`RPC '${e}' stream ${i} sending:`,C),g.send(C))},Yo:()=>g.close()}),S=(C,O,x)=>{C.listen(O,M=>{try{x(M)}catch(L){setTimeout(()=>{throw L},0)}})};return S(g,zs.EventType.OPEN,()=>{E||(G(Rt,`RPC '${e}' stream ${i} transport opened.`),A.s_())}),S(g,zs.EventType.CLOSE,()=>{E||(E=!0,G(Rt,`RPC '${e}' stream ${i} transport closed`),A.__(),this.I_(g))}),S(g,zs.EventType.ERROR,C=>{E||(E=!0,zr(Rt,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),A.__(new K(V.UNAVAILABLE,"The operation could not be completed")))}),S(g,zs.EventType.MESSAGE,C=>{var O;if(!E){const x=C.data[0];Le(!!x,16349);const M=x,L=(M==null?void 0:M.error)||((O=M[0])===null||O===void 0?void 0:O.error);if(L){G(Rt,`RPC '${e}' stream ${i} received error:`,L);const $=L.status;let z=function(v){const T=it[v];if(T!==void 0)return Tm(T)}($),w=L.message;z===void 0&&(z=V.INTERNAL,w="Unknown error status: "+$+" with message "+L.message),E=!0,A.__(new K(z,w)),g.close()}else G(Rt,`RPC '${e}' stream ${i} received:`,x),A.a_(x)}}),S(l,qg.STAT_EVENT,C=>{C.stat===Ju.PROXY?G(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Ju.NOPROXY&&G(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.o_()},0),A}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function vu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n){return new f0(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="PersistentStream";class lb{constructor(e,t,r,i,s,a,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new rh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(ar(t.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===t&&this.W_(r,i)},r=>{e(()=>{const i=new K(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return G(Lf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(G(Lf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ub extends lb{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=_0(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?oe.min():a.readTime?nr(a.readTime):oe.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Rf(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=rc(u)?{documents:y0(s,u)}:{query:w0(s,u).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Am(s,a.resumeToken);const h=sc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(oe.min())>0){l.readTime=ll(s,a.snapshotVersion.toTimestamp());const h=sc(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=T0(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Rf(this.serializer),t.removeTarget=e,this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{}class hb extends cb{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,oc(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(V.UNKNOWN,s.toString())})}Jo(e,t,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(e,oc(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new K(V.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class db{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ar(t),this._a=!1):G("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="RemoteStore";class fb{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Ho(this)&&(G(fs,"Restarting streams for network reachability change."),await async function(u){const h=Ee(u);h.Ia.add(4),await qo(h),h.Aa.set("Unknown"),h.Ia.delete(4),await zl(h)}(this))})}),this.Aa=new db(r,i)}}async function zl(n){if(Ho(n))for(const e of n.da)await e(!0)}async function qo(n){for(const e of n.da)await e(!1)}function Mm(n,e){const t=Ee(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),ah(t)?oh(t):bs(t).x_()&&sh(t,e))}function ih(n,e){const t=Ee(n),r=bs(t);t.Ta.delete(e),r.x_()&&Lm(t,e),t.Ta.size===0&&(r.x_()?r.B_():Ho(t)&&t.Aa.set("Unknown"))}function sh(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}bs(n).H_(e)}function Lm(n,e){n.Ra.$e(e),bs(n).Y_(e)}function oh(n){n.Ra=new u0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),bs(n).start(),n.Aa.aa()}function ah(n){return Ho(n)&&!bs(n).M_()&&n.Ta.size>0}function Ho(n){return Ee(n).Ia.size===0}function Fm(n){n.Ra=void 0}async function pb(n){n.Aa.set("Online")}async function gb(n){n.Ta.forEach((e,t)=>{sh(n,e)})}async function mb(n,e){Fm(n),ah(n)?(n.Aa.la(e),oh(n)):n.Aa.set("Unknown")}async function _b(n,e,t){if(n.Aa.set("Online"),e instanceof bm&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ta.delete(l),i.Ra.removeTarget(l))}(n,e)}catch(r){G(fs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ff(n,r)}else if(e instanceof Na?n.Ra.Ye(e):e instanceof Im?n.Ra.it(e):n.Ra.et(e),!t.isEqual(oe.min()))try{const r=await xm(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.Ra.Pt(a);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(bt.EMPTY_BYTE_STRING,f.snapshotVersion)),Lm(s,u);const g=new Pr(f.target,u,h,f.sequenceNumber);sh(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){G(fs,"Failed to raise snapshot:",r),await Ff(n,r)}}async function Ff(n,e,t){if(!Is(e))throw e;n.Ia.add(1),await qo(n),n.Aa.set("Offline"),t||(t=()=>xm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G(fs,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await zl(n)})}async function Uf(n,e){const t=Ee(n);t.asyncQueue.verifyOperationInProgress(),G(fs,"RemoteStore received new credentials");const r=Ho(t);t.Ia.add(3),await qo(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await zl(t)}async function vb(n,e){const t=Ee(n);e?(t.Ia.delete(2),await zl(t)):e||(t.Ia.add(2),await qo(t),t.Aa.set("Unknown"))}function bs(n){return n.Va||(n.Va=function(t,r,i){const s=Ee(t);return s.ia(),new ub(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Zo:pb.bind(null,n),e_:gb.bind(null,n),n_:mb.bind(null,n),J_:_b.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),ah(n)?oh(n):n.Aa.set("Unknown")):(await n.Va.stop(),Fm(n))})),n.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new lh(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Um(n,e){if(ar("AsyncQueue",`${e}: ${n}`),Is(n))return new K(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{static emptySet(e){return new Ji(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||te.comparator(t.key,r.key):(t,r)=>te.comparator(t.key,r.key),this.keyedMap=qs(),this.sortedSet=new nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ji)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(){this.fa=new nt(te.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ee(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class ps{constructor(e,t,r,i,s,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new ps(e,t,Ji.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ml(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class wb{constructor(){this.queries=Bf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=Ee(t),s=i.queries;i.queries=Bf(),s.forEach((a,l)=>{for(const u of l.wa)u.onError(r)})})(this,new K(V.ABORTED,"Firestore shutting down"))}}function Bf(){return new Ri(n=>hm(n),Ml)}async function Eb(n,e){const t=Ee(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new yb,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await t.onListen(i,!0);break;case 1:s.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Um(a,`Initialization of query '${Bi(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.wa.push(e),e.va(t.onlineState),s.ya&&e.Ca(s.ya)&&uh(t)}async function Tb(n,e){const t=Ee(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.wa.indexOf(e);a>=0&&(s.wa.splice(a,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Ib(n,e){const t=Ee(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.wa)l.Ca(i)&&(r=!0);a.ya=i}}r&&uh(t)}function bb(n,e,t){const r=Ee(n),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(t);r.queries.delete(e)}function uh(n){n.Da.forEach(e=>{e.next()})}var uc,zf;(zf=uc||(uc={})).Fa="default",zf.Cache="cache";class Ab{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ps(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ps.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==uc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.key=e}}class Bm{constructor(e){this.key=e}}class Sb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Se(),this.mutatedKeys=Se(),this.Xa=dm(e),this.eu=new Ji(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new jf,i=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const p=i.get(f),E=Ll(this.query,g)?g:null,A=!!p&&this.mutatedKeys.has(p.key),S=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let C=!1;p&&E?p.data.isEqual(E.data)?A!==S&&(r.track({type:3,doc:E}),C=!0):this.iu(p,E)||(r.track({type:2,doc:E}),C=!0,(u&&this.Xa(E,u)>0||h&&this.Xa(E,h)<0)&&(l=!0)):!p&&E?(r.track({type:0,doc:E}),C=!0):p&&!E&&(r.track({type:1,doc:p}),C=!0,(u||h)&&(l=!0)),C&&(E?(a=a.add(E),s=S?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:l,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,g)=>function(E,A){const S=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{At:C})}};return S(E)-S(A)}(f.type,g.type)||this.Xa(f.doc,g.doc)),this.su(r),i=i!=null&&i;const l=t&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new ps(this.query,e.eu,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new jf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Se(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new Bm(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new jm(r))}),t}uu(e){this.Ha=e.qs,this.Za=Se();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ps.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ch="SyncEngine";class Cb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Rb{constructor(e){this.key=e,this.lu=!1}}class Pb{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Ri(l=>hm(l),Ml),this.Tu=new Map,this.Iu=new Set,this.du=new nt(te.comparator),this.Eu=new Map,this.Au=new Zc,this.Ru={},this.Vu=new Map,this.mu=ds.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function kb(n,e,t=!0){const r=Wm(n);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await zm(r,e,t,!0),i}async function Db(n,e){const t=Wm(n);await zm(t,e,!0,!1)}async function zm(n,e,t,r){const i=await eb(n.localStore,Ln(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await Nb(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Mm(n.remoteStore,i),l}async function Nb(n,e,t,r,i){n.gu=(g,p,E)=>async function(S,C,O,x){let M=C.view.nu(O);M.Ds&&(M=await Of(S.localStore,C.query,!1).then(({documents:w})=>C.view.nu(w,M)));const L=x&&x.targetChanges.get(C.targetId),$=x&&x.targetMismatches.get(C.targetId)!=null,z=C.view.applyChanges(M,S.isPrimaryClient,L,$);return Hf(S,C.targetId,z._u),z.snapshot}(n,g,p,E);const s=await Of(n.localStore,e,!0),a=new Sb(e,s.qs),l=a.nu(s.documents),u=zo.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);Hf(n,t,h._u);const f=new Cb(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function Ob(n,e,t){const r=Ee(n),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(a=>!Ml(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ac(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ih(r.remoteStore,i.targetId),cc(r,i.targetId)}).catch(Nl)):(cc(r,i.targetId),await ac(r.localStore,i.targetId,!0))}async function Vb(n,e){const t=Ee(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ih(t.remoteStore,r.targetId))}async function qm(n,e){const t=Ee(n);try{const r=await J0(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Eu.get(s);a&&(Le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.lu=!0:i.modifiedDocuments.size>0?Le(a.lu,14607):i.removedDocuments.size>0&&(Le(a.lu,42227),a.lu=!1))}),await Gm(t,r,e)}catch(r){await Nl(r)}}function qf(n,e,t){const r=Ee(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=Ee(a);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const p of g.wa)p.va(l)&&(h=!0)}),h&&uh(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xb(n,e,t){const r=Ee(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),s=i&&i.key;if(s){let a=new nt(te.comparator);a=a.insert(s,gt.newNoDocument(s,oe.min()));const l=Se().add(s),u=new jl(oe.min(),new Map,new nt(ge),a,l);await qm(r,u),r.du=r.du.remove(s),r.Eu.delete(e),hh(r)}else await ac(r.localStore,e,!1).then(()=>cc(r,e,t)).catch(Nl)}function cc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||Hm(n,r)})}function Hm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ih(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),hh(n))}function Hf(n,e,t){for(const r of t)r instanceof jm?(n.Au.addReference(r.key,e),Mb(n,r)):r instanceof Bm?(G(ch,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Hm(n,r.key)):ee(19791,{yu:r})}function Mb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(G(ch,"New document in limbo: "+t),n.Iu.add(r),hh(n))}function hh(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new te(je.fromString(e)),r=n.mu.next();n.Eu.set(r,new Rb(t)),n.du=n.du.insert(t,r),Mm(n.remoteStore,new Pr(Ln(Kc(t.path)),r,"TargetPurposeLimboResolution",Ol.ue))}}async function Gm(n,e,t){const r=Ee(n),i=[],s=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{a.push(r.gu(u,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=th.Es(u.targetId,h);s.push(g)}}))}),await Promise.all(a),r.hu.J_(i),await async function(u,h){const f=Ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>N.forEach(h,p=>N.forEach(p.Is,E=>f.persistence.referenceDelegate.addReference(g,p.targetId,E)).next(()=>N.forEach(p.ds,E=>f.persistence.referenceDelegate.removeReference(g,p.targetId,E)))))}catch(g){if(!Is(g))throw g;G(nh,"Failed to update sequence numbers: "+g)}for(const g of h){const p=g.targetId;if(!g.fromCache){const E=f.Fs.get(p),A=E.snapshotVersion,S=E.withLastLimboFreeSnapshotVersion(A);f.Fs=f.Fs.insert(p,S)}}}(r.localStore,s))}async function Lb(n,e){const t=Ee(n);if(!t.currentUser.isEqual(e)){G(ch,"User change. New user:",e.toKey());const r=await Vm(t.localStore,e);t.currentUser=e,function(s,a){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new K(V.CANCELLED,a))})}),s.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gm(t,r.Bs)}}function Fb(n,e){const t=Ee(n),r=t.Eu.get(e);if(r&&r.lu)return Se().add(r.key);{let i=Se();const s=t.Tu.get(e);if(!s)return i;for(const a of s){const l=t.Pu.get(a);i=i.unionWith(l.view.tu)}return i}}function Wm(n){const e=Ee(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xb.bind(null,e),e.hu.J_=Ib.bind(null,e.eventManager),e.hu.pu=bb.bind(null,e.eventManager),e}class hl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bl(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return X0(this.persistence,new K0,e.initialUser,this.serializer)}Du(e){return new Om(eh.Vi,this.serializer)}bu(e){return new nb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hl.provider={build:()=>new hl};class Ub extends hl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Le(this.persistence.referenceDelegate instanceof cl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new O0(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?qt.withCacheSize(this.cacheSizeBytes):qt.DEFAULT;return new Om(r=>cl.Vi(r,t),this.serializer)}}class hc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lb.bind(null,this.syncEngine),await vb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wb}()}createDatastore(e){const t=Bl(e.databaseInfo.databaseId),r=function(s){return new ab(s)}(e.databaseInfo);return function(s,a,l,u){return new hb(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new fb(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>qf(this.syncEngine,t,0),function(){return Mf.C()?new Mf:new rb}())}createSyncEngine(e,t){return function(i,s,a,l,u,h,f){const g=new Pb(i,s,a,l,u,h);return f&&(g.fu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=Ee(i);G(fs,"RemoteStore shutting down."),s.Ia.add(5),await qo(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hc.provider={build:()=>new hc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new K(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const a=Ee(i),l={documents:s.map(g=>ul(a.serializer,g))},u=await a.Jo("BatchGetDocuments",a.serializer.databaseId,je.emptyPath(),l,s.length),h=new Map;u.forEach(g=>{const p=m0(a.serializer,g);h.set(p.key.toString(),p)});const f=[];return s.forEach(g=>{const p=h.get(g.toString());Le(!!p,55234,{key:g}),f.push(p)}),f}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Qc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const i=te.fromPath(r);this.mutations.push(new Em(i,this.precondition(i)))}),await async function(r,i){const s=Ee(r),a={writes:i.map(l=>v0(s.serializer,l))};await s.Wo("Commit",s.serializer.databaseId,je.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ee(50498,{Wu:e.constructor.name});t=oe.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new K(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(oe.min())?pn.exists(!1):pn.updateTime(t):pn.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(oe.min()))throw new K(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return pn.updateTime(t)}return pn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.Gu=r.maxAttempts,this.F_=new rh(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(async()=>{const e=new Bb(this.datastore),t=this.Ju(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Hu(i)}))}).catch(r=>{this.Hu(r)})})}Ju(e){try{const t=this.updateFunction(e);return!jo(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!a0(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="FirestoreClient";class qb{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Dt.UNAUTHENTICATED,this.clientId=zc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{G(Kr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(G(Kr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Um(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function yu(n,e){n.asyncQueue.verifyOperationInProgress(),G(Kr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Vm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{zr("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{G("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{zr("Terminating Firestore due to IndexedDb database deletion failed",i)})}),n._offlineComponents=e}async function Gf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Hb(n);G(Kr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Uf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Uf(e.remoteStore,i)),n._onlineComponents=e}async function Hb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G(Kr,"Using user provided OfflineComponentProvider");try{await yu(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;zr("Error using user provided cache. Falling back to memory cache: "+t),await yu(n,new hl)}}else G(Kr,"Using default OfflineComponentProvider"),await yu(n,new Ub(void 0));return n._offlineComponents}async function $m(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G(Kr,"Using user provided OnlineComponentProvider"),await Gf(n,n._uninitializedComponentsProvider._online)):(G(Kr,"Using default OnlineComponentProvider"),await Gf(n,new hc))),n._onlineComponents}function Gb(n){return $m(n).then(e=>e.datastore)}async function Wb(n){const e=await $m(n),t=e.eventManager;return t.onListen=kb.bind(null,e.syncEngine),t.onUnlisten=Ob.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Db.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Vb.bind(null,e.syncEngine),t}function $b(n,e,t={}){const r=new Ur;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,h){const f=new jb({next:p=>{f.Ou(),a.enqueueAndForget(()=>Tb(s,g));const E=p.docs.has(l);!E&&p.fromCache?h.reject(new K(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&p.fromCache&&u&&u.source==="server"?h.reject(new K(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(p)},error:p=>h.reject(p)}),g=new Ab(Kc(l.path),f,{includeMetadataChanges:!0,ka:!0});return Eb(s,g)}(await Wb(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="firestore.googleapis.com",$f=!0;class Kf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ym,this.ssl=$f}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$f;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Nm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<D0)throw new K(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Km((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dh{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oI;switch(r.type){case"firstParty":return new cI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wf.get(t);r&&(G("ComponentProvider","Removing Datastore"),Wf.delete(t),r.terminate())}(this),Promise.resolve()}}function Kb(n,e,t,r={}){var i;n=el(n,dh);const s=ys(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),u=`${e}:${t}`;s&&(eg(`https://${u}`),tg("Firestore",!0)),a.host!==Ym&&a.host!==u&&zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:u,ssl:s,emulatorOptions:r});if(!wi(h,l)&&(n._setSettings(h),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=Dt.MOCK_USER;else{f=Ny(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new K(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Dt(p)}n._authCredentials=new aI(new $g(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fh(this.firestore,e,this._query)}}class mt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}toJSON(){return{type:mt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Uo(t,mt._jsonSchema))return new mt(e,r||null,new te(je.fromString(t.referencePath)))}}mt._jsonSchemaVersion="firestore/documentReference/1.0",mt._jsonSchema={type:lt("string",mt._jsonSchemaVersion),referencePath:lt("string")};class Ao extends fh{constructor(e,t,r){super(e,t,Kc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new te(e))}withConverter(e){return new Ao(this.firestore,e,this._path)}}function Qm(n,e,...t){if(n=Yt(n),arguments.length===1&&(e=zc.newId()),gI("doc","path",e),n instanceof dh){const r=je.fromString(e,...t);return of(r),new mt(n,null,new te(r))}{if(!(n instanceof mt||n instanceof Ao))throw new K(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(je.fromString(e,...t));return of(r),new mt(n.firestore,n instanceof Ao?n.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="AsyncQueue";class Qf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new rh(this,"async_queue_retry"),this.oc=()=>{const r=vu();r&&G(Yf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=vu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=vu();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Ur;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Is(e))throw e;G(Yf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,ar("INTERNAL UNHANDLED ERROR: ",Xf(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=lh.createAndSchedule(this,e,t,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&ee(47125,{hc:Xf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Xf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ph extends dh{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Qf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qf(e),this._firestoreClient=void 0,await e}}}function Yb(n,e){const t=typeof n=="object"?n:sg(),r=typeof n=="string"?n:nl,i=Nc(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ky("firestore");s&&Kb(i,...s)}return i}function Xm(n){if(n._terminated)throw new K(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qb(n),n._firestoreClient}function Qb(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,h,f){return new RI(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Km(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new qb(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nn(bt.fromBase64String(e))}catch(t){throw new K(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nn(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Uo(e,nn._jsonSchema))return nn.fromBase64String(e.bytes)}}nn._jsonSchemaVersion="firestore/bytes/1.0",nn._jsonSchema={type:lt("string",nn._jsonSchemaVersion),bytes:lt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Fn._jsonSchemaVersion}}static fromJSON(e){if(Uo(e,Fn._jsonSchema))return new Fn(e.latitude,e.longitude)}}Fn._jsonSchemaVersion="firestore/geoPoint/1.0",Fn._jsonSchema={type:lt("string",Fn._jsonSchemaVersion),latitude:lt("number"),longitude:lt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Uo(e,Un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Un(e.vectorValues);throw new K(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Un._jsonSchemaVersion="firestore/vectorValue/1.0",Un._jsonSchema={type:lt("string",Un._jsonSchemaVersion),vectorValues:lt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=/^__.*__$/;class Jb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Bo(e,this.data,t,this.fieldTransforms)}}class Jm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Pi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ec:n})}}class mh{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new mh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return dl(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Zm(this.Ec)&&Xb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Zb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Bl(e)}Dc(e,t,r,i=!1){return new mh({Ec:e,methodName:t,bc:r,path:Nt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eA(n){const e=n._freezeSettings(),t=Bl(n._databaseId);return new Zb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function tA(n,e,t,r,i,s={}){const a=n.Dc(s.merge||s.mergeFields?2:0,e,t,i);_h("Data must be an object, but it was:",a,r);const l=e_(r,a);let u,h;if(s.merge)u=new gn(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const p=dc(e,g,t);if(!a.contains(p))throw new K(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);n_(f,p)||f.push(p)}u=new gn(f),h=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=a.fieldTransforms;return new Jb(new Ht(l),u,h)}class Hl extends gh{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hl}}function nA(n,e,t,r){const i=n.Dc(1,e,t);_h("Data must be an object, but it was:",i,r);const s=[],a=Ht.empty();Ci(r,(u,h)=>{const f=vh(e,u,t);h=Yt(h);const g=i.gc(f);if(h instanceof Hl)s.push(f);else{const p=Gl(h,g);p!=null&&(s.push(f),a.set(f,p))}});const l=new gn(s);return new Jm(a,l,i.fieldTransforms)}function rA(n,e,t,r,i,s){const a=n.Dc(1,e,t),l=[dc(e,r,t)],u=[i];if(s.length%2!=0)throw new K(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)l.push(dc(e,s[p])),u.push(s[p+1]);const h=[],f=Ht.empty();for(let p=l.length-1;p>=0;--p)if(!n_(h,l[p])){const E=l[p];let A=u[p];A=Yt(A);const S=a.gc(E);if(A instanceof Hl)h.push(E);else{const C=Gl(A,S);C!=null&&(h.push(E),f.set(E,C))}}const g=new gn(h);return new Jm(f,g,a.fieldTransforms)}function Gl(n,e){if(t_(n=Yt(n)))return _h("Unsupported field value:",e,n),e_(n,e);if(n instanceof gh)return function(r,i){if(!Zm(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Gl(l,i.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=Yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=qe.fromDate(r);return{timestampValue:ll(i.serializer,s)}}if(r instanceof qe){const s=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ll(i.serializer,s)}}if(r instanceof Fn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nn)return{bytesValue:Am(i.serializer,r._byteString)};if(r instanceof mt){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jc(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Un)return function(a,l){return{mapValue:{fields:{[rm]:{stringValue:im},[rl]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return Yc(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${qc(r)}`)}(n,e)}function e_(n,e){const t={};return Xg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(n,(r,i)=>{const s=Gl(i,e.Vc(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function t_(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof qe||n instanceof Fn||n instanceof nn||n instanceof mt||n instanceof gh||n instanceof Un)}function _h(n,e,t){if(!t_(t)||!Yg(t)){const r=qc(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function dc(n,e,t){if((e=Yt(e))instanceof ql)return e._internalPath;if(typeof e=="string")return vh(n,e);throw dl("Field path arguments must be of type string or ",n,!1,void 0,t)}const iA=new RegExp("[~\\*/\\[\\]]");function vh(n,e,t){if(e.search(iA)>=0)throw dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ql(...e.split("."))._internalPath}catch{throw dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function dl(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new K(V.INVALID_ARGUMENT,l+n+u)}function n_(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(r_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class sA extends fl{data(){return super.data()}}function r_(n,e){return typeof e=="string"?vh(n,e):e instanceof ql?e._internalPath:e._delegate._internalPath}class i_{convertValue(e,t="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ci(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[rl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(a=>tt(a.doubleValue));return new Un(s)}convertGeoPoint(e){return new Fn(tt(e.latitude),tt(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(wo(e));default:return null}}convertTimestamp(e){const t=Hr(e);return new qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=je.fromString(e);Le(Dm(r),9688,{name:e});const i=new Eo(r.get(1),r.get(3)),s=new te(r.popFirst(5));return i.isEqual(t)||ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class aA extends i_{constructor(e){super(),this.firestore=e}convertBytes(e){return new nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,t)}}class $i{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jr extends fl{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Oa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(r_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=jr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",jr._jsonSchema={type:lt("string",jr._jsonSchemaVersion),bundleSource:lt("string","DocumentSnapshot"),bundleName:lt("string"),bundle:lt("string")};class Oa extends jr{data(e={}){return super.data(e)}}class ao{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new $i(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Oa(this._firestore,this._userDataWriter,r.key,r,new $i(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Oa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new $i(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Oa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new $i(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:lA(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ao._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=zc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function lA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(n){n=el(n,mt);const e=el(n.firestore,ph);return $b(Xm(e),n._key).then(t=>cA(e,n,t))}ao._jsonSchemaVersion="firestore/querySnapshot/1.0",ao._jsonSchema={type:lt("string",ao._jsonSchemaVersion),bundleSource:lt("string","QuerySnapshot"),bundleName:lt("string"),bundle:lt("string")};class s_ extends i_{constructor(e){super(),this.firestore=e}convertBytes(e){return new nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,t)}}function cA(n,e,t){const r=t.docs.get(e._key),i=new s_(n);return new jr(n,i,e._key,r,new $i(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA={maxAttempts:5};function Gs(n,e){if((n=Yt(n)).firestore!==e)throw new K(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=eA(e)}get(e){const t=Gs(e,this._firestore),r=new aA(this._firestore);return this._transaction.lookup([t._key]).then(i=>{if(!i||i.length!==1)return ee(24041);const s=i[0];if(s.isFoundDocument())return new fl(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new fl(this._firestore,r,t._key,null,t.converter);throw ee(18433,{doc:s})})}set(e,t,r){const i=Gs(e,this._firestore),s=oA(i.converter,t,r),a=tA(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,a),this}update(e,t,r,...i){const s=Gs(e,this._firestore);let a;return a=typeof(t=Yt(t))=="string"||t instanceof ql?rA(this._dataReader,"Transaction.update",s._key,t,r,i):nA(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,a),this}delete(e){const t=Gs(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA extends dA{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Gs(e,this._firestore),r=new s_(this._firestore);return super.get(e).then(i=>new jr(this._firestore,r,t._key,i._document,new $i(!1,!1),t.converter))}}function pA(n,e,t){n=el(n,ph);const r=Object.assign(Object.assign({},hA),t);return function(s){if(s.maxAttempts<1)throw new K(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,a,l){const u=new Ur;return s.asyncQueue.enqueueAndForget(async()=>{const h=await Gb(s);new zb(s.asyncQueue,h,l,a,u).zu()}),u.promise}(Xm(n),i=>e(new fA(n,i)),r)}(function(e,t=!0){(function(i){Ts=i})(ws),ls(new Ei("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new ph(new lI(r.getProvider("auth-internal")),new hI(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Mr(ef,tf,e),Mr(ef,tf,"esm2017")})();const gA=typeof window<"u"&&window.__firebase_config?JSON.parse(window.__firebase_config):{apiKey:"YOUR_API_KEY",authDomain:"YOUR_AUTH_DOMAIN",projectId:"YOUR_PROJECT_ID"},o_=typeof window<"u"&&window.__app_id?window.__app_id:"default-art-study-app",a_=ig(gA),fc=Yb(a_),mA=nI(a_);var _A=$e('<div class="text-center neuro-panel" style="padding: 2rem;"><h1 style="font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--primary-dark);">Abstract Art Study</h1> <p style="margin-bottom: 2rem; font-size: 1.125rem; color: var(--primary);">Welcome! This study involves two short steps. Your participation helps us understand the connection between visual art and language.</p> <button class="neuro-btn" style="font-size: 1.125rem; font-weight: 600; padding: 0.75rem 2rem; color: var(--primary-dark);">Begin Study</button></div>');function vA(n,e){Ai(e,!0);var t=_A(),r=ce(ie(t),4);r.__click=()=>{var i;return(i=e.onstart)==null?void 0:i.call(e)},xe(n,t),Si()}Oo(["click"]);/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Jf(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Gn(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Jf(Object(t),!0).forEach(function(r){yA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Jf(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Va(n){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Va=function(e){return typeof e}:Va=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Va(n)}function yA(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function lr(){return lr=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},lr.apply(this,arguments)}function wA(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function EA(n,e){if(n==null)return{};var t=wA(n,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var TA="1.15.6";function rr(n){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(n)}var fr=rr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Go=rr(/Edge/i),Zf=rr(/firefox/i),lo=rr(/safari/i)&&!rr(/chrome/i)&&!rr(/android/i),yh=rr(/iP(ad|od|hone)/i),l_=rr(/chrome/i)&&rr(/android/i),u_={capture:!1,passive:!1};function Te(n,e,t){n.addEventListener(e,t,!fr&&u_)}function ye(n,e,t){n.removeEventListener(e,t,!fr&&u_)}function pl(n,e){if(e){if(e[0]===">"&&(e=e.substring(1)),n)try{if(n.matches)return n.matches(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e)}catch{return!1}return!1}}function c_(n){return n.host&&n!==document&&n.host.nodeType?n.host:n.parentNode}function wn(n,e,t,r){if(n){t=t||document;do{if(e!=null&&(e[0]===">"?n.parentNode===t&&pl(n,e):pl(n,e))||r&&n===t)return n;if(n===t)break}while(n=c_(n))}return null}var ep=/\s+/g;function Jt(n,e,t){if(n&&e)if(n.classList)n.classList[t?"add":"remove"](e);else{var r=(" "+n.className+" ").replace(ep," ").replace(" "+e+" "," ");n.className=(r+(t?" "+e:"")).replace(ep," ")}}function se(n,e,t){var r=n&&n.style;if(r){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(n,""):n.currentStyle&&(t=n.currentStyle),e===void 0?t:t[e];!(e in r)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),r[e]=t+(typeof t=="string"?"":"px")}}function Zi(n,e){var t="";if(typeof n=="string")t=n;else do{var r=se(n,"transform");r&&r!=="none"&&(t=r+" "+t)}while(!e&&(n=n.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(t)}function h_(n,e,t){if(n){var r=n.getElementsByTagName(e),i=0,s=r.length;if(t)for(;i<s;i++)t(r[i],i);return r}return[]}function jn(){var n=document.scrollingElement;return n||document.documentElement}function ot(n,e,t,r,i){if(!(!n.getBoundingClientRect&&n!==window)){var s,a,l,u,h,f,g;if(n!==window&&n.parentNode&&n!==jn()?(s=n.getBoundingClientRect(),a=s.top,l=s.left,u=s.bottom,h=s.right,f=s.height,g=s.width):(a=0,l=0,u=window.innerHeight,h=window.innerWidth,f=window.innerHeight,g=window.innerWidth),(e||t)&&n!==window&&(i=i||n.parentNode,!fr))do if(i&&i.getBoundingClientRect&&(se(i,"transform")!=="none"||t&&se(i,"position")!=="static")){var p=i.getBoundingClientRect();a-=p.top+parseInt(se(i,"border-top-width")),l-=p.left+parseInt(se(i,"border-left-width")),u=a+s.height,h=l+s.width;break}while(i=i.parentNode);if(r&&n!==window){var E=Zi(i||n),A=E&&E.a,S=E&&E.d;E&&(a/=S,l/=A,g/=A,f/=S,u=a+f,h=l+g)}return{top:a,left:l,bottom:u,right:h,width:g,height:f}}}function tp(n,e,t){for(var r=kr(n,!0),i=ot(n)[e];r;){var s=ot(r)[t],a=void 0;if(a=i>=s,!a)return r;if(r===jn())break;r=kr(r,!1)}return!1}function gs(n,e,t,r){for(var i=0,s=0,a=n.children;s<a.length;){if(a[s].style.display!=="none"&&a[s]!==re.ghost&&(r||a[s]!==re.dragged)&&wn(a[s],t.draggable,n,!1)){if(i===e)return a[s];i++}s++}return null}function wh(n,e){for(var t=n.lastElementChild;t&&(t===re.ghost||se(t,"display")==="none"||e&&!pl(t,e));)t=t.previousElementSibling;return t||null}function an(n,e){var t=0;if(!n||!n.parentNode)return-1;for(;n=n.previousElementSibling;)n.nodeName.toUpperCase()!=="TEMPLATE"&&n!==re.clone&&(!e||pl(n,e))&&t++;return t}function np(n){var e=0,t=0,r=jn();if(n)do{var i=Zi(n),s=i.a,a=i.d;e+=n.scrollLeft*s,t+=n.scrollTop*a}while(n!==r&&(n=n.parentNode));return[e,t]}function IA(n,e){for(var t in n)if(n.hasOwnProperty(t)){for(var r in e)if(e.hasOwnProperty(r)&&e[r]===n[t][r])return Number(t)}return-1}function kr(n,e){if(!n||!n.getBoundingClientRect)return jn();var t=n,r=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var i=se(t);if(t.clientWidth<t.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return jn();if(r||e)return t;r=!0}}while(t=t.parentNode);return jn()}function bA(n,e){if(n&&e)for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n}function wu(n,e){return Math.round(n.top)===Math.round(e.top)&&Math.round(n.left)===Math.round(e.left)&&Math.round(n.height)===Math.round(e.height)&&Math.round(n.width)===Math.round(e.width)}var uo;function d_(n,e){return function(){if(!uo){var t=arguments,r=this;t.length===1?n.call(r,t[0]):n.apply(r,t),uo=setTimeout(function(){uo=void 0},e)}}}function AA(){clearTimeout(uo),uo=void 0}function f_(n,e,t){n.scrollLeft+=e,n.scrollTop+=t}function p_(n){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(n).cloneNode(!0):t?t(n).clone(!0)[0]:n.cloneNode(!0)}function g_(n,e,t){var r={};return Array.from(n.children).forEach(function(i){var s,a,l,u;if(!(!wn(i,e.draggable,n,!1)||i.animated||i===t)){var h=ot(i);r.left=Math.min((s=r.left)!==null&&s!==void 0?s:1/0,h.left),r.top=Math.min((a=r.top)!==null&&a!==void 0?a:1/0,h.top),r.right=Math.max((l=r.right)!==null&&l!==void 0?l:-1/0,h.right),r.bottom=Math.max((u=r.bottom)!==null&&u!==void 0?u:-1/0,h.bottom)}}),r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}var Gt="Sortable"+new Date().getTime();function SA(){var n=[],e;return{captureAnimationState:function(){if(n=[],!!this.options.animation){var r=[].slice.call(this.el.children);r.forEach(function(i){if(!(se(i,"display")==="none"||i===re.ghost)){n.push({target:i,rect:ot(i)});var s=Gn({},n[n.length-1].rect);if(i.thisAnimationDuration){var a=Zi(i,!0);a&&(s.top-=a.f,s.left-=a.e)}i.fromRect=s}})}},addAnimationState:function(r){n.push(r)},removeAnimationState:function(r){n.splice(IA(n,{target:r}),1)},animateAll:function(r){var i=this;if(!this.options.animation){clearTimeout(e),typeof r=="function"&&r();return}var s=!1,a=0;n.forEach(function(l){var u=0,h=l.target,f=h.fromRect,g=ot(h),p=h.prevFromRect,E=h.prevToRect,A=l.rect,S=Zi(h,!0);S&&(g.top-=S.f,g.left-=S.e),h.toRect=g,h.thisAnimationDuration&&wu(p,g)&&!wu(f,g)&&(A.top-g.top)/(A.left-g.left)===(f.top-g.top)/(f.left-g.left)&&(u=RA(A,p,E,i.options)),wu(g,f)||(h.prevFromRect=f,h.prevToRect=g,u||(u=i.options.animation),i.animate(h,A,g,u)),u&&(s=!0,a=Math.max(a,u),clearTimeout(h.animationResetTimer),h.animationResetTimer=setTimeout(function(){h.animationTime=0,h.prevFromRect=null,h.fromRect=null,h.prevToRect=null,h.thisAnimationDuration=null},u),h.thisAnimationDuration=u)}),clearTimeout(e),s?e=setTimeout(function(){typeof r=="function"&&r()},a):typeof r=="function"&&r(),n=[]},animate:function(r,i,s,a){if(a){se(r,"transition",""),se(r,"transform","");var l=Zi(this.el),u=l&&l.a,h=l&&l.d,f=(i.left-s.left)/(u||1),g=(i.top-s.top)/(h||1);r.animatingX=!!f,r.animatingY=!!g,se(r,"transform","translate3d("+f+"px,"+g+"px,0)"),this.forRepaintDummy=CA(r),se(r,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),se(r,"transform","translate3d(0,0,0)"),typeof r.animated=="number"&&clearTimeout(r.animated),r.animated=setTimeout(function(){se(r,"transition",""),se(r,"transform",""),r.animated=!1,r.animatingX=!1,r.animatingY=!1},a)}}}}function CA(n){return n.offsetWidth}function RA(n,e,t,r){return Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*r.animation}var Fi=[],Eu={initializeByDefault:!0},Wo={mount:function(e){for(var t in Eu)Eu.hasOwnProperty(t)&&!(t in e)&&(e[t]=Eu[t]);Fi.forEach(function(r){if(r.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),Fi.push(e)},pluginEvent:function(e,t,r){var i=this;this.eventCanceled=!1,r.cancel=function(){i.eventCanceled=!0};var s=e+"Global";Fi.forEach(function(a){t[a.pluginName]&&(t[a.pluginName][s]&&t[a.pluginName][s](Gn({sortable:t},r)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](Gn({sortable:t},r)))})},initializePlugins:function(e,t,r,i){Fi.forEach(function(l){var u=l.pluginName;if(!(!e.options[u]&&!l.initializeByDefault)){var h=new l(e,t,e.options);h.sortable=e,h.options=e.options,e[u]=h,lr(r,h.defaults)}});for(var s in e.options)if(e.options.hasOwnProperty(s)){var a=this.modifyOption(e,s,e.options[s]);typeof a<"u"&&(e.options[s]=a)}},getEventProperties:function(e,t){var r={};return Fi.forEach(function(i){typeof i.eventProperties=="function"&&lr(r,i.eventProperties.call(t[i.pluginName],e))}),r},modifyOption:function(e,t,r){var i;return Fi.forEach(function(s){e[s.pluginName]&&s.optionListeners&&typeof s.optionListeners[t]=="function"&&(i=s.optionListeners[t].call(e[s.pluginName],r))}),i}};function PA(n){var e=n.sortable,t=n.rootEl,r=n.name,i=n.targetEl,s=n.cloneEl,a=n.toEl,l=n.fromEl,u=n.oldIndex,h=n.newIndex,f=n.oldDraggableIndex,g=n.newDraggableIndex,p=n.originalEvent,E=n.putSortable,A=n.extraEventProperties;if(e=e||t&&t[Gt],!!e){var S,C=e.options,O="on"+r.charAt(0).toUpperCase()+r.substr(1);window.CustomEvent&&!fr&&!Go?S=new CustomEvent(r,{bubbles:!0,cancelable:!0}):(S=document.createEvent("Event"),S.initEvent(r,!0,!0)),S.to=a||t,S.from=l||t,S.item=i||t,S.clone=s,S.oldIndex=u,S.newIndex=h,S.oldDraggableIndex=f,S.newDraggableIndex=g,S.originalEvent=p,S.pullMode=E?E.lastPutMode:void 0;var x=Gn(Gn({},A),Wo.getEventProperties(r,e));for(var M in x)S[M]=x[M];t&&t.dispatchEvent(S),C[O]&&C[O].call(e,S)}}var kA=["evt"],Bt=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=r.evt,s=EA(r,kA);Wo.pluginEvent.bind(re)(e,t,Gn({dragEl:j,parentEl:Xe,ghostEl:ue,rootEl:ze,nextEl:ii,lastDownEl:xa,cloneEl:We,cloneHidden:Ar,dragStarted:Ws,putSortable:yt,activeSortable:re.active,originalEvent:i,oldIndex:Ki,oldDraggableIndex:co,newIndex:en,newDraggableIndex:wr,hideGhostForTarget:y_,unhideGhostForTarget:w_,cloneNowHidden:function(){Ar=!0},cloneNowShown:function(){Ar=!1},dispatchSortableEvent:function(l){Ft({sortable:t,name:l,originalEvent:i})}},s))};function Ft(n){PA(Gn({putSortable:yt,cloneEl:We,targetEl:j,rootEl:ze,oldIndex:Ki,oldDraggableIndex:co,newIndex:en,newDraggableIndex:wr},n))}var j,Xe,ue,ze,ii,xa,We,Ar,Ki,en,co,wr,ga,yt,Hi=!1,gl=!1,ml=[],ti,_n,Tu,Iu,rp,ip,Ws,Ui,ho,fo=!1,ma=!1,Ma,Pt,bu=[],pc=!1,_l=[],Wl=typeof document<"u",_a=yh,sp=Go||fr?"cssFloat":"float",DA=Wl&&!l_&&!yh&&"draggable"in document.createElement("div"),m_=function(){if(Wl){if(fr)return!1;var n=document.createElement("x");return n.style.cssText="pointer-events:auto",n.style.pointerEvents==="auto"}}(),__=function(e,t){var r=se(e),i=parseInt(r.width)-parseInt(r.paddingLeft)-parseInt(r.paddingRight)-parseInt(r.borderLeftWidth)-parseInt(r.borderRightWidth),s=gs(e,0,t),a=gs(e,1,t),l=s&&se(s),u=a&&se(a),h=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+ot(s).width,f=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+ot(a).width;if(r.display==="flex")return r.flexDirection==="column"||r.flexDirection==="column-reverse"?"vertical":"horizontal";if(r.display==="grid")return r.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(s&&l.float&&l.float!=="none"){var g=l.float==="left"?"left":"right";return a&&(u.clear==="both"||u.clear===g)?"vertical":"horizontal"}return s&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||h>=i&&r[sp]==="none"||a&&r[sp]==="none"&&h+f>i)?"vertical":"horizontal"},NA=function(e,t,r){var i=r?e.left:e.top,s=r?e.right:e.bottom,a=r?e.width:e.height,l=r?t.left:t.top,u=r?t.right:t.bottom,h=r?t.width:t.height;return i===l||s===u||i+a/2===l+h/2},OA=function(e,t){var r;return ml.some(function(i){var s=i[Gt].options.emptyInsertThreshold;if(!(!s||wh(i))){var a=ot(i),l=e>=a.left-s&&e<=a.right+s,u=t>=a.top-s&&t<=a.bottom+s;if(l&&u)return r=i}}),r},v_=function(e){function t(s,a){return function(l,u,h,f){var g=l.options.group.name&&u.options.group.name&&l.options.group.name===u.options.group.name;if(s==null&&(a||g))return!0;if(s==null||s===!1)return!1;if(a&&s==="clone")return s;if(typeof s=="function")return t(s(l,u,h,f),a)(l,u,h,f);var p=(a?l:u).options.group.name;return s===!0||typeof s=="string"&&s===p||s.join&&s.indexOf(p)>-1}}var r={},i=e.group;(!i||Va(i)!="object")&&(i={name:i}),r.name=i.name,r.checkPull=t(i.pull,!0),r.checkPut=t(i.put),r.revertClone=i.revertClone,e.group=r},y_=function(){!m_&&ue&&se(ue,"display","none")},w_=function(){!m_&&ue&&se(ue,"display","")};Wl&&!l_&&document.addEventListener("click",function(n){if(gl)return n.preventDefault(),n.stopPropagation&&n.stopPropagation(),n.stopImmediatePropagation&&n.stopImmediatePropagation(),gl=!1,!1},!0);var ni=function(e){if(j){e=e.touches?e.touches[0]:e;var t=OA(e.clientX,e.clientY);if(t){var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);r.target=r.rootEl=t,r.preventDefault=void 0,r.stopPropagation=void 0,t[Gt]._onDragOver(r)}}},VA=function(e){j&&j.parentNode[Gt]._isOutsideThisEl(e.target)};function re(n,e){if(!(n&&n.nodeType&&n.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));this.el=n,this.options=e=lr({},e),n[Gt]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(n.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return __(n,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:re.supportPointer!==!1&&"PointerEvent"in window&&(!lo||yh),emptyInsertThreshold:5};Wo.initializePlugins(this,n,t);for(var r in t)!(r in e)&&(e[r]=t[r]);v_(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:DA,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?Te(n,"pointerdown",this._onTapStart):(Te(n,"mousedown",this._onTapStart),Te(n,"touchstart",this._onTapStart)),this.nativeDraggable&&(Te(n,"dragover",this),Te(n,"dragenter",this)),ml.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),lr(this,SA())}re.prototype={constructor:re,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(Ui=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,j):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,r=this.el,i=this.options,s=i.preventOnFilter,a=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,u=(l||e).target,h=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||u,f=i.filter;if(zA(r),!j&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||i.disabled)&&!h.isContentEditable&&!(!this.nativeDraggable&&lo&&u&&u.tagName.toUpperCase()==="SELECT")&&(u=wn(u,i.draggable,r,!1),!(u&&u.animated)&&xa!==u)){if(Ki=an(u),co=an(u,i.draggable),typeof f=="function"){if(f.call(this,e,u,this)){Ft({sortable:t,rootEl:h,name:"filter",targetEl:u,toEl:r,fromEl:r}),Bt("filter",t,{evt:e}),s&&e.preventDefault();return}}else if(f&&(f=f.split(",").some(function(g){if(g=wn(h,g.trim(),r,!1),g)return Ft({sortable:t,rootEl:g,name:"filter",targetEl:u,fromEl:r,toEl:r}),Bt("filter",t,{evt:e}),!0}),f)){s&&e.preventDefault();return}i.handle&&!wn(h,i.handle,r,!1)||this._prepareDragStart(e,l,u)}}},_prepareDragStart:function(e,t,r){var i=this,s=i.el,a=i.options,l=s.ownerDocument,u;if(r&&!j&&r.parentNode===s){var h=ot(r);if(ze=s,j=r,Xe=j.parentNode,ii=j.nextSibling,xa=r,ga=a.group,re.dragged=j,ti={target:j,clientX:(t||e).clientX,clientY:(t||e).clientY},rp=ti.clientX-h.left,ip=ti.clientY-h.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,j.style["will-change"]="all",u=function(){if(Bt("delayEnded",i,{evt:e}),re.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!Zf&&i.nativeDraggable&&(j.draggable=!0),i._triggerDragStart(e,t),Ft({sortable:i,name:"choose",originalEvent:e}),Jt(j,a.chosenClass,!0)},a.ignore.split(",").forEach(function(f){h_(j,f.trim(),Au)}),Te(l,"dragover",ni),Te(l,"mousemove",ni),Te(l,"touchmove",ni),a.supportPointer?(Te(l,"pointerup",i._onDrop),!this.nativeDraggable&&Te(l,"pointercancel",i._onDrop)):(Te(l,"mouseup",i._onDrop),Te(l,"touchend",i._onDrop),Te(l,"touchcancel",i._onDrop)),Zf&&this.nativeDraggable&&(this.options.touchStartThreshold=4,j.draggable=!0),Bt("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Go||fr))){if(re.eventCanceled){this._onDrop();return}a.supportPointer?(Te(l,"pointerup",i._disableDelayedDrag),Te(l,"pointercancel",i._disableDelayedDrag)):(Te(l,"mouseup",i._disableDelayedDrag),Te(l,"touchend",i._disableDelayedDrag),Te(l,"touchcancel",i._disableDelayedDrag)),Te(l,"mousemove",i._delayedDragTouchMoveHandler),Te(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&Te(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(u,a.delay)}else u()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){j&&Au(j),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;ye(e,"mouseup",this._disableDelayedDrag),ye(e,"touchend",this._disableDelayedDrag),ye(e,"touchcancel",this._disableDelayedDrag),ye(e,"pointerup",this._disableDelayedDrag),ye(e,"pointercancel",this._disableDelayedDrag),ye(e,"mousemove",this._delayedDragTouchMoveHandler),ye(e,"touchmove",this._delayedDragTouchMoveHandler),ye(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?Te(document,"pointermove",this._onTouchMove):t?Te(document,"touchmove",this._onTouchMove):Te(document,"mousemove",this._onTouchMove):(Te(j,"dragend",this),Te(ze,"dragstart",this._onDragStart));try{document.selection?La(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(Hi=!1,ze&&j){Bt("dragStarted",this,{evt:t}),this.nativeDraggable&&Te(document,"dragover",VA);var r=this.options;!e&&Jt(j,r.dragClass,!1),Jt(j,r.ghostClass,!0),re.active=this,e&&this._appendGhost(),Ft({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(_n){this._lastX=_n.clientX,this._lastY=_n.clientY,y_();for(var e=document.elementFromPoint(_n.clientX,_n.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(_n.clientX,_n.clientY),e!==t);)t=e;if(j.parentNode[Gt]._isOutsideThisEl(e),t)do{if(t[Gt]){var r=void 0;if(r=t[Gt]._onDragOver({clientX:_n.clientX,clientY:_n.clientY,target:e,rootEl:t}),r&&!this.options.dragoverBubble)break}e=t}while(t=c_(t));w_()}},_onTouchMove:function(e){if(ti){var t=this.options,r=t.fallbackTolerance,i=t.fallbackOffset,s=e.touches?e.touches[0]:e,a=ue&&Zi(ue,!0),l=ue&&a&&a.a,u=ue&&a&&a.d,h=_a&&Pt&&np(Pt),f=(s.clientX-ti.clientX+i.x)/(l||1)+(h?h[0]-bu[0]:0)/(l||1),g=(s.clientY-ti.clientY+i.y)/(u||1)+(h?h[1]-bu[1]:0)/(u||1);if(!re.active&&!Hi){if(r&&Math.max(Math.abs(s.clientX-this._lastX),Math.abs(s.clientY-this._lastY))<r)return;this._onDragStart(e,!0)}if(ue){a?(a.e+=f-(Tu||0),a.f+=g-(Iu||0)):a={a:1,b:0,c:0,d:1,e:f,f:g};var p="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");se(ue,"webkitTransform",p),se(ue,"mozTransform",p),se(ue,"msTransform",p),se(ue,"transform",p),Tu=f,Iu=g,_n=s}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!ue){var e=this.options.fallbackOnBody?document.body:ze,t=ot(j,!0,_a,!0,e),r=this.options;if(_a){for(Pt=e;se(Pt,"position")==="static"&&se(Pt,"transform")==="none"&&Pt!==document;)Pt=Pt.parentNode;Pt!==document.body&&Pt!==document.documentElement?(Pt===document&&(Pt=jn()),t.top+=Pt.scrollTop,t.left+=Pt.scrollLeft):Pt=jn(),bu=np(Pt)}ue=j.cloneNode(!0),Jt(ue,r.ghostClass,!1),Jt(ue,r.fallbackClass,!0),Jt(ue,r.dragClass,!0),se(ue,"transition",""),se(ue,"transform",""),se(ue,"box-sizing","border-box"),se(ue,"margin",0),se(ue,"top",t.top),se(ue,"left",t.left),se(ue,"width",t.width),se(ue,"height",t.height),se(ue,"opacity","0.8"),se(ue,"position",_a?"absolute":"fixed"),se(ue,"zIndex","100000"),se(ue,"pointerEvents","none"),re.ghost=ue,e.appendChild(ue),se(ue,"transform-origin",rp/parseInt(ue.style.width)*100+"% "+ip/parseInt(ue.style.height)*100+"%")}},_onDragStart:function(e,t){var r=this,i=e.dataTransfer,s=r.options;if(Bt("dragStart",this,{evt:e}),re.eventCanceled){this._onDrop();return}Bt("setupClone",this),re.eventCanceled||(We=p_(j),We.removeAttribute("id"),We.draggable=!1,We.style["will-change"]="",this._hideClone(),Jt(We,this.options.chosenClass,!1),re.clone=We),r.cloneId=La(function(){Bt("clone",r),!re.eventCanceled&&(r.options.removeCloneOnHide||ze.insertBefore(We,j),r._hideClone(),Ft({sortable:r,name:"clone"}))}),!t&&Jt(j,s.dragClass,!0),t?(gl=!0,r._loopId=setInterval(r._emulateDragOver,50)):(ye(document,"mouseup",r._onDrop),ye(document,"touchend",r._onDrop),ye(document,"touchcancel",r._onDrop),i&&(i.effectAllowed="move",s.setData&&s.setData.call(r,i,j)),Te(document,"drop",r),se(j,"transform","translateZ(0)")),Hi=!0,r._dragStartId=La(r._dragStarted.bind(r,t,e)),Te(document,"selectstart",r),Ws=!0,window.getSelection().removeAllRanges(),lo&&se(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,r=e.target,i,s,a,l=this.options,u=l.group,h=re.active,f=ga===u,g=l.sort,p=yt||h,E,A=this,S=!1;if(pc)return;function C(Ke,Ge){Bt(Ke,A,Gn({evt:e,isOwner:f,axis:E?"vertical":"horizontal",revert:a,dragRect:i,targetRect:s,canSort:g,fromSortable:p,target:r,completed:x,onMove:function(Qt,ft){return va(ze,t,j,i,Qt,ot(Qt),e,ft)},changed:M},Ge))}function O(){C("dragOverAnimationCapture"),A.captureAnimationState(),A!==p&&p.captureAnimationState()}function x(Ke){return C("dragOverCompleted",{insertion:Ke}),Ke&&(f?h._hideClone():h._showClone(A),A!==p&&(Jt(j,yt?yt.options.ghostClass:h.options.ghostClass,!1),Jt(j,l.ghostClass,!0)),yt!==A&&A!==re.active?yt=A:A===re.active&&yt&&(yt=null),p===A&&(A._ignoreWhileAnimating=r),A.animateAll(function(){C("dragOverAnimationComplete"),A._ignoreWhileAnimating=null}),A!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(r===j&&!j.animated||r===t&&!r.animated)&&(Ui=null),!l.dragoverBubble&&!e.rootEl&&r!==document&&(j.parentNode[Gt]._isOutsideThisEl(e.target),!Ke&&ni(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),S=!0}function M(){en=an(j),wr=an(j,l.draggable),Ft({sortable:A,name:"change",toEl:t,newIndex:en,newDraggableIndex:wr,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),r=wn(r,l.draggable,t,!0),C("dragOver"),re.eventCanceled)return S;if(j.contains(e.target)||r.animated&&r.animatingX&&r.animatingY||A._ignoreWhileAnimating===r)return x(!1);if(gl=!1,h&&!l.disabled&&(f?g||(a=Xe!==ze):yt===this||(this.lastPutMode=ga.checkPull(this,h,j,e))&&u.checkPut(this,h,j,e))){if(E=this._getDirection(e,r)==="vertical",i=ot(j),C("dragOverValid"),re.eventCanceled)return S;if(a)return Xe=ze,O(),this._hideClone(),C("revert"),re.eventCanceled||(ii?ze.insertBefore(j,ii):ze.appendChild(j)),x(!0);var L=wh(t,l.draggable);if(!L||FA(e,E,this)&&!L.animated){if(L===j)return x(!1);if(L&&t===e.target&&(r=L),r&&(s=ot(r)),va(ze,t,j,i,r,s,e,!!r)!==!1)return O(),L&&L.nextSibling?t.insertBefore(j,L.nextSibling):t.appendChild(j),Xe=t,M(),x(!0)}else if(L&&LA(e,E,this)){var $=gs(t,0,l,!0);if($===j)return x(!1);if(r=$,s=ot(r),va(ze,t,j,i,r,s,e,!1)!==!1)return O(),t.insertBefore(j,$),Xe=t,M(),x(!0)}else if(r.parentNode===t){s=ot(r);var z=0,w,_=j.parentNode!==t,v=!NA(j.animated&&j.toRect||i,r.animated&&r.toRect||s,E),T=E?"top":"left",I=tp(r,"top","top")||tp(j,"top","top"),b=I?I.scrollTop:void 0;Ui!==r&&(w=s[T],fo=!1,ma=!v&&l.invertSwap||_),z=UA(e,r,s,E,v?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,ma,Ui===r);var y;if(z!==0){var Ve=an(j);do Ve-=z,y=Xe.children[Ve];while(y&&(se(y,"display")==="none"||y===ue))}if(z===0||y===r)return x(!1);Ui=r,ho=z;var ke=r.nextElementSibling,He=!1;He=z===1;var rt=va(ze,t,j,i,r,s,e,He);if(rt!==!1)return(rt===1||rt===-1)&&(He=rt===1),pc=!0,setTimeout(MA,30),O(),He&&!ke?t.appendChild(j):r.parentNode.insertBefore(j,He?ke:r),I&&f_(I,0,b-I.scrollTop),Xe=j.parentNode,w!==void 0&&!ma&&(Ma=Math.abs(w-ot(r)[T])),M(),x(!0)}if(t.contains(j))return x(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){ye(document,"mousemove",this._onTouchMove),ye(document,"touchmove",this._onTouchMove),ye(document,"pointermove",this._onTouchMove),ye(document,"dragover",ni),ye(document,"mousemove",ni),ye(document,"touchmove",ni)},_offUpEvents:function(){var e=this.el.ownerDocument;ye(e,"mouseup",this._onDrop),ye(e,"touchend",this._onDrop),ye(e,"pointerup",this._onDrop),ye(e,"pointercancel",this._onDrop),ye(e,"touchcancel",this._onDrop),ye(document,"selectstart",this)},_onDrop:function(e){var t=this.el,r=this.options;if(en=an(j),wr=an(j,r.draggable),Bt("drop",this,{evt:e}),Xe=j&&j.parentNode,en=an(j),wr=an(j,r.draggable),re.eventCanceled){this._nulling();return}Hi=!1,ma=!1,fo=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),gc(this.cloneId),gc(this._dragStartId),this.nativeDraggable&&(ye(document,"drop",this),ye(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),lo&&se(document.body,"user-select",""),se(j,"transform",""),e&&(Ws&&(e.cancelable&&e.preventDefault(),!r.dropBubble&&e.stopPropagation()),ue&&ue.parentNode&&ue.parentNode.removeChild(ue),(ze===Xe||yt&&yt.lastPutMode!=="clone")&&We&&We.parentNode&&We.parentNode.removeChild(We),j&&(this.nativeDraggable&&ye(j,"dragend",this),Au(j),j.style["will-change"]="",Ws&&!Hi&&Jt(j,yt?yt.options.ghostClass:this.options.ghostClass,!1),Jt(j,this.options.chosenClass,!1),Ft({sortable:this,name:"unchoose",toEl:Xe,newIndex:null,newDraggableIndex:null,originalEvent:e}),ze!==Xe?(en>=0&&(Ft({rootEl:Xe,name:"add",toEl:Xe,fromEl:ze,originalEvent:e}),Ft({sortable:this,name:"remove",toEl:Xe,originalEvent:e}),Ft({rootEl:Xe,name:"sort",toEl:Xe,fromEl:ze,originalEvent:e}),Ft({sortable:this,name:"sort",toEl:Xe,originalEvent:e})),yt&&yt.save()):en!==Ki&&en>=0&&(Ft({sortable:this,name:"update",toEl:Xe,originalEvent:e}),Ft({sortable:this,name:"sort",toEl:Xe,originalEvent:e})),re.active&&((en==null||en===-1)&&(en=Ki,wr=co),Ft({sortable:this,name:"end",toEl:Xe,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){Bt("nulling",this),ze=j=Xe=ue=ii=We=xa=Ar=ti=_n=Ws=en=wr=Ki=co=Ui=ho=yt=ga=re.dragged=re.ghost=re.clone=re.active=null,_l.forEach(function(e){e.checked=!0}),_l.length=Tu=Iu=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":j&&(this._onDragOver(e),xA(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,r=this.el.children,i=0,s=r.length,a=this.options;i<s;i++)t=r[i],wn(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||BA(t));return e},sort:function(e,t){var r={},i=this.el;this.toArray().forEach(function(s,a){var l=i.children[a];wn(l,this.options.draggable,i,!1)&&(r[s]=l)},this),t&&this.captureAnimationState(),e.forEach(function(s){r[s]&&(i.removeChild(r[s]),i.appendChild(r[s]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return wn(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var r=this.options;if(t===void 0)return r[e];var i=Wo.modifyOption(this,e,t);typeof i<"u"?r[e]=i:r[e]=t,e==="group"&&v_(r)},destroy:function(){Bt("destroy",this);var e=this.el;e[Gt]=null,ye(e,"mousedown",this._onTapStart),ye(e,"touchstart",this._onTapStart),ye(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(ye(e,"dragover",this),ye(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),ml.splice(ml.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!Ar){if(Bt("hideClone",this),re.eventCanceled)return;se(We,"display","none"),this.options.removeCloneOnHide&&We.parentNode&&We.parentNode.removeChild(We),Ar=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(Ar){if(Bt("showClone",this),re.eventCanceled)return;j.parentNode==ze&&!this.options.group.revertClone?ze.insertBefore(We,j):ii?ze.insertBefore(We,ii):ze.appendChild(We),this.options.group.revertClone&&this.animate(j,We),se(We,"display",""),Ar=!1}}};function xA(n){n.dataTransfer&&(n.dataTransfer.dropEffect="move"),n.cancelable&&n.preventDefault()}function va(n,e,t,r,i,s,a,l){var u,h=n[Gt],f=h.options.onMove,g;return window.CustomEvent&&!fr&&!Go?u=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(u=document.createEvent("Event"),u.initEvent("move",!0,!0)),u.to=e,u.from=n,u.dragged=t,u.draggedRect=r,u.related=i||e,u.relatedRect=s||ot(e),u.willInsertAfter=l,u.originalEvent=a,n.dispatchEvent(u),f&&(g=f.call(h,u,a)),g}function Au(n){n.draggable=!1}function MA(){pc=!1}function LA(n,e,t){var r=ot(gs(t.el,0,t.options,!0)),i=g_(t.el,t.options,ue),s=10;return e?n.clientX<i.left-s||n.clientY<r.top&&n.clientX<r.right:n.clientY<i.top-s||n.clientY<r.bottom&&n.clientX<r.left}function FA(n,e,t){var r=ot(wh(t.el,t.options.draggable)),i=g_(t.el,t.options,ue),s=10;return e?n.clientX>i.right+s||n.clientY>r.bottom&&n.clientX>r.left:n.clientY>i.bottom+s||n.clientX>r.right&&n.clientY>r.top}function UA(n,e,t,r,i,s,a,l){var u=r?n.clientY:n.clientX,h=r?t.height:t.width,f=r?t.top:t.left,g=r?t.bottom:t.right,p=!1;if(!a){if(l&&Ma<h*i){if(!fo&&(ho===1?u>f+h*s/2:u<g-h*s/2)&&(fo=!0),fo)p=!0;else if(ho===1?u<f+Ma:u>g-Ma)return-ho}else if(u>f+h*(1-i)/2&&u<g-h*(1-i)/2)return jA(e)}return p=p||a,p&&(u<f+h*s/2||u>g-h*s/2)?u>f+h/2?1:-1:0}function jA(n){return an(j)<an(n)?1:-1}function BA(n){for(var e=n.tagName+n.className+n.src+n.href+n.textContent,t=e.length,r=0;t--;)r+=e.charCodeAt(t);return r.toString(36)}function zA(n){_l.length=0;for(var e=n.getElementsByTagName("input"),t=e.length;t--;){var r=e[t];r.checked&&_l.push(r)}}function La(n){return setTimeout(n,0)}function gc(n){return clearTimeout(n)}Wl&&Te(document,"touchmove",function(n){(re.active||Hi)&&n.cancelable&&n.preventDefault()});re.utils={on:Te,off:ye,css:se,find:h_,is:function(e,t){return!!wn(e,t,e,!1)},extend:bA,throttle:d_,closest:wn,toggleClass:Jt,clone:p_,index:an,nextTick:La,cancelNextTick:gc,detectDirection:__,getChild:gs,expando:Gt};re.get=function(n){return n[Gt]};re.mount=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(r){if(!r.prototype||!r.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));r.utils&&(re.utils=Gn(Gn({},re.utils),r.utils)),Wo.mount(r)})};re.create=function(n,e){return new re(n,e)};re.version=TA;var st=[],$s,mc,_c=!1,Su,Cu,vl,Ks;function qA(){function n(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return n.prototype={dragStarted:function(t){var r=t.originalEvent;this.sortable.nativeDraggable?Te(document,"dragover",this._handleAutoScroll):this.options.supportPointer?Te(document,"pointermove",this._handleFallbackAutoScroll):r.touches?Te(document,"touchmove",this._handleFallbackAutoScroll):Te(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var r=t.originalEvent;!this.options.dragOverBubble&&!r.rootEl&&this._handleAutoScroll(r)},drop:function(){this.sortable.nativeDraggable?ye(document,"dragover",this._handleAutoScroll):(ye(document,"pointermove",this._handleFallbackAutoScroll),ye(document,"touchmove",this._handleFallbackAutoScroll),ye(document,"mousemove",this._handleFallbackAutoScroll)),op(),Fa(),AA()},nulling:function(){vl=mc=$s=_c=Ks=Su=Cu=null,st.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,r){var i=this,s=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=document.elementFromPoint(s,a);if(vl=t,r||this.options.forceAutoScrollFallback||Go||fr||lo){Ru(t,this.options,l,r);var u=kr(l,!0);_c&&(!Ks||s!==Su||a!==Cu)&&(Ks&&op(),Ks=setInterval(function(){var h=kr(document.elementFromPoint(s,a),!0);h!==u&&(u=h,Fa()),Ru(t,i.options,h,r)},10),Su=s,Cu=a)}else{if(!this.options.bubbleScroll||kr(l,!0)===jn()){Fa();return}Ru(t,this.options,kr(l,!1),!1)}}},lr(n,{pluginName:"scroll",initializeByDefault:!0})}function Fa(){st.forEach(function(n){clearInterval(n.pid)}),st=[]}function op(){clearInterval(Ks)}var Ru=d_(function(n,e,t,r){if(e.scroll){var i=(n.touches?n.touches[0]:n).clientX,s=(n.touches?n.touches[0]:n).clientY,a=e.scrollSensitivity,l=e.scrollSpeed,u=jn(),h=!1,f;mc!==t&&(mc=t,Fa(),$s=e.scroll,f=e.scrollFn,$s===!0&&($s=kr(t,!0)));var g=0,p=$s;do{var E=p,A=ot(E),S=A.top,C=A.bottom,O=A.left,x=A.right,M=A.width,L=A.height,$=void 0,z=void 0,w=E.scrollWidth,_=E.scrollHeight,v=se(E),T=E.scrollLeft,I=E.scrollTop;E===u?($=M<w&&(v.overflowX==="auto"||v.overflowX==="scroll"||v.overflowX==="visible"),z=L<_&&(v.overflowY==="auto"||v.overflowY==="scroll"||v.overflowY==="visible")):($=M<w&&(v.overflowX==="auto"||v.overflowX==="scroll"),z=L<_&&(v.overflowY==="auto"||v.overflowY==="scroll"));var b=$&&(Math.abs(x-i)<=a&&T+M<w)-(Math.abs(O-i)<=a&&!!T),y=z&&(Math.abs(C-s)<=a&&I+L<_)-(Math.abs(S-s)<=a&&!!I);if(!st[g])for(var Ve=0;Ve<=g;Ve++)st[Ve]||(st[Ve]={});(st[g].vx!=b||st[g].vy!=y||st[g].el!==E)&&(st[g].el=E,st[g].vx=b,st[g].vy=y,clearInterval(st[g].pid),(b!=0||y!=0)&&(h=!0,st[g].pid=setInterval((function(){r&&this.layer===0&&re.active._onTouchMove(vl);var ke=st[this.layer].vy?st[this.layer].vy*l:0,He=st[this.layer].vx?st[this.layer].vx*l:0;typeof f=="function"&&f.call(re.dragged.parentNode[Gt],He,ke,n,vl,st[this.layer].el)!=="continue"||f_(st[this.layer].el,He,ke)}).bind({layer:g}),24))),g++}while(e.bubbleScroll&&p!==u&&(p=kr(p,!1)));_c=h}},30),E_=function(e){var t=e.originalEvent,r=e.putSortable,i=e.dragEl,s=e.activeSortable,a=e.dispatchSortableEvent,l=e.hideGhostForTarget,u=e.unhideGhostForTarget;if(t){var h=r||s;l();var f=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,g=document.elementFromPoint(f.clientX,f.clientY);u(),h&&!h.el.contains(g)&&(a("spill"),this.onSpill({dragEl:i,putSortable:r}))}};function Eh(){}Eh.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,r=e.putSortable;this.sortable.captureAnimationState(),r&&r.captureAnimationState();var i=gs(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),r&&r.animateAll()},drop:E_};lr(Eh,{pluginName:"revertOnSpill"});function Th(){}Th.prototype={onSpill:function(e){var t=e.dragEl,r=e.putSortable,i=r||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:E_};lr(Th,{pluginName:"removeOnSpill"});re.mount(new qA);re.mount(Th,Eh);const Ua=[{id:"img_1",initialSrc:"/img_1.png",src:"/img_1_willem_interchange.png",scaleSrc:"/img_1_willem_interchange.png",artist:"Willem de Kooning",title:"Interchange",year:"1955"},{id:"img_2",initialSrc:"/img_2.png",src:"/img_2_Perle_black.png",scaleSrc:"/img_2_Perle_black.png",artist:"Perle Fine",title:"Charcoal-Black and Yellows",year:"1952"},{id:"img_3",initialSrc:"/img_3.png",src:"/img_3_Judith_Flux.png",scaleSrc:"/img_3_Judith_Flux.png",artist:"Judith Godwin",title:"Flux",year:"1982"},{id:"img_4",initialSrc:"/img_4.png",src:"/img_4_barnett_black.png",scaleSrc:"/img_4_barnett_black.png",artist:"Barnett Newman",title:"Black Fire I",year:"1961"},{id:"img_5",initialSrc:"/img_5.png",src:"/img_5_rothko_no6.png",scaleSrc:"/img_5_rothko_no6.png",artist:"Mark Rothko",title:"No. 6 (Violet, Green and Red)",year:"1951"},{id:"img_6",initialSrc:"/img_6.png",src:"/img_6_corinne_untitled.png",scaleSrc:"/img_6_corinne_untitled.png",artist:"Michael Corinne West",title:"Untitled",year:"1970"}];var HA=$e('<div class="neuro-inset" style="padding: 1rem; display: flex; align-items: center; justify-content: space-between;"><p style="font-weight: 600; margin-right: 1rem;"> </p> <div style="display: flex; gap: 0.5rem;"><button class="neuro-btn">Yes</button> <button class="neuro-btn">No</button></div></div>');function Pu(n,e){Ai(e,!0);let t=qu(e,"value",3,null);function r(f){var g;(g=e.onchange)==null||g.call(e,f)}var i=HA(),s=ie(i),a=ie(s),l=ce(s,2),u=ie(l);u.__click=()=>r(!0);var h=ce(u,2);h.__click=()=>r(!1),fi(()=>{Tn(a,e.label),zu(u,`padding: 0.5rem 1rem; ${t()===!0?"background: #a3b1c6; color: #fff;":""}`),zu(h,`padding: 0.5rem 1rem; ${t()===!1?"background: #a3b1c6; color: #fff;":""}`)}),xe(n,i),Si()}Oo(["click"]);var GA=$e('<span style="color: #64748b; position: absolute; pointer-events: none; z-index: 1;">Discard</span>'),WA=$e('<button class="neuro-btn done-button svelte-1953x34" style="font-size: 1.125rem; font-weight: 600; padding: 0.75rem 2rem; color: var(--primary-dark);">Done?</button>'),$A=$e('<div><div style="padding: 1.5rem; margin-bottom: 2rem; max-width: 2800px; margin-left: auto; margin-right: auto;"><h2 style="font-size: 1.75rem; font-weight: 700;">Step 1: Choose Your Favorites</h2> <p style="margin-top: 0.5rem;">Drag the one image you like the least from the top gallery into "Discard" below.</p></div> <div class="neuro-inset" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; margin-bottom: 2rem; padding: 1.5rem; min-height: 200px;"></div> <div style="display: flex; align-items: center; justify-content: center; gap: 2rem;"><div class="neuro-inset" style="padding: 1.5rem; text-center; border-radius: 1rem; width: 400px; height: 400px; display: flex; align-items: center; justify-content: center; position: relative;"><!></div> <div style="min-width: 150px;"><!></div></div></div>'),KA=$e('<button class="neuro-btn done-button svelte-1953x34" style="font-size: 1.125rem; font-weight: 600; padding: 0.75rem 2rem; color: var(--primary-dark);">Done?</button>'),YA=$e('<div><div class="neuro-panel" style="padding: 1.5rem; margin-bottom: 2rem; max-width: 2800px; margin-left: auto; margin-right: auto;"><h2 style="font-size: 1.75rem; font-weight: 700;">Step 2: Rank Your Choices</h2> <p style="margin-top: 0.5rem;">Now, arrange the remaining five images. Place your favorite on the far left, and the rest in descending order of preference to the right.</p></div> <div class="neuro-inset" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 1.5rem; padding: 1.5rem; min-height: 250px;"></div> <div style="text-align: center; margin-top: 1.5rem; min-height: 60px;"><!></div></div>'),QA=$e('<div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem;"><img alt="artwork" class="neuro-panel" style="width: 400px; height: 400px; object-fit: cover; padding: 0;"/> <input type="text" placeholder="Adjective..." style="padding: 0.75rem; width: 400px; text-align: center; font-size: 1rem;" maxlength="30"/></div>'),XA=$e('<button class="neuro-btn done-button svelte-1953x34" style="font-size: 1.125rem; font-weight: 600; padding: 0.75rem 2rem; color: var(--primary-dark);">Done?</button>'),JA=$e('<div style="margin-top: 3rem; text-align: center;"><div class="neuro-panel" style="padding: 1.5rem; margin-bottom: 2rem; max-width: 2800px; margin-left: auto; margin-right: auto;"><h2 style="font-size: 1.75rem; font-weight: 700;">Step 3: Describe the Art</h2> <p style="margin-top: 0.5rem;">Excellent. Please write a single adjective that comes to mind for each image.</p></div> <div style="display: flex; justify-content: center; gap: 1.5rem; margin-bottom: 2rem; flex-wrap: wrap;"></div> <div style="text-align: center; min-height: 60px;"><!></div></div>'),ZA=$e('<button class="neuro-btn"> </button>'),eS=$e('<div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;"><div style="text-align: center; margin-bottom: 0.5rem;"><h3 style="font-size: 0.875rem; font-weight: 700; margin-bottom: 0.125rem;"> </h3> <p style="font-size: 0.75rem; color: var(--primary);"> </p></div> <div style="width: 400px; height: 400px; position: relative; overflow: hidden;"><img style="max-width: none; height: auto; transform: scale(0.178); transform-origin: bottom right; position: absolute; bottom: 0; right: 0;"/></div> <div style="display: flex; gap: 0.5rem; justify-content: center;"></div> <div style="display: flex; justify-content: space-between; width: 100%; max-width: 250px; font-size: 0.7rem; color: var(--primary);"><span>Indifferent</span> <span>Passionate</span></div></div>'),tS=$e('<div class="neuro-panel done-button svelte-1953x34" style="padding: 2rem; text-align: center;"><h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">Share Your Responses?</h3> <p style="margin-bottom: 1.5rem; color: var(--primary);">May we include your responses in our research data?</p> <div style="display: flex; gap: 1rem; justify-content: center;"><button class="neuro-btn" style="padding: 0.75rem 2rem; font-size: 1.125rem; font-weight: 600;">Yes, Share</button> <button class="neuro-btn" style="padding: 0.75rem 2rem; font-size: 1.125rem; font-weight: 600;">No, Skip</button></div></div>'),nS=$e(`<div style="margin-top: 2rem;"><div class="neuro-panel" style="padding: 1.5rem; margin-bottom: 2rem; max-width: 2800px; margin-left: auto; margin-right: auto;"><h2 style="font-size: 1.75rem; font-weight: 700;">Step 4: Context & Reflection</h2> <p style="margin-top: 0.5rem;">In previous steps, the artworks were cropped and scaled to match each other. Below you'll see the artworks in their actual relative sizes with artist information.</p></div> <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem;"></div> <div class="neuro-panel" style="padding: 1.5rem; margin-bottom: 2rem;"><h3 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 1rem; text-align: center;">Did any of these factors change your impression?</h3> <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;"><!> <!> <!></div></div> <!></div>`),rS=$e('<div style="margin-top: 3rem; text-align: center;"><div class="neuro-panel" style="padding: 3rem;"><h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem;">Thank You!</h2> <p style="font-size: 1.125rem; margin-bottom: 2rem; color: var(--primary);"><!></p> <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;"><button class="neuro-btn" style="padding: 0.75rem 2rem; font-size: 1.125rem; font-weight: 600;">View Results</button> <button class="neuro-btn" style="padding: 0.75rem 2rem; font-size: 1.125rem; font-weight: 600;">Close</button></div></div></div>'),iS=$e('<div style="max-width: 2800px; margin: 0 auto; padding: 2rem;"><!> <!> <!> <!> <!></div>');function sS(n,e){Ai(e,!0);let t,r,i,s,a,l,u=Ue("discard"),h=Ue(!1),f=Ue(!1),g=Ue(!1),p=!1,E=Ue(!0),A=Ue(!1),S=Ue(!1),C=Ue(!1),O=Ue(null);fn([]);let x=fn({}),M=fn({}),L=fn({cropping:null,scale:null,other:null});Pc(()=>(t&&Ua.forEach(ne=>{const le=document.createElement("div");le.className="artwork-item",le.setAttribute("data-id",ne.id),le.style.cssText="display: flex; flex-direction: column; align-items: center; gap: 0.5rem; cursor: grab; position: relative; z-index: 10;";const de=document.createElement("img");de.src=ne.initialSrc,de.alt=`${ne.title} by ${ne.artist}`,de.className="neuro-panel",de.style.cssText="width: 400px; height: 400px; object-fit: cover; padding: 0;",le.appendChild(de),t.appendChild(le)}),setTimeout(()=>{$()},50),()=>{s&&s.destroy(),a&&a.destroy(),l&&l.destroy()}));function $(){const ne={group:"art-study",animation:150,ghostClass:"sortable-ghost"};t&&(s=new re(t,{...ne,onEnd:T})),r&&(a=new re(r,{...ne,onAdd:le=>{pe(E,!1);const de=r.querySelectorAll("[data-id]");de.length>1&&t.appendChild(de[0]),de.length===1&&pe(A,!0)},onRemove:le=>{r.querySelectorAll("[data-id]").length===0&&(pe(E,!0),pe(A,!1))}})),i&&(l=new re(i,{...ne,onEnd:()=>{q(u)==="sort"&&pe(h,!0)}}))}let z=Ue(fn([])),w=Ue(fn([])),_=Ue(null);function v(){console.log("handleDoneDiscard called"),console.log("currentStep before:",q(u));const ne=r==null?void 0:r.querySelector("[data-id]");ne&&(pe(_,ne.dataset.id,!0),console.log("Discarded image ID:",q(_))),pe(z,Array.from((t==null?void 0:t.querySelectorAll("[data-id]"))||[]),!0),console.log("Images to move:",q(z).length),pe(u,"sort"),pe(A,!1),console.log("currentStep after:",q(u))}Ac(()=>{q(u)==="sort"&&q(z).length>0&&i&&(console.log("Moving images to sorted container"),q(z).forEach(ne=>{i.appendChild(ne)}),pe(z,[],!0),l||(l=new re(i,{group:"art-study",animation:150,ghostClass:"sortable-ghost",onEnd:()=>{q(u)==="sort"&&pe(h,!0)}}),console.log("Sortable initialized for sorted container")))});function T(){}function I(){pe(w,Array.from((i==null?void 0:i.querySelectorAll("[data-id]"))||[]).map(ne=>ne.dataset.id),!0),console.log("Sorted image IDs:",q(w)),pe(u,"adjectives"),pe(h,!1),setTimeout(()=>{pe(g,!0)},100)}function b(ne){const le=ne.target;le.value=le.value.replace(/[^a-zA-Z]/g,"");const de=le.dataset.imgId;x[de]=le.value,y()}function y(){if(q(u)==="adjectives"&&q(w).length>0){const ne=q(w).every(le=>{const de=x[le],X=de&&de.trim().length>0;return console.log(`Image ${le}: "${de}" - filled: ${X}`),X});console.log("All fields filled:",ne),pe(S,ne,!0),console.log("showDoneAdjectives set to:",q(S))}}function Ve(){pe(u,"context"),pe(S,!1)}function ke(){const le=[...q(w),q(_)].every(X=>M[X]!==void 0),de=L.cropping!==null&&L.scale!==null&&L.other!==null;le&&de&&pe(C,!0)}function He(ne){pe(O,ne,!0),ne?rt():pe(u,"final")}async function rt(){var D,U,F,Y;(D=e.onloading)==null||D.call(e,!0);const ne=r.querySelector("[data-id]");if(!ne){console.error("No item was discarded."),(U=e.onloading)==null||U.call(e,!1);return}const le=ne.dataset.id,X=Array.from(i.querySelectorAll("[data-id]")).map((H,Z)=>({id:H.dataset.id,score:5-Z,adjective:(x[H.dataset.id]||"").trim().toLowerCase()}));X.push({id:le,score:-1,adjective:"discarded"});try{await pA(fc,async H=>{for(const Z of X){const W=Qm(fc,`artifacts/${o_}/public/data/images`,Z.id),J=await H.get(W);if(!J.exists())H.set(W,{totalScore:Z.score,participantCount:1,adjectives:Z.adjective!=="discarded"&&Z.adjective?[Z.adjective]:[]});else{const Q=J.data(),De=Q.totalScore+Z.score,fe=Q.participantCount+1,Ce=[...Q.adjectives];Z.adjective!=="discarded"&&Z.adjective&&Ce.push(Z.adjective),H.update(W,{totalScore:De,participantCount:fe,adjectives:Ce})}}}),(F=e.onloading)==null||F.call(e,!1),pe(f,!1),pe(u,"final")}catch(H){console.error("Error writing transaction: ",H),(Y=e.onloading)==null||Y.call(e,!1)}}var Ke=iS(),Ge=ie(Ke);{var At=ne=>{var le=$A(),de=ie(le);Ia(de,1,"neuro-panel",null,{},{"fade-out":p});var X=ce(de,2);ba(X,J=>t=J,()=>t);var D=ce(X,2);Ia(D,1,"",null,{},{"fade-out":p});var U=ie(D),F=ie(U);{var Y=J=>{var Q=GA();xe(J,Q)};wt(F,J=>{q(E)&&J(Y)})}ba(U,J=>r=J,()=>r);var H=ce(U,2),Z=ie(H);{var W=J=>{var Q=WA();Q.__click=v,xe(J,Q)};wt(Z,J=>{q(A)&&J(W)})}xe(ne,le)};wt(Ge,ne=>{q(u)==="discard"&&ne(At)})}var Qt=ce(Ge,2);{var ft=ne=>{var le=YA(),de=ce(ie(le),2);ba(de,F=>i=F,()=>i);var X=ce(de,2),D=ie(X);{var U=F=>{var Y=KA();Y.__click=I,xe(F,Y)};wt(D,F=>{q(h)&&F(U)})}xe(ne,le)};wt(Qt,ne=>{q(u)==="sort"&&ne(ft)})}var Je=ce(Qt,2);{var As=ne=>{var le=JA(),de=ce(ie(le),2);Zs(de,21,()=>q(w),Js,(F,Y)=>{var H=QA(),Z=ie(H),W=ce(Z,2);let J;W.__input=b,fi(Q=>{On(Z,"src",Q),J=Ia(W,1,"adjective-input neuro-inset",null,J,{visible:q(g)}),On(W,"data-img-id",q(Y))},[()=>{var Q;return(Q=Ua.find(De=>De.id===q(Y)))==null?void 0:Q.initialSrc}]),yy(W,()=>x[q(Y)],Q=>x[q(Y)]=Q),xe(F,H)});var X=ce(de,2),D=ie(X);{var U=F=>{var Y=XA();Y.__click=Ve,xe(F,Y)};wt(D,F=>{q(S)&&F(U)})}xe(ne,le)};wt(Je,ne=>{q(u)==="adjectives"&&ne(As)})}var An=ce(Je,2);{var Ss=ne=>{var le=nS(),de=ce(ie(le),2);Zs(de,21,()=>[...q(w),q(_)],Js,(W,J)=>{const Q=Tp(()=>Ua.find(Ze=>Ze.id===q(J)));var De=eS(),fe=ie(De),Ce=ie(fe),Be=ie(Ce),me=ce(Ce,2),Pe=ie(me),_e=ce(fe,2),Ne=ie(_e),Ye=ce(_e,2);Zs(Ye,20,()=>[1,2,3,4,5],Js,(Ze,ct)=>{var Mt=ZA();Mt.__click=()=>{M[q(J)]=ct,ke()};var Wn=ie(Mt);fi(()=>{zu(Mt,`padding: 0.5rem 1rem; font-size: 0.875rem; font-weight: 600; ${M[q(J)]===ct?"background: #a3b1c6; color: #fff;":""}`),On(Mt,"title",["Indifferent","Curious","Engaged","Moved","Passionate"][ct-1]),Tn(Wn,ct)}),xe(Ze,Mt)}),fi(()=>{Tn(Be,q(Q).title),Tn(Pe,`${q(Q).artist??""}, ${q(Q).year??""}`),On(Ne,"src",q(Q).scaleSrc),On(Ne,"alt",`${q(Q).title??""} by ${q(Q).artist??""}`)}),xe(W,De)});var X=ce(de,2),D=ce(ie(X),2),U=ie(D);Pu(U,{label:"Cropping?",get value(){return L.cropping},onchange:W=>{L.cropping=W,ke()}});var F=ce(U,2);Pu(F,{label:"Size/Scale?",get value(){return L.scale},onchange:W=>{L.scale=W,ke()}});var Y=ce(F,2);Pu(Y,{label:"Other Info?",get value(){return L.other},onchange:W=>{L.other=W,ke()}});var H=ce(X,2);{var Z=W=>{var J=tS(),Q=ce(ie(J),4),De=ie(Q);De.__click=()=>He(!0);var fe=ce(De,2);fe.__click=()=>He(!1),xe(W,J)};wt(H,W=>{q(C)&&W(Z)})}xe(ne,le)};wt(An,ne=>{q(u)==="context"&&ne(Ss)})}var pr=ce(An,2);{var Cs=ne=>{var le=rS(),de=ie(le),X=ce(ie(de),2),D=ie(X);{var U=W=>{var J=wd("Your responses have been recorded. We appreciate your contribution to our research.");xe(W,J)},F=W=>{var J=wd("Thank you for your time. Your responses have not been saved.");xe(W,J)};wt(D,W=>{q(O)===!0?W(U):W(F,!1)})}var Y=ce(X,2),H=ie(Y);H.__click=()=>{var W;return(W=e.oncomplete)==null?void 0:W.call(e)};var Z=ce(H,2);Z.__click=()=>window.close(),xe(ne,le)};wt(pr,ne=>{q(u)==="final"&&ne(Cs)})}xe(n,Ke),Si()}Oo(["click","input"]);var oS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function aS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var T_={exports:{}};/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2019 Tim Guan-tin Chien and contributors.
 * Released under the MIT license
 */(function(n){window.setImmediate||(window.setImmediate=function(){return window.msSetImmediate||window.webkitSetImmediate||window.mozSetImmediate||window.oSetImmediate||function(){if(!window.postMessage||!window.addEventListener)return null;var r=[void 0],i="zero-timeout-message",s=function(l){var u=r.length;return r.push(l),window.postMessage(i+u.toString(36),"*"),u};return window.addEventListener("message",function(l){if(!(typeof l.data!="string"||l.data.substr(0,i.length)!==i)){l.stopImmediatePropagation();var u=parseInt(l.data.substr(i.length),36);r[u]&&(r[u](),r[u]=void 0)}},!0),window.clearImmediate=function(l){r[l]&&(r[l]=void 0)},s}()||function(r){window.setTimeout(r,0)}}()),window.clearImmediate||(window.clearImmediate=function(){return window.msClearImmediate||window.webkitClearImmediate||window.mozClearImmediate||window.oClearImmediate||function(r){window.clearTimeout(r)}}()),function(e){var t=function(){var h=document.createElement("canvas");if(!h||!h.getContext)return!1;var f=h.getContext("2d");return!(!f||!f.getImageData||!f.fillText||!Array.prototype.some||!Array.prototype.push)}(),r=function(){if(t){for(var h=document.createElement("canvas").getContext("2d"),f=20,g,p;f;){if(h.font=f.toString(10)+"px sans-serif",h.measureText("Ｗ").width===g&&h.measureText("m").width===p)return f+1;g=h.measureText("Ｗ").width,p=h.measureText("m").width,f--}return 0}}(),i=function(u){if(Array.isArray(u)){var h=u.slice();return h.splice(0,2),h}else return[]},s=function(h){for(var f,g,p=h.length;p;)f=Math.floor(Math.random()*p),g=h[--p],h[p]=h[f],h[f]=g;return h},a={},l=function(h,f){if(!t)return;var g=Math.floor(Math.random()*Date.now());Array.isArray(h)||(h=[h]),h.forEach(function(X,D){if(typeof X=="string"){if(h[D]=document.getElementById(X),!h[D])throw new Error("The element id specified is not found.")}else if(!X.tagName&&!X.appendChild)throw new Error("You must pass valid HTML elements, or ID of the element.")});var p={list:[],fontFamily:'"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',fontWeight:"normal",color:"random-dark",minSize:0,weightFactor:1,clearCanvas:!0,backgroundColor:"#fff",gridSize:8,drawOutOfBound:!1,shrinkToFit:!1,origin:null,drawMask:!1,maskColor:"rgba(255,0,0,0.3)",maskGapWidth:.3,wait:0,abortThreshold:0,abort:function(){},minRotation:-Math.PI/2,maxRotation:Math.PI/2,rotationSteps:0,shuffle:!0,rotateRatio:.1,shape:"circle",ellipticity:.65,classes:null,hover:null,click:null};if(f)for(var E in f)E in p&&(p[E]=f[E]);if(typeof p.weightFactor!="function"){var A=p.weightFactor;p.weightFactor=function(D){return D*A}}if(typeof p.shape!="function")switch(p.shape){case"circle":default:p.shape="circle";break;case"cardioid":p.shape=function(D){return 1-Math.sin(D)};break;case"diamond":p.shape=function(D){var U=D%(2*Math.PI/4);return 1/(Math.cos(U)+Math.sin(U))};break;case"square":p.shape=function(D){return Math.min(1/Math.abs(Math.cos(D)),1/Math.abs(Math.sin(D)))};break;case"triangle-forward":p.shape=function(D){var U=D%(2*Math.PI/3);return 1/(Math.cos(U)+Math.sqrt(3)*Math.sin(U))};break;case"triangle":case"triangle-upright":p.shape=function(D){var U=(D+Math.PI*3/2)%(2*Math.PI/3);return 1/(Math.cos(U)+Math.sqrt(3)*Math.sin(U))};break;case"pentagon":p.shape=function(D){var U=(D+.955)%(2*Math.PI/5);return 1/(Math.cos(U)+.726543*Math.sin(U))};break;case"star":p.shape=function(D){var U=(D+.955)%(2*Math.PI/10);return(D+.955)%(2*Math.PI/5)-2*Math.PI/10>=0?1/(Math.cos(2*Math.PI/10-U)+3.07768*Math.sin(2*Math.PI/10-U)):1/(Math.cos(U)+3.07768*Math.sin(U))};break}p.gridSize=Math.max(Math.floor(p.gridSize),4);var S=p.gridSize,C=S-p.maskGapWidth,O=Math.abs(p.maxRotation-p.minRotation),x=Math.abs(Math.floor(p.rotationSteps)),M=Math.min(p.maxRotation,p.minRotation),L,$,z,w,_,v,T;function I(X,D){return"hsl("+(Math.random()*360).toFixed()+","+(Math.random()*30+70).toFixed()+"%,"+(Math.random()*(D-X)+X).toFixed()+"%)"}switch(p.color){case"random-dark":T=function(){return I(10,50)};break;case"random-light":T=function(){return I(50,90)};break;default:typeof p.color=="function"&&(T=p.color);break}var b;typeof p.fontWeight=="function"&&(b=p.fontWeight);var y=null;typeof p.classes=="function"&&(y=p.classes);var Ve=!1,ke=[],He,rt=function(D){var U=D.currentTarget,F=U.getBoundingClientRect(),Y,H;D.touches?(Y=D.touches[0].clientX,H=D.touches[0].clientY):(Y=D.clientX,H=D.clientY);var Z=Y-F.left,W=Z<0?0:Z,J=H-F.top,Q=Math.floor(W*(U.width/F.width||1)/S),De=Math.floor(J*(U.height/F.height||1)/S);return ke[Q]?ke[Q][De]:null},Ke=function(D){var U=rt(D);if(He!==U){if(He=U,!U){p.hover(void 0,void 0,D);return}p.hover(U.item,U.dimension,D)}},Ge=function(D){var U=rt(D);U&&(p.click(U.item,U.dimension,D),D.preventDefault())},At=[],Qt=function(D){if(At[D])return At[D];var U=D*8,F=U,Y=[];for(D===0&&Y.push([w[0],w[1],0]);F--;){var H=1;p.shape!=="circle"&&(H=p.shape(F/U*2*Math.PI)),Y.push([w[0]+D*H*Math.cos(-F/U*2*Math.PI),w[1]+D*H*Math.sin(-F/U*2*Math.PI)*p.ellipticity,F/U*2*Math.PI])}return At[D]=Y,Y},ft=function(){return p.abortThreshold>0&&new Date().getTime()-v>p.abortThreshold},Je=function(){return p.rotateRatio===0||Math.random()>p.rotateRatio?0:O===0?M:x>0?M+Math.floor(Math.random()*x)*O/(x-1):M+Math.random()*O},As=function(D,U,F,Y){var H=p.weightFactor(U);if(H<=p.minSize)return!1;var Z=1;H<r&&(Z=function(){for(var Qr=2;Qr*H<r;)Qr+=2;return Qr}());var W;b?W=b(D,U,H,Y):W=p.fontWeight;var J=document.createElement("canvas"),Q=J.getContext("2d",{willReadFrequently:!0});Q.font=W+" "+(H*Z).toString(10)+"px "+p.fontFamily;var De=Q.measureText(D).width/Z,fe=Math.max(H*Z,Q.measureText("m").width,Q.measureText("Ｗ").width)/Z,Ce=De+fe*2,Be=fe*3,me=Math.ceil(Ce/S),Pe=Math.ceil(Be/S);Ce=me*S,Be=Pe*S;var _e=-De/2,Ne=-fe*.4,Ye=Math.ceil((Ce*Math.abs(Math.sin(F))+Be*Math.abs(Math.cos(F)))/S),Ze=Math.ceil((Ce*Math.abs(Math.cos(F))+Be*Math.abs(Math.sin(F)))/S),ct=Ze*S,Mt=Ye*S;J.setAttribute("width",ct),J.setAttribute("height",Mt),Q.scale(1/Z,1/Z),Q.translate(ct*Z/2,Mt*Z/2),Q.rotate(-F),Q.font=W+" "+(H*Z).toString(10)+"px "+p.fontFamily,Q.fillStyle="#000",Q.textBaseline="middle",Q.fillText(D,_e*Z,(Ne+H*.5)*Z);var Wn=Q.getImageData(0,0,ct,Mt).data;if(ft())return!1;for(var ki=[],$n=Ze,Sn,Yr,Di,sn=[Ye/2,Ze/2,Ye/2,Ze/2];$n--;)for(Sn=Ye;Sn--;){Di=S;e:for(;Di--;)for(Yr=S;Yr--;)if(Wn[((Sn*S+Di)*ct+($n*S+Yr))*4+3]){ki.push([$n,Sn]),$n<sn[3]&&(sn[3]=$n),$n>sn[1]&&(sn[1]=$n),Sn<sn[0]&&(sn[0]=Sn),Sn>sn[2]&&(sn[2]=Sn);break e}}return{mu:Z,occupied:ki,bounds:sn,gw:Ze,gh:Ye,fillTextOffsetX:_e,fillTextOffsetY:Ne,fillTextWidth:De,fillTextHeight:fe,fontSize:H}},An=function(D,U,F,Y,H){for(var Z=H.length;Z--;){var W=D+H[Z][0],J=U+H[Z][1];if(W>=$||J>=z||W<0||J<0){if(!p.drawOutOfBound)return!1;continue}if(!L[W][J])return!1}return!0},Ss=function(D,U,F,Y,H,Z,W,J,Q,De){var fe=F.fontSize,Ce;T?Ce=T(Y,H,fe,Z,W,De):Ce=p.color;var Be;b?Be=b(Y,H,fe,De):Be=p.fontWeight;var me;y?me=y(Y,H,fe,De):me=p.classes,h.forEach(function(Pe){if(Pe.getContext){var _e=Pe.getContext("2d"),Ne=F.mu;_e.save(),_e.scale(1/Ne,1/Ne),_e.font=Be+" "+(fe*Ne).toString(10)+"px "+p.fontFamily,_e.fillStyle=Ce,_e.translate((D+F.gw/2)*S*Ne,(U+F.gh/2)*S*Ne),J!==0&&_e.rotate(-J),_e.textBaseline="middle",_e.fillText(Y,F.fillTextOffsetX*Ne,(F.fillTextOffsetY+fe*.5)*Ne),_e.restore()}else{var Ye=document.createElement("span"),Ze="";Ze="rotate("+-J/Math.PI*180+"deg) ",F.mu!==1&&(Ze+="translateX(-"+F.fillTextWidth/4+"px) scale("+1/F.mu+")");var ct={position:"absolute",display:"block",font:Be+" "+fe*F.mu+"px "+p.fontFamily,left:(D+F.gw/2)*S+F.fillTextOffsetX+"px",top:(U+F.gh/2)*S+F.fillTextOffsetY+"px",width:F.fillTextWidth+"px",height:F.fillTextHeight+"px",lineHeight:fe+"px",whiteSpace:"nowrap",transform:Ze,webkitTransform:Ze,msTransform:Ze,transformOrigin:"50% 40%",webkitTransformOrigin:"50% 40%",msTransformOrigin:"50% 40%"};Ce&&(ct.color=Ce),Ye.textContent=Y;for(var Mt in ct)Ye.style[Mt]=ct[Mt];if(Q)for(var Wn in Q)Ye.setAttribute(Wn,Q[Wn]);me&&(Ye.className+=me),Pe.appendChild(Ye)}})},pr=function(D,U,F,Y,H){if(!(D>=$||U>=z||D<0||U<0)){if(L[D][U]=!1,F){var Z=h[0].getContext("2d");Z.fillRect(D*S,U*S,C,C)}Ve&&(ke[D][U]={item:H,dimension:Y})}},Cs=function(D,U,F,Y,H,Z){var W=H.occupied,J=p.drawMask,Q;J&&(Q=h[0].getContext("2d"),Q.save(),Q.fillStyle=p.maskColor);var De;if(Ve){var fe=H.bounds;De={x:(D+fe[3])*S,y:(U+fe[0])*S,w:(fe[1]-fe[3]+1)*S,h:(fe[2]-fe[0]+1)*S}}for(var Ce=W.length;Ce--;){var Be=D+W[Ce][0],me=U+W[Ce][1];Be>=$||me>=z||Be<0||me<0||pr(Be,me,J,De,Z)}J&&Q.restore()},ne=function X(D){var U,F,Y;Array.isArray(D)?(U=D[0],F=D[1]):(U=D.word,F=D.weight,Y=D.attributes);var H=Je(),Z=i(D),W=As(U,F,H,Z);if(!W||ft())return!1;if(!p.drawOutOfBound&&!p.shrinkToFit){var J=W.bounds;if(J[1]-J[3]+1>$||J[2]-J[0]+1>z)return!1}for(var Q=_+1,De=function(Be){var me=Math.floor(Be[0]-W.gw/2),Pe=Math.floor(Be[1]-W.gh/2),_e=W.gw,Ne=W.gh;return An(me,Pe,_e,Ne,W.occupied)?(Ss(me,Pe,W,U,F,_-Q,Be[2],H,Y,Z),Cs(me,Pe,_e,Ne,W,D),!0):!1};Q--;){var fe=Qt(_-Q);p.shuffle&&(fe=[].concat(fe),s(fe));var Ce=fe.some(De);if(Ce)return!0}return p.shrinkToFit?(Array.isArray(D)?D[1]=D[1]*3/4:D.weight=D.weight*3/4,X(D)):!1},le=function(D,U,F){if(U)return!h.some(function(Y){var H=new CustomEvent(D,{detail:F||{}});return!Y.dispatchEvent(H)},this);h.forEach(function(Y){var H=new CustomEvent(D,{detail:F||{}});Y.dispatchEvent(H)},this)},de=function(){var D=h[0];if(D.getContext)$=Math.ceil(D.width/S),z=Math.ceil(D.height/S);else{var U=D.getBoundingClientRect();$=Math.ceil(U.width/S),z=Math.ceil(U.height/S)}if(le("wordcloudstart",!0)){w=p.origin?[p.origin[0]/S,p.origin[1]/S]:[$/2,z/2],_=Math.floor(Math.sqrt($*$+z*z)),L=[];var F,Y,H;if(!D.getContext||p.clearCanvas)for(h.forEach(function(_e){if(_e.getContext){var Ne=_e.getContext("2d");Ne.fillStyle=p.backgroundColor,Ne.clearRect(0,0,$*(S+1),z*(S+1)),Ne.fillRect(0,0,$*(S+1),z*(S+1))}else _e.textContent="",_e.style.backgroundColor=p.backgroundColor,_e.style.position="relative"}),F=$;F--;)for(L[F]=[],Y=z;Y--;)L[F][Y]=!0;else{var Z=document.createElement("canvas").getContext("2d");Z.fillStyle=p.backgroundColor,Z.fillRect(0,0,1,1);var W=Z.getImageData(0,0,1,1).data,J=D.getContext("2d").getImageData(0,0,$*S,z*S).data;F=$;for(var Q,De;F--;)for(L[F]=[],Y=z;Y--;){De=S;e:for(;De--;)for(Q=S;Q--;)for(H=4;H--;)if(J[((Y*S+De)*$*S+(F*S+Q))*4+H]!==W[H]){L[F][Y]=!1;break e}L[F][Y]!==!1&&(L[F][Y]=!0)}J=Z=W=void 0}if(p.hover||p.click){for(Ve=!0,F=$+1;F--;)ke[F]=[];p.hover&&D.addEventListener("mousemove",Ke),p.click&&(D.addEventListener("click",Ge),D.style.webkitTapHighlightColor="rgba(0, 0, 0, 0)"),D.addEventListener("wordcloudstart",function _e(){D.removeEventListener("wordcloudstart",_e),D.removeEventListener("mousemove",Ke),D.removeEventListener("click",Ge),He=void 0})}H=0;var fe,Ce;p.wait!==0?(fe=window.setTimeout,Ce=window.clearTimeout):(fe=window.setImmediate,Ce=window.clearImmediate);var Be=function(Ne,Ye){h.forEach(function(Ze){Ze.addEventListener(Ne,Ye)},this)},me=function(Ne,Ye){h.forEach(function(Ze){Ze.removeEventListener(Ne,Ye)},this)},Pe=function _e(){me("wordcloudstart",_e),Ce(a[g])};Be("wordcloudstart",Pe),a[g]=fe(function _e(){if(H>=p.list.length){Ce(a[g]),le("wordcloudstop",!1),me("wordcloudstart",Pe),delete a[g];return}v=new Date().getTime();var Ne=ne(p.list[H]),Ye=!le("wordclouddrawn",!0,{item:p.list[H],drawn:Ne});if(ft()||Ye){Ce(a[g]),p.abort(),le("wordcloudabort",!1),le("wordcloudstop",!1),me("wordcloudstart",Pe),delete a[g];return}H++,a[g]=fe(_e,p.wait)},p.wait)}};de()};l.isSupported=t,l.minFontSize=r,l.stop=function(){if(a)for(var h in a)window.clearImmediate(a[h])},n.exports?n.exports=l:e.WordCloud=l}(oS)})(T_);var lS=T_.exports;const I_=aS(lS);var uS=$e("<span> </span>"),cS=$e('<div class="top-adjectives svelte-6cukgi"><h4 class="svelte-6cukgi">Most Common Descriptions:</h4> <div class="adjective-tags svelte-6cukgi"></div></div>'),hS=$e('<div class="modal-backdrop svelte-6cukgi" role="dialog" aria-modal="true" tabindex="-1"><div class="modal-content neuro-panel svelte-6cukgi"><button class="close-btn neuro-btn svelte-6cukgi" aria-label="Close modal">×</button> <div class="modal-body svelte-6cukgi"><div class="artwork-section svelte-6cukgi"><img class="artwork-image svelte-6cukgi"/></div> <div class="info-section svelte-6cukgi"><h2 class="artwork-title svelte-6cukgi"> </h2> <p class="artwork-meta svelte-6cukgi"> </p> <div class="rank-badge svelte-6cukgi"> </div> <!> <div class="wordcloud-container neuro-inset svelte-6cukgi"><canvas width="350" height="200" class="svelte-6cukgi"></canvas></div></div></div></div></div>');function dS(n,e){Ai(e,!0);let t=qu(e,"artwork",3,null),r=qu(e,"visible",3,!1),i;function s(){var E;(E=e.onclose)==null||E.call(e)}function a(E){E.target===E.currentTarget&&s()}function l(E){E.key==="Escape"&&s()}Ac(()=>{r()&&t()&&i&&setTimeout(()=>u(),50)});function u(){var S,C;if(!i||!((C=(S=t())==null?void 0:S.adjectiveList)!=null&&C.length)){if(i){const O=i.getContext("2d");O.clearRect(0,0,i.width,i.height),O.fillStyle="#94a3b8",O.textAlign="center",O.textBaseline="middle",O.font="16px Inter",O.fillText("No adjectives yet.",i.width/2,i.height/2)}return}const A=[...t().adjectiveList].sort((O,x)=>x[1]-O[1]).slice(0,3).map(O=>O[0]);I_(i,{list:t().adjectiveList,backgroundColor:"#e0e5ec",color:(O,x)=>A.includes(O)?"#2d3748":"#64748b",weightFactor:O=>{const x=t().adjectiveList.find(M=>M[1]===O);return x&&A.includes(x[0])?O*12:O*6},fontFamily:"Inter, sans-serif",rotateRatio:.3})}let h=Tp(()=>{var E;return(E=t())!=null&&E.adjectiveList?[...t().adjectiveList].sort((A,S)=>S[1]-A[1]).slice(0,3).map(A=>A[0]):[]});var f=ju();iy("keydown",Fu,l);var g=za(f);{var p=E=>{var A=hS();A.__click=a,A.__keydown=l;var S=ie(A),C=ie(S);C.__click=s;var O=ce(C,2),x=ie(O),M=ie(x),L=ce(x,2),$=ie(L),z=ie($),w=ce($,2),_=ie(w),v=ce(w,2),T=ie(v),I=ce(v,2);{var b=ke=>{var He=cS(),rt=ce(ie(He),2);Zs(rt,21,()=>q(h),Js,(Ke,Ge,At)=>{var Qt=uS();Ia(Qt,1,"adjective-tag svelte-6cukgi",null,{},{first:At===0,second:At===1,third:At===2});var ft=ie(Qt);fi(()=>Tn(ft,q(Ge))),xe(Ke,Qt)}),xe(ke,He)};wt(I,ke=>{q(h).length>0&&ke(b)})}var y=ce(I,2),Ve=ie(y);ba(Ve,ke=>i=ke,()=>i),fi(()=>{On(M,"src",t().src),On(M,"alt",`${t().title??""} by ${t().artist??""}`),Tn(z,t().title),Tn(_,`${t().artist??""}, ${t().year??""}`),Tn(T,t().rankLabel)}),xe(E,A)};wt(g,E=>{r()&&t()&&E(p)})}xe(n,f),Si()}Oo(["click","keydown"]);var fS=$e('<div class="neuro-panel" style="padding: 1rem; display: flex; flex-direction: column; align-items: center; gap: 1rem;"><img style="width: 100%; height: auto; object-fit: cover; border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-bottom: 0.5rem; cursor: pointer; transition: transform 0.2s;" role="button" tabindex="0" title="Click to view details"/> <div style="text-align: center;"><h3 style="font-size: 1.25rem; font-weight: 700;"> </h3> <p style="font-size: 1rem; color: var(--primary);"> </p></div> <p style="font-size: 1.125rem; font-weight: 600; color: var(--primary-dark);"> </p> <div class="neuro-inset" style="width: 100%; height: 200px;"><canvas width="250" height="200"></canvas></div></div>'),pS=$e('<div><div class="text-center neuro-panel" style="padding: 1.5rem; margin-bottom: 2rem;"><h1 style="font-size: 2.5rem; font-weight: 700; color: var(--primary-dark);">Thank You for Participating!</h1> <p style="margin-top: 0.5rem;">Here are the collective results from all participants so far.</p></div> <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 2rem;"></div> <div class="text-center"><button class="neuro-btn" style="font-size: 1.125rem; font-weight: 600; padding: 0.75rem 2rem; color: var(--primary-dark);">Participate Again</button></div></div> <!>',1);function gS(n,e){Ai(e,!0);let t=Ue(fn([])),r=Ue(null),i=Ue(!1);function s(S){pe(r,S,!0),pe(i,!0)}function a(){pe(i,!1),pe(r,null)}const l=["Most Popular","Second Most Popular","Third Most Popular","Fourth Most Popular","Fifth Most Popular","Sixth Most Popular"];Pc(async()=>{await u()});async function u(){var C,O;(C=e.onloading)==null||C.call(e,!0);const S=[];for(const x of Ua){const M=Qm(fc,`artifacts/${o_}/public/data/images`,x.id),L=await uA(M);let $="N/A",z=[];if(L.exists()){const w=L.data();w.participantCount>0&&($=(w.totalScore/w.participantCount).toFixed(2));const _=w.adjectives.reduce((v,T)=>(v[T]=(v[T]||0)+1,v),{});z=Object.entries(_)}S.push({...x,meanScore:$,adjectiveList:z})}S.sort((x,M)=>{const L=x.meanScore==="N/A"?-1/0:parseFloat(x.meanScore);return(M.meanScore==="N/A"?-1/0:parseFloat(M.meanScore))-L}),S.forEach((x,M)=>{x.rankLabel=l[M]||`Rank ${M+1}`}),pe(t,S,!0),(O=e.onloading)==null||O.call(e,!1),setTimeout(()=>{q(t).forEach(x=>{const M=document.getElementById(`wc-${x.id}`);if(M&&x.adjectiveList.length>0){const $=[...x.adjectiveList].sort((z,w)=>w[1]-z[1]).slice(0,3).map(z=>z[0]);I_(M,{list:x.adjectiveList,backgroundColor:"#e0e5ec",color:(z,w)=>$.includes(z)?"#2d3748":"#64748b",weightFactor:z=>$.some(w=>x.adjectiveList.find(_=>_[0]===w&&_[1]===z))?z*12:z*6,fontFamily:"Inter, sans-serif"})}else if(M){const L=M.getContext("2d");L.fillStyle="#94a3b8",L.textAlign="center",L.textBaseline="middle",L.font="16px Inter",L.fillText("No adjectives yet.",M.width/2,M.height/2)}})},100)}var h=pS(),f=za(h),g=ce(ie(f),2);Zs(g,21,()=>q(t),Js,(S,C)=>{var O=fS(),x=ie(O);x.__click=()=>s(q(C)),x.__keydown=b=>b.key==="Enter"&&s(q(C));var M=ce(x,2),L=ie(M),$=ie(L),z=ce(L,2),w=ie(z),_=ce(M,2),v=ie(_),T=ce(_,2),I=ie(T);fi(()=>{On(x,"src",q(C).src),On(x,"alt",`${q(C).title??""} by ${q(C).artist??""}`),Tn($,q(C).title),Tn(w,q(C).artist),Tn(v,q(C).rankLabel),On(I,"id",`wc-${q(C).id??""}`)}),xe(S,O)});var p=ce(g,2),E=ie(p);E.__click=()=>{var S;return(S=e.onrestart)==null?void 0:S.call(e)};var A=ce(f,2);dS(A,{get artwork(){return q(r)},get visible(){return q(i)},onclose:a}),xe(n,h),Si()}Oo(["click","keydown"]);bv();var mS=$e('<div class="foggy-overlay svelte-bb97q4"><div class="neuro-panel svelte-bb97q4" style="padding: 2rem; text-align: center;"><h3 style="font-size: 1.5rem; font-weight: 600; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;" class="svelte-bb97q4">Processing...</h3></div></div>');function _S(n){var e=mS();xe(n,e)}var vS=$e('<div class="container"><!> <!></div>');function yS(n,e){Ai(e,!0);let t=Ue("intro"),r=Ue(!1);Pc(()=>{jE(mA).catch(A=>{console.error("Anonymous sign-in failed:",A)})});function i(){pe(t,"study")}function s(){pe(t,"results")}function a(){pe(t,"intro")}function l(A){pe(r,A,!0)}var u=vS(),h=ie(u);{var f=A=>{vA(A,{onstart:i})},g=A=>{var S=ju(),C=za(S);{var O=M=>{sS(M,{oncomplete:s,onloading:l})},x=M=>{var L=ju(),$=za(L);{var z=w=>{gS(w,{onrestart:a,onloading:l})};wt($,w=>{q(t)==="results"&&w(z)},!0)}xe(M,L)};wt(C,M=>{q(t)==="study"?M(O):M(x,!1)},!0)}xe(A,S)};wt(h,A=>{q(t)==="intro"?A(f):A(g,!1)})}var p=ce(h,2);{var E=A=>{_S(A)};wt(p,A=>{q(r)&&A(E)})}xe(n,u),Si()}oy(yS,{target:document.getElementById("app")});
