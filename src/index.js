import Register from './components/Register';
import SubmitScore from './components/SubmitScore';
import Share from './components/Share';
import Phaser from 'phaser';
import jQuery from 'jquery';
import queryString from 'query-string';
import loadScript from 'load-script';

// jQuery is required for the portal api
window.$ = jQuery;
window.jQuery = jQuery;

class Base extends Phaser.Scene{
    constructor()
    {
        super('Base');
    }
    create ()
    {
        window.addEventListener('resize', function (event) {

            //game.resize(window.innerWidth, window.innerHeight);
            //this.resize(window.innerWidth, window.innerHeight);
        }, false);
        //this.events.on('resize', resize, this);
        this.scene.launch('StartScreen');

        //this.scene.add(StartScreen);
    }

    resize (width, height)
    {
        if (width === undefined) { width = this.sys.game.config.width; }
        if (height === undefined) { height = this.sys.game.config.height; }

        //this.cameras.resize(width, height);

        //this.bg.setDisplaySize(width, height);
       // this.logo.setPosition(width / 2, height / 2);
    }
}
class StartScreen extends Phaser.Scene{
    constructor()
    {
        super('StartScreen');
        this.soundOn = true;
    }

    preload()
    {
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

    create()
    {
        this.background = this.add.tileSprite(0, 0, 640, 960, 'background').setOrigin(0);

        this.logo = this.add.image(135,50,'logo').setOrigin(0);

        this.playText = this.add.text(190,450,'Welcome to', { fontFamily: 'Arial', fontSize: '50px', fill: '#fff', fontWeight:'700'});
        this.playText = this.add.text(50,500,'3E in the Cloud game', { fontFamily: 'Arial', fontSize: '55px', fill: '#fff', fontWeight:'bolder'});

        this.soundBtn = this.add.image(325,625, 'audio_img', 'on')
        //this.soundBtn = this.add.image(150,600, 'sound_btn').setOrigin(0);
        this.soundBtn.setInteractive();
        this.soundBtn.on('pointerdown', function () {
            this.soundOn = !this.soundOn;
            if(this.soundOn)
            {
              this.soundBtn.setFrame('on');
              loopMusic.play('loop', {
                  delay: 0
              });
            }
            else {
              this.soundBtn.setFrame('off');
              loopMusic.pause();
            }

        }, this);

        //this.createButton(1, 'MainGame', 'Play','play_btn', 80, 650);
        this.playBtn = this.add.image(80,690,'play_btn').setOrigin(0);
        this.playBtn.setInteractive();
        this.playBtn.on('pointerdown', function () {
                this.setActiveScene('MainGame');
        }, this);
        this.playText = this.add.text(290,700,'Play', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight:'700'});

        //this.createButton(1, '', 'Share with Friends', 'share_btn', 80,730);
        this.shareBtn = this.add.image(80,770,'share_btn').setOrigin(0);
        this.shareBtn.setInteractive();
        this.shareBtn.on('pointerdown', function () {
            game.share();
        }, this);
        this.shareText = this.add.text(160,780,'Share with Friends', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight:'700'});

        //this.createButton(1, '', 'SEe 3E in action', 'E3_btn', 80, 810);
        this.E3Button = this.add.image(80,850,'E3_btn').setOrigin(0);
        this.E3Button.setInteractive();
        this.E3Button.on('pointerdown', function () {
            window.open('http://www.elite.com/3e/', '_blank');
        }, this);
        this.EText = this.add.text(180,860,'See 3E in action', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight:'700'});

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

    update() {

    }
    createButton(id, scene, name, button, x, y)
    {
        let btn = this.add.image(x, y, button).setOrigin(0);

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
    openElite () {
        //window.ga('send', 'event', 'buttons', 'click', 'learn-3E');
        //window.open(this.data.learnLink, '_blank');
    }
    setActiveScene (scene)
    {
        this.scene.start(scene, { soundOn: this.soundOn});
    }
}
class MainGame extends Phaser.Scene{

    constructor(){
        super('MainGame');
        this.savedScore = 0;
        this.reset();
        this.tileHeight = 200;
        this.tileWidth = 180;

    }

    reset(){
        this.velocity = 6;
        this.velocityGain = .01;
        //How often the velocity goes up in ms
        this.velocityInterval = 200;
        //How much interval goes up at the end of the next level
        this.velocityIntervalGain = -1;
        //Each new level starts at Level value* this.newLevelVelocity
        this.newLevelVelocity = .5;
        //when Slowdown is done it replaced what was slowed down divided by this variable.
        this.slowDownDivisor = .9
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
		
		//quotes
		this.quoteBank = ["261 Law firms worldwide have selected 3E",
		"71% of the Global 100 firms that bought a new system in the last 5 years selected 3E",
		"Get scalability, security, and flexibility with 3E in the Cloud …  Go anywhere with the unmatched financial management technology",
		"”Always be on the newest technologies, you will no longer need to manage premise servers, upgrades, and product fixes” – Gordon Arata",
		"3E Profitability is the perfect tool for the Law Firm that wants to Grow in today’s highly competitive landscape",
		"Gain visibility into cost and profitability drivers for cost management and optimization",
		"Generate accurate cost rates by leveraging direct and indirect cost data",
		"Make informed business decisions using persona-based dashboards tailored and filtered for what each manager needs",
		"Achieve profitability goals by setting targets and measuring performance"
		];
		this.quoteLocation = Math.floor(Math.random() * Math.floor(this.quoteBank.length)); 
		
        //Score holders
        this.scoreText = 0;
        this.scoreNumber = 0;
        this.scoreCount = 0;
        this.minusScore = 0;

        this.tileCount = 0;
        this.nextLevelThreshold = 10;//35;
        this.nextLevelAdded = 5; // This gets add the next Level Threshold each level
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

    setActiveScene (scene)
    {
        this.scene.start(scene, {score: this.savedScore});
        //this.scene.start('demo', { id: 2, image: 'babar-pym-wait.png' });
    }

    preload(){

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
		
		this.load.image('continue', 'assets/continue.png');
        this.load.image('quoteback', 'assets/quoteBack.png');

        //Load all the Audio assets
        //Click orangle Tile
        this.load.audio('click',['assets/audio/bell.mp3']);
        //CLick White Tile
        this.load.audio('badClick',['assets/audio/donk2.mp3']);
        //Click Green TIle
        this.load.audio('powerup',['assets/audio/cha-ching.mp3']);
        //CLick Red Tile
        this.load.audio('powerdown',['assets/audio/gong1.mp3']);
        //Health Up
        this.load.audio('health',['assets/audio/1up.mp3']);
        //Slow down
        this.load.audio('slow',['assets/audio/powerup.mp3']);
        //Level Up
        this.load.audio('level',['assets/audio/1up.mp3']);
        //Boost Full
        this.load.audio('drop',['assets/audio/1up.mp3']);

		
    }

    create(data){
        //Set Background
        this.background = this.add.tileSprite(0, 0, 640, 960, 'background_game').setOrigin(0);
        this.soundOn = data.soundOn;
        //Create Tiles
        for(var i = 0; i < 6; i++)
        {
            this.createLevelStart(i);
            //this.createRow(i);
        }

        //Add foreground and border
        this.foreground = this.add.tileSprite(0, 0, 640, 960, 'window').setOrigin(0);
        this.border = this.add.image(23, 90, 'border').setOrigin(0);

        //Add Life Counter
        for(var y = 0; y < 3; y++)
        {
            let heart = this.add.image(15 + (y*32),45, 'health_full').setOrigin(0);
            this.life.push(heart);
        }

        //Add Score Text
        this.scoreText = this.add.text(300,15,'Score', { fontFamily: 'Arial', fontSize: '24px', fill: '#fff'});
        this.scoreNumber = this.add.text(300, 45, this.scoreCount, { fontFamily: 'Arial', fontSize: '24px', fill: '#fff' });

        //Add Life Text
        this.lifeText = this.add.text(20,15,'Life', { fontFamily: 'Arial', fontSize: '24px', fill: '#fff'});

        //Add Boost
        this.boostLogo = this.add.image(490,15,'E3').setOrigin(0);
        this.boostText = this.add.text(550,15,'Boost', { fontFamily: 'Arial', fontSize: '24px', fill: '#fff'});
        for(var x = 0; x < 4; x++)
        {
            let boost = this.add.image(475 + (x*35),50, 'boost_full').setOrigin(0);
            boost.tint = 0x999999;
            this.boost.push(boost);
        }

        //Level Banner
        this.levelBack = this.add.image(150,710,'level_banner').setOrigin(0);
        this.levelText = this.add.text(290,710,'Level ' + this.level, { fontFamily: 'Arial', fontSize: '20px', fill: '#fff' });
		
		//Level Quote
		
		this.quoteBack = this.add.image(25,210,'quoteback').setOrigin(0);
        this.quote = this.add.text(200,350,this.quoteBank[this.quoteLocation], { fontFamily: 'Arial', fontSize: '24px', fill: '#000', wordWrap:{ width:275}, fixedWidth:275 });
		
		this.quoteBack.alpha = 0;
		this.quote.alpha = 0;
		
		//Continue Button
		
		this.contBtn = this.add.image(250,810,'continue').setOrigin(0);
		this.contBtn.setInteractive();
		this.contBtn.on('pointerdown', function () {
			console.log('hit');
			this.moving = true;
			
			//this.time.delayedCall(2000, ()=>{
				this.levelBack.alpha = 0;
			//}, [], this);
			//this.time.delayedCall(2000, ()=>{
				this.levelText.alpha = 0;
			//}, [], this);
			
			//this.time.delayedCall(2000, ()=>{
				this.quoteBack.alpha = 0;
			//}, [], this);
			//this.time.delayedCall(2000, ()=>{
				this.quote.alpha = 0;
				this.contBtn.alpha = 0;
			//}, [], this);
		},this);
		this.contBtn.alpha = 0;
		
        //Add Intro Graphics
        this.intro = this.add.image(65,140,'intro').setOrigin(0);
        this.playBtn = this.add.image(80,690,'play_btn').setOrigin(0);
        this.playBtn.setInteractive();
        this.playBtn.on('pointerdown', function () {
                this.intro.destroy();
                this.playBtn.destroy();
                this.playText.destroy();
                this.introPause = false;
                this.setVelocity();

				
                this.time.delayedCall(1000, ()=>{
                    this.levelBack.alpha = 0;
                }, [], this);
                this.time.delayedCall(1000, ()=>{
                    this.levelText.alpha = 0;
                }, [], this);
        }, this);
        this.playText = this.add.text(290,700,'Start', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight:'700'});
    }

    setVelocity(){
        //looping function that increases the Velocity
        this.time.delayedCall(this.velocityInterval, ()=>{
            this.velocity += this.velocityGain;
            if(this.moving)
            {
              this.setVelocity();
            }

        }, [], this);
    }

    loseLife(){
        this.lifeCount--;
        if(this.lifeCount >= -1)
        {
            this.life[this.lifeCount+1].tint = 0x000000;
        }
        else{
            this.moving = false;
            //Reset for Play Again Feature
            this.savedScore = this.scoreCount;
            this.reset();
            this.setActiveScene('GameOver');
        }
    }

    increaseLife(){
        if(this.lifeCount >= 2)
        {
            return;
        }
        this.lifeCount++;
        this.life[this.lifeCount].tint = 0xffffff;
    }

    increaseBoost(){
        var clickSound = this.sound.add('drop');

        if(this.boostCount <= 3 && this.boostCount >= 0)
        {
            this.boost[this.boostCount].tint = 0xffffff;
        }

        this.boostCount++;

        if(this.boostCount >= 4)
        {
            if(this.soundOn) clickSound.play();
            this.boostDrop = true;
        }
    }

    decreaseBoost(){
        this.boostCount--;
        if(this.boostCount >= 0 )
        {
            this.boost[this.boostCount].tint = 0x999999;
        }
    }

    increaseScore(){
        let score = 10 * this.level;
        this.scoreCount += score;
        this.scoreNumber.setText(this.scoreCount);
    }

    decreaseScore(){
        let score = 10 * this.level;
        this.minusScore += score;
        this.scoreCount -= score;
        this.scoreNumber.setText(this.scoreCount);
    }
	continueGame(){
		
		
	}
    increaseLevel(){
        this.moving = false;
        this.levelBlankInterval = 5;
        ///
        // RESET ALL TILES AND SET THEM
        //
         for(var i = 0; i < this.tiles.length; i++)
         {
             for (var x = 0; x < this.tiles[i].length; x++)
             {
                 this.tweens.add({
                     targets: this.tiles[i][x],
                     alpha: 0,
                     ease: 'Power1',
                     duration:200,
                 })
				 this.tiles[i][x].bad = false;
				 this.tiles[i][x].hit = false;
				 this.tiles[i][x].icon = 0;
				 this.tiles[i][x].selected = false;
				 
             }
         }
         this.time.delayedCall(200, ()=>{
             for(var i = 0; i < this.tiles.length; i++)
             {
                 for (var x = 0; x < this.tiles[i].length; x++)
                 {
                     this.tiles[i][x].x = this.tiles[i][x].initialX;
                     this.tiles[i][x].y = this.tiles[i][x].initialY;
                     this.tweens.add({
                         targets: this.tiles[i][x],
                         alpha: 1,
                         ease: 'Power1',
                         duration:300,
                     })
					this.tiles[i][x].setFrame('blank');
					this.tiles[i][x].bad = false;
					this.tiles[i][x].hit = false;
					this.tiles[i][x].icon = 0;
					this.tiles[i][x].alpha = 1;
					this.tiles[i][x].selected = false;
                 }
                 //this.rowReset(i);
             }
                 }, [], this);
        //Set Score to full level
        this.scoreCount = this.nextLevelThreshold * (10 * this.level);
        //This is to account for the bad tiles hit
        this.scoreCount -= this.minusScore;

        this.scoreNumber.setText(this.scoreCount);

        //Reset Tile Count and increase the next level Threshold
        this.tileCount = 0;
        this.nextLevelThreshold += (this.nextLevelAdded * this.level);


        //Fade new 'level' in stuff in.
        this.level++;
        this.levelText.setText('Level ' + this.level);

        //this.time.delayedCall(2000, ()=>{
            this.levelBack.alpha = 1;
        //}, [], this);
        //this.time.delayedCall(2000, ()=>{
            this.levelText.alpha = 1;
        //}, [], this);

        /* this.time.delayedCall(4000, ()=>{
            this.levelBack.alpha = 0;
        }, [], this);
        this.time.delayedCall(4000, ()=>{
            this.levelText.alpha = 0;
        }, [], this); */
		
		//this.time.delayedCall(2000, ()=>{
            this.quoteBack.alpha = 1;
        //}, [], this);
        //this.time.delayedCall(2000, ()=>{
            this.quote.alpha = 1;
        //}, [], this);
        /* this.time.delayedCall(2000, ()=>{
            this.continueBtn.alpha = 1;
        }, [], this); */
        //this.velocity = this.level * this.newLevelVelocity;
        //this.velocityInterval += this.velocityIntervalGain;
		this.contBtn.alpha = 1;
    }

    slowGame(){
        if(!this.slowed)
        {
            this.slowed = true;
            let subtract = this.velocity / 2;
            this.velocity = subtract;
            this.time.delayedCall(this.slowdownDelay, ()=>{
                this.velocity += (subtract/this.slowDownDivisor);
                this.slowed = false;
            }, [], this);
        }
    }

    selectTile(tile, row, ind){
        if(this.introPause)
            return;

        //Starting the game
         if(!this.moving)
         {
			 return
        //     this.moving = true;
        //     //Set Velocity
        //     this.setVelocity();
         }
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
        if(tile.selected)
        {
            //set animation
            tile.setFrame('orange');
            this.tileCount++;


            //if it's a red Tile
            if(tile.bad)
            {
                if(this.soundOn)downSound.play();
                this.decreaseScore();
                this.decreaseBoost();
            }
            //else if it's a green tile
            else
            {
                //Effect based on what tile is hit
                switch(tile.icon)
                {
                    case 1:
                    case 2:
                    case 3:
                        if(this.soundOn)upSound.play();
                        this.increaseBoost();
                    break;

                    case 10:
                        if(this.soundOn)slowSound.play();
                        this.powerupAnimation(tile, row, ind, '3E_anim');
                        this.slowGame();
                    break;
                    case 12:
                        if(this.soundOn)levelSound.play();
                        this.powerupAnimation(tile, row, ind, 'trophy_anim');
                        this.time.delayedCall(300, ()=>{
                            this.increaseLevel();
                        }, [], this);

                    break;
                    case 11:
                        if(this.soundOn)healthSound.play();
                        this.powerupAnimation(tile, row, ind, 'orange_heart_anim');
                        this.increaseLife();
                    break;
                    default:
                        if(this.soundOn)clickSound.play();
                    break;

                }
                this.increaseScore();
                if(this.tileCount >= this.nextLevelThreshold && tile.icon !== 12)
                {
                    this.increaseLevel();
                }
            }
        }
        else{
            tile.tint = 0xff0000;
            this.loseLife();
            if(this.soundOn)badClickSound.play();
        }
        //CLICK ANIMATION
        this.tweens.add({
            targets: tile,
            alpha: 0,
            ease: 'Power1',
            duration:300,
        })
        //Make Blank Tile
        this.time.delayedCall(300, ()=>{
            tile.setFrame('blank');
            tile.tint = 0xffffff;
        }, [], this);

        //Turn into normal tile
        tile.selected = false;

        this.tweens.add({
            targets: tile,
            alpha: 1,
            ease: 'Power3',
            delay:300,
            duration:200,
        })
    }
    powerupAnimation(tile, row, ind, frame)
    {
      console.log("frame", frame);
      //create new tile at location
      let tile_anim = this.add.image(tile.x + (this.tileWidth/2),tile.y + (this.tileHeight/2),'tile', frame);
      //Animation to make grow and fade
      this.tweens.add({
          targets: tile_anim,
          alpha: 0,
          ease: 'Power1',
          duration:600,
          scaleX: '+=.6',
          scaleY: '+=.6'
      })
    }
    createLevelStart(row){
      let tempRow = [];
       for(var i = 0; i < 3; i++)
       {
         let tile = this.add.image(48+(i*this.tileWidth),-270+(row * this.tileHeight), 'tile', 'blank').setInteractive();

         tile.initialX = (48+(i*this.tileWidth));
         tile.initialY = (-270+(row * this.tileHeight));
         tile.bad = false;
         tile.hit = false;
         tile.icon = 0;
         tile.selected = false;

         tile.setFrame('blank');

         tile.setDisplayOrigin(0,0);

         tile.on('pointerdown', this.selectTile.bind(this,tile,row,i));

         tempRow.push(tile);
       }
       this.tiles.push(tempRow);
    }
    createRow(row){
        let randomTile = Math.floor(Math.random() * (2)) ;
        console.log('randomTile ', randomTile);
        let tempRow = [];
            for(var i = 0; i < 3; i++)
            {
                let selected = randomTile === i;
                let tile = this.add.image(48+(i*this.tileWidth),-270+(row * this.tileHeight), 'tile', 'blank').setInteractive();

                tile.initialX = (48+(i*this.tileWidth));
                tile.initialY = (-270+(row * this.tileHeight));
                tile.bad = false;
                tile.hit = false;
                tile.icon = 0;
                tile.selected = selected;

                if(selected)
                {
                    this.chooseIcon(tile, i, row);
                }
                else
                {

                    tile.setFrame('blank');
                }


                tile.setDisplayOrigin(0,0);

                tile.on('pointerdown', this.selectTile.bind(this,tile,row,i));

                tempRow.push(tile);
            }
        this.tiles.push(tempRow);
    }

    chooseIcon(tile, i, row){

        if(this.boostDrop)
        {
            this.boostDrop = false
            let randomPowerUp = Math.floor(Math.random() * (100));
            let chosenPowerUp = '';
            switch(true)
            {
                case (randomPowerUp < this.cloudThreshold):
                    chosenPowerUp = '3E';
                    tile.icon = 10;
                break;
                case (randomPowerUp < this.heartThreshold):
                    chosenPowerUp = 'orange_heart';
                    tile.icon = 11;
                break;
                default:
                    if(this.tileCount >= this.trophyThreshold)
                    {
                        chosenPowerUp = 'trophy';
                        tile.icon = 12;
                    }
                    else
                    {
                        chosenPowerUp = '3E';
                        tile.icon = 10;
                    }
                break;

            }
            tile.setFrame(chosenPowerUp);

            this.boostCount -= 4;

            for(var y = 3; y >= this.boostCount; y--)
            {
                this.boost[y].tint = 0x999999;
            }
        }
        else
        {
            let randomTile = Math.floor(Math.random() * (4));
            let badChance = Math.floor(Math.random() * (100));
            let iconChance = Math.floor(Math.random() * (100));
            let randBlank = Math.floor(Math.random() * (4));

            let chosenIcon= '';
            tile.bad = false;
            if(iconChance < this.iconRate)
            {

                if(badChance < this.positiveRate)
                {
                    tile.bad = true;
                }
                if(tile.bad && randomTile !== 3)
                {
                    switch(randomTile)
                    {
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
                }
                else
                {
                    tile.bad = false;
                    switch(randomTile)
                    {
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
            }
            else{
                chosenIcon = 'blank_' + randBlank.toString();
                tile.icon = 0;
            }
            tile.setFrame(chosenIcon);
        }
    }

    rowReset(r){
        //Get Random selected Tiles
        let randomTile = Math.floor(Math.random() * (3));
        let randomTile2 = Math.floor(Math.random() * (3)) ;
        let randomTile3 = Math.floor(Math.random() * (3)) ;

        //Get a random percentage for the second and third tile
        let randomTile2Chance = Math.floor(Math.random() * (100)) ;
        let randomTile3Chance = Math.floor(Math.random() * (100)) ;

        for(var i = 0; i < this.tiles[r].length; i++)
        {
            //this.tiles[r][i].tint = ;
            this.tiles[r][i].setFrame('blank');
            this.tiles[r][i].bad = false;
            this.tiles[r][i].hit = false;
            this.tiles[r][i].icon = 0;
            this.tiles[r][i].alpha = 1;

            //Add start of level
            if(this.levelBlankInterval !== 0)
            {
                this.tiles[r][i].selected = false;
            }
            else{
                if(randomTile === i)
                {
                    this.tiles[r][i].selected = true;
                    this.chooseIcon(this.tiles[r][i]);
                }
                //If you've hit threshold level and the not a duplicate tile and you've met the set Percentage
                else if(randomTile2 === i && this.level > this.twoTileThreshold && randomTile2 !== randomTile  && randomTile2Chance < this.twoTilePercentChance)
                {
                    this.tiles[r][i].selected = true;
                    this.chooseIcon(this.tiles[r][i]);
                }
                else if(randomTile3 === i && this.level > this.threeTileThreshold && randomTile3 !== randomTile && randomTile3 !== randomTile2 && randomTile3Chance < this.threeTilePercentChance)
                {
                    this.tiles[r][i].selected = true;
                    this.chooseIcon(this.tiles[r][i]);
                }
                //create blank tile
                else
                {
                    this.tiles[r][i].selected = false;
                }
            }

        }
        if(this.levelBlankInterval > 0)
            this.levelBlankInterval--;
    }

    update() {
        if(this.moving && !this.introPause)
        {
            let rowReset = false;
            try
            {
                for(var i = 0; i < this.tiles.length; i++)
                {
                    for(var q = 0; q < this.tiles[i].length; q++)
                    {
                        //If Past the end of the screen.
                        if (this.tiles[i][q].y >= 950) {
                            let topRow = i + 1;
                            if(topRow > 5)
                            {
                                topRow = 0;
                            }

                            //NO IDEA BUT IT WORKS DON"T TOUCH IT
                            //MOVING TO TOP!
                            if(topRow === 0)
                            {
                                this.tiles[i][q].y = this.tiles[topRow][0].y - (this.tileHeight + (1*this.velocity));//- 268;
                            }
                            else
                            {
                               this.tiles[i][q].y = this.tiles[topRow][0].y - this.tileHeight;//- 268;
                            }
                            //make tile tint white
                            this.tiles[i][q].tint = 0xffffff;
                            //make row reset after done with loop
                            rowReset = true;
                            //If you missed a good tile
                            if(this.tiles[i][q].selected === true && this.tiles[i][q].hit === false)
                            {
                                if(!this.tiles[i][q].bad)
                                { 
                                    this.loseLife();
                                }
                            }
                        }
                        //Move Tile
                        try{
                            this.tiles[i][q].y += this.velocity;
                        }
                        catch(err)
                        {

                        }


                    }
                    //Reset Row selections
                    if(rowReset)
                    {
                        rowReset = false;
                        this.rowReset(i);
                    }
                }
            }
            catch(err)
            {

            }
        }
    }
}
class GameOver extends Phaser.Scene{
    constructor()
    {
        super('GameOver');

    }
    init(data)
    {
        this.score = data.score;
        if(!this.highscore)
        {
          this.highscore = 0;
        }
        if(this.score > this.highscore)
        {
          this.highscore = this.score;
        }
    }
    preload()
    {
        this.load.image('background', 'assets/start_screen.jpg');

        this.load.image('play_btn', 'assets/play_button.png');
        this.load.image('share_btn', 'assets/Play_friends_button.png');
        this.load.image('E3_btn', 'assets/E3_in_Action_button.png');

        this.load.image('logo', 'assets/Reuters_logo.png');

        this.load.image('border', 'assets/Orange_boarder.png');

        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    }

    create()
    {
        this.background = this.add.tileSprite(0, 0, 640, 960, 'background').setOrigin(0);

        //this.logo = this.add.image(135,50,'logo').setOrigin(0);

        this.gameOverText = this.add.text(135,100,'Game Over!', { fontFamily: 'Arial', fontSize: '60px', fill: '#EC7E30', fontWeight:'700'});
        this.playText = this.add.text(70,205,'Your Score: ' + this.score, { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight:'700'});
        this.bestText = this.add.text(70,255,'Your Best Score: ' + this.highscore, { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight:'700'});
        //this.playText = this.add.text(290,500,this.score, { fontFamily: 'Arial', fontSize: '65px', fill: '#fff', fontWeight:'bolder'});
        this.leaderboardTop = this.add.graphics();
        this.leaderboardTop.fillStyle(0xEC7E30, 1);
        this.leaderboardTop.fillRect(65,315,525,60);
        this.topScoreText = this.add.text(90,330,'Top Scores', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight:'700'});

        this.leaderOne = this.add.graphics();
        this.leaderOne.fillStyle(0xDEDEDE, 1);
        this.leaderOne.fillRect(65,376,525,60);
        this.leaderOneText = this.add.text(90,391,'', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight:'700'});
        this.leaderOneScoreText = this.add.text(490,391,'', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight:'700'});

        this.leaderTwo = this.add.graphics();
        this.leaderTwo.fillStyle(0xDEDEDE, 1);
        this.leaderTwo.fillRect(65,437,525,60);
        this.leaderTwoText = this.add.text(90,452,'', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight:'700'});
        this.leaderTwoScoreText = this.add.text(490,452,'', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight:'700'});

        this.leaderThree = this.add.graphics();
        this.leaderThree.fillStyle(0xDEDEDE, 1);
        this.leaderThree.fillRect(65,498,525,60);
        this.leaderThreeText = this.add.text(90,513,'', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight:'700'});
        this.leaderThreeScoreText = this.add.text(490,513,'', { fontFamily: 'Arial', fontSize: '30px', fill: '#fff', fontWeight:'700'});

        game.onGameOver();
        game.register();

        //this.createButton(1, 'MainGame', 'Play','play_btn', 80, 650);
        this.submitBtn = this.add.image(80,610,'play_btn').setOrigin(0);
        this.submitBtn.setInteractive();
        this.submitBtn.on('pointerdown', function () {
                game.submitScore(this.score);
        }, this);
        this.submitText = this.add.text(260,620,'Submit', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight:'700'});

        this.playBtn = this.add.image(80,690,'play_btn').setOrigin(0);
        this.playBtn.setInteractive();
        this.playBtn.on('pointerdown', function () {
                this.setActiveScene('StartScreen');
        }, this);
        this.playText = this.add.text(240,700,'Play Again', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight:'700'});

        //this.createButton(1, '', 'Share with Friends', 'share_btn', 80,730);
        this.shareBtn = this.add.image(80,770,'share_btn').setOrigin(0);
        this.shareBtn.setInteractive();
        this.shareBtn.on('pointerdown', function () {
               //game.submitScore(this.score);
               game.share();
        }, this);
        this.shareText = this.add.text(160,780,'Share with Friends', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight:'700'});

        //this.createButton(1, '', 'SEe 3E in action', 'E3_btn', 80, 810);
        this.E3Button = this.add.image(80,850,'E3_btn').setOrigin(0);
        this.E3Button.setInteractive();
        this.E3Button.on('pointerdown', function () {
              window.open('http://www.elite.com/3e/', '_blank');
        }, this);
        this.EText = this.add.text(180,860,'See 3E in action', { fontFamily: 'Arial', fontSize: '38px', fill: '#fff', fontWeight:'700'});


        jQuery.ajax({
          type: 'GET',
          url: 'https://3esuperhero.yourcoursewarehosting.com/data/json/report/ActivityLeaderboard?activity=' + window.activityId + '&count=10',
          async: true,
          data: {},
          beforeSend: (xhr) => {
            xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(unescape(encodeURIComponent('reports:@llen123!'))))
          }
        })

        .done((data) => {

            console.log('top ten scores', data);

          this.populate(data);
        });


        window.submitScoreComplete = () => {
          console.log('try to submit');
          //if (window.localStorage) {
            //let submittedName = window.localStorage.getItem('submit-score-name') || '';
            //console.log('submittedName: ', submittedName);
            //this.score;
            //this.highscoreData;
            jQuery.ajax({
              type: 'GET',
              url: 'https://3esuperhero.yourcoursewarehosting.com/data/json/report/ActivityLeaderboard?activity=' + window.activityId + '&count=10',
              async: true,
              data: {},
              beforeSend: (xhr) => {
                xhr.setRequestHeader('Authorization', 'Basic ' + window.btoa(unescape(encodeURIComponent('reports:@llen123!'))))
              }
            })

            .done((data) => {

                console.log('top ten scores', data);

              this.populate(data);
            });
        };

        window.submitScoreClosed = () => {


        };
    }
    populate(data)
    {
        this.highscoreData = data;

        if(data.length > 0 && data[0].first_name !== 'System')
          this.leaderOneText.setText(data[0].first_name || 'Zero');
        if(data.length > 1 && data[1].first_name !== 'System')
          this.leaderTwoText.setText(data[1].first_name);
        if(data.length > 2 && data[2].first_name !== 'System')
          this.leaderThreeText.setText(data[2].first_name);
        if(data.length > 0 && data[0].first_name !== 'System')
          this.leaderOneScoreText.setText(data[0].score || '1');
        if(data.length > 1 && data[1].first_name !== 'System')
          this.leaderTwoScoreText.setText(data[1].score || '2');
        if(data.length > 2 && data[2].first_name !== 'System')
          this.leaderThreeScoreText.setText(data[2].score || '3');
    }
    update() {

    }
    createButton(id, scene, name, button, x, y)
    {
        let btn = this.add.image(x, y, button).setOrigin(0);

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
    setActiveScene (scene)
    {
        this.scene.start(scene);
    }
}

const config = {
    type: Phaser.AUTO,
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

class CloudGame extends Phaser.Game {
    constructor(config) {
        super(config);

        const parsed = queryString.parse(window.location.search);
        parsed.api_javascript = parsed.api_javascript || 'https://3esuperhero.yourcoursewarehosting.com/core/script/PortalAPI.js';
        parsed.api = parsed.api || 'https://3esuperhero.yourcoursewarehosting.com/core/PortalAPI.asmx';
        this.loadPortalAPI(parsed);

        window.activityId = parsed.activity || 'GAME';

        this.registerComponent = new Register();
        this.submitScoreComponent = new SubmitScore();
        this.shareComponent = new Share();
    }
    loadPortalAPI (data) {
        let attemptsRemaining = 5;
        const attemptLoad = () => {
            if (attemptsRemaining > 0) {
                attemptsRemaining --;
                loadScript(data.api_javascript, (error, script) => {
                    if (error) {
                        console.error(error);
                        console.log('attempting portal api load ' + attemptsRemaining + ' remaining');
                        attemptLoad();
                    } else {
                        this.initializePortalAPI(data);
                    }
                });
            }
        };
        attemptLoad();
    }
    initializePortalAPI (data) {
        let attemptsRemaining = 5;
        const attemptInitialize = () => {
            if (attemptsRemaining > 0) {
                attemptsRemaining --;
                try {
                    this.portalAPI =
                    this.registerComponent.portalAPI =
                    this.submitScoreComponent.portalAPI = new window.PortalWebService(data.api, 'gameApp');
                } catch (error) {
                    console.error(error);
                    console.log('attempting portal api load ' + attemptsRemaining + ' remaining');
                    attemptInitialize();
                }
            }
        };
        attemptInitialize();
    }
    register() {
        this.registerComponent.show();
    }
    share() {
        this.shareComponent.show();
    }
    submitScore(score) {
        this.submitScoreComponent.show(score);
    }
    onGameOver() {
        this.submitScoreComponent.enabled = true;
    }
}

const game = new CloudGame(config);
