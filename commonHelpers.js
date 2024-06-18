import{A as W,a as w,i as l,S as _}from"./assets/vendor-c1776879.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".animation"),t=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting?s.target.classList.add("animate"):s.target.classList.remove("animate")})},{threshold:.1});e.forEach(o=>{t.observe(o)})});const U=Array.from(document.querySelectorAll(".accordion-container"));new W(U,{});const Z=async(e,t)=>{w.defaults.baseURL="https://portfolio-js.b.goit.study/api";try{return(await w.get("/reviews")).data}catch{e.innerHTML=t}},K=(e,t)=>{if(!e)return;const o=e.map(s=>`<li class="swiper-slide review-item" id="item">
                        <p>${s.review}</p>
                        <div class="review-container">
                            <img src="${s.avatar_url}"/>
                            <h3>${s.author}</h3>
                        </div>
                    </li>`).join("");t.insertAdjacentHTML("beforeend",o)},Y=e=>{e.style.display="inline-block"},Q=e=>{e.style.display="none"},X=()=>{l.error({position:"bottomRight",id:"toast",message:"Reviews are not found. Try again!"})},u=e=>{const t=document.querySelector(".prev"),o=document.querySelector(".next"),s=e.currentBreakpoint||"default";let n;s==="1280"?n=4:n=5,e.activeIndex===0?(t.classList.add("swiper-button-disabled"),t.disabled=!0):(t.classList.remove("swiper-button-disabled"),t.disabled=!1),e.activeIndex===n?(o.classList.add("swiper-button-disabled"),o.disabled=!0):(o.classList.remove("swiper-button-disabled"),o.disabled=!1)},ee=document.querySelector(".swiper-wrapper"),te=document.querySelector(".swiper"),oe='<p class="error-message ">Not Found!</p>',se=document.querySelector(".review-section"),j=document.querySelector(".loader"),p=new _(".swiper",{slidesPerView:1,cssMode:!0,loop:!1,spaceBetween:10,navigation:{nextEl:".next",prevEl:".prev"},keyboard:{enabled:!0},breakpoints:{1280:{slidesPerView:2,spaceBetween:32}},on:{init:function(){u(this)},slideChange:function(){u(this)},breakpoint:function(){u(this)}}}),ne=async()=>{Y(j);try{const e=await Z(te,oe);K(e,ee),p.update(),document.querySelector(".next").addEventListener("click",()=>p.slideNext()),document.querySelector(".prev").addEventListener("click",()=>p.slidePrev())}catch{X()}finally{Q(j)}},re=new IntersectionObserver((e,t)=>{e.forEach(o=>{o.isIntersecting&&(ne(),t.unobserve(o.target))})},{root:null,threshold:.1});re.observe(se);p.on("slideChange",function(){u(this)});const a=document.querySelector(".feedback-form"),g=document.querySelector(".works-input-email"),h=document.querySelector(".checkmark"),L=document.querySelector(".form-supporting-text"),ce=document.querySelector(".backdrop"),ie=document.getElementById("close-modal-btn");window.addEventListener("DOMContentLoaded",le);g.addEventListener("input",B);a.addEventListener("submit",de);a.addEventListener("input",ae);ie.addEventListener("click",()=>{ce.classList.remove("is-open")});function ae(){const e=a.querySelector('[name="email"]').value,t=a.querySelector('[name="message"]').value;localStorage.setItem("feedback-form-state",JSON.stringify({email:e,message:t}))}function B(e){const t=e.target.value;G(t)?(h.style.display="block",g.classList.remove("invalid"),L.style.display="none"):(h.style.display="none",g.classList.add("invalid"),L.style.display="block")}function le(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e){const{email:t,message:o}=e;a.querySelector('[name="email"]').value=t,a.querySelector('[name="message"]').value=o,B({target:g})}}function de(e){e.preventDefault();const t=a.querySelector('[name="email"]').value,o=a.querySelector('[name="message"]').value;if(!t||!o){l.error({title:"Error",message:"Please fill in all fields"});return}if(!G(t)){l.error({title:"Error",message:"Please enter a valid email address"});return}h.style.display="none",fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",body:JSON.stringify({email:t,comment:o}),headers:{"Content-Type":"application/json",accept:"application/json"}}).then(s=>{s.ok?(me("success","The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch."),a.reset(),localStorage.removeItem("feedback-form-state")):l.error({title:"Error",message:"There was an error. Please try again."})}).catch(s=>{l.error({title:"Error",message:"There was an error. Please try again."})})}function G(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}function me(e,t){const o=document.querySelector(".backdrop"),s=document.querySelector(".modal-description");!o||!s||(s.textContent=t,o.classList.add("is-open"))}(()=>{const e={openModalBtn:document.querySelector("[data-mobile-open]"),closeModalBtn:document.querySelector("[data-mobile-close]"),modal:document.querySelector("[data-mobile]"),menuLinks:document.querySelectorAll(".menu-list-mobile a")};e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t),e.menuLinks.forEach(o=>{o.addEventListener("click",()=>{e.modal.classList.remove("is-open")})});function t(){e.modal.classList.toggle("is-open")}})();const ue=document.querySelector("#theme-toggle"),pe=document.querySelector("#theme-toggle-mobile"),E=document.querySelector("#mobile-menus");function P(e){const t=localStorage.getItem("theme");t?(document.body.className=t,t==="dark-theme"?(e.checked=!0,x()):S()):S(),e.addEventListener("change",function(){e.checked?(document.body.className="dark-theme",x(),E.classList.add("dark-theme-mobile"),localStorage.setItem("theme","dark-theme")):(document.body.className="light-theme",S(),localStorage.setItem("theme","light-theme"),E.classList.remove("dark-theme-mobile"))})}function x(){document.documentElement.style.setProperty("--accet-green","#14c57c"),document.documentElement.style.setProperty("--color-text","#f0f0f0"),document.documentElement.style.setProperty("--bg-color","#292929"),document.documentElement.style.setProperty("--light-grey","#2a2d32"),document.documentElement.style.setProperty("--bg-skills","#214136"),document.documentElement.style.setProperty("--border-color","#2A2D32")}function S(){document.documentElement.style.setProperty("--accet-green","#00b068"),document.documentElement.style.setProperty("--color-text","#292929"),document.documentElement.style.setProperty("--bg-color","#f0f0f0"),document.documentElement.style.setProperty("--light-grey","#e4e5e6"),document.documentElement.style.setProperty("--bg-skills","#bcdfd1"),document.documentElement.style.setProperty("--border-color","#CCC")}document.addEventListener("DOMContentLoaded",function(){P(ue),P(pe)});const q="/Command-Projekt-JS/assets/1-5810cc52.jpg",ge="/Command-Projekt-JS/assets/1-2x-379d8de8.jpg",J="/Command-Projekt-JS/assets/2-cb13e3cb.jpg",fe="/Command-Projekt-JS/assets/2-2x-e1483b95.jpg",C="/Command-Projekt-JS/assets/3-e0576bd7.jpg",Se="/Command-Projekt-JS/assets/3-2x-fb79b545.jpg",$="/Command-Projekt-JS/assets/4-14ca91ba.jpg",ve="/Command-Projekt-JS/assets/4-2x-39275c77.jpg",T="/Command-Projekt-JS/assets/5-676ecb00.jpg",ye="/Command-Projekt-JS/assets/5-2x-c9d1ecc4.jpg",R="/Command-Projekt-JS/assets/6-21d18a69.jpg",he="/Command-Projekt-JS/assets/6-2x-72392c33.jpg",M="/Command-Projekt-JS/assets/7-37e7b7ff.jpg",be="/Command-Projekt-JS/assets/7-2x-2485cf3c.jpg",I="/Command-Projekt-JS/assets/8-3c99fabe.jpg",ke="/Command-Projekt-JS/assets/8-2x-4ae4ee3e.jpg",N="/Command-Projekt-JS/assets/9-cadf2c0c.jpg",we="/Command-Projekt-JS/assets/9-2x-aff37560.jpg",A="/Command-Projekt-JS/assets/10-1e5fb8ac.jpg",je="/Command-Projekt-JS/assets/10-2x-73d6d9f4.jpg",Le="/Command-Projekt-JS/assets/icons-71aede43.svg",O=[{imgSrc:q,imgSrcSet:`${q} 1x, ${ge} 2x`,alt:"power-pulse-webservice",tech:"React, JavaScript, Node JS, Git",description:"wallet webservice",link:"#"},{imgSrc:J,imgSrcSet:`${J} 1x, ${fe} 2x`,alt:"mimino-website",tech:"React, JavaScript, Node JS, Git",description:"green harvest online store",link:"https://boreddarkness.github.io/GreenHarvest/"},{imgSrc:C,imgSrcSet:`${C} 1x, ${Se} 2x`,alt:"vyshyvanka",tech:"React, JavaScript, Node JS, Git",description:"English exellence website",link:"#"},{imgSrc:$,imgSrcSet:`${$} 1x, ${ve} 2x`,alt:"green-harvest-online-store",tech:"React, JavaScript, Node JS, Git",description:"mimino website",link:"#"},{imgSrc:T,imgSrcSet:`${T} 1x, ${ye} 2x`,alt:"wallet-webservice",tech:"React, JavaScript, Node JS, Git",description:"power pulse webservice",link:"#"},{imgSrc:R,imgSrcSet:`${R} 1x, ${he} 2x`,alt:"chego-jewelry-website",tech:"React, JavaScript, Node JS, Git",description:"chego jewelry website",link:"#"},{imgSrc:M,imgSrcSet:`${M} 1x, ${be} 2x`,alt:"energy-flow-webservice",tech:"React, JavaScript, Node JS, Git",description:"energy flow webservice",link:"#"},{imgSrc:I,imgSrcSet:`${I} 1x, ${ke} 2x`,alt:"fruitbox-online-store",tech:"React, JavaScript, Node JS, Git",description:"fruitbox online store",link:"#"},{imgSrc:N,imgSrcSet:`${N} 1x, ${we} 2x`,alt:"English-excellence-webservice",tech:"React, JavaScript, Node JS, Git",description:"vyshyvanka vibes Landing Page",link:"#"},{imgSrc:A,imgSrcSet:`${A} 1x, ${je} 2x`,alt:"starlight-studio-landing-page",tech:"React, JavaScript, Node JS, Git",description:"starlight studio landing page",link:"#"}],v=3;let y=0;const Ee=document.querySelector(".projects-ul"),D=document.querySelector(".btn-load-more");function z(){const e=y*v,t=e+v;O.slice(e,t).forEach(s=>{const n=document.createElement("li");n.classList.add("projects-li"),n.innerHTML=`
      <img
        class="projects-img"
        srcset="${s.imgSrcSet}"
        src="${s.imgSrc}"
        alt="${s.alt}"
        width="320"
      />
      <div class="div-list">
        <h3 class="projects-sub">${s.tech}</h3>
        <p class="projects-p">${s.description}</p>
        <a href="${s.link}" class="visit-btn" target="_blank" rel="noopener noreferrer">
          VISIT
          <svg class="btn-visit-icon" width="24" height="24">
            <use href="${Le}#icon-Vector-Projects"></use>
          </svg>
        </a>
      </div>
    `,Ee.appendChild(n)}),y++,y*v>=O.length&&(D.style.display="none",l.info({title:"Info",message:"That's all for now",position:"topCenter",timeout:3e3}))}D.addEventListener("click",z);z();const Pe=document.querySelector("#close-modal-btn"),b=document.querySelector(".backdrop");Pe.addEventListener("click",()=>{b.classList.remove("is-open")});window.addEventListener("click",e=>{if(e.target===b)return F()});window.addEventListener("keydown",e=>{if(e.code==="Escape")return F()});function F(){b.classList.remove("is-open")}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".benefits-list");e.addEventListener("mouseover",t=>{const o=t.target.closest(".benefits-item");o&&(o.classList.add("active"),e.classList.add("dimmed"),e.querySelectorAll(".benefits-item").forEach(s=>{s!==o&&s.classList.add("dimmed")}))}),e.addEventListener("mouseout",t=>{const o=t.target.closest(".benefits-item");o&&(o.classList.remove("active"),e.classList.remove("dimmed"),e.querySelectorAll(".benefits-item").forEach(s=>{s.classList.remove("dimmed")}))})});document.addEventListener("DOMContentLoaded",()=>{const e={root:null,rootMargin:"0px",threshold:.1},t=(n,r)=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("visible"),r.unobserve(i.target))})},o=new IntersectionObserver(t,e);document.querySelectorAll(".animation").forEach(n=>o.observe(n))});function xe(){function e(o,s){let n=document.querySelector(o);if(!n){console.log("елемент куди скролити не знайдено:",o);return}let r=n.getBoundingClientRect().top,i=window.pageYOffset,f=null;const H=function(c,d,m,V){return c/=V/2,c<1?m/2*c*c+d:(c--,-m/2*(c*(c-2)-1)+d)},k=function(c){f===null&&(f=c);const d=c-f,m=H(d,i,r,s);window.scrollTo(0,m),d<s&&requestAnimationFrame(k)};requestAnimationFrame(k)}const t=document.querySelectorAll("a.scroll-to");t&&t.forEach(o=>{o.addEventListener("click",function(s){s.preventDefault();const n=this.getAttribute("href");refs.modal.classList.contains("is-open")&&refs.modal.classList.remove("is-open"),e(n,1e3)})})}xe();
//# sourceMappingURL=commonHelpers.js.map
