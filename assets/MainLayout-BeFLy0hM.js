import{Q as ae}from"./QImg-Dr4H1Osn.js";import{Q as ie}from"./QAvatar-CuTrReAr.js";import{c as T,a as d,h as g,g as V,i as U,e as $,l as k,r as z,w as p,o as D,b as te,p as oe,d as re,f as se,n as ue,j as ce,k as F,m as ne,q as H,s as de,t as fe,u as M,v as ve,x as O,y as L,z as me,A as Q,B as W,F as Z,C as J,D as G}from"./index-BK2rQf65.js";import{h as I,a as he,b as le,Q as K}from"./QBtn-CWgkSUwp.js";import{Q as P}from"./QResizeObserver-Du73Npxb.js";import{s as ge,g as pe,a as ye,b as be,c as E}from"./scroll-B3EPN-HD.js";const we=T({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:c}){const n=d(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>g("div",{class:n.value},I(c.default))}}),X=T({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:c}){const n=d(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:n.value,role:"toolbar"},I(c.default))}}),_e=T({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:c,emit:n}){const{proxy:{$q:l}}=V(),t=U(k,$);if(t===$)return console.error("QHeader needs to be child of QLayout"),$;const i=z(parseInt(e.heightHint,10)),s=z(!0),h=d(()=>e.reveal===!0||t.view.value.indexOf("H")!==-1||l.platform.is.ios&&t.isContainer.value===!0),f=d(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return s.value===!0?i.value:0;const a=i.value-t.scroll.value.position;return a>0?a:0}),u=d(()=>e.modelValue!==!0||h.value===!0&&s.value!==!0),S=d(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),x=d(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=d(()=>{const a=t.rows.value.top,b={};return a[0]==="l"&&t.left.space===!0&&(b[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(b[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),b});function v(a,b){t.update("header",a,b)}function w(a,b){a.value!==b&&(a.value=b)}function y({height:a}){w(i,a),v("size",a)}function C(a){S.value===!0&&w(s,!0),n("focusin",a)}p(()=>e.modelValue,a=>{v("space",a),w(s,!0),t.animate()}),p(f,a=>{v("offset",a)}),p(()=>e.reveal,a=>{a===!1&&w(s,e.modelValue)}),p(s,a=>{t.animate(),n("reveal",a)}),p(t.scroll,a=>{e.reveal===!0&&w(s,a.direction==="up"||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)});const B={};return t.instances.header=B,e.modelValue===!0&&v("size",i.value),v("space",e.modelValue),v("offset",f.value),D(()=>{t.instances.header===B&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const a=he(c.default,[]);return e.elevated===!0&&a.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(g(P,{debounce:0,onResize:y})),g("header",{class:x.value,style:q.value,onFocusin:C},a)}}}),ze=T({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:c,emit:n}){const{proxy:{$q:l}}=V(),t=U(k,$);if(t===$)return console.error("QFooter needs to be child of QLayout"),$;const i=z(parseInt(e.heightHint,10)),s=z(!0),h=z(te.value===!0||t.isContainer.value===!0?0:window.innerHeight),f=d(()=>e.reveal===!0||t.view.value.indexOf("F")!==-1||l.platform.is.ios&&t.isContainer.value===!0),u=d(()=>t.isContainer.value===!0?t.containerHeight.value:h.value),S=d(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const o=t.scroll.value.position+u.value+i.value-t.height.value;return o>0?o:0}),x=d(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),q=d(()=>e.modelValue===!0&&x.value===!0&&e.reveal===!0),v=d(()=>"q-footer q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(x.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(f.value!==!0?" hidden":""):"")),w=d(()=>{const o=t.rows.value.bottom,m={};return o[0]==="l"&&t.left.space===!0&&(m[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),o[2]==="r"&&t.right.space===!0&&(m[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),m});function y(o,m){t.update("footer",o,m)}function C(o,m){o.value!==m&&(o.value=m)}function B({height:o}){C(i,o),y("size",o)}function a(){if(e.reveal!==!0)return;const{direction:o,position:m,inflectionPoint:_}=t.scroll.value;C(s,o==="up"||m-_<100||t.height.value-u.value-m-i.value<300)}function b(o){q.value===!0&&C(s,!0),n("focusin",o)}p(()=>e.modelValue,o=>{y("space",o),C(s,!0),t.animate()}),p(S,o=>{y("offset",o)}),p(()=>e.reveal,o=>{o===!1&&C(s,e.modelValue)}),p(s,o=>{t.animate(),n("reveal",o)}),p([i,t.scroll,t.height],a),p(()=>l.screen.height,o=>{t.isContainer.value!==!0&&C(h,o)});const r={};return t.instances.footer=r,e.modelValue===!0&&y("size",i.value),y("space",e.modelValue),y("offset",S.value),D(()=>{t.instances.footer===r&&(t.instances.footer=void 0,y("size",0),y("offset",0),y("space",!1))}),()=>{const o=le(c.default,[g(P,{debounce:0,onResize:B})]);return e.elevated===!0&&o.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),g("footer",{class:v.value,style:w.value,onFocusin:b},o)}}}),xe=T({name:"QPageContainer",setup(e,{slots:c}){const{proxy:{$q:n}}=V(),l=U(k,$);if(l===$)return console.error("QPageContainer needs to be child of QLayout"),$;oe(re,!0);const t=d(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>g("div",{class:"q-page-container",style:t.value},I(c.default))}}),{passive:Y}=ce,Qe=["both","horizontal","vertical"],Se=T({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Qe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ge},emits:["scroll"],setup(e,{emit:c}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;p(()=>e.scrollTarget,()=>{f(),h()});function s(){l!==null&&l();const x=Math.max(0,ye(t)),q=be(t),v={top:x-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const w=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";n.position={top:x,left:q},n.directionChanged=n.direction!==w,n.delta=v,n.directionChanged===!0&&(n.direction=w,n.inflectionPoint=n.position),c("scroll",{...n})}function h(){t=pe(i,e.scrollTarget),t.addEventListener("scroll",u,Y),u(!0)}function f(){t!==void 0&&(t.removeEventListener("scroll",u,Y),t=void 0)}function u(x){if(x===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[q,v]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{v(q),l=null}}}const{proxy:S}=V();return p(()=>S.$q.lang.rtl,s),se(()=>{i=S.$el.parentNode,h()}),D(()=>{l!==null&&l(),f()}),Object.assign(S,{trigger:u,getPosition:()=>n}),ue}}),qe=T({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:c,emit:n}){const{proxy:{$q:l}}=V(),t=z(null),i=z(l.screen.height),s=z(e.container===!0?0:l.screen.width),h=z({position:0,direction:"down",inflectionPoint:0}),f=z(0),u=z(te.value===!0?0:E()),S=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),x=d(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),q=d(()=>u.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),v=d(()=>u.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function w(r){if(e.container===!0||document.qScrollPrevented!==!0){const o={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};h.value=o,e.onScroll!==void 0&&n("scroll",o)}}function y(r){const{height:o,width:m}=r;let _=!1;i.value!==o&&(_=!0,i.value=o,e.onScrollHeight!==void 0&&n("scrollHeight",o),B()),s.value!==m&&(_=!0,s.value=m),_===!0&&e.onResize!==void 0&&n("resize",r)}function C({height:r}){f.value!==r&&(f.value=r,B())}function B(){if(e.container===!0){const r=i.value>f.value?E():0;u.value!==r&&(u.value=r)}}let a=null;const b={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:t,height:i,containerHeight:f,scrollbarWidth:u,totalWidth:d(()=>s.value+u.value),rows:d(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:F({size:0,offset:0,space:!1}),right:F({size:300,offset:0,space:!1}),footer:F({size:0,offset:0,space:!1}),left:F({size:300,offset:0,space:!1}),scroll:h,animate(){a!==null?clearTimeout(a):document.body.classList.add("q-body--layout-animate"),a=setTimeout(()=>{a=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,o,m){b[r][o]=m}};if(oe(k,b),E()>0){let r=function(){_=null,R.classList.remove("hide-scrollbar")},o=function(){if(_===null){if(R.scrollHeight>l.screen.height)return;R.classList.add("hide-scrollbar")}else clearTimeout(_);_=setTimeout(r,300)},m=function(j){_!==null&&j==="remove"&&(clearTimeout(_),r()),window[`${j}EventListener`]("resize",o)},_=null;const R=document.body;p(()=>e.container!==!0?"add":"remove",m),e.container!==!0&&m("add"),ne(()=>{m("remove")})}return()=>{const r=le(c.default,[g(Se,{onScroll:w}),g(P,{onResize:y})]),o=g("div",{class:S.value,style:x.value,ref:e.container===!0?void 0:t,tabindex:-1},r);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:t},[g(P,{onResize:C}),g("div",{class:"absolute-full",style:q.value},[g("div",{class:"scroll",style:v.value},[o])])]):o}}});function Ce(e){{const c={active:!0};if(typeof e=="function"){const n=d(e);c.val=n.value,p(n,l=>{c.val=l,c.active===!0&&H()})}else c.val=e;M.push(c),H(),de(()=>{c.active=!0,H()}),fe(()=>{c.active=!1,H()}),ne(()=>{M.splice(M.indexOf(c),1),H()})}}const A="NoliDev Portfolio",N="Hello I'm Noli a web developer that delivers responsive web apps",$e="html, css, javascript, php, web, web developer, web development, app development, quasar, vue, seo",ee="https://zenara12.github.io/my-portfolio/#/images/profilepic.png",Le="https://scontent.fceb3-1.fna.fbcdn.net/v/t39.30808-6/438303044_1001045115355245_3836067379854975523_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGLk88BAJw4gQt7IRftGXNmQWWTJlQRSphBZZMmVBFKmMm6UAQnQVxDDuZQ0qoWUsaBZIn7gJIrvQIln4-3xOll&_nc_ohc=Qc9NH21fTbQQ7kNvgHGEanU&_nc_oc=AdiExFUaf-ugH_Z8FbM0xuhBvBLUQzzpmovJZDsPyw6xeUkmGmJtrQ3O-637KST4yiw&_nc_zt=23&_nc_ht=scontent.fceb3-1.fna&_nc_gid=A4DGDqxEVqsr6dh2a035036&oh=00_AYB7fZexytvga4Cwo08VBNLXJ3UFcIjDLnsabwQjKR3Ubg&oe=67B3D8B1",ke={__name:"MainLayout",setup(e){Ce({title:A,meta:[{name:"description",content:N},{name:"keywords",content:$e},{property:"og:title",content:A},{property:"og:description",content:N},{property:"og:image",content:ee},{property:"og:image:width",content:"1200"},{property:"og:image:height",content:"630"},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:A},{name:"twitter:description",content:N},{name:"twitter:image",content:ee}]});const c=t=>{const i=document.querySelector(t);i&&i.scrollIntoView({behavior:"smooth"})},n=z(!1),l=[{name:"Skills",to:"#skills",icon:"psychology"},{name:"Projects",to:"#projects",icon:"description"},{name:"About",to:"#about",icon:"person"},{name:"Contact",to:"#",icon:"contact_phone"}];return(t,i)=>{const s=me("router-view");return O(),ve(qe,{view:"lHh Lpr lFf"},{default:L(()=>[Q(_e,{flat:"",class:"gt-sm"},{default:L(()=>[Q(X,{class:"content-between q-pa-lg",flat:""},{default:L(()=>[Q(we,null,{default:L(()=>[Q(ie,null,{default:L(()=>[Q(ae,{src:Le,ratio:1,loading:"lazy","spinner-color":"secondary"})]),_:1})]),_:1}),(O(),W(Z,null,J(l,(h,f)=>Q(K,{label:h.name,icon:h.icon,key:f,ripple:!1,class:G([n.value===f?"text-secondary":"text-primary","bg-transparent"]),onMouseover:u=>n.value=f,onMouseleave:i[0]||(i[0]=u=>n.value=null),onClick:u=>c(h.to),flat:"",unelevated:""},null,8,["label","icon","class","onMouseover","onClick"])),64))]),_:1})]),_:1}),Q(ze,{elevated:"",class:"lt-md"},{default:L(()=>[Q(X,{class:"flex justify-evenly items-center"},{default:L(()=>[(O(),W(Z,null,J(l,(h,f)=>Q(K,{icon:h.icon,key:f,ripple:!1,class:G([n.value===f?"text-secondary":"text-primary","bg-transparent"]),onMouseover:u=>n.value=f,onMouseleave:i[1]||(i[1]=u=>n.value=null),onClick:u=>c(h.to),flat:"",unelevated:""},null,8,["icon","class","onMouseover","onClick"])),64))]),_:1})]),_:1}),Q(xe,null,{default:L(()=>[Q(s)]),_:1})]),_:1})}}};export{ke as default};
