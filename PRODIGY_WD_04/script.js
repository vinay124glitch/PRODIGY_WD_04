// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Reveal animation on scroll
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Modal Image Viewer
const certImages = [
  'images/british(ds).jpg',
  'images/tata(Gen AI).jpg',
  'images/acccenture(software).jpg',
  'images/data_vis(tata).jpg',
  'images/javascript.jpg',
  'images/Deloitte(data Analy).jpg'
];

const expImages = [
  'images/cognifyz.jpg',
  'images/mindenious.jpg',
  'images/python.jpg',
  'images/hunsa_C.jpg'
];

let currentIndex = 0;
let currentType = 'cert'; // or 'experience'

function openModal(index, type) {
  const modal = document.getElementById('modal');
  const img = document.getElementById('modal-image');
  const download = document.getElementById('downloadBtn');

  currentIndex = index;
  currentType = type;

  const source = type === 'cert' ? certImages : expImages;

  img.src = source[currentIndex];
  download.href = source[currentIndex];

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function nextImage() {
  const source = currentType === 'cert' ? certImages : expImages;
  currentIndex = (currentIndex + 1) % source.length;
  updateModalImage(source);
}

function prevImage() {
  const source = currentType === 'cert' ? certImages : expImages;
  currentIndex = (currentIndex - 1 + source.length) % source.length;
  updateModalImage(source);
}

function updateModalImage(source) {
  const img = document.getElementById('modal-image');
  const download = document.getElementById('downloadBtn');

  img.src = source[currentIndex];
  download.href = source[currentIndex];
}

// Optional: Close modal with Escape key
document.addEventListener('keydown', e => {
  const modal = document.getElementById('modal');
  if (modal.style.display === 'flex') {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  }
});
