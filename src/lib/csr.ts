// Helper kecil untuk render data di sisi browser (CSR).
// Komponen .astro menyediakan kerangka + placeholder; fungsi di sini mengisi DOM
// setelah data di-fetch dari API.

type Data = Record<string, unknown>;

// Hanya izinkan skema URL yang aman; tolak javascript:, data:, dll.
const SAFE_SCHEMES = new Set(['http:', 'https:', 'mailto:', 'tel:']);

function safeUrl(value: string): string | null {
	try {
		const url = new URL(value, window.location.origin);
		return SAFE_SCHEMES.has(url.protocol) ? value : null;
	} catch {
		return null;
	}
}

/**
 * Isi teks/atribut elemen berdasarkan atribut data-bind* di dalam `root`.
 * - data-bind="field"       -> textContent
 * - data-bind-src="field"   -> atribut src
 * - data-bind-alt="field"   -> atribut alt
 * - data-bind-href="field"  -> atribut href
 */
export function bind(root: ParentNode, data: Data): void {
	// Sertakan root itu sendiri, bukan hanya turunannya (querySelectorAll melewatkan root).
	const select = (sel: string): HTMLElement[] => {
		const els = Array.from(root.querySelectorAll<HTMLElement>(sel));
		if (root instanceof HTMLElement && root.matches(sel)) els.unshift(root);
		return els;
	};

	select('[data-bind]').forEach((el) => {
		const key = el.dataset.bind;
		if (key && data[key] != null) el.textContent = String(data[key]);
	});
	select('[data-bind-src]').forEach((el) => {
		const key = el.dataset.bindSrc;
		if (key && data[key]) {
			const url = safeUrl(String(data[key]));
			if (url) el.setAttribute('src', url);
		}
	});
	select('[data-bind-alt]').forEach((el) => {
		const key = el.dataset.bindAlt;
		if (key && data[key]) el.setAttribute('alt', String(data[key]));
	});
	select('[data-bind-href]').forEach((el) => {
		const key = el.dataset.bindHref;
		if (key && data[key]) {
			const url = safeUrl(String(data[key]));
			if (url) el.setAttribute('href', url);
		}
	});
}

/**
 * Render daftar item dengan meng-clone <template> lalu mengisi tiap clone.
 * `listSelector` menunjuk container, `tplSelector` menunjuk <template> berisi 1 item.
 */
export function renderList<T extends Data>(
	listSelector: string,
	tplSelector: string,
	items: T[],
	fill?: (node: HTMLElement, item: T, index: number) => void,
): void {
	const list = document.querySelector(listSelector);
	const tpl = document.querySelector<HTMLTemplateElement>(tplSelector);
	if (!list || !tpl || !tpl.content.firstElementChild) return;

	list.innerHTML = '';
	items.forEach((item, index) => {
		const node = tpl.content.firstElementChild!.cloneNode(true) as HTMLElement;
		bind(node, item);
		fill?.(node, item, index);
		reveal(node);
		list.appendChild(node);
	});
}

// Node hasil clone ditambahkan setelah IntersectionObserver reveal berjalan,
// jadi langsung tandai terlihat agar tidak tersembunyi (opacity:0 dari data-reveal).
function reveal(node: HTMLElement): void {
	if (node.hasAttribute('data-reveal')) node.classList.add('is-visible');
	node.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
}

/** Baca nilai query string dari URL saat ini. */
export function queryParam(name: string): string | null {
	return new URLSearchParams(window.location.search).get(name);
}
