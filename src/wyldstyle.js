import LegoCharacter from "./LegoCharacter";

export default class Wyldstyle extends LegoCharacter {
	constructor() {
		super( { actor: "Elizabeth Banks", character: "Wyldstyle" } );
		this.sayings = [
			"Come with me if you want to not die.",
			"That is literally the dumbest thing I have ever seen.",
			"Today shall now be known as Freedom Friday... But on a Tuesday",
			"Found your pants, series is over!"
		];
	}
}
