export default class BombCandy extends Phaser.Sprite {
	constructor(game, x, y, frame, value, parent) {
		super(game, x, y, frame);
		this._game = game;
		this._parent = parent;
		this._value = value;
		this.setup();
	}

	setup() {
		console.log('setup working')
		this._game.physics.arcade.enable(this);
		this.inputEnabled = true;
		this.anchor.setTo(0.5, 0.5);
		this.events.onInputDown.add(function() {
			this._parent.bombDestroyed(this);
		}, this);
		this.body.gravity.y = 200;
	}

	bombKill() {
		this.loadTexture('explosion');
		let tweenShrink = this._game.add.tween(this.scale).to({
			x: 0,
			y: 0
		}, 500, Phaser.Easing.Linear.InOut)
		tweenShrink.onComplete.add(function() {
			this.destroy();
		}, this)
		tweenShrink.start();

	}
}