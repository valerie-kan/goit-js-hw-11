import{S as u,i as f}from"./assets/vendor-f33cd494.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/";function p(t){l.classList.remove("is-hidden");const s=new URLSearchParams({key:"45515322-6acc0c0fe7102921e2f085c71",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}function m(t){return`
    <li class='gallery-item'>
        <a class='gallery-link' href='${t.largeImageURL}'>
        <img class='gallery-img' src='${t.webformatURL}' alt='${t.tags}'>
        <div class='img-info'>
        </a>
        <p><span>Likes</span> ${t.likes}</p>
        <p><span>Views</span> ${t.views}</p>
        <p><span>Comments</span> ${t.comments}</p>
        <p><span>Downloads</span> ${t.downloads}</p>
        </div>
    </li>`}const c=document.querySelector(".form"),h=document.querySelector(".form-input"),a=document.querySelector(".gallery-list"),l=document.querySelector(".loader");c.addEventListener("submit",g);const y=new u(".gallery-item a",{captionsData:"alt"});function g(t){t.preventDefault(),a.innerHTML="";const s=h.value;s!==""&&p(s).then(o=>{o.hits.length===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",messageSize:"16",color:"red",iconColor:"white"});const n=o.hits.map(e=>m(e)).join("");l.classList.add("is-hidden"),a.insertAdjacentHTML("afterbegin",n),y.refresh(),c.reset()}).catch(o=>console.log(o))}
//# sourceMappingURL=commonHelpers.js.map
