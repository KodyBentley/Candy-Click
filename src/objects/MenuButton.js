export default class MenuButton extends Phaser.Sprite {
	constructor(game, x, y, key, state) {
		super(game, x, y, key);
		this._game = game;
		this._state = state;
		this._game.add.existing(this);
		this.setup();
	}

	setup() {
		this.anchor.setTo(0.5);
		this.frame = 1;
		this.inputEnabled = true;
		this.events.onInputDown.add(function() {
			this.frame = 0;
		}, this);
		this.events.onInputUp.add(function() {
			this.frame = 1;
			this._game.time.events.add(Phaser.Timer.SECOND * 0.5, function() {
				this._game.state.start(this._state);
			}, this);
		}, this);
	}
}