(function(i,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(i=typeof globalThis<"u"?globalThis:i||self,o(i.PalmToast={}))})(this,function(i){"use strict";var o=(e=>(e.BottomRight="bottom-right",e.BottomLeft="bottom-left",e.TopRight="top-right",e.TopLeft="top-left",e))(o||{}),m=(e=>(e.Success="success",e.Error="error",e.Warning="warning",e.Info="info",e.Default="default",e))(m||{});class T{constructor(t){this.toastSpacing=10,this.isPaused=!1,this.text=t.text,this.heading=t.heading,this.position=t.position??"bottom-right",this.type=t.type??"default",this.duration=t.duration??3e3,this.dissmissable=t.dissmissable??!0,this.draggable=t.draggable??!0,this.showTimer=t.showTimer??!1,this.pauseOnHover=t.pauseOnHover??!0,this.positionModifier=this.position==="bottom-right"||this.position==="bottom-left"?"bottom":"top"}createToastElement(){const t=document.createElement("div");return t.className="palm-toast",t.setAttribute("toast-type",this.type),t.setAttribute("toast-position",this.position),t.innerHTML=`
      <strong>${this.heading??""}</strong>
      <p class="toast-body">${this.text}</p>
    `,this.dissmissable&&this.addCloseButton(t),this.draggable&&this.makeDraggable(t),this.showTimer&&this.addTimeBar(t),t}showToast(){try{this.toastElement=this.createToastElement(),document.body.insertBefore(this.toastElement,document.body.lastChild),this.repositionToasts(),this.beginTimer()}catch(t){console.error(`An error occurred while generating your PalmToast: 
`,t)}}addCloseButton(t){this.closeButton=document.createElement("button"),this.closeButton.className="toast-close",this.closeButton.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" fill="currentColor" /></svg>
    `,this.closeButton.addEventListener("click",()=>this.removeToast()),t.appendChild(this.closeButton)}makeDraggable(t){console.log(t)}beginTimer(){var c,f,g,p;let t,s,a=0,r=0,n=!1,l=!1;const h=b=>{t||(t=b),r=b-t-a;const v=Math.max(0,this.duration-r);if(this.timeBar){const E=v/this.duration*100;this.timeBar.style.width=`${E}%`}v>0?this.requestAnimationID=requestAnimationFrame(h):this.removeToast()},L=()=>{this.requestAnimationID&&(cancelAnimationFrame(this.requestAnimationID),this.requestAnimationID=void 0,s=performance.now())},B=()=>{s&&(a+=performance.now()-s,s=void 0,this.requestAnimationID=requestAnimationFrame(h))},u=()=>{this.isPaused||(this.isPaused=!0,L())},d=()=>{!n&&!l&&this.isPaused&&(this.isPaused=!1,B())};this.pauseOnHover&&((c=this.toastElement)==null||c.addEventListener("mouseenter",()=>{n=!0,u()}),(f=this.toastElement)==null||f.addEventListener("mouseleave",()=>{n=!1,d()}),(g=this.closeButton)==null||g.addEventListener("focus",()=>{l=!0,u()}),(p=this.closeButton)==null||p.addEventListener("blur",()=>{l=!1,d()})),this.requestAnimationID=requestAnimationFrame(h)}addTimeBar(t){this.timeBar=document.createElement("div"),this.timeBar.className="toast-time-bar",t.appendChild(this.timeBar)}removeToast(){this.toastElement&&(this.toastElement.style.opacity="0",this.toastElement.ontransitionend=()=>{var t;(t=this.toastElement)==null||t.remove(),this.repositionToasts(),this.requestAnimationID&&(cancelAnimationFrame(this.requestAnimationID),this.requestAnimationID=void 0)})}repositionToasts(){const t=document.querySelectorAll(`.palm-toast[toast-position="${this.position}"]`);for(let s=t.length-1;s>=0;s--){const a=t[s],r=a.clientHeight*(t.length-s-1),n=this.toastSpacing*(t.length-s-1);a.style[this.positionModifier]=`${r+n}px`}}}i.PalmToast=T,i.ToastPosition=o,i.ToastType=m,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
