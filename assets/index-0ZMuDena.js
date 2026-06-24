(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.getElementById(`slider`);function t(){if(e){let t=Number(e.min),n=Number(e.max),r=(Number(e.value)-t)/(n-t)*100;e.style.background=`linear-gradient(
      to right,
      hsl(174, 77%, 80%) 0%,
      hsl(174, 77%, 80%) ${r}%,
      hsl(224, 65%, 95%) ${r}%,
      hsl(224, 65%, 95%) 100%
    )`,console.log(`update`,r)}}e&&(t(),e.addEventListener(`input`,t));