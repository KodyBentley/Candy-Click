import MenuButton from 'objects/MenuButton';

export default class Menu extends Phaser.State {

	create() {
		// create background
		let background = this.game.add.image(0, 0, 'menuBackground');
		// create menu buttons
		let buttonPlay = new MenuButton(this.game, this.game.width * 0.5, 400, 'playButton', 'Game');
		let buttonCredits = new MenuButton(this.game, this.game.width * 0.5, 600, 'creditsButton', 'Credits');
		let buttonOptions = new MenuButton(this.game, this.game.width * 0.5, 800, 'optionsButton', 'Options');

		
}