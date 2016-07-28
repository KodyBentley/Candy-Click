export default class Boot extends Phaser.State {

	init() {
		this.game.scale.trackParentInterval = 1;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	}

	preload() {
		this.load.image('preloadBarBackground', 'assets/loadingBar/background.png');
		this.load.image('preloadBarMain', 'assets/loadingBar/main.png');
		this.load.image('preloadBarShine', 'assets/loadingBar/shine.png');

		this.load.image('loadingScreenBackground', 'assets/loadingBar/screenBackground.png');
		this.load.image('mainLogo', 'assets/main/logo.png');
	}

	create() {
		this.game.state.start('Preload');
	}
}