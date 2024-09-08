var gt=Object.defineProperty;var _t=(r,t,e)=>t in r?gt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var u=(r,t,e)=>_t(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,F=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),J=new WeakMap;let at=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(e,t))}return t}toString(){return this.cssText}};const yt=r=>new at(typeof r=="string"?r:r+"",void 0,Z),y=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new at(e,r,Z)},vt=(r,t)=>{if(F)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=R.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},Q=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return yt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:At,defineProperty:bt,getOwnPropertyDescriptor:Et,getOwnPropertyNames:wt,getOwnPropertySymbols:St,getPrototypeOf:xt}=Object,_=globalThis,Y=_.trustedTypes,Pt=Y?Y.emptyScript:"",j=_.reactiveElementPolyfillSupport,C=(r,t)=>r,D={toAttribute(r,t){switch(t){case Boolean:r=r?Pt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},lt=(r,t)=>!At(r,t),X={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&bt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=Et(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const h=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=xt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,i=[...wt(e),...St(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Q(s))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:D).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:D;this._$Em=s,this[s]=h.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??lt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[C("elementProperties")]=new Map,w[C("finalized")]=new Map,j==null||j({ReactiveElement:w}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,k=O.trustedTypes,tt=k?k.createPolicy("lit-html",{createHTML:r=>r}):void 0,ht="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+g,Ct=`<${ct}>`,E=document,U=()=>E.createComment(""),N=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,Ot=r=>G(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",I=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,st=/>/g,A=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,rt=/"/g,dt=/^(?:script|style|textarea|title)$/i,Ut=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),v=Ut(1),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),ot=new WeakMap,b=E.createTreeWalker(E,129);function pt(r,t){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return tt!==void 0?tt.createHTML(t):t}const Nt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=P;for(let h=0;h<e;h++){const a=r[h];let c,p,l=-1,$=0;for(;$<a.length&&(n.lastIndex=$,p=n.exec(a),p!==null);)$=n.lastIndex,n===P?p[1]==="!--"?n=et:p[1]!==void 0?n=st:p[2]!==void 0?(dt.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=A):p[3]!==void 0&&(n=A):n===A?p[0]===">"?(n=s??P,l=-1):p[1]===void 0?l=-2:(l=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?A:p[3]==='"'?rt:it):n===rt||n===it?n=A:n===et||n===st?n=P:(n=A,s=void 0);const m=n===A&&r[h+1].startsWith("/>")?" ":"";o+=n===P?a+Ct:l>=0?(i.push(c),a.slice(0,l)+ht+a.slice(l)+g+m):a+g+(l===-2?h:m)}return[pt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const h=t.length-1,a=this.parts,[c,p]=Nt(t,e);if(this.el=T.createElement(c,i),b.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=b.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ht)){const $=p[n++],m=s.getAttribute(l).split(g),M=/([.?@])?(.*)/.exec($);a.push({type:1,index:o,name:M[2],strings:m,ctor:M[1]==="."?Ht:M[1]==="?"?Mt:M[1]==="@"?Rt:L}),s.removeAttribute(l)}else l.startsWith(g)&&(a.push({type:6,index:o}),s.removeAttribute(l));if(dt.test(s.tagName)){const l=s.textContent.split(g),$=l.length-1;if($>0){s.textContent=k?k.emptyScript:"";for(let m=0;m<$;m++)s.append(l[m],U()),b.nextNode(),a.push({type:2,index:++o});s.append(l[$],U())}}}else if(s.nodeType===8)if(s.data===ct)a.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(g,l+1))!==-1;)a.push({type:7,index:o}),l+=g.length-1}o++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function x(r,t,e=r,i){var n,h;if(t===S)return t;let s=i!==void 0?(n=e.o)==null?void 0:n[i]:e.l;const o=N(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e.o??(e.o=[]))[i]=s:e.l=s),s!==void 0&&(t=x(r,s._$AS(r,t.values),s,i)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??E).importNode(e,!0);b.currentNode=s;let o=b.nextNode(),n=0,h=0,a=i[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new H(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new kt(o,this,t)),this._$AV.push(c),a=i[++h]}n!==(a==null?void 0:a.index)&&(o=b.nextNode(),n++)}return b.currentNode=E,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),N(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ot(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(pt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Tt(s,this),h=n.u(this.options);n.p(e),this.T(h),this._$AH=n}}_$AC(t){let e=ot.get(t.strings);return e===void 0&&ot.set(t.strings,e=new T(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new H(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=x(this,t,e,0),n=!N(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const h=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=x(this,h[i+a],e,a),c===S&&(c=this._$AH[a]),n||(n=!N(c)||c!==this._$AH[a]),c===d?t=d:t!==d&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ht extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Mt extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Rt extends L{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??d)===S)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const z=O.litHtmlPolyfillSupport;z==null||z(T,H),(O.litHtmlVersions??(O.litHtmlVersions=[])).push("3.2.0");const Lt=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new H(t.insertBefore(U(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class f extends w{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return S}}var nt;f._$litElement$=!0,f.finalized=!0,(nt=globalThis.litElementHydrateSupport)==null||nt.call(globalThis,{LitElement:f});const B=globalThis.litElementPolyfillSupport;B==null||B({LitElement:f});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");const jt=y`
    button {
        background-color: green;
        border: none;
        padding: 5px;
    }
`;class ut extends f{render(){return v`
        <button>Eu sou verde</button>
        `}}u(ut,"styles",[jt]);const It=y`
    button {
        background-color: red;
        border: none;
        padding: 5px;
    }
`;class ft extends f{render(){return v`
        <button>Eu sou vermelho</button>
        `}}u(ft,"styles",[It]);const zt=y`
    h1, h2 {
        color: white;
    }
`;class q extends f{constructor(){super(),this.versao="especial"}render(){return v`
        <h1>Essa é uma versão ${this.versao}!</h1>
        `}}u(q,"styles",[zt]),u(q,"properties",{versao:{}});const Bt=y`
    .container {
        background-color: black;
        padding: 5em auto;
        width: 100%;
    }
`;class $t extends f{render(){return v`
            <footer>
                <div class="logo">
                    <p>Isso é a logo</p>
                </div>

                <div class="abas">
                    <a href="#">Início</a>
                    <a href="#">Objetivo</a>
                    <a href="#">Sobre</a>
                    <a href="#">FAQ</a>
                </div>
                <div class="below">
                    <h3>©2024 empresa random</h3>
                    <p>De volta ao topo</p>
                </div>
            </footer>
        `}}u($t,"styles",[Bt]);const Dt=y`
    .master { 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }

    .child, .child2, .child3, .child4 {
        display: flex;
        flex: 1 1 auto;
        text-align: center;
        justify-content: center;
        padding: 1rem;
        margin-inline: auto;
        margin-top: 3em;
        height: 100dvh;
        align-items: center;
    }

    .child {
        background-color: blue;
    }

    .child2 {
        background-color: purple;
    }

    .child3 {
        background-color: orange
    }

    .child4 {
        background-color: brown
    }

    @media (max-width: 1000px) {
        .master { 
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 4px;
    }
    }

    @media (max-width: 600px) {
        .master { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 3em;
    }

    .child, .child2, .child3, .child4 {
        padding: 5rem;
        height: 0;
        margin-top: 0em;
    }
    }
`;class mt extends f{render(){return v`
        <div class="master">
            <div class="child">
                <p>1. Blue</p>
            </div>
            <div class="child2">
                <p>2. Purple </p>
            </div>
            <div class="child3">
                <p>3. Orange</p>
            </div>
            <div class="child4">
                <p>4. Brown</p>
            </div>
        </div>
        `}}u(mt,"styles",[Dt]);const qt=y`
    p {
        font-family: 'arial';
    }
`;class V extends f{constructor(){super(),this.resultado=""}girarMoeda(){Math.random()<.5?this.resultado="Cara":this.resultado="Coroa"}render(){return v`
        <button @onclick=${this.girarMoeda}>Gire a moeda!</button>
        <p>O resultado é: ${this.resultado}</p>
        `}}u(V,"styles",[qt]),u(V,"properties",{resultado:{}});const Vt=y`
    input {
        padding: 4px;
    }
`;class W extends f{constructor(){super(),this.nome=""}sniffNome(t){const e=t.target;this.nome=e.value}sniffData(t){const e=t.target;this.data=e.value}sniffCpf(t){const e=t.target;this.cpf=e.value}render(){return v`
            <h1>Este é um formulário padrão</h1>
            <h2>Você pode ver mais sobre nós >aqui<</h2>
            <form method="post" id="form">
                <fieldset class="field">
                    <legend>O cadastro ocorre aqui</legend>
                    <div class="container">
                        <label for="nome">
                            <input @input=${this.sniffNome} id="nome" type="text" required placeholder="aqui vai seu nome"/>
                        </label>

                        <label for="data">
                            <input @input=${this.sniffData} id="data" type="date" required/>
                        </label>

                        <label for="cpf">
                            <input @input=${this.sniffCpf} id="cpf" type="password" required/>
                        </label>
                    </div>
                </fieldset>
                <input type="submit" class="enviar">
            </form>
        `}}u(W,"styles",[Vt]),u(W,"properties",{nome:{},data:{},cpf:{}});const Wt=y`
    h1, h2 {
        color: white;
    }
`;class K extends f{mudouNome(t){const e=t.target;this.nome=e.value}render(){return v`
            <h2>Por favor ${this.nome}, insira seu nome na caixa abaixo:</h2><br>
            <input @input=${this.mudouNome} placeholder="Seu nome vai aqui!">
        `}}u(K,"styles",[Wt]),u(K,"properties",{nome:{}});window.customElements.define("botao-verde",ut);window.customElements.define("botao-vermelho",ft);window.customElements.define("dita-versao",q);window.customElements.define("test-footer",$t);window.customElements.define("grid-layout",mt);window.customElements.define("cara-coroa",V);window.customElements.define("novo-formulario",W);window.customElements.define("quest-nome",K);
