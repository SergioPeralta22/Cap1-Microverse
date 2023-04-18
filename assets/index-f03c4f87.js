(function () {
	const t = document.createElement('link').relList;
	if (t && t.supports && t.supports('modulepreload')) return;
	for (const e of document.querySelectorAll('link[rel="modulepreload"]')) r(e);
	new MutationObserver((e) => {
		for (const n of e)
			if (n.type === 'childList')
				for (const i of n.addedNodes)
					i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
	}).observe(document, { childList: !0, subtree: !0 });
	function o(e) {
		const n = {};
		return (
			e.integrity && (n.integrity = e.integrity),
			e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy),
			e.crossOrigin === 'use-credentials'
				? (n.credentials = 'include')
				: e.crossOrigin === 'anonymous'
				? (n.credentials = 'omit')
				: (n.credentials = 'same-origin'),
			n
		);
	}
	function r(e) {
		if (e.ep) return;
		e.ep = !0;
		const n = o(e);
		fetch(e.href, n);
	}
})();
const l = [
		{
			name: 'Evan You',
			title: 'Creator of Vue and Vite.js',
			description:
				'Evan You is the creator of Vue.js, a progressive framework for building user interfaces. He is also the creator of Vite.',
			image: '/5.svg',
		},
		{
			name: 'Brendan Eich',
			title: 'Creator of JavaScript',
			description:
				'Brendan Eich is an American computer scientist and the creator of JavaScript. He is the co-founder and CTO of Brave Software.',
			image: '/4.svg',
		},
		{
			name: 'Sarah Drasner',
			title: 'Staff Developer Advocate at Netlify',
			description:
				'Sarah Drasner is a Staff Developer Advocate at Netlify. She is the author of SVG Animations, SVG on the Web, and Animating the Web. .',
			image: '/6.svg',
		},
		{
			name: 'Ken Thompson',
			title: 'Creator of Unix and co-creator of Go',
			description:
				'Ken Thompson is a computer scientist and the creator of Unix, the C programming language, and the Go programming language.',
			image: '/1.svg',
		},
		{
			name: 'David H. Hansson',
			title: 'Creator of Ruby on Rails',
			description:
				'David Heinemeier Hansson is a Danish software engineer and the creator of Ruby on Rails.',
			image: '/2.svg',
		},
		{
			name: 'Linus Torvalds',
			title: 'Creator of Linux',
			description:
				'Linus Torvalds is a Finnish software engineer and the creator of Linux, the most popular open-source operating system.',
			image: '/7.svg',
		},
	],
	d = document.getElementById('speakers'),
	c = document.createElement('h2');
c.classList.add('title', 'text-xl');
c.textContent = 'Featured Speakers';
d.appendChild(c);
function m(a) {
	const t = document.createElement('div');
	t.classList.add('speaker');
	const o = document.createElement('div');
	o.classList.add('image-container');
	const r = document.createElement('div');
	r.classList.add('text-container');
	const e = document.createElement('img');
	e.classList.add('speaker-image'), (e.src = a.image);
	const n = document.createElement('h2');
	n.classList.add('font-bold', 'text-lg'), (n.textContent = a.name);
	const i = document.createElement('h3');
	i.classList.add('text-sm', 'text-naranja', 'mb-2', 'italic'),
		(i.textContent = a.title);
	const s = document.createElement('p');
	return (
		s.classList.add('text-xs'),
		(s.textContent = a.description),
		o.appendChild(e),
		r.appendChild(n),
		r.appendChild(i),
		r.appendChild(s),
		t.appendChild(o),
		t.appendChild(r),
		t
	);
}
function p(a) {
	const t = [];
	for (let o = 0; o < a.length; o += 1) {
		const r = m(a[o]);
		t.push(r);
	}
	return t;
}
function u(a) {
	for (let t = 0; t < a.length; t += 1) d.appendChild(a[t]);
}
const f = p(l);
u(f);
