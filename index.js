const cowsay = require("cowsay");
const myInfos = require("./information.js");


console.log(cowsay.say({
	text : `Hello I'm ${myInfos.name} from ${myInfos.campus} Campus!`,
	e : "oO",
	T : "U ",
}));
