export function cardTemplate(doc) {
    const card = document.createElement('article');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-code">Code ${doc.code}</div>
      <h3 class="card-title">${doc.title_latn || doc.title || 'Untitled'}</h3>
      <p class="card-original">${doc.title_original || ''}</p>
      <div class="card-meta">
        <span class="badge language">${doc.language || '—'}</span>
        <span class="badge">${doc.series || 'General'}</span>
      </div>
    `;

    return card;
}