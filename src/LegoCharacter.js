// Let's import only the getRandom method from utils.js
import { getRandom } from "./utils";

// the LegoCharacter class is the default export of the module, similar
// in concept to how many node module authors would export a single value
export default class LegoCharacter {
	// We use destructuring to match properties on the object
	// passed into separate variables for character and actor
	constructor( { character, actor } ) {
		this.actor = actor;
		this.name = character;
		this.sayings = [
			"I haven't been given any funny quotes yet."
		];
	}
	// shorthand method syntax, FOR THE WIN
	// I've been making this typo for years, it's finally valid syntax :-)
	saySomething() {
		return this.sayings[ getRandom( 0, this.sayings.length - 1 ) ];
	}
}
