'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const openModal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

const closeModal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
