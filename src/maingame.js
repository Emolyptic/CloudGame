import Phaser from 'phaser';

var MainGame = new Phaser.Class({

	Extends: Phaser.Scene,

	initialize:


	function MainGame()
	{
		Phaser.Scene.call(this);

		this.velocity = 200;
		this.hitCount = 0;
		this.balloons = [];
		this.countText;
	},

	preload: function() 
	{
	    this.load.image('balloon', 'assets/balloon.png');
	},

	create: function() 
	{
	    this.countText = this.add.text(5, 5, 'Count: 0', { fontSize: '16px', fill: '#fff' });
	},

	update: function() 
	{
	    this.balloons = this.balloons.filter(balloon => {
	        if (balloon.y >= 480) {
	            if (balloon.hit) {
	                balloon.destroy();
	                this.velocity += 25;
	                return false;
	            } else {
	                this.pause();
	            }
	        }
	        return true;
	    });

	    if (this.balloons.length < 1 || (this.balloons.length < 2 && this.balloons[0].y > 240)) {
	        const balloonX = Math.floor(Math.random() * Math.floor(225))
	        const balloonY = -141;
	        const balloon = this.physics.add.image(balloonX, balloonY, 'balloon').setInteractive();
	        balloon.setDisplayOrigin(0, 0);
	        balloon.setVelocity(0, this.velocity);
	        balloon.once('pointerdown', () => {
	            balloon.tint = 0xff00ff;
	            balloon.hit = true;
	            this.hitCount ++;
	            this.countText.setText('Count: ' + this.hitCount);
	        });
	        this.balloons.push(balloon);
	    }
	}
});