export default class Gameover extends Phaser.State {

	create() {



		this.highScoreText = this.game.add.text(350, 150, 'HIGHSCORE: ' + localStorage.getItem("highscore"), {
			fontSize: '32px',
			fill: 'white'
		});
		this.game.physics.arcade.enable(this.highScoreText);

		this.highScoreText.anchor.setTo(0.5, 0.5);
	}
}