'use strict';

import ComponentBase from './ComponentBase';

class Share extends ComponentBase {
  constructor() {
    super('share-modal');

    this.gameURL = (window.location.href.indexOf('file:/') > -1 || window.location.href.indexOf('://localhost') > -1)
        ? 'https://3esuperhero.yourcoursewarehosting.com/thomson_reuters/resources/courses/game/index.html'
        : window.location.href.split('?', 1)[0].split('#', 1)[0];

        // URL must include reference to the index html page otherwise
        // open graph parser won't find the page
      if (this.gameURL.indexOf('index.html') < 0) {
        if (this.gameURL.charAt(this.gameURL.length - 1) !== '/') {
          this.gameURL += '/';
        }
        this.gameURL += 'index.html';
      }

    this.shareContainer = this.container.querySelector('.share-area');

    this.shareScoreCloseBtn = this.shareContainer.querySelector('.close-btn');
    this.shareScoreCloseBtn.addEventListener('click', this.hide.bind(this));

    this.facebookBtn = this.shareContainer.querySelector('.facebook');
    this.twitterBtn = this.shareContainer.querySelector('.twitter');
    this.linkedinBtn = this.shareContainer.querySelector('.linkedin');

    this.facebookBtn.addEventListener('click', this.shareFacebook.bind(this));
    this.twitterBtn.addEventListener('click', this.shareTwitter.bind(this));
    this.linkedinBtn.addEventListener('click', this.shareLinkedin.bind(this));
  }

  show () {
    this.shareContainer.classList.add('active');
    super.show();
  }

  hide () {
    this.shareContainer.classList.remove('active');
   // window.submitScoreClosed();
    super.hide();
  }


  shareFacebook () {
      window.ga('send', 'event', 'buttons', 'click', 'share-facebook');
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + this.gameURL, '_blank');
  }

  shareTwitter () {
      window.ga('send', 'event', 'buttons', 'click', 'share-twitter');
      window.open('https://twitter.com/intent/tweet?url=' + this.gameURL, '_blank');
  }

  shareLinkedin () {
      window.ga('send', 'event', 'buttons', 'click', 'share-linkedin');
      window.open('https://www.linkedin.com/shareArticle?url=' + this.gameURL, '_blank');
  }
}

export default Share
