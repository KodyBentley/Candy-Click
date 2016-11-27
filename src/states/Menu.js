import MenuButton from 'objects/MenuButton';

export default class Menu extends Phaser.State {

	create() {
		// create background
		let background = this.game.add.image(0, 0, 'sky');

		let logo = this.game.add.image(150, 100, 'title');
		// create menu buttons
		let buttonPlay = new MenuButton(this.game, this.game.width * 0.5, 650, 'playButton', 'Game');

		

		//Added onOver and onOut tweens for play button
		buttonPlay.events.onInputOver.add(this.onOver, this);
		buttonPlay.events.onInputOut.add(this.onOut, this);

		
	}

	onOver(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 1.3,
			y: 1.3
		}, 350, Phaser.Easing.Linear.In).start();

	}

	//Tween play button when mouse is no longer over
	onOut(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 1,
			y: 1
		}, 350, Phaser.Easing.Linear.In).start();

	}

	
}