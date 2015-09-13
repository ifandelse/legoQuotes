import LegoCharacter from "./LegoCharacter";

export default class Benny extends LegoCharacter {
	constructor() {
		super( { actor: "Charlie Day", character: "Benny" } );
		this.sayings = [
			"Spaceship!",
			"Underwater spaceship!",
			"You're really letting the oxygen out of my tank here!"
		];
	}
}
