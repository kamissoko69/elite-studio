const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const dateInput = document.querySelector('#booking-date');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
dateInput.min = localToday;

const filters = document.querySelectorAll('.filter');
const galleryItems = document.querySelectorAll('.gallery-item');
filters.forEach(filter => filter.addEventListener('click', () => {
  filters.forEach(button => button.classList.toggle('active', button === filter));
  const category = filter.dataset.filter;
  galleryItems.forEach(item => item.classList.toggle('hidden', category !== 'all' && item.dataset.category !== category));
}));

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
galleryItems.forEach(item => item.addEventListener('click', () => {
  const image = item.querySelector('img');
  lightboxImage.src = item.dataset.full || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = item.querySelector('span').textContent.replace('↗', '').trim();
  lightbox.showModal();
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

document.querySelector('#booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const error = document.querySelector('#form-error');
  const name = String(data.get('name') || '').trim();
  const phone = String(data.get('phone') || '').trim();
  const service = String(data.get('service') || '').trim();
  if (!name || !phone || !service) {
    error.textContent = 'Veuillez renseigner votre nom, votre téléphone et la prestation souhaitée.';
    return;
  }
  error.textContent = '';
  const lines = [
    'Bonjour Élite Studio ! Je souhaite demander un rendez-vous.',
    '',
    `Nom : ${name}`,
    `Téléphone : ${phone}`,
    `Prestation : ${service}`,
    `Date souhaitée : ${data.get('date') || 'À convenir'}`,
    `Disponibilité : ${data.get('time') || 'À convenir'}`,
    `Détails : ${String(data.get('details') || '').trim() || 'Aucun détail supplémentaire'}`,
    '',
    'Merci de me confirmer vos disponibilités et le tarif final.'
  ];
  const url = 'https://wa.me/22370540190?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank', 'noopener,noreferrer');
});
