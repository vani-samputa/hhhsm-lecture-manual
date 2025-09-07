import { stripDiacritics, debounce, by, unique } from './utils.js';
import { cardTemplate } from './components/card.js';
import { lectures } from './lectures-data.js';

const state = {
    raw: [],
    filtered: [],
    page: 1,
    perPage: 24,
    sorts: {
        'code-asc': (a, b) => by('code', 'asc')(a, b),
        'code-desc': (a, b) => by('code', 'desc')(a, b),
        'title-asc': (a, b) => by('title_key', 'asc')(a, b),
        'title-desc': (a, b) => by('title_key', 'desc')(a, b),
    }
};

function deriveSeries(title = '') {
    const t = title.trim();
    const m = t.match(/^(BG|SB|CC|NOD|NOI|Europe Tour|Vyasa Puja|Hari-katha|Bhagavad|Bhakti|Lecture)/i);
    return m ? m[0]
        .replace('BG', 'Bhagavad-gītā')
        .replace('SB', 'Śrīmad-Bhāgavatam')
        .replace('CC', 'Śrī Caitanya-caritāmṛta')
        : 'General';
}

function normalizeRecord(r) {
    const title = r.title_latn || r.title_en || r.title || '';
    const original = r.title_original || '';
    const series = r.series || deriveSeries(title);
    const code = String(r.code || '').padStart(4, '0');
    return {
        ...r,
        code,
        title_latn: title,
        title_original: original,
        series,
        _q: stripDiacritics([code, title, original].join(' ')),
        title_key: stripDiacritics(title),
    };
}

// ⬇️ No fetch — just load from the imported array
function loadData() {
    state.raw = lectures.map(normalizeRecord).sort(state.sorts['code-asc']);
}

function populateFilters() {
    const languageSel = document.getElementById('language');
    const scriptureSel = document.getElementById('scripture');

    const langs = unique(state.raw.map(x => x.language)).sort();
    const series = unique(state.raw.map(x => x.series)).sort();

    for (const l of langs) {
        const o = document.createElement('option'); o.value = l; o.textContent = l;
        languageSel.appendChild(o);
    }
    for (const s of series) {
        const o = document.createElement('option'); o.value = s; o.textContent = s;
        scriptureSel.appendChild(o);
    }
}

function applyFilters() {
    const q = stripDiacritics(document.getElementById('search').value.trim());
    const L = document.getElementById('language').value;
    const S = document.getElementById('scripture').value;
    const sortVal = document.getElementById('sort').value;
    const sorter = state.sorts[sortVal] || state.sorts['code-asc'];

    let arr = state.raw.slice();
    if (L) arr = arr.filter(x => x.language === L);
    if (S) arr = arr.filter(x => x.series === S);
    if (q) arr = arr.filter(x => x._q.includes(q));

    arr.sort(sorter);
    state.filtered = arr;
    state.page = 1;
}

function renderCount() {
    const el = document.getElementById('count');
    el.textContent = `Showing ${Math.min(state.filtered.length, state.perPage)} of ${state.filtered.length} lectures`;
}

function renderGrid() {
    const grid = document.getElementById('grid');
    grid.setAttribute('aria-busy', 'true');
    grid.innerHTML = '';

    const start = (state.page - 1) * state.perPage;
    const slice = state.filtered.slice(start, start + state.perPage);

    const frag = document.createDocumentFragment();
    for (const doc of slice) frag.appendChild(cardTemplate(doc));
    grid.appendChild(frag);
    grid.setAttribute('aria-busy', 'false');
}

function renderPagination() {
    const pag = document.getElementById('pagination');
    pag.innerHTML = '';
    const total = Math.max(1, Math.ceil(state.filtered.length / state.perPage));

    const makeBtn = (label, page, disabled = false, current = false) => {
        const b = document.createElement('button');
        b.className = 'page-btn';
        b.textContent = label;
        if (current) b.setAttribute('aria-current', 'page');
        b.disabled = disabled;
        b.addEventListener('click', () => { state.page = page; renderGrid(); renderPagination(); });
        return b;
    };

    pag.appendChild(makeBtn('« Prev', Math.max(1, state.page - 1), state.page === 1));
    const startPage = Math.max(1, state.page - 4);
    const endPage = Math.min(total, startPage + 8);
    for (let i = startPage; i <= endPage; i++) pag.appendChild(makeBtn(String(i), i, false, i === state.page));
    pag.appendChild(makeBtn('Next »', Math.min(total, state.page + 1), state.page === total));
}

function wireControls() {
    const onChange = debounce(() => { applyFilters(); renderCount(); renderGrid(); renderPagination(); }, 120);
    document.getElementById('search').addEventListener('input', onChange);
    document.getElementById('language').addEventListener('change', onChange);
    document.getElementById('scripture').addEventListener('change', onChange);
    document.getElementById('sort').addEventListener('change', onChange);

    const toggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') root.classList.add('dark');
    toggle.addEventListener('click', () => {
        root.classList.toggle('dark');
        localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
}

function start() {
    loadData();
    populateFilters();
    applyFilters();
    renderCount();
    renderGrid();
    renderPagination();
    wireControls();
}

start();
