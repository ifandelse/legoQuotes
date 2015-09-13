import LegoCharacter from "./LegoCharacter";

export default class Emmet extends LegoCharacter {
	constructor() {
		super( { actor: "Chris Pratt", character: "Emmet" } );
		this.sayings = [
			"Introducing the double-decker couch!",
			"So everyone can watch TV together and be buddies!",
			"We're going to crash into the sun!",
			"Hey, Abraham Lincoln, you bring your space chair right back!",
			"Overpriced coffee! Yes!"
		];
	}
}
