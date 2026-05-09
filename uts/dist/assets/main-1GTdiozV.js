(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.querySelector(`header`);if(!e)return;let t=window.location.hostname===`localhost`?`/`:`/ppw/uts/dist/`;t.endsWith(`/`)||(t+=`/`);let n=[{name:`Home`,href:`${t}`},{name:`About`,href:`${t}about/`},{name:`Contact`,href:`${t}contact/`}].map(e=>`
      <li>
      <a href="${e.href}">
        ${e.name}
      </a></li>
    `).join(``);e.innerHTML=`
    <nav class="flex w-full bg-gray-50">
        <div class="flex flex-col w-full items-center gap-2 p-4 max-w-5xl mx-auto text-sm font-normal">
            <a href="${t}">Logo</a>
            <ul class="hidden md:flex gap-4">
                ${n}
            </ul>
        </div>
    </nav>
  `}window.addEventListener(`DOMContentLoaded`,()=>{e();let t=window.location.pathname,n=`Home`;t.includes(`/about/`)?n=`About`:t.includes(`/contact/`)&&(n=`Contact`),document.title=`${n} - UTS`});