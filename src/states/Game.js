import SpawnCandy from 'objects/SpawnCandy';
import BombCandy from 'objects/BombCandy';


export default class Game extends Phaser.State {


	create() {
		let background = this.game.add.image(0, 0, 'sky');
		let floor = this.game.add.image(-10, 675, 'floor');

		this.bombSound = this.game.add.audio('boom');
		this.bombSound.volume = 0.8;
		this.candySound = this.game.add.audio('pop');
		this.gameFx = this.game.add.audio('gameFx');

		this.gameFx.loopFull();

		//Create sound button and set the tint
		var soundToggle = this.game.add.button(500, 10, 'soundButton');
		soundToggle.tint = null;
		soundToggle.scale.setTo(0.5);

		//Event for sound button click to mute game sound
		soundToggle.onInputDown.add(this.muteSound, this);


		this.score = 0;
		this.highScore = 0;

		this.highScoreText = this.game.add.text('HIGHSCORE: ' + localStorage.getItem("highscore"), {
			fontSize: '32px',
			fill: 'white'
		});

		if (localStorage.getItem("highscore") === null) {
			this.highScoreText.content = 'HIGHSCORE: ' + localStorage.getItem("highscore");
			//...
		} else {
			// no previous high score to display, so display nothing
			this.highScoreText.content = 'HIGHSCORE: ';
		}


		this.scoreText = this.game.add.text(150, 150, 'Score: 0', {
			fontSize: '50px',
			fill: 'black'
		});

		this.lives = 3;

		this.lifeOne = this.game.add.sprite(90, 60, 'life-full');
		this.lifeOne.anchor.setTo(0.5);
		this.lifeTwo = this.game.add.sprite(180, 60, 'life-full');
		this.lifeTwo.anchor.setTo(0.5);
		this.lifeThree = this.game.add.sprite(270, 60, 'life-full');
		this.lifeThree.anchor.setTo(0.5);



		this.candies = [{
			type: 'pink',
			value: 10,
			frame: 'candy-pink'
		}, {
			type: 'cake',
			value: 10,
			frame: 'candy-cake'
		}, {
			type: 'chocolate',
			value: 10,
			frame: 'candy-chocolate'
		}, {
			type: 'cupcake',
			value: 10,
			frame: 'candy-cupcake'
		}, {
			type: 'donut',
			value: 10,
			frame: 'candy-donut'
		}, {
			type: 'icecream',
			value: 10,
			frame: 'candy-icecream'
		}, {
			type: 'jelly',
			value: 10,
			frame: 'candy-icecream'
		}, {
			type: 'lollipop',
			value: 10,
			frame: 'candy-icecream'
		}, {
			type: 'marshmellow',
			value: 10,
			frame: 'candy-icecream'
		}, {
			type: 'candy-red',
			value: 10,
			frame: 'candy-icecream'
		}, {
			type: 'candy-super',
			value: 10,
			frame: 'candy-icecream'
		}, {
			type: 'candy-teddy',
			value: 10,
			frame: 'candy-icecream'
		}]



		this.bombs = {
			0: {
				type: 'bomb',
				value: 0,
				frame: 'candy-bomb'
			},
		}


		this.candyGroup = this.game.add.group();

		this.newCandy();

		this.bombsGroup = this.game.add.group();

		this.game.time.events.loop(3500, () => {
			this.newBomb();
		});

	}



	newCandy() {
		var rand = this.candies[Math.floor(Math.random() * this.candies.length)];
		var candy = this.candyGroup.add(new SpawnCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), rand.frame, rand.value, this));
		// switch (true) {
		// 	case (this.score <= 5):
		// 		var candy = this.candyGroup.add(new SpawnCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), rand.frame, rand.value, this));
		// 		break;
		// 	case (this.score > 5 && this.score < 10):
		// 		var candy = this.candyGroup.add(new SpawnCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), this.candies[1].frame, this.candies[1].value, this));
		// 		break;
		// 	case (this.score > 9 && this.score < 16):
		// 		var candy = this.candyGroup.add(new SpawnCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), this.candies[2].frame, this.candies[2].value, this));
		// 		break;
		// 	case (this.score > 15 && this.score < 20):
		// 		var candy = this.candyGroup.add(new SpawnCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), this.candies[3].frame, this.candies[3].value, this));
		// 		break;
		// 	case (this.score > 19 && this.score < 25):
		// 		var candy = this.candyGroup.add(new SpawnCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), this.candies[4].frame, this.candies[4].value, this));
		// 		break;
		// 	case (this.score > 24):
		// 		var candy = this.candyGroup.add(new SpawnCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), this.candies[5].frame, this.candies[5].value, this));
		// 		break;
		// }
	}

	newBomb() {

		if (this.score > 5) {
			var bomb = this.bombsGroup.add(new BombCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), this.bombs[0].frame, this.bombs[0].value, this));
		} else if (this.score > 10) {
			var bomb = this.bombsGroup.add(new BombCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), this.bombs[0].frame, this.bombs[0].value, this));
			var bomb = this.bombsGroup.add(new BombCandy(this.game, this.game.rnd.integerInRange(100, this.game.width - 100), this.game.rnd.integerInRange(0, this.game.height * 0.5), this.bombs[0].frame, this.bombs[0].value, this));

		}


	}

	candyDestroyed(candy) {
		this.candySound.play();
		this.score += candy.value;
		this.scoreText.text = 'Score: ' + this.score;
		console.log(this.score);
		candy.killSelf();
		this.newCandy();
	}

	bombDestroyed(bomb) {
		this.bombSound.play();
		bomb.bombKill();
		this.killLife();
		this.upDateLife();
	}

	killLife() {
		console.log('Kill Life working');
		this.lives--;
		this.upDateLife();
	}


	upDateLife() {
		switch (this.lives) {
			case 3:
				//Comment
				this.game.add.tween(this.lifeOne.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this.game.add.tween(this.lifeTwo.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this.game.add.tween(this.lifeThree.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);

				break;
			case 2:
				//Comment
				this.game.add.tween(this.lifeOne.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this.game.add.tween(this.lifeTwo.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this.game.add.tween(this.lifeThree.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);

				break;
			case 1:
				//Comment
				this.game.add.tween(this.lifeOne.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this.game.add.tween(this.lifeTwo.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this.game.add.tween(this.lifeThree.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				break;
			case 0:
				let tween = this.game.add.tween(this.lifeOne.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this.game.add.tween(this.lifeTwo.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this.game.add.tween(this.lifeThree.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				tween.onComplete.add(() => {
					console.log('Game Over');
					this.gameOver();

				});
				break;
		}
	}

	goneOffScreen() {
		this.killLife();
		this.newCandy();
	}

	//Function to mute sound when sound button is clicked
	muteSound(soundToggle) {
			if (this.game.sound.mute === false) {
			this.game.sound.mute = true;
			soundToggle.tint = 16711680;
		} else {
			this.game.sound.mute = false;
			soundToggle.tint = null;
		} 

	}


	quit() {
		this.game.state.start('Menu');
	}

	gameOver() {
		this.gameFx.stop();
		if (this.score > localStorage.getItem("highscore")) {
			localStorage.setItem("highscore", this.score);
		}
		this.highScoreText.content = 'HIGHSCORE: ' + localStorage.getItem("highscore");
		this.game.state.start('GameOver');
	}

	render() {
		// this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
		// // this.game.debug.spriteBounds(this.powerUp);
		// // this.game.debug.body(this.powerUp);
		this.game.debug.text("Time until event: " + this.game.time.events.duration, 32, 32);


	}


}