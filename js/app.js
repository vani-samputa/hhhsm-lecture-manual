import { stripDiacritics, debounce, by, unique } from './utils.js';
import { cardTemplate } from './components/card.js';
import { lectures } from './lectures-data.js';

// App state
const state = {
    raw: [],
    filtered: [],
    page: 1,
    perPage: 12,
    sorts: {
        'code-asc': (a, b) => by('code', 'asc')(a, b),
        'code-desc': (a, b) => by('code', 'desc')(a, b),
        'title-asc': (a, b) => by('title_key', 'asc')(a, b),
        'title-desc': (a, b) => by('title_key', 'desc')(a, b),
    }
};

// Derive series from title
function deriveSeries(title = '') {
    const t = title.trim();
    const match = t.match(/^(BG|SB|CC|NOD|NOI|Europe Tour|Vyasa Puja|Hari-katha|Bhagavad|Bhakti|Lecture)/i);
    if (match) {
        return match[0]
            .replace('BG', 'Bhagavad-gītā')
            .replace('SB', 'Śrīmad-Bhāgavatam')
            .replace('CC', 'Śrī Caitanya-caritāmṛta');
    }
    return 'General';
}

// Normalize record
function normalizeRecord(record) {
    const title = record.title_latn || record.title_en || record.title || '';
    const original = record.title_original || '';
    const series = record.series || deriveSeries(title);
    const code = String(record.code || '').padStart(4, '0');

    return {
        ...record,
        code,
        title_latn: title,
        title_original: original,
        series,
        _q: stripDiacritics([code, title, original].join(' ')),
        title_key: stripDiacritics(title),
    };
}

// Load and initialize data
function loadData() {
    state.raw = lectures.map(normalizeRecord).sort(state.sorts['code-asc']);
    populateFilters();
    applyFilters();
    renderAll();
}

// Populate filter dropdowns
function populateFilters() {
    const languageSelect = document.getElementById('languageFilter');
    const seriesSelect = document.getElementById('seriesFilter');

    const languages = unique(state.raw.map(x => x.language)).sort();
    const series = unique(state.raw.map(x => x.series)).sort();

    // Clear existing options except the first "All" option
    languageSelect.innerHTML = '<option value="">All Languages</option>';
    seriesSelect.innerHTML = '<option value="">All Series</option>';

    languages.forEach(lang => {
        const option = document.createElement('option');
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
    });

    series.forEach(ser => {
        const option = document.createElement('option');
        option.value = ser;
        option.textContent = ser;
        seriesSelect.appendChild(option);
    });
}

// Apply filters and search
function applyFilters() {
    const query = stripDiacritics(document.getElementById('searchInput').value.trim());
    const language = document.getElementById('languageFilter').value;
    const seriesFilter = document.getElementById('seriesFilter').value;
    const sortValue = document.getElementById('sortFilter').value;
    const sorter = state.sorts[sortValue] || state.sorts['code-asc'];

    let filtered = state.raw.slice();

    if (language) filtered = filtered.filter(x => x.language === language);
    if (seriesFilter) filtered = filtered.filter(x => x.series === seriesFilter);
    if (query) filtered = filtered.filter(x => x._q.includes(query));

    filtered.sort(sorter);
    state.filtered = filtered;
    state.page = 1;
}

// Render grid
function renderGrid() {
    const grid = document.getElementById('grid');
    const emptyState = document.getElementById('emptyState');

    const start = (state.page - 1) * state.perPage;
    const end = start + state.perPage;
    const pageItems = state.filtered.slice(start, end);

    grid.innerHTML = '';

    if (pageItems.length === 0) {
        emptyState.classList.add('visible');
        grid.style.display = 'none';
    } else {
        emptyState.classList.remove('visible');
        grid.style.display = 'grid';

        const fragment = document.createDocumentFragment();
        pageItems.forEach(lecture => {
            fragment.appendChild(cardTemplate(lecture));
        });
        grid.appendChild(fragment);
    }
}

// Render pagination
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(state.filtered.length / state.perPage);

    pagination.innerHTML = '';

    if (totalPages <= 1) return;

    const makeBtn = (label, page, disabled = false, current = false) => {
        const btn = document.createElement('button');
        btn.className = 'page-btn';
        btn.textContent = label;
        if (current) btn.setAttribute('aria-current', 'page');
        btn.disabled = disabled;
        btn.addEventListener('click', () => {
            state.page = page;
            renderAll();
        });
        return btn;
    };

    // Previous button
    pagination.appendChild(makeBtn('← Prev', Math.max(1, state.page - 1), state.page === 1));

    // Page numbers
    const startPage = Math.max(1, state.page - 2);
    const endPage = Math.min(totalPages, startPage + 4);

    for (let i = startPage; i <= endPage; i++) {
        pagination.appendChild(makeBtn(String(i), i, false, i === state.page));
    }

    // Next button
    pagination.appendChild(makeBtn('Next →', Math.min(totalPages, state.page + 1), state.page === totalPages));
}

// Update stats
function renderCount() {
    const stats = document.getElementById('stats');
    const total = state.filtered.length;
    const start = (state.page - 1) * state.perPage + 1;
    const end = Math.min(state.page * state.perPage, total);

    if (total === 0) {
        stats.textContent = 'No lectures found';
    } else {
        stats.textContent = `Showing ${start}-${end} of ${total} lectures`;
    }
}

// Main render function
function renderAll() {
    renderGrid();
    renderPagination();
    renderCount();
}

// Setup event listeners
function wireControls() {
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');
    const languageFilter = document.getElementById('languageFilter');
    const seriesFilter = document.getElementById('seriesFilter');
    const sortFilter = document.getElementById('sortFilter');
    const filtersToggle = document.getElementById('filtersToggle');
    const filtersContent = document.getElementById('filtersContent');
    const filtersIcon = document.getElementById('filtersIcon');
    const themeToggle = document.getElementById('themeToggle');

    // Search functionality
    const debouncedSearch = debounce(() => {
        applyFilters();
        renderAll();
    }, 300);

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        clearSearch.classList.toggle('visible', value.length > 0);
        debouncedSearch();
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        clearSearch.classList.remove('visible');
        searchInput.focus();
        applyFilters();
        renderAll();
    });

    // Filter changes
    const onChange = debounce(() => {
        applyFilters();
        renderAll();
    }, 120);

    languageFilter.addEventListener('change', onChange);
    seriesFilter.addEventListener('change', onChange);
    sortFilter.addEventListener('change', onChange);

    // Filters toggle
    filtersToggle.addEventListener('click', () => {
        const isOpen = filtersContent.classList.toggle('open');
        filtersIcon.textContent = isOpen ? '▲' : '▼';
    });

    // Theme toggle
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') root.classList.add('dark');

    themeToggle.addEventListener('click', () => {
        root.classList.toggle('dark');
        localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });

    // Auto-focus search on mobile
    if (window.innerWidth <= 768) {
        setTimeout(() => searchInput.focus(), 100);
    }
}

// Initialize app
function start() {
    loadData();
    wireControls();
}

// Start the app
start();