import MenuButton from 'objects/MenuButton';


export default class Gameover extends Phaser.State {

	create() {

		let background = this.game.add.image(0, 0, 'sky');

		this.highScoreText = this.game.add.text(this.game.width * 0.5, 150, 'HIGHSCORE: ' + localStorage.getItem("highscore"), {
			fontSize: '32px',
			fill: 'black'
		});

		this.gameoverText = this.game.add.text(this.game.width * 0.5 - 85, 50, 'Game Over!', {
			fontSize: '32px',
			fill: 'black'
		});
		this.game.physics.arcade.enable(this.highScoreText);

		this.highScoreText.anchor.setTo(0.5, 0.5);

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