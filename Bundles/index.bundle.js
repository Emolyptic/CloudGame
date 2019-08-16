webpackJsonp([0],{

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentBase = function () {
	function ComponentBase(id) {
		_classCallCheck(this, ComponentBase);

		this.container = document.getElementById(id);
	}

	_createClass(ComponentBase, [{
		key: 'show',
		value: function show() {
			this.container.style.display = 'block';
		}
	}, {
		key: 'hide',
		value: function hide() {
			delete this.container.style.display;
		}
	}]);

	return ComponentBase;
}();

/* harmony default export */ __webpack_exports__["a"] = (ComponentBase);

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(560);
module.exports = __webpack_require__(762);


/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Register__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SubmitScore__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Share__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_phaser__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(1407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_query_string__ = __webpack_require__(1408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_load_script__ = __webpack_require__(1411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_load_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_load_script__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









// jQuery is required for the portal api
window.$ = __WEBPACK_IMPORTED_MODULE_4_jquery___default.a;
window.jQuery = __WEBPACK_IMPORTED_MODULE_4_jquery___default.a;

var Base = function (_Phaser$Scene) {
    _inherits(Base, _Phaser$Scene);

    function Base() {
        _classCallCheck(this, Base);

        return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, 'Base'));
    }

    _createClass(Base, [{
        key: 'create',
        value: function create() {
            window.addEventListener('resize', function (event) {

                //game.resize(window.innerWidth, window.innerHeight);
                //this.resize(window.innerWidth, window.innerHeight);
            }, false);
            //this.events.on('resize', resize, this);
            this.scene.launch('StartScreen');

            //this.scene.add(StartScreen);
        }
    }, {
        key: 'resize',
        value: function resize(width, height) {
            if (width === undefined) {
                width = this.sys.game.config.width;
            }
            if (height === undefined) {
                height = this.sys.game.config.height;
            }

            //this.cameras.resize(width, height);

            //this.bg.setDisplaySize(width, height);
            // this.logo.setPosition(width / 2, height / 2);
        }
    }]);

    return Base;
}(__WEBPACK_IMPORTED_MODULE_3_phaser___default.a.Scene);

var StartScreen = function (_Phaser$Scene2) {
    _inherits(StartScreen, _Phaser$Scene2);

    function StartScreen() {
        _classCallCheck(this, StartScreen);

        var _this2 = _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).call(this, 'StartScreen'));

        _this2.soundOn = true;
        return _this2;
    }

    _createClass(StartScreen, [{
        key: 'preload',
        value: function preload() {
            console.log('Start Screen this.game.soundON:', this.soundOn);
            this.load.image('background', 'assets/start_screen.jpg');

            this.load.image('play_btn', 'assets/play_button.png');
            this.load.image('share_btn', 'assets/Play_friends_button.png');
            this.load.image('E3_btn', 'assets/E3_in_Action_button.png');

            this.load.atlas('audio_img', 'assets/Audio_on_off.png', 'assets/Audio_on_off.json');

            this.load.image('logo', 'assets/Reuters_logo.png');

            this.load.image('border', 'assets/Orange_boarder.png');

            this.load.image('sound_btn', 'assets/sound.png');

            this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

            this.load.audio('loopMusic', ['assets/audio/background.wav']);
        }
    }, {
        key: 'create',
        value: function create() {
            this.background = this.add.tileSprite(0, 0, 640, 960, 'background').setOrigin(0);

            this.logo = this.add.image(135, 50, 'logo').setOrigin(0);

            this.playText = this.add.text(190, 450, 'Welcome to', { fontFamily: 'Arial', fontSize: '50px', fill: '#fff', fontWeight: '700' });
            this.playText = this.add.text(50, 500, '3E in the Cloud game', { fontFamily: 'Arial', fontSize: '55px', fill: '#fff', fontWeight: 'bolder' });

            this.soundBtn = this.add.image(325, 625, 'audio_img', 'on');
            //this.soundBtn = this.add.image(150,600, 'sound_btn').setOrigin(0);
            this.soundBtn.setInteractive();
            this.soundBtn.on('pointerdown', function () {
                this.soundOn = !this.soundOn;
                if (this.soundOn) {
                    this.soundBtn.setFrame('on');
                    loopMusic.play('loop', {
                        delay: 0
                    });
                } else {
                    this.soundBtn.setFrame('off');
                    loopMusic.pause();
                }
            }, this);

            //this.createButton(1, 'MainGame', 'Play','play_btn', 80, 650);
            this.playBtn = this.add.image(80, 690, 'play_btn').setOrigin(0);
            this.playBtn.setInteractive();
            this.playBtn.on('pointerdown', function () {
                this.setActiveScene('MainGame');
            }, this);
            this.playText = this.add.text(290, 700, 'Play', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight: '700' });

            //this.createButton(1, '', 'Share with Friends', 'share_btn', 80,730);
            this.shareBtn = this.add.image(80, 770, 'share_btn').setOrigin(0);
            this.shareBtn.setInteractive();
            this.shareBtn.on('pointerdown', function () {
                game.share();
            }, this);
            this.shareText = this.add.text(160, 780, 'Share with Friends', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight: '700' });

            //this.createButton(1, '', 'SEe 3E in action', 'E3_btn', 80, 810);
            this.E3Button = this.add.image(80, 850, 'E3_btn').setOrigin(0);
            this.E3Button.setInteractive();
            this.E3Button.on('pointerdown', function () {
                window.open('http://www.elite.com/3e/', '_blank');
            }, this);
            this.EText = this.add.text(180, 860, 'See 3E in action', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight: '700' });

            var loopMusic = this.sound.add('loopMusic');
            var loopMarker = {
                name: 'loop',
                start: 0,
                duration: 104,
                config: {
                    loop: true
                }
            };
            loopMusic.addMarker(loopMarker);

            // Delay option can only be passed in config
            loopMusic.play('loop', {
                delay: 0
            });
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'createButton',
        value: function createButton(id, scene, name, button, x, y) {
            var btn = this.add.image(x, y, button).setOrigin(0);

            btn.setInteractive();

            btn.setData('id', id);
            btn.setData('scene', scene);
            btn.setData('name', name);
            btn.setData('active', false);

            btn.on('pointerover', function () {

                // if (!this.getData('active'))
                // {
                //     this.setFrame('button-over');
                // }

            });

            btn.on('pointerout', function () {

                // if (this.getData('active'))
                // {
                //     this.setFrame('button-down');
                // }
                // else
                // {
                //     this.setFrame('button-out');
                // }

            });

            btn.on('pointerdown', function () {

                // if (!btn.getData('active'))
                // {
                this.setActiveScene(scene);
                // }
            }, this);

            this['button' + id] = btn;
        }
    }, {
        key: 'shareFacebook',
        value: function shareFacebook() {
            window.ga('send', 'event', 'buttons', 'click', 'share-facebook');
            window.open('https://www.facebook.com/sharer/sharer.php?u=' + this.gameURL, '_blank');
        }
    }, {
        key: 'shareTwitter',
        value: function shareTwitter() {
            window.ga('send', 'event', 'buttons', 'click', 'share-twitter');
            window.open('https://twitter.com/intent/tweet?url=' + this.gameURL, '_blank');
        }
    }, {
        key: 'shareLinkedin',
        value: function shareLinkedin() {
            window.ga('send', 'event', 'buttons', 'click', 'share-linkedin');
            window.open('https://www.linkedin.com/shareArticle?url=' + this.gameURL, '_blank');
        }
    }, {
        key: 'openElite',
        value: function openElite() {
            //window.ga('send', 'event', 'buttons', 'click', 'learn-3E');
            //window.open(this.data.learnLink, '_blank');
        }
    }, {
        key: 'setActiveScene',
        value: function setActiveScene(scene) {
            this.scene.start(scene, { soundOn: this.soundOn });
        }
    }]);

    return StartScreen;
}(__WEBPACK_IMPORTED_MODULE_3_phaser___default.a.Scene);

var MainGame = function (_Phaser$Scene3) {
    _inherits(MainGame, _Phaser$Scene3);

    function MainGame() {
        _classCallCheck(this, MainGame);

        var _this3 = _possibleConstructorReturn(this, (MainGame.__proto__ || Object.getPrototypeOf(MainGame)).call(this, 'MainGame'));

        _this3.savedScore = 0;
        _this3.reset();
        _this3.tileHeight = 200;
        _this3.tileWidth = 180;

        return _this3;
    }

    _createClass(MainGame, [{
        key: 'reset',
        value: function reset() {
            this.velocity = 6;
            this.velocityGain = .01;
            //How often the velocity goes up in ms
            this.velocityInterval = 200;
            //How much interval goes up at the end of the next level
            this.velocityIntervalGain = -1;
            //Each new level starts at Level value* this.newLevelVelocity
            this.newLevelVelocity = .5;
            //when Slowdown is done it replaced what was slowed down divided by this variable.
            this.slowDownDivisor = .9;
            this.slowdownDelay = 8000; // How long the slow lasts in milliseconds.

            // How often do Icons drop
            this.iconRate = 20;

            //Level when two tiles will show up
            this.twoTileThreshold = 5;
            this.twoTilePercentChance = 30;

            //Level when three tiles will show up
            this.threeTileThreshold = 15;
            this.threeTilePercentChance = 20;

            //It takes 100% and form 0 to cloudThreshold then from cT to heartThreshold then from hT to 100 is the Trophy chance.
            this.cloudThreshold = 40;
            this.heartThreshold = 80;

            //Starting Life
            this.lifeCount = 2;
            this.lifeText = 0;

            //Containers for objects on Screen
            this.life = [];
            this.balloons = [];
            this.tiles = [];
            this.powerups = [];
            this.boost = [];

            //Score holders
            this.scoreText = 0;
            this.scoreNumber = 0;
            this.scoreCount = 0;
            this.minusScore = 0;

            this.tileCount = 0;
            this.nextLevelThreshold = 35;
            this.nextLevelAdded = 10; // This gets add the next Level Threshold each level
            this.trophyThreshold = 30; //How many Tiles clicked until trophy will appear
            this.trophyScoreThreshold = 1000;

            // times by level and added to current trophyScoreThreshold
            this.trophyScoreLevelAdditive = 100;

            this.powerupCount = 0;
            this.positiveRate = 30; //in percentage
            this.selectedPerRow = 1;

            this.boostCount = 0;

            this.moving = true;
            this.introPause = true;
            this.slowed = false;

            //current level
            this.level = 1;
            this.levelBlankInterval = 0;
        }
    }, {
        key: 'setActiveScene',
        value: function setActiveScene(scene) {
            this.scene.start(scene, { score: this.savedScore });
            //this.scene.start('demo', { id: 2, image: 'babar-pym-wait.png' });
        }
    }, {
        key: 'preload',
        value: function preload() {

            //Load all the Image assets
            this.load.image('background_game', 'assets/Background_NOclouds.jpg');
            this.load.image('window', 'assets/3ECloud_game_Cloud_frame.png');

            this.load.image('boost_empty', 'assets/Life_bar_grey.png');
            this.load.image('boost_full', 'assets/Life_bar_orange.png');

            this.load.image('health_full', 'assets/Health_small_red.png');
            this.load.image('health_empty', 'assets/Helath_small_grey.png');

            this.load.image('border', 'assets/Orange_boarder.png');
            this.load.atlas('tile', 'assets/SpriteSheet_04.png', 'assets/Sprite_sheet_3.json');

            this.load.image('intro', 'assets/BlueIntro_withtext_box.png');
            this.load.image('level_banner', 'assets/Level_box.png');
            this.load.image('E3', 'assets/E3_smlogo.png');

            //Load all the Audio assets
            //Click orangle Tile
            this.load.audio('click', ['assets/audio/bell.mp3']);
            //CLick White Tile
            this.load.audio('badClick', ['assets/audio/donk2.mp3']);
            //Click Green TIle
            this.load.audio('powerup', ['assets/audio/cha-ching.mp3']);
            //CLick Red Tile
            this.load.audio('powerdown', ['assets/audio/gong1.mp3']);
            //Health Up
            this.load.audio('health', ['assets/audio/1up.mp3']);
            //Slow down
            this.load.audio('slow', ['assets/audio/powerup.mp3']);
            //Level Up
            this.load.audio('level', ['assets/audio/1up.mp3']);
            //Boost Full
            this.load.audio('drop', ['assets/audio/1up.mp3']);
        }
    }, {
        key: 'create',
        value: function create(data) {
            //Set Background
            this.background = this.add.tileSprite(0, 0, 640, 960, 'background_game').setOrigin(0);
            this.soundOn = data.soundOn;
            //Create Tiles
            for (var i = 0; i < 6; i++) {
                this.createLevelStart(i);
                //this.createRow(i);
            }

            //Add foreground and border
            this.foreground = this.add.tileSprite(0, 0, 640, 960, 'window').setOrigin(0);
            this.border = this.add.image(23, 90, 'border').setOrigin(0);

            //Add Life Counter
            for (var y = 0; y < 3; y++) {
                var heart = this.add.image(15 + y * 32, 45, 'health_full').setOrigin(0);
                this.life.push(heart);
            }

            //Add Score Text
            this.scoreText = this.add.text(300, 15, 'Score', { fontFamily: 'Arial', fontSize: '24px', fill: '#fff' });
            this.scoreNumber = this.add.text(300, 45, this.scoreCount, { fontFamily: 'Arial', fontSize: '24px', fill: '#fff' });

            //Add Life Text
            this.lifeText = this.add.text(20, 15, 'Life', { fontFamily: 'Arial', fontSize: '24px', fill: '#fff' });

            //Add Boost
            this.boostLogo = this.add.image(490, 15, 'E3').setOrigin(0);
            this.boostText = this.add.text(550, 15, 'Boost', { fontFamily: 'Arial', fontSize: '24px', fill: '#fff' });
            for (var x = 0; x < 4; x++) {
                var boost = this.add.image(475 + x * 35, 50, 'boost_full').setOrigin(0);
                boost.tint = 0x999999;
                this.boost.push(boost);
            }

            //Level Banner
            this.levelBack = this.add.image(150, 710, 'level_banner').setOrigin(0);
            this.levelText = this.add.text(290, 710, 'Level ' + this.level, { fontFamily: 'Arial', fontSize: '20px', fill: '#fff' });

            //Add Intro Graphics
            this.intro = this.add.image(65, 140, 'intro').setOrigin(0);
            this.playBtn = this.add.image(80, 690, 'play_btn').setOrigin(0);
            this.playBtn.setInteractive();
            this.playBtn.on('pointerdown', function () {
                var _this4 = this;

                this.intro.destroy();
                this.playBtn.destroy();
                this.playText.destroy();
                this.introPause = false;
                this.setVelocity();

                this.time.delayedCall(1000, function () {
                    _this4.levelBack.alpha = 0;
                }, [], this);
                this.time.delayedCall(1000, function () {
                    _this4.levelText.alpha = 0;
                }, [], this);
            }, this);
            this.playText = this.add.text(290, 700, 'Start', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight: '700' });
        }
    }, {
        key: 'setVelocity',
        value: function setVelocity() {
            var _this5 = this;

            //looping function that increases the Velocity
            console.log('hit');
            this.time.delayedCall(this.velocityInterval, function () {
                _this5.velocity += _this5.velocityGain;
                if (_this5.moving) {
                    _this5.setVelocity();
                }
            }, [], this);
        }
    }, {
        key: 'loseLife',
        value: function loseLife() {
            this.lifeCount--;
            if (this.lifeCount >= -1) {
                this.life[this.lifeCount + 1].tint = 0x000000;
            } else {
                this.moving = false;
                //Reset for Play Again Feature
                this.savedScore = this.scoreCount;
                this.reset();
                this.setActiveScene('GameOver');
            }
        }
    }, {
        key: 'increaseLife',
        value: function increaseLife() {
            if (this.lifeCount >= 2) {
                return;
            }
            this.lifeCount++;
            this.life[this.lifeCount].tint = 0xffffff;
        }
    }, {
        key: 'increaseBoost',
        value: function increaseBoost() {
            var clickSound = this.sound.add('drop');

            if (this.boostCount <= 3 && this.boostCount >= 0) {
                this.boost[this.boostCount].tint = 0xffffff;
            }

            this.boostCount++;

            if (this.boostCount >= 4) {
                if (this.soundOn) clickSound.play();
                this.boostDrop = true;
            }
        }
    }, {
        key: 'decreaseBoost',
        value: function decreaseBoost() {
            this.boostCount--;
            if (this.boostCount >= 0) {
                this.boost[this.boostCount].tint = 0x999999;
            }
        }
    }, {
        key: 'increaseScore',
        value: function increaseScore() {
            var score = 10 * this.level;
            this.scoreCount += score;
            this.scoreNumber.setText(this.scoreCount);
        }
    }, {
        key: 'decreaseScore',
        value: function decreaseScore() {
            var score = 10 * this.level;
            this.minusScore += score;
            this.scoreCount -= score;
            this.scoreNumber.setText(this.scoreCount);
        }
    }, {
        key: 'increaseLevel',
        value: function increaseLevel() {
            var _this6 = this;

            this.moving = false;
            this.levelBlankInterval = 5;
            ///
            // RESET ALL TILES AND SET THEM
            //
            // for(var i = 0; i < this.tiles.length; i++)
            // {
            //     for (var x = 0; x < this.tiles[i].length; x++)
            //     {
            //         this.tweens.add({
            //             targets: this.tiles[i][x],
            //             alpha: 0,
            //             ease: 'Power1',
            //             duration:200,
            //         })
            //     }
            // }
            // this.time.delayedCall(200, ()=>{
            //     for(var i = 0; i < this.tiles.length; i++)
            //     {
            //         for (var x = 0; x < this.tiles[i].length; x++)
            //         {
            //             this.tiles[i][x].x = this.tiles[i][x].initialX;
            //             this.tiles[i][x].y = this.tiles[i][x].initialY;
            //             this.tweens.add({
            //                 targets: this.tiles[i][x],
            //                 alpha: 1,
            //                 ease: 'Power1',
            //                 duration:300,
            //             })
            //         }
            //         this.rowReset(i);
            //     }
            //         }, [], this);

            //Set Score to full level
            this.scoreCount = this.nextLevelThreshold * (10 * this.level);
            //This is to account for the bad tiles hit
            this.scoreCount -= this.minusScore;

            this.scoreNumber.setText(this.scoreCount);

            //Reset Tile Count and increase the next level Threshold
            this.tileCount = 0;
            this.nextLevelThreshold += this.nextLevelAdded * this.level;

            //Fade new 'level' in stuff in.
            this.level++;
            this.levelText.setText('Level ' + this.level);

            this.time.delayedCall(2000, function () {
                _this6.levelBack.alpha = 1;
            }, [], this);
            this.time.delayedCall(2000, function () {
                _this6.levelText.alpha = 1;
            }, [], this);

            this.time.delayedCall(4000, function () {
                _this6.levelBack.alpha = 0;
            }, [], this);
            this.time.delayedCall(4000, function () {
                _this6.levelText.alpha = 0;
            }, [], this);
            //this.velocity = this.level * this.newLevelVelocity;
            //this.velocityInterval += this.velocityIntervalGain;

        }
    }, {
        key: 'slowGame',
        value: function slowGame() {
            var _this7 = this;

            if (!this.slowed) {
                this.slowed = true;
                var subtract = this.velocity / 2;
                this.velocity = subtract;
                this.time.delayedCall(this.slowdownDelay, function () {
                    _this7.velocity += subtract / _this7.slowDownDivisor;
                    _this7.slowed = false;
                }, [], this);
            }
        }
    }, {
        key: 'selectTile',
        value: function selectTile(tile, row, ind) {
            var _this8 = this;

            if (this.introPause) return;

            //Starting the game
            // if(!this.moving)
            // {
            //     this.moving = true;
            //     //Set Velocity
            //     this.setVelocity();
            // }
            //Sound
            var clickSound = this.sound.add('click');

            var downSound = this.sound.add('powerdown');
            var badClickSound = this.sound.add('badClick');
            var upSound = this.sound.add('powerup');
            var healthSound = this.sound.add('health');
            var slowSound = this.sound.add('slow');
            var levelSound = this.sound.add('level');

            //Mark Tile as hit
            tile.hit = true;

            //If it has a icon on it
            if (tile.selected) {
                //set animation
                tile.setFrame('orange');
                this.tileCount++;

                //if it's a red Tile
                if (tile.bad) {
                    if (this.soundOn) downSound.play();
                    this.decreaseScore();
                    this.decreaseBoost();
                }
                //else if it's a green tile
                else {
                        //Effect based on what tile is hit
                        switch (tile.icon) {
                            case 1:
                            case 2:
                            case 3:
                                if (this.soundOn) upSound.play();
                                this.increaseBoost();
                                break;

                            case 10:
                                if (this.soundOn) slowSound.play();
                                this.powerupAnimation(tile, row, ind, '3E_anim');
                                this.slowGame();
                                break;
                            case 12:
                                if (this.soundOn) levelSound.play();
                                this.powerupAnimation(tile, row, ind, 'trophy_anim');
                                this.time.delayedCall(300, function () {
                                    _this8.increaseLevel();
                                }, [], this);

                                break;
                            case 11:
                                if (this.soundOn) healthSound.play();
                                this.powerupAnimation(tile, row, ind, 'orange_heart_anim');
                                this.increaseLife();
                                break;
                            default:
                                if (this.soundOn) clickSound.play();
                                break;

                        }
                        this.increaseScore();
                        if (this.tileCount >= this.nextLevelThreshold && tile.icon !== 12) {
                            this.increaseLevel();
                        }
                    }
            } else {
                tile.tint = 0xff0000;
                this.loseLife();
                if (this.soundOn) badClickSound.play();
            }
            //CLICK ANIMATION
            this.tweens.add({
                targets: tile,
                alpha: 0,
                ease: 'Power1',
                duration: 300
            });
            //Make Blank Tile
            this.time.delayedCall(300, function () {
                tile.setFrame('blank');
                tile.tint = 0xffffff;
            }, [], this);

            //Turn into normal tile
            tile.selected = false;

            this.tweens.add({
                targets: tile,
                alpha: 1,
                ease: 'Power3',
                delay: 300,
                duration: 200
            });
        }
    }, {
        key: 'powerupAnimation',
        value: function powerupAnimation(tile, row, ind, frame) {
            console.log("frame", frame);
            //create new tile at location
            var tile_anim = this.add.image(tile.x + this.tileWidth / 2, tile.y + this.tileHeight / 2, 'tile', frame);
            //Animation to make grow and fade
            this.tweens.add({
                targets: tile_anim,
                alpha: 0,
                ease: 'Power1',
                duration: 600,
                scaleX: '+=.6',
                scaleY: '+=.6'
            });
        }
    }, {
        key: 'createLevelStart',
        value: function createLevelStart(row) {
            var tempRow = [];
            for (var i = 0; i < 3; i++) {
                var tile = this.add.image(48 + i * this.tileWidth, -270 + row * this.tileHeight, 'tile', 'blank').setInteractive();

                tile.initialX = 48 + i * this.tileWidth;
                tile.initialY = -270 + row * this.tileHeight;
                tile.bad = false;
                tile.hit = false;
                tile.icon = 0;
                tile.selected = false;

                tile.setFrame('blank');

                tile.setDisplayOrigin(0, 0);

                tile.on('pointerdown', this.selectTile.bind(this, tile, row, i));

                tempRow.push(tile);
            }
            this.tiles.push(tempRow);
        }
    }, {
        key: 'createRow',
        value: function createRow(row) {
            var randomTile = Math.floor(Math.random() * 2);
            console.log('randomTile ', randomTile);
            var tempRow = [];
            for (var i = 0; i < 3; i++) {
                var selected = randomTile === i;
                var tile = this.add.image(48 + i * this.tileWidth, -270 + row * this.tileHeight, 'tile', 'blank').setInteractive();

                tile.initialX = 48 + i * this.tileWidth;
                tile.initialY = -270 + row * this.tileHeight;
                tile.bad = false;
                tile.hit = false;
                tile.icon = 0;
                tile.selected = selected;

                if (selected) {
                    this.chooseIcon(tile, i, row);
                } else {

                    tile.setFrame('blank');
                }

                tile.setDisplayOrigin(0, 0);

                tile.on('pointerdown', this.selectTile.bind(this, tile, row, i));

                tempRow.push(tile);
            }
            this.tiles.push(tempRow);
        }
    }, {
        key: 'chooseIcon',
        value: function chooseIcon(tile, i, row) {

            if (this.boostDrop) {
                this.boostDrop = false;
                var randomPowerUp = Math.floor(Math.random() * 100);
                var chosenPowerUp = '';
                switch (true) {
                    case randomPowerUp < this.cloudThreshold:
                        chosenPowerUp = '3E';
                        tile.icon = 10;
                        break;
                    case randomPowerUp < this.heartThreshold:
                        chosenPowerUp = 'orange_heart';
                        tile.icon = 11;
                        break;
                    default:
                        if (this.tileCount >= this.trophyThreshold) {
                            chosenPowerUp = 'trophy';
                            tile.icon = 12;
                        } else {
                            chosenPowerUp = '3E';
                            tile.icon = 10;
                        }
                        break;

                }
                tile.setFrame(chosenPowerUp);

                this.boostCount -= 4;

                for (var y = 3; y >= this.boostCount; y--) {
                    this.boost[y].tint = 0x999999;
                }
            } else {
                var randomTile = Math.floor(Math.random() * 4);
                var badChance = Math.floor(Math.random() * 100);
                var iconChance = Math.floor(Math.random() * 100);
                var randBlank = Math.floor(Math.random() * 4);

                var chosenIcon = '';
                tile.bad = false;
                if (iconChance < this.iconRate) {

                    if (badChance < this.positiveRate) {
                        tile.bad = true;
                    }
                    if (tile.bad && randomTile !== 3) {
                        switch (randomTile) {
                            case 0:
                                chosenIcon = 'red_file';
                                tile.icon = -1;
                                break;
                            case 1:
                                chosenIcon = 'red_money';
                                tile.icon = -2;
                                break;
                            case 2:
                                chosenIcon = 'red_clock';
                                tile.icon = -3;
                                break;
                            default:
                                chosenIcon = 'red_file';
                                tile.icon = -1;
                                break;
                        }
                    } else {
                        tile.bad = false;
                        switch (randomTile) {
                            case 0:
                                chosenIcon = 'green_file';
                                tile.icon = 1;
                                break;
                            case 1:
                                chosenIcon = 'green_money';
                                tile.icon = 2;
                                break;
                            case 2:
                                chosenIcon = 'green_clock';
                                tile.icon = 3;
                                break;
                            case 3:
                                chosenIcon = 'blank_' + randBlank.toString();
                                //chosenIcon = 'blank';
                                tile.icon = 0;
                                break;
                            default:
                                chosenIcon = 'blank_' + randBlank.toString();
                                //chosenIcon = 'blank';
                                tile.icon = 0;
                                break;
                        }
                    }
                } else {
                    chosenIcon = 'blank_' + randBlank.toString();
                    tile.icon = 0;
                }
                tile.setFrame(chosenIcon);
            }
        }
    }, {
        key: 'rowReset',
        value: function rowReset(r) {
            //Get Random selected Tiles
            var randomTile = Math.floor(Math.random() * 3);
            var randomTile2 = Math.floor(Math.random() * 3);
            var randomTile3 = Math.floor(Math.random() * 3);

            //Get a random percentage for the second and third tile
            var randomTile2Chance = Math.floor(Math.random() * 100);
            var randomTile3Chance = Math.floor(Math.random() * 100);

            for (var i = 0; i < this.tiles[r].length; i++) {
                //this.tiles[r][i].tint = ;
                this.tiles[r][i].setFrame('blank');
                this.tiles[r][i].bad = false;
                this.tiles[r][i].hit = false;
                this.tiles[r][i].icon = 0;
                this.tiles[r][i].alpha = 1;

                //Add start of level
                if (this.levelBlankInterval !== 0) {
                    this.tiles[r][i].selected = false;
                } else {
                    if (randomTile === i) {
                        this.tiles[r][i].selected = true;
                        this.chooseIcon(this.tiles[r][i]);
                    }
                    //If you've hit threshold level and the not a duplicate tile and you've met the set Percentage
                    else if (randomTile2 === i && this.level > this.twoTileThreshold && randomTile2 !== randomTile && randomTile2Chance < this.twoTilePercentChance) {
                            this.tiles[r][i].selected = true;
                            this.chooseIcon(this.tiles[r][i]);
                        } else if (randomTile3 === i && this.level > this.threeTileThreshold && randomTile3 !== randomTile && randomTile3 !== randomTile2 && randomTile3Chance < this.threeTilePercentChance) {
                            this.tiles[r][i].selected = true;
                            this.chooseIcon(this.tiles[r][i]);
                        }
                        //create blank tile
                        else {
                                this.tiles[r][i].selected = false;
                            }
                }
            }
            if (this.levelBlankInterval > 0) this.levelBlankInterval--;
        }
    }, {
        key: 'update',
        value: function update() {
            if (this.moving && !this.introPause) {
                var rowReset = false;
                try {
                    for (var i = 0; i < this.tiles.length; i++) {
                        for (var q = 0; q < this.tiles[i].length; q++) {
                            //If Past the end of the screen.
                            if (this.tiles[i][q].y >= 950) {
                                var topRow = i + 1;
                                if (topRow > 5) {
                                    topRow = 0;
                                }

                                //NO IDEA BUT IT WORKS DON"T TOUCH IT
                                //MOVING TO TOP!
                                if (topRow === 0) {
                                    this.tiles[i][q].y = this.tiles[topRow][0].y - (this.tileHeight + 1 * this.velocity); //- 268;
                                } else {
                                    this.tiles[i][q].y = this.tiles[topRow][0].y - this.tileHeight; //- 268;
                                }
                                //make tile tint white
                                this.tiles[i][q].tint = 0xffffff;
                                //make row reset after done with loop
                                rowReset = true;
                                //If you missed a good tile
                                if (this.tiles[i][q].selected === true && this.tiles[i][q].hit === false) {
                                    if (!this.tiles[i][q].bad) {
                                        this.loseLife();
                                    }
                                }
                            }
                            //Move Tile
                            try {
                                this.tiles[i][q].y += this.velocity;
                            } catch (err) {}
                        }
                        //Reset Row selections
                        if (rowReset) {
                            rowReset = false;
                            this.rowReset(i);
                        }
                    }
                } catch (err) {}
            }
        }
    }]);

    return MainGame;
}(__WEBPACK_IMPORTED_MODULE_3_phaser___default.a.Scene);

var GameOver = function (_Phaser$Scene4) {
    _inherits(GameOver, _Phaser$Scene4);

    function GameOver() {
        _classCallCheck(this, GameOver);

        return _possibleConstructorReturn(this, (GameOver.__proto__ || Object.getPrototypeOf(GameOver)).call(this, 'GameOver'));
    }

    _createClass(GameOver, [{
        key: 'init',
        value: function init(data) {
            this.score = data.score;
            if (!this.highscore) {
                this.highscore = 0;
            }
            if (this.score > this.highscore) {
                this.highscore = this.score;
            }
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.load.image('background', 'assets/start_screen.jpg');

            this.load.image('play_btn', 'assets/play_button.png');
            this.load.image('share_btn', 'assets/Play_friends_button.png');
            this.load.image('E3_btn', 'assets/E3_in_Action_button.png');

            this.load.image('logo', 'assets/Reuters_logo.png');

            this.load.image('border', 'assets/Orange_boarder.png');

            this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        }
    }, {
        key: 'create',
        value: function create() {
            var _this10 = this;

            this.background = this.add.tileSprite(0, 0, 640, 960, 'background').setOrigin(0);

            //this.logo = this.add.image(135,50,'logo').setOrigin(0);

            this.gameOverText = this.add.text(135, 100, 'Game Over!', { fontFamily: 'Arial', fontSize: '60px', fill: '#EC7E30', fontWeight: '700' });
            this.playText = this.add.text(70, 205, 'Your Score: ' + this.score, { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight: '700' });
            this.bestText = this.add.text(70, 255, 'Your Best Score: ' + this.highscore, { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight: '700' });
            //this.playText = this.add.text(290,500,this.score, { fontFamily: 'Arial', fontSize: '65px', fill: '#fff', fontWeight:'bolder'});
            this.leaderboardTop = this.add.graphics();
            this.leaderboardTop.fillStyle(0xEC7E30, 1);
            this.leaderboardTop.fillRect(65, 315, 525, 60);
            this.topScoreText = this.add.text(90, 330, 'Top Scores', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight: '700' });

            this.leaderOne = this.add.graphics();
            this.leaderOne.fillStyle(0xDEDEDE, 1);
            this.leaderOne.fillRect(65, 376, 525, 60);
            this.leaderOneText = this.add.text(90, 391, '', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight: '700' });
            this.leaderOneScoreText = this.add.text(490, 391, '', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight: '700' });

            this.leaderTwo = this.add.graphics();
            this.leaderTwo.fillStyle(0xDEDEDE, 1);
            this.leaderTwo.fillRect(65, 437, 525, 60);
            this.leaderTwoText = this.add.text(90, 452, '', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight: '700' });
            this.leaderTwoScoreText = this.add.text(490, 452, '', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight: '700' });

            this.leaderThree = this.add.graphics();
            this.leaderThree.fillStyle(0xDEDEDE, 1);
            this.leaderThree.fillRect(65, 498, 525, 60);
            this.leaderThreeText = this.add.text(90, 513, '', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight: '700' });
            this.leaderThreeScoreText = this.add.text(490, 513, '', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight: '700' });

            game.onGameOver();
            game.register();

            //this.createButton(1, 'MainGame', 'Play','play_btn', 80, 650);
            this.submitBtn = this.add.image(80, 610, 'play_btn').setOrigin(0);
            this.submitBtn.setInteractive();
            this.submitBtn.on('pointerdown', function () {
                game.submitScore(this.score);
            }, this);
            this.submitText = this.add.text(260, 620, 'Submit', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight: '700' });

            this.playBtn = this.add.image(80, 690, 'play_btn').setOrigin(0);
            this.playBtn.setInteractive();
            this.playBtn.on('pointerdown', function () {
                this.setActiveScene('StartScreen');
            }, this);
            this.playText = this.add.text(240, 700, 'Play Again', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight: '700' });

            //this.createButton(1, '', 'Share with Friends', 'share_btn', 80,730);
            this.shareBtn = this.add.image(80, 770, 'share_btn').setOrigin(0);
            this.shareBtn.setInteractive();
            this.shareBtn.on('pointerdown', function () {
                //game.submitScore(this.score);
                game.share();
            }, this);
            this.shareText = this.add.text(160, 780, 'Share with Friends', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight: '700' });

            //this.createButton(1, '', 'SEe 3E in action', 'E3_btn', 80, 810);
            this.E3Button = this.add.image(80, 850, 'E3_btn').setOrigin(0);
            this.E3Button.setInteractive();
            this.E3Button.on('pointerdown', function () {
                window.open('http://www.elite.com/3e/', '_blank');
            }, this);
            this.EText = this.add.text(180, 860, 'See 3E in action', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight: '700' });

            __WEBPACK_IMPORTED_MODULE_4_jquery___default.a.ajax({
                type: 'GET',
                url: 'https://3esuperhero.yourcoursewarehosting.com/data/json/report/ActivityLeaderboard?activity=' + window.activityId + '&count=10',
                async: true,
                data: {},
                beforeSend: function beforeSend(xhr) {
                    xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(unescape(encodeURIComponent('reports:@llen123!'))));
                }
            }).done(function (data) {

                console.log('top ten scores', data);

                _this10.populate(data);
            });

            window.submitScoreComplete = function () {
                console.log('try to submit');
                //if (window.localStorage) {
                //let submittedName = window.localStorage.getItem('submit-score-name') || '';
                //console.log('submittedName: ', submittedName);
                //this.score;
                //this.highscoreData;
                __WEBPACK_IMPORTED_MODULE_4_jquery___default.a.ajax({
                    type: 'GET',
                    url: 'https://3esuperhero.yourcoursewarehosting.com/data/json/report/ActivityLeaderboard?activity=' + window.activityId + '&count=10',
                    async: true,
                    data: {},
                    beforeSend: function beforeSend(xhr) {
                        xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(unescape(encodeURIComponent('reports:@llen123!'))));
                    }
                }).done(function (data) {

                    console.log('top ten scores', data);

                    _this10.populate(data);
                });
            };

            window.submitScoreClosed = function () {};
        }
    }, {
        key: 'populate',
        value: function populate(data) {
            this.highscoreData = data;

            if (data.length > 0 && data[0].first_name !== 'System') this.leaderOneText.setText(data[0].first_name || 'Zero');
            if (data.length > 1 && data[1].first_name !== 'System') this.leaderTwoText.setText(data[1].first_name);
            if (data.length > 2 && data[2].first_name !== 'System') this.leaderThreeText.setText(data[2].first_name);
            if (data.length > 0 && data[0].first_name !== 'System') this.leaderOneScoreText.setText(data[0].score || '1');
            if (data.length > 1 && data[1].first_name !== 'System') this.leaderTwoScoreText.setText(data[1].score || '2');
            if (data.length > 2 && data[2].first_name !== 'System') this.leaderThreeScoreText.setText(data[2].score || '3');
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'createButton',
        value: function createButton(id, scene, name, button, x, y) {
            var btn = this.add.image(x, y, button).setOrigin(0);

            btn.setInteractive();

            btn.setData('id', id);
            btn.setData('scene', scene);
            btn.setData('name', name);
            btn.setData('active', false);

            btn.on('pointerover', function () {

                // if (!this.getData('active'))
                // {
                //     this.setFrame('button-over');
                // }

            });

            btn.on('pointerout', function () {

                // if (this.getData('active'))
                // {
                //     this.setFrame('button-down');
                // }
                // else
                // {
                //     this.setFrame('button-out');
                // }

            });

            btn.on('pointerdown', function () {

                // if (!btn.getData('active'))
                // {
                this.setActiveScene(scene);
                // }
            }, this);

            this['button' + id] = btn;
        }
    }, {
        key: 'setActiveScene',
        value: function setActiveScene(scene) {
            this.scene.start(scene);
        }
    }]);

    return GameOver;
}(__WEBPACK_IMPORTED_MODULE_3_phaser___default.a.Scene);

var config = {
    type: __WEBPACK_IMPORTED_MODULE_3_phaser___default.a.AUTO,
    width: 640,
    height: 960,
    physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: 200 }
        }
    },
    scene: [Base, StartScreen, MainGame, GameOver]
};

var CloudGame = function (_Phaser$Game) {
    _inherits(CloudGame, _Phaser$Game);

    function CloudGame(config) {
        _classCallCheck(this, CloudGame);

        var _this11 = _possibleConstructorReturn(this, (CloudGame.__proto__ || Object.getPrototypeOf(CloudGame)).call(this, config));

        var parsed = __WEBPACK_IMPORTED_MODULE_5_query_string___default.a.parse(window.location.search);
        parsed.api_javascript = parsed.api_javascript || 'https://3esuperhero.yourcoursewarehosting.com/core/script/PortalAPI.js';
        parsed.api = parsed.api || 'https://3esuperhero.yourcoursewarehosting.com/core/PortalAPI.asmx';
        _this11.loadPortalAPI(parsed);

        window.activityId = parsed.activity || 'GAME';

        _this11.registerComponent = new __WEBPACK_IMPORTED_MODULE_0__components_Register__["a" /* default */]();
        _this11.submitScoreComponent = new __WEBPACK_IMPORTED_MODULE_1__components_SubmitScore__["a" /* default */]();
        _this11.shareComponent = new __WEBPACK_IMPORTED_MODULE_2__components_Share__["a" /* default */]();
        return _this11;
    }

    _createClass(CloudGame, [{
        key: 'loadPortalAPI',
        value: function loadPortalAPI(data) {
            var _this12 = this;

            var attemptsRemaining = 5;
            var attemptLoad = function attemptLoad() {
                if (attemptsRemaining > 0) {
                    attemptsRemaining--;
                    __WEBPACK_IMPORTED_MODULE_6_load_script___default()(data.api_javascript, function (error, script) {
                        if (error) {
                            console.error(error);
                            console.log('attempting portal api load ' + attemptsRemaining + ' remaining');
                            attemptLoad();
                        } else {
                            _this12.initializePortalAPI(data);
                        }
                    });
                }
            };
            attemptLoad();
        }
    }, {
        key: 'initializePortalAPI',
        value: function initializePortalAPI(data) {
            var _this13 = this;

            var attemptsRemaining = 5;
            var attemptInitialize = function attemptInitialize() {
                if (attemptsRemaining > 0) {
                    attemptsRemaining--;
                    try {
                        _this13.portalAPI = _this13.registerComponent.portalAPI = _this13.submitScoreComponent.portalAPI = new window.PortalWebService(data.api, 'gameApp');
                    } catch (error) {
                        console.error(error);
                        console.log('attempting portal api load ' + attemptsRemaining + ' remaining');
                        attemptInitialize();
                    }
                }
            };
            attemptInitialize();
        }
    }, {
        key: 'register',
        value: function register() {
            this.registerComponent.show();
        }
    }, {
        key: 'share',
        value: function share() {
            this.shareComponent.show();
        }
    }, {
        key: 'submitScore',
        value: function submitScore(score) {
            this.submitScoreComponent.show(score);
        }
    }, {
        key: 'onGameOver',
        value: function onGameOver() {
            this.submitScoreComponent.enabled = true;
        }
    }]);

    return CloudGame;
}(__WEBPACK_IMPORTED_MODULE_3_phaser___default.a.Game);

var game = new CloudGame(config);

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ComponentBase__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_email_validator__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Register = function (_ComponentBase) {
  _inherits(Register, _ComponentBase);

  function Register() {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, 'register-modal'));

    _this.nameInput = _this.container.querySelector('input[name=name]');
    _this.emailInput = _this.container.querySelector('input[name=email]');
    _this.registerContainer = _this.container.querySelector('.register');
    _this.closeBtn = _this.registerContainer.querySelector('.close-btn');
    _this.registerBtn = _this.registerContainer.querySelector('.register-btn');
    _this.saving = _this.container.querySelector('.saving');

    _this.nameInput.addEventListener('input', _this.validateInput.bind(_this));
    _this.emailInput.addEventListener('input', _this.validateInput.bind(_this));

    _this.closeBtn.addEventListener('click', _this.hide.bind(_this));
    _this.registerBtn.addEventListener('click', _this.register.bind(_this));
    return _this;
  }

  _createClass(Register, [{
    key: 'show',
    value: function show() {
      if (window.localStorage) {
        this.nameInput.value = window.localStorage.getItem('submit-score-name') || '';
        this.emailInput.value = window.localStorage.getItem('submit-score-email') || '';
      }

      this.validateInput();
      this.registerContainer.classList.add('active');
      _get(Register.prototype.__proto__ || Object.getPrototypeOf(Register.prototype), 'show', this).call(this);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.registerContainer.classList.remove('active');
      this.saving.classList.remove('active');
      _get(Register.prototype.__proto__ || Object.getPrototypeOf(Register.prototype), 'hide', this).call(this);
    }
  }, {
    key: 'validateInput',
    value: function validateInput() {
      var nameIsValid = this.nameInput.value.length > 2;
      var emailIsValid = __WEBPACK_IMPORTED_MODULE_1_email_validator___default.a.validate(this.emailInput.value);

      if (window.localStorage) {
        window.localStorage.setItem('submit-score-name', this.nameInput.value);
        window.localStorage.setItem('submit-score-email', this.emailInput.value);
      }

      if (nameIsValid && emailIsValid) {
        this.registerBtn.removeAttribute('disabled');
      } else {
        this.registerBtn.setAttribute('disabled', true);
      }
    }
  }, {
    key: 'register',
    value: function register() {
      var _this2 = this;

      var onRegisterComplete = function onRegisterComplete() {
        _this2.saving.classList.remove('active');
      };

      this.registerContainer.classList.remove('active');

      window.ga('send', 'event', 'buttons', 'click', 'register-to-win');

      if (this.portalAPI) {
        this.saving.classList.add('active');

        try {
          var dataCreateUpdateUserFromJson = {
            firstName: this.nameInput.value,
            lastName: ' ',
            email: this.emailInput.value
          };

          this.portalAPI.CallMethod('CreateUpdateUserFromJson', {
            jsonData: JSON.stringify(dataCreateUpdateUserFromJson)
          }, true, function (response) {
            if (!response.responseJSON || !response.responseJSON.d) {
              onRegisterComplete();
              return;
            }
            if (window.localStorage) {
              var userId = response.responseJSON.d.users.userInfo[0].id;
              window.localStorage.setItem(_this2.nameInput.value + '-' + _this2.emailInput.value + '-id', userId);

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
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_0__ComponentBase__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Register);

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ComponentBase__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_email_validator__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var SubmitScore = function (_ComponentBase) {
  _inherits(SubmitScore, _ComponentBase);

  function SubmitScore() {
    _classCallCheck(this, SubmitScore);

    var _this = _possibleConstructorReturn(this, (SubmitScore.__proto__ || Object.getPrototypeOf(SubmitScore)).call(this, 'submit-score-modal'));

    _this.nameInput = _this.container.querySelector('input[name=name]');
    _this.emailInput = _this.container.querySelector('input[name=email]');
    _this.submitScore = _this.container.querySelector('.submit-score');
    _this.submitScoreCloseBtn = _this.submitScore.querySelector('.close-btn');
    _this.submitScoreSubmitBtn = _this.submitScore.querySelector('.submit-btn');
    _this.notHigher = _this.container.querySelector('.not-higher');
    _this.notHighersubmitScoreCloseBtn = _this.notHigher.querySelector('.close-btn');
    _this.saving = _this.container.querySelector('.saving');

    _this.nameInput.addEventListener('input', _this.validateInput.bind(_this));
    _this.emailInput.addEventListener('input', _this.validateInput.bind(_this));

    _this.submitScoreCloseBtn.addEventListener('click', _this.hide.bind(_this));
    _this.submitScoreSubmitBtn.addEventListener('click', _this.submit.bind(_this));
    _this.notHighersubmitScoreCloseBtn.addEventListener('click', _this.closeNotHigher.bind(_this));
    return _this;
  }

  _createClass(SubmitScore, [{
    key: 'show',
    value: function show(score) {
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
      _get(SubmitScore.prototype.__proto__ || Object.getPrototypeOf(SubmitScore.prototype), 'show', this).call(this);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.submitScore.classList.remove('active');
      window.submitScoreClosed();
      _get(SubmitScore.prototype.__proto__ || Object.getPrototypeOf(SubmitScore.prototype), 'hide', this).call(this);
    }
  }, {
    key: 'closeNotHigher',
    value: function closeNotHigher() {
      this.notHigher.classList.remove('active');
    }
  }, {
    key: 'validateInput',
    value: function validateInput() {
      var nameIsValid = this.nameInput.value.length > 2;
      var emailIsValid = __WEBPACK_IMPORTED_MODULE_1_email_validator___default.a.validate(this.emailInput.value);

      if (window.localStorage) {
        window.localStorage.setItem('submit-score-name', this.nameInput.value);
        window.localStorage.setItem('submit-score-email', this.emailInput.value);
      }

      if (nameIsValid && emailIsValid && this.enabled) {
        this.submitScoreSubmitBtn.removeAttribute('disabled');
      } else {
        this.submitScoreSubmitBtn.setAttribute('disabled', true);
      }
    }
  }, {
    key: 'submit',
    value: function submit(score) {
      var _this2 = this;

      var onSubmitComplete = function onSubmitComplete() {
        _this2.saving.classList.remove('active');
        _this2.hide();
      };
      console.log('Submitting');
      this.enabled = false;
      this.submitScore.classList.remove('active');

      window.ga('send', 'event', 'buttons', 'click', 'submit-score');

      if (this.portalAPI) {
        this.saving.classList.add('active');

        try {
          var userId = window.localStorage && window.localStorage.getItem(this.nameInput.value + '-' + this.emailInput.value + '-id');

          var submitScore = function submitScore() {
            _this2.portalAPI.CallMethod('GetUserActivityStatus', {
              idUser: userId,
              idActivity: window.activityId,
              xmlScormData: ''
            }, true, function (response) {
              if (!response.responseJSON || !response.responseJSON.d) {
                onSubmitComplete();
                return;
              }
              // Only submit the score if it's better than their last score
              var score = parseInt(response.responseJSON.d.resultInfo.score, 10) || 0;

              if (window.debug) {
                alert('score found: ' + score);
              }

              if (_this2.score > score) {
                _this2.portalAPI.CallMethod('UpdateUserActivityStatusWithArchive', {
                  idUser: userId,
                  idActivity: window.activityId,
                  nameStatus: 'Completed',
                  nScore: _this2.score + '',
                  xmlScormData: ''
                }, true, function (response) {

                  if (window.debug) {
                    alert('score updated: ' + JSON.stringify(response));
                  }
                  console.log('score updated: ' + JSON.stringify(response));
                  onSubmitComplete();
                  window.submitScoreComplete();
                });
              } else {
                onSubmitComplete();

                _this2.notHigher.classList.add('active');
                window.submitScoreComplete();
              }
            });
          };
          if (!userId) {
            var dataCreateUpdateUserFromJson = {
              firstName: this.nameInput.value,
              lastName: ' ',
              email: this.emailInput.value
            };
            this.portalAPI.CallMethod('CreateUpdateUserFromJson', {
              jsonData: JSON.stringify(dataCreateUpdateUserFromJson)
            }, true, function (response) {
              if (!response.responseJSON || !response.responseJSON.d) {
                onSubmitComplete();
                return;
              }
              userId = response.responseJSON.d.users.userInfo[0].id;
              if (window.localStorage) {
                window.localStorage.setItem(_this2.nameInput.value + '-' + _this2.emailInput.value + '-id', userId);
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
  }]);

  return SubmitScore;
}(__WEBPACK_IMPORTED_MODULE_0__ComponentBase__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (SubmitScore);

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ComponentBase__ = __webpack_require__(218);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Share = function (_ComponentBase) {
  _inherits(Share, _ComponentBase);

  function Share() {
    _classCallCheck(this, Share);

    var _this = _possibleConstructorReturn(this, (Share.__proto__ || Object.getPrototypeOf(Share)).call(this, 'share-modal'));

    _this.gameURL = window.location.href.indexOf('file:/') > -1 || window.location.href.indexOf('://localhost') > -1 ? 'https://3esuperhero.yourcoursewarehosting.com/thomson_reuters/resources/courses/game/index.html' : window.location.href.split('?', 1)[0].split('#', 1)[0];

    // URL must include reference to the index html page otherwise
    // open graph parser won't find the page
    if (_this.gameURL.indexOf('index.html') < 0) {
      if (_this.gameURL.charAt(_this.gameURL.length - 1) !== '/') {
        _this.gameURL += '/';
      }
      _this.gameURL += 'index.html';
    }

    _this.shareContainer = _this.container.querySelector('.share-area');

    _this.shareScoreCloseBtn = _this.shareContainer.querySelector('.close-btn');
    _this.shareScoreCloseBtn.addEventListener('click', _this.hide.bind(_this));

    _this.facebookBtn = _this.shareContainer.querySelector('.facebook');
    _this.twitterBtn = _this.shareContainer.querySelector('.twitter');
    _this.linkedinBtn = _this.shareContainer.querySelector('.linkedin');

    _this.facebookBtn.addEventListener('click', _this.shareFacebook.bind(_this));
    _this.twitterBtn.addEventListener('click', _this.shareTwitter.bind(_this));
    _this.linkedinBtn.addEventListener('click', _this.shareLinkedin.bind(_this));
    return _this;
  }

  _createClass(Share, [{
    key: 'show',
    value: function show() {
      this.shareContainer.classList.add('active');
      _get(Share.prototype.__proto__ || Object.getPrototypeOf(Share.prototype), 'show', this).call(this);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.shareContainer.classList.remove('active');
      // window.submitScoreClosed();
      _get(Share.prototype.__proto__ || Object.getPrototypeOf(Share.prototype), 'hide', this).call(this);
    }
  }, {
    key: 'shareFacebook',
    value: function shareFacebook() {
      window.ga('send', 'event', 'buttons', 'click', 'share-facebook');
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + this.gameURL, '_blank');
    }
  }, {
    key: 'shareTwitter',
    value: function shareTwitter() {
      window.ga('send', 'event', 'buttons', 'click', 'share-twitter');
      window.open('https://twitter.com/intent/tweet?url=' + this.gameURL, '_blank');
    }
  }, {
    key: 'shareLinkedin',
    value: function shareLinkedin() {
      window.ga('send', 'event', 'buttons', 'click', 'share-linkedin');
      window.open('https://www.linkedin.com/shareArticle?url=' + this.gameURL, '_blank');
    }
  }]);

  return Share;
}(__WEBPACK_IMPORTED_MODULE_0__ComponentBase__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Share);

/***/ })

},[559]);