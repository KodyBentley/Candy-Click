export default class SpawnCandy extends Phaser.Sprite {
	constructor(game, x, y, frame, value, parent) {
		super(game, x, y, frame);
		this._game = game;
		this._parent = parent;
		this._value = value;
		this.setup();
	}

	update() {
		if (this.body.y >= this.game.height) {
			this._parent.goneOffScreen();
			this.destroy();
		}
		 this.angle += this._rotateSpeed;
	}

	setup() {
		console.log('setup working')
		this._game.physics.arcade.enable(this);
		this.inputEnabled = true;
		this.anchor.setTo(0.5, 0.5);
		this.events.onInputDown.add(function() {
			this._parent.candyDestroyed(this);
		}, this);
		this.body.gravity.y = 200;
		this._rotateSpeed = (Math.random()*4)-2;
	}

	killSelf() {
		let tweenShrink = this._game.add.tween(this.scale).to({
			x: 0,
			y: 0
		}, 250, Phaser.Easing.Linear.InOut)
		tweenShrink.onComplete.add(function() {
			this.destroy();
		}, this)
		tweenShrink.start();
	}

	

	


	get value() {
		return this._value;
	}



}