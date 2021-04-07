  (() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnAuth: document.querySelector('[data-modal-open-auth]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    closeModalBtnAuth: document.querySelector('[data-modal-close-auth]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnAuth.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtnAuth.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

})();
