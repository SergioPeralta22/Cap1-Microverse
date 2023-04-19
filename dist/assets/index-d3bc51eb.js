import"./main-19adcfa8.js";const m=[{name:"Evan You",title:"Creator of Vue and Vite.js",description:"Evan You is the creator of Vue.js, a progressive framework for building user interfaces. He is also the creator of Vite.",image:`/${window.location.pathname.split("/")[1]}/5.svg`},{name:"Brendan Eich",title:"Creator of JavaScript",description:"Brendan Eich is an American computer scientist and the creator of JavaScript. He is the co-founder and CTO of Brave Software.",image:`/${window.location.pathname.split("/")[1]}/4.svg`},{name:"Sarah Drasner",title:"Staff Developer Advocate at Netlify",description:"Sarah Drasner is a Staff Developer Advocate at Netlify. She is the author of SVG Animations, SVG on the Web, and Animating the Web. .",image:`/${window.location.pathname.split("/")[1]}/6.svg`},{name:"Ken Thompson",title:"Creator of Unix and co-creator of Go",description:"Ken Thompson is a computer scientist and the creator of Unix, the C programming language, and the Go programming language.",image:`/${window.location.pathname.split("/")[1]}/1.svg`},{name:"David H. Hansson",title:"Creator of Ruby on Rails",description:"David Heinemeier Hansson is a Danish software engineer and the creator of Ruby on Rails.",image:`/${window.location.pathname.split("/")[1]}/2.svg`},{name:"Linus Torvalds",title:"Creator of Linux",description:"Linus Torvalds is a Finnish software engineer and the creator of Linux, the most popular open-source operating system.",image:`/${window.location.pathname.split("/")[1]}/7.svg`}],l=document.getElementById("speakers"),i=document.createElement("h2");i.classList.add("title","text-xl","md:text-2xl","my-12","font-bold");i.id="speakers-title";i.textContent="Featured Speakers";l.appendChild(i);function p(t){const e=document.createElement("div");e.classList.add("speaker");const n=document.createElement("div");n.classList.add("image-container");const a=document.createElement("div");a.classList.add("text-container");const o=document.createElement("img");o.classList.add("speaker-image"),o.src=t.image;const s=document.createElement("h2");s.classList.add("font-bold","text-lg","md:text-xl"),s.textContent=t.name;const r=document.createElement("h3");r.classList.add("text-sm","text-naranja","mb-2","italic","md:text-base"),r.textContent=t.title;const c=document.createElement("hr");c.classList.add("border-naranja","w-1/12","mb-2");const d=document.createElement("p");return d.classList.add("text-xs","md:text-base"),d.textContent=t.description,n.appendChild(o),a.appendChild(s),a.appendChild(r),a.appendChild(c),a.appendChild(d),e.appendChild(n),e.appendChild(a),e}function h(t){const e=[];for(let n=0;n<t.length;n+=1){const a=p(t[n]);e.push(a)}return e}function u(t){for(let e=0;e<t.length;e+=1)l.appendChild(t[e])}const g=h(m);u(g);
