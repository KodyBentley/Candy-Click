export default class Preload extends Phaser.State {

	create() {
		let background = this.game.add.image(0, 0, 'loadingScreenBackground');

		let logo = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'mainLogo');
		logo.anchor.setTo(0.5);

		this.game.load.onLoadStart.add(this.loadStart, this);
		this.game.load.onFileComplete.add(this.fileComplete, this);
		this.game.load.onLoadComplete.add(this.loadComplete, this);
		this.start();
	}

	start() {
		// load game buttons
		this.game.load.spritesheet('playButton', 'assets/main/playButton.png', 300, 102, 2);
		this.game.load.spritesheet('optionsButton', 'assets/main/optionsButton.png', 300, 102, 2);
		this.game.load.spritesheet('creditsButton', 'assets/main/creditsButton.png', 300, 102, 2);
		this.game.load.image('soundButton', 'assets/main/soundButton.png');

		// load background images
		this.game.load.image('menuBackground', 'assets/main/mainBackground.png');
		this.game.load.image('gameBackground', 'assets/images/FARM_BACKGROUND-Preview.jpg');
		this.game.load.image('floor', 'assets/images/floor.png');
		this.game.load.image('sky', 'assets/images/sky1.png');
		this.game.load.image('title', 'assets/images/menuLogo.png');

		// Load Candy
		this.game.load.image('candy-pink', 'assets/images/candy-pink.png');
		this.game.load.image('candy-cake', 'assets/images/candy-cake.png');
		this.game.load.image('candy-chocolate', 'assets/images/candy-chocolate.png');
		this.game.load.image('candy-cupcake', 'assets/images/candy-cupcake.png');
		this.game.load.image('candy-donut', 'assets/images/candy-donut.png');
		this.game.load.image('candy-icecream', 'assets/images/candy-icecream.png')
		this.game.load.image('life-full', 'assets/images/life-full.png');
		this.game.load.image('life-empty', 'assets/images/life-full.png');
		this.game.load.image('candy-bomb', 'assets/images/candy-bomb.png');
		this.game.load.image('explosion', 'assets/images/explosion.png');
		this.game.load.image('jelly', 'assets/images/candy-jelly.png');
		this.game.load.image('lollipop', 'assets/images/candy-lollipop.png');
		this.game.load.image('marshmellow', 'assets/images/candy-marshmallow.png');
		this.game.load.image('candy-red', 'assets/images/candy-red.png');
		this.game.load.image('candy-super', 'assets/images/candy-super.png');
		this.game.load.image('candy-teddy', 'assets/images/candy-teddy.png');

		//Load Audio
		this.game.load.audio('boom', 'assets/sounds/boom.wav');
		this.game.load.audio('gameFx', 'assets/sounds/gameFx.mp3');
		this.game.load.audio('pop', 'assets/sounds/pop.ogg');


		this.game.load.start();


	}

	loadStart() {

	}

	fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
		//console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles)
	}

	loadComplete() {
		this.game.time.events.add(Phaser.Timer.SECOND * 4.00, function() {
			this.game.state.start('Menu');
		}, this);
	}
}