export function cardTemplate(doc) {
    const tpl = document.getElementById('card-template');
    const node = tpl.content.cloneNode(true);

    node.querySelector('.code').textContent = `Code ${doc.code}`;
    node.querySelector('.title').textContent = doc.title_latn || doc.title || '';
    node.querySelector('.original').textContent = doc.title_original || '';

    node.querySelector('.badge.lang').textContent = doc.language || '—';
    node.querySelector('.badge.series').textContent = doc.series || 'General';

    return node;
}
