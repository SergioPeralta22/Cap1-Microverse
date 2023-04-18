(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const l=[{name:"Evan You",title:"Creator of Vue and Vite.js",description:"Evan You is the creator of Vue.js, a progressive framework for building user interfaces. He is also the creator of Vite.",image:"undefinedpublic/5.svg"},{name:"Brendan Eich",title:"Creator of JavaScript",description:"Brendan Eich is an American computer scientist and the creator of JavaScript. He is the co-founder and CTO of Brave Software.",image:"undefinedpublic/4.svg"},{name:"Sarah Drasner",title:"Staff Developer Advocate at Netlify",description:"Sarah Drasner is a Staff Developer Advocate at Netlify. She is the author of SVG Animations, SVG on the Web, and Animating the Web. .",image:"undefinedpublic/6.svg"},{name:"Ken Thompson",title:"Creator of Unix and co-creator of Go",description:"Ken Thompson is a computer scientist and the creator of Unix, the C programming language, and the Go programming language.",image:"undefinedpublic/1.svg"},{name:"David H. Hansson",title:"Creator of Ruby on Rails",description:"David Heinemeier Hansson is a Danish software engineer and the creator of Ruby on Rails.",image:"undefinedpublic/2.svg"},{name:"Linus Torvalds",title:"Creator of Linux",description:"Linus Torvalds is a Finnish software engineer and the creator of Linux, the most popular open-source operating system.",image:"undefinedpublic/7.svg"}],d=document.getElementById("speakers"),c=document.createElement("h2");c.classList.add("title","text-xl");c.textContent="Featured Speakers";d.appendChild(c);function p(a){const t=document.createElement("div");t.classList.add("speaker");const r=document.createElement("div");r.classList.add("image-container");const i=document.createElement("div");i.classList.add("text-container");const e=document.createElement("img");e.classList.add("speaker-image"),e.src=a.image;const n=document.createElement("h2");n.classList.add("font-bold","text-lg"),n.textContent=a.name;const o=document.createElement("h3");o.classList.add("text-sm","text-naranja","mb-2","italic"),o.textContent=a.title;const s=document.createElement("p");return s.classList.add("text-xs"),s.textContent=a.description,r.appendChild(e),i.appendChild(n),i.appendChild(o),i.appendChild(s),t.appendChild(r),t.appendChild(i),t}function u(a){const t=[];for(let r=0;r<a.length;r+=1){const i=p(a[r]);t.push(i)}return t}function m(a){for(let t=0;t<a.length;t+=1)d.appendChild(a[t])}const f=u(l);m(f);
