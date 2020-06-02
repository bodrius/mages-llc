const choiseButton = document.querySelectorAll('.js_button');
const modal = document.querySelector('.success-modal');
const arrayButton = Array.from(choiseButton);

function showOrderModal(arr) {
  arr.map(button =>
    button.addEventListener('click', () =>
      modal.classList.add('success-modal__open'),
    ),
  );
}
showOrderModal(arrayButton);

const closeBtn = document.querySelector('.succes-modal__closeBtn');
closeBtn.addEventListener('click', closeModalPressBtn);
function closeModalPressBtn() {
  modal.classList.remove('success-modal__open');
}

const backDrop = document.querySelector('.success-modal__backdrop');
backDrop.addEventListener("click", closeModalPressBackdrop)
function closeModalPressBackdrop(e){
  if (e.target === e.currentTarget) {
    modal.classList.remove('success-modal__open');
  }
}
