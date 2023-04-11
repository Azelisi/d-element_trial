import {openModal, closeModal} from '../utils/modal';
import {modalMessage, modalSuccess} from '../modules/init-modals';

const closeBtn = modalSuccess.querySelector('.modal__close-btn');

const validateForm = () => {
  const form = document.querySelector('form');
  const errorClass = 'form__field--error';

  if (form) {
    const submitBtn = form.querySelector('button[type=submit]');
    const inputs = form.querySelectorAll('input');
    const nameInput = document.querySelector('input[name="name"]');
    const phoneInput = document.querySelector('input[name="email"]');

    submitBtn.addEventListener('click', (evt) => {
      inputs.forEach((element) => {
        if (!element.validity.valid) {
          element.parentElement.classList.add(errorClass);
        } else {
          element.parentElement.classList.remove(errorClass);
          evt.preventDefault();
          if (nameInput.validity.valid && phoneInput.validity.valid) {
            if (modalMessage.classList.contains('modal--active')) {
              closeModal(modalMessage);
            }
            form.submit();
            openModal(modalSuccess);
            closeBtn.addEventListener('click', () => {
              closeModal(modalSuccess);
            })
          }
        }
      });
    });

    inputs.forEach((element) => {
      element.addEventListener('input', () => {
        if (element.validity.valid) {
          element.parentElement.classList.remove(errorClass);
        }
      });
    });
  }
};

export {validateForm};
