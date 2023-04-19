(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const d=[{name:"Evan You",title:"Creator of Vue and Vite.js",description:"Evan You is the creator of Vue.js, a progressive framework for building user interfaces. He is also the creator of Vite.",image:`/${window.location.pathname.split("/")[1]}/5.svg`},{name:"Brendan Eich",title:"Creator of JavaScript",description:"Brendan Eich is an American computer scientist and the creator of JavaScript. He is the co-founder and CTO of Brave Software.",image:`/${window.location.pathname.split("/")[1]}/4.svg`},{name:"Sarah Drasner",title:"Staff Developer Advocate at Netlify",description:"Sarah Drasner is a Staff Developer Advocate at Netlify. She is the author of SVG Animations, SVG on the Web, and Animating the Web. .",image:`/${window.location.pathname.split("/")[1]}/6.svg`},{name:"Ken Thompson",title:"Creator of Unix and co-creator of Go",description:"Ken Thompson is a computer scientist and the creator of Unix, the C programming language, and the Go programming language.",image:`/${window.location.pathname.split("/")[1]}/1.svg`},{name:"David H. Hansson",title:"Creator of Ruby on Rails",description:"David Heinemeier Hansson is a Danish software engineer and the creator of Ruby on Rails.",image:`/${window.location.pathname.split("/")[1]}/2.svg`},{name:"Linus Torvalds",title:"Creator of Linux",description:"Linus Torvalds is a Finnish software engineer and the creator of Linux, the most popular open-source operating system.",image:`/${window.location.pathname.split("/")[1]}/7.svg`}],l=document.getElementById("speakers"),c=document.createElement("h2");c.classList.add("title","text-xl");c.textContent="Featured Speakers";l.appendChild(c);function p(a){const t=document.createElement("div");t.classList.add("speaker");const i=document.createElement("div");i.classList.add("image-container");const o=document.createElement("div");o.classList.add("text-container");const e=document.createElement("img");e.classList.add("speaker-image"),e.src=a.image;const n=document.createElement("h2");n.classList.add("font-bold","text-lg"),n.textContent=a.name;const r=document.createElement("h3");r.classList.add("text-sm","text-naranja","mb-2","italic"),r.textContent=a.title;const s=document.createElement("p");return s.classList.add("text-xs"),s.textContent=a.description,i.appendChild(e),o.appendChild(n),o.appendChild(r),o.appendChild(s),t.appendChild(i),t.appendChild(o),t}function m(a){const t=[];for(let i=0;i<a.length;i+=1){const o=p(a[i]);t.push(o)}return t}function u(a){for(let t=0;t<a.length;t+=1)l.appendChild(a[t])}const f=m(d);u(f);
