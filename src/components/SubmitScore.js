'use strict';

import ComponentBase from './ComponentBase';
import emailValidator from 'email-validator';

class SubmitScore extends ComponentBase {
  constructor() {
    super('submit-score-modal');

    this.nameInput = this.container.querySelector('input[name=name]');
    this.emailInput = this.container.querySelector('input[name=email]');
    this.submitScore = this.container.querySelector('.submit-score');
    this.submitScoreCloseBtn = this.submitScore.querySelector('.close-btn');
    this.submitScoreSubmitBtn = this.submitScore.querySelector('.submit-btn');
    this.notHigher = this.container.querySelector('.not-higher');
    this.notHighersubmitScoreCloseBtn = this.notHigher.querySelector('.close-btn');
    this.saving = this.container.querySelector('.saving');

    this.nameInput.addEventListener('input', this.validateInput.bind(this));
    this.emailInput.addEventListener('input', this.validateInput.bind(this));

    this.submitScoreCloseBtn.addEventListener('click', this.hide.bind(this));
    this.submitScoreSubmitBtn.addEventListener('click', this.submit.bind(this));
    this.notHighersubmitScoreCloseBtn.addEventListener('click', this.closeNotHigher.bind(this));
  }

  show (score) {
    this.score = score;

    if (window.localStorage) {
      this.nameInput.value = window.localStorage.getItem('submit-score-name') || '';
      this.emailInput.value = window.localStorage.getItem('submit-score-email') || '';
    }

    if (this.enabled) {
      this.nameInput.removeAttribute('disabled');
      this.emailInput.removeAttribute('disabled');
    } else {
      this.nameInput.setAttribute('disabled', true);
      this.emailInput.setAttribute('disabled', true);
    }
    this.validateInput();
    this.submitScore.classList.add('active');
    super.show();
  }

  hide () {
    this.submitScore.classList.remove('active');
    window.submitScoreClosed();
    super.hide();
  }

  closeNotHigher () {
    this.notHigher.classList.remove('active');
  }

  validateInput () {
    const nameIsValid = this.nameInput.value.length > 2;
    const emailIsValid = emailValidator.validate(this.emailInput.value);

    if (window.localStorage) {
      window.localStorage.setItem('submit-score-name', this.nameInput.value);
      window.localStorage.setItem('submit-score-email', this.emailInput.value);
    }

    if (nameIsValid && emailIsValid && this.enabled) {
      this.submitScoreSubmitBtn.removeAttribute('disabled');
    } else  {
      this.submitScoreSubmitBtn.setAttribute('disabled', true);
    }
  }

  submit (score) {
    const onSubmitComplete = () => {
      this.saving.classList.remove('active');
      this.hide();
    };
    console.log('Submitting');
    this.enabled = false;
    this.submitScore.classList.remove('active');

    window.ga('send', 'event', 'buttons', 'click', 'submit-score');

    if (this.portalAPI) {
      this.saving.classList.add('active');

      try {
        let userId = window.localStorage && window.localStorage.getItem(this.nameInput.value + '-' + this.emailInput.value + '-id');

        const submitScore = () => {
          this.portalAPI.CallMethod('GetUserActivityStatus', {
            idUser: userId,
            idActivity: window.activityId,
            xmlScormData: ''
          }, true, (response) => {
            if ((!response.responseJSON) || (!response.responseJSON.d)) {
              onSubmitComplete();
              return;
            }
            // Only submit the score if it's better than their last score
            const score = parseInt(response.responseJSON.d.resultInfo.score, 10) || 0;

            if (window.debug) {
              alert('score found: ' + score);
            }

            if (this.score > score) {
              this.portalAPI.CallMethod('UpdateUserActivityStatusWithArchive', {
                  idUser: userId,
                  idActivity: window.activityId,
                  nameStatus: 'Completed',
                  nScore: this.score + '',
                  xmlScormData: ''
                }, true, (response) => {

                  if (window.debug) {
                    alert('score updated: ' + JSON.stringify(response));
                  }
                  console.log('score updated: ' + JSON.stringify(response));
                  onSubmitComplete();
                  window.submitScoreComplete();
                }
              );
            } else {
              onSubmitComplete();

              this.notHigher.classList.add('active');
              window.submitScoreComplete();
            }
          });
        };
        if (!userId) {
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
              onSubmitComplete();
              return;
            }
            userId = response.responseJSON.d.users.userInfo[0].id;
            if (window.localStorage) {
              window.localStorage.setItem(this.nameInput.value + '-' + this.emailInput.value + '-id', userId);
            }

            if (window.debug) {
              alert('user id created: ' + userId);
            }

            submitScore();
          });
        } else {
          if (window.debug) {
            alert('matching user id found: ' + userId);
          }

          submitScore();
        }
      } catch (e) {
        onSubmitComplete();
      }
    } else {
      onSubmitComplete();
    }
  }
}

export default SubmitScore
