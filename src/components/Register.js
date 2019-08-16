'use strict';

import ComponentBase from './ComponentBase';
import emailValidator from 'email-validator';

class Register extends ComponentBase {
  constructor() {
    super('register-modal');

    this.nameInput = this.container.querySelector('input[name=name]');
    this.emailInput = this.container.querySelector('input[name=email]');
    this.registerContainer = this.container.querySelector('.register');
    this.closeBtn = this.registerContainer.querySelector('.close-btn');
    this.registerBtn = this.registerContainer.querySelector('.register-btn');
    this.saving = this.container.querySelector('.saving');

    this.nameInput.addEventListener('input', this.validateInput.bind(this));
    this.emailInput.addEventListener('input', this.validateInput.bind(this));

    this.closeBtn.addEventListener('click', this.hide.bind(this));
    this.registerBtn.addEventListener('click', this.register.bind(this));
  }

  show () {
    if (window.localStorage) {
      this.nameInput.value = window.localStorage.getItem('submit-score-name') || '';
      this.emailInput.value = window.localStorage.getItem('submit-score-email') || '';
    }

    this.validateInput();
    this.registerContainer.classList.add('active');
    super.show();
  }

  hide () {
    this.registerContainer.classList.remove('active');
    this.saving.classList.remove('active');
    super.hide();
  }

  validateInput () {
    const nameIsValid = this.nameInput.value.length > 2;
    const emailIsValid = emailValidator.validate(this.emailInput.value);

    if (window.localStorage) {
      window.localStorage.setItem('submit-score-name', this.nameInput.value);
      window.localStorage.setItem('submit-score-email', this.emailInput.value);
    }

    if (nameIsValid && emailIsValid) {
      this.registerBtn.removeAttribute('disabled');
    } else  {
      this.registerBtn.setAttribute('disabled', true);
    }
  }

  register () {
    const onRegisterComplete = () => {
      this.saving.classList.remove('active');
    };

    this.registerContainer.classList.remove('active');

    window.ga('send', 'event', 'buttons', 'click', 'register-to-win');

    if (this.portalAPI) {
      this.saving.classList.add('active');

      try {
        let dataCreateUpdateUserFromJson = {
             firstName: this.nameInput.value,
             lastName: ' ',
             email: this.emailInput.value
        };

        this.portalAPI.CallMethod('CreateUpdateUserFromJson', {
          jsonData: JSON.stringify(dataCreateUpdateUserFromJson)
        },
        true, (response) => {
          if ((!response.responseJSON) || (!response.responseJSON.d)) {
            onRegisterComplete();
            return;
          }
          if (window.localStorage) {
            const userId = response.responseJSON.d.users.userInfo[0].id;
            window.localStorage.setItem(this.nameInput.value + '-' + this.emailInput.value + '-id', userId);

            if (window.debug) {
              alert('Pre-registered with user id: ' + userId);
            }

          }
          onRegisterComplete();
        });

      } catch (e) {
        onRegisterComplete();
      }
    } else {
      onRegisterComplete();
    }
  }
}

export default Register
