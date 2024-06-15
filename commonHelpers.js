import{a as u,i as p,S as y,A as g}from"./assets/vendor-9cc690ff.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".animation"),t=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting?r.target.classList.add("animate"):r.target.classList.remove("animate")})},{threshold:.1});e.forEach(o=>{t.observe(o)})});const h=async(e,t)=>{u.defaults.baseURL="https://portfolio-js.b.goit.study/api";try{return(await u.get("/reviews")).data}catch{e.innerHTML=t}},v=(e,t)=>{if(!e)return;const o=e.map(r=>`<li class="swiper-slide review-item" id="item">
                        <div>
                            <p>${r.review}</p>
                            <div class="review-container">
                                <img src="${r.avatar_url}"/>
                                <h3>${r.author}</h3>
                            </div>
                        </div>
                        
                    </li>`).join("");t.insertAdjacentHTML("beforeend",o)},b=e=>{e.style.display="inline-block"},w=e=>{e.style.display="none"},L=()=>{p.error({position:"bottomRight",id:"toast",message:"Reviews are not found. Try again!"})},c=e=>{const t=document.querySelector(".prev"),o=document.querySelector(".next"),r=e.currentBreakpoint||"default";let n;r==="1280"?n=4:n=5,e.activeIndex===0?(t.classList.add("swiper-button-disabled"),t.disabled=!0):(t.classList.remove("swiper-button-disabled"),t.disabled=!1),e.activeIndex===n?(o.classList.add("swiper-button-disabled"),o.disabled=!0):(o.classList.remove("swiper-button-disabled"),o.disabled=!1)},E=document.querySelector(".swiper-wrapper"),S=document.querySelector(".swiper"),q='<p class="error-message ">Not Found!</p>',k=document.querySelector(".review-section"),m=document.querySelector(".loader"),a=new y(".swiper",{slidesPerView:1,cssMode:!0,loop:!1,spaceBetween:10,navigation:{nextEl:".next",prevEl:".prev"},keyboard:{enabled:!0},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{init:function(){c(this)},slideChange:function(){c(this)},breakpoint:function(){c(this)}}}),P=async()=>{b(m);try{const e=await h(S,q);v(e,E),a.update(),document.querySelector(".next").addEventListener("click",()=>a.slideNext()),document.querySelector(".prev").addEventListener("click",()=>a.slidePrev())}catch{L()}finally{w(m)}},M=new IntersectionObserver((e,t)=>{e.forEach(o=>{o.isIntersecting&&(P(),t.unobserve(o.target))})},{root:null,threshold:.1});M.observe(k);a.on("slideChange",function(){c(this)});const i=document.querySelector(".feedback-form");window.addEventListener("DOMContentLoaded",x);i.addEventListener("input",O);i.addEventListener("submit",I);function O(e){e.target.name,e.target.value}function x(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){const{email:t,message:o}=e;i.querySelector('[name="email"]').value=t,i.querySelector('[name="message"]').value=o}}function I(e){e.preventDefault();const t=i.querySelector('[name="email"]').value,o=i.querySelector('[name="message"]').value;if(!t||!o){alert("Please fill in all fields");return}if(!T(t)){alert("Please enter a valid email address");return}console.log({email:t,message:o}),fetch("/url-for-post-request",{method:"POST",body:JSON.stringify({email:t,message:o}),headers:{"Content-Type":"application/json"}}).then(r=>{r.ok&&i.reset()}).catch(r=>{console.error("Error:",r)})}function T(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}(()=>{const e={openModalBtn:document.querySelector("[data-mobile-open]"),closeModalBtn:document.querySelector("[data-mobile-close]"),modal:document.querySelector("[data-mobile]")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t);function t(){e.modal.classList.toggle("is-open")}})();const A=document.querySelector("#theme-toggle"),B=document.querySelector("#theme-toggle-mobile"),N=document.querySelector("#mobile-menus");function f(e){const t=localStorage.getItem("theme");t&&(document.body.className=t,t==="dark-theme"&&(e.checked=!0)),e.addEventListener("change",function(){e.checked?(document.body.className="dark-theme",document.documentElement.style.setProperty("--accet-green","#14c57c"),document.documentElement.style.setProperty("--color-text","#f0f0f0"),document.documentElement.style.setProperty("--bg-color","#292929"),document.documentElement.style.setProperty("--light-grey","#2a2d32"),document.documentElement.style.setProperty("--bg-skills","#214136"),document.themeToggleMobilePlace.classList.add("dark-theme-mobile"),localStorage.setItem("theme","dark-theme")):(document.body.className="light-theme",document.documentElement.style.setProperty("--accet-green","#00b068"),document.documentElement.style.setProperty("--color-text","#292929"),document.documentElement.style.setProperty("--bg-color","#f0f0f0"),document.documentElement.style.setProperty("--light-grey","#e4e5e6"),document.documentElement.style.setProperty("--bg-skills","#bcdfd1"),N.classList.remove("dark-theme-mobile"),localStorage.setItem("theme","light-theme"))})}document.addEventListener("DOMContentLoaded",function(){f(B)});document.addEventListener("DOMContentLoaded",function(){f(A)});const C=Array.from(document.querySelectorAll(".accordion-container"));new g(C,{});const D=document.querySelector("#close-modal-btn"),d=document.querySelector(".backdrop");D.addEventListener("click",()=>{d.classList.remove("is-open")});window.addEventListener("click",function(e){e.target===d&&d.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",function(){initializeThemeSwitcher()});
//# sourceMappingURL=commonHelpers.js.map
