import _ from "lodash";
import Emmet from "./emmet";
import Wyldstyle from "./wyldstyle";
import Benny from "./benny";
import { getRandom } from "./utils";

const emmet = new Emmet();
const wyldstyle = new Wyldstyle();
const benny = new Benny();
const characters = { emmet, wyldstyle, benny };

function* randomQuote() {
	const chars = _.values( characters );
	const character = chars[ getRandom( 0, chars.length - 1 ) ];
	yield `${character.name}: ${character.saySomething()}`;
}

export default {
	characters,
	getRandomQuote() {
		return randomQuote().next().value;
	}
};
