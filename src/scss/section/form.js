const choiseButton = document.querySelectorAll('.js_button');
// const closeBtn = document.querySelector('.create-order__close-btn');
// closeBtn.addEventListener('click', closeOrderModal);
const arrayButton = Array.from(choiseButton);
let orderForm = document.querySelector('#js_form');

// function closeOrderModal() {
//   orderForm.classList.add('togleModal');
// }

function showOrderModal(arr) {
  arr.map(button =>
    button.addEventListener('click', () =>
      orderForm.classList.remove('togleModal'),
    ),
  );
}

showOrderModal(arrayButton);

//
// succes modal
//

const doneModal = document.querySelector('.success-modal');
const choiseSendBtn = document.querySelector('.js__btnSend');
const choiseBtnCloseSucces = document.querySelector('.success-modal__close');
const choiseBackDrop = document.querySelector('.success-modal__backdrop');
choiseSendBtn.addEventListener('click', showSuccesModal);

orderForm.style.disabled = 'true';
const obj = orderForm.elements;

function showSuccesModal() {
}

function closeSuccesModal() {
  doneModal.classList.remove('success-modal__open');
  choiseBtnCloseSucces.removeEventListener('click', closeSuccesModal);
}

function closeSuccesModalBackdrop(e) {
  if (e.target === e.currentTarget) {
    doneModal.classList.remove('success-modal__open');
    choiseBackDrop.removeEventListener('click', closeSuccesModalBackdrop);
  }
}

