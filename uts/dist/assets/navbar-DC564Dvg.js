(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=window.location.pathname.includes(`/ppw/uts/`)?`/ppw/uts`:`/`,t=`
    <nav class="flex w-full bg-gray-50">
        <div class="flex flex-col w-full items-center gap-2 p-4 max-w-5xl mx-auto text-sm font-normal">
            <a href="${e}">Logo</a>
            <ul class="hidden md:flex gap-4">
                <li><a href="${e}">Home</a></li>
                <li><a href="${e}about/">About</a></li>
                <li><a href="${e}contact/">Contact</a></li>
            </ul>
        </div>
    </nav>
  `,n=document.querySelector(`header`);n&&(n.innerHTML=t)}export{e as t};