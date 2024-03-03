const rng = (num) => Math.floor(Math.random() * num);

const wrestlingDetails = {
	name: [
		"Thunderstrike Titan",
		"Viper Vortex",
		"Blaze Hammer",
		"Phantom Fury",
		"Crimson Cyclone",
		"Shadow Serpent",
		"Steel Sabre",
		"Nova Knight",
		"Avalanche Assassin",
		"Mystic Mauler",
		"Riot Raptor",
		"Thunderhawk Thrasher",
		"Eclipse Enigma",
		"Quantum Quake",
		"Chaos Conqueror",
	],
	finishingMove: [
		"Atomic Annihilation",
		"Venomous Vortex Slam",
		"Inferno Impact",
		"Spectral Suplex",
		"Dragon's Wrath Kick",
		"Thunderstorm Piledriver",
		"Celestial Chokeslam",
		"Phoenix Firebomb",
		"Cyclone Crusher",
		"Mystic Mindbreaker",
		"Raging Raptor Rumble",
		"Titanic Tombstone Driver",
		"Eclipse Elbow Drop",
		"Quantum Quasar Quake",
		"Chaos Cataclysm",
	],
	catchphrase: [
		"Unleash the Fury, Feel the Glory!",
		"Rumble in the Ring, I'm the King!",
		"Brace Yourself for a Tsunami of Power!",
		"In the Ring, I'm the Storm You Can't Ignore!",
		"Fear the Roar, I'm the Wrestling War!",
		"Smackdown Symphony, I'm the Maestro of Mayhem!",
		"Crush and Conquer, I'm the Reigning Thunder!",
		"Step into my Arena, Feel the Adrenalina!",
		"Titan of the Turnbuckle, I'm Unstoppable!",
		"From the Mat to the Stars, I Soar!",
		"Body Slams and Glory, That's My Story!",
		"In the Ring, I'm the One to Bring the Sting!",
		"Brace for Impact, I'm the Wrestling Architect!",
		"Defying Gravity, I'm the Wrestling Majesty!",
		"When the Bell Rings, I Spread My Wings!",
	],
};

const generateWrestlingGimmick = () => {
	const wrestler = {};

	for (const details in wrestlingDetails) {
		// stores random elements from 'wrestlingDetails' arrays using rng() with the array lengths as the parameter
		let temp = wrestlingDetails[details][rng(wrestlingDetails[details].length)];	

		// adds wrestling gimmick information to wrestler object
		switch(details) {
			case 'name': 
				wrestler['name'] = temp;
				break;
			case 'finishingMove': 
				wrestler['finishingMove'] = temp;
				break;
			case 'catchphrase': 
				wrestler['catchphrase'] = temp;
				break;
			default:
				console.log('Error: no valid details provided');
		}		
	}

	return wrestler;
};

const mainEvent = () => {	
	const wrestlerFace = generateWrestlingGimmick();
	const wrestlerHeel = generateWrestlingGimmick();
	const winner = rng(2) % 2 ? true : false;

	console.log("Welcome to tonight's Main Event!!!");
	console.log(`It's the evil ${wrestlerHeel['name']} defending their World Heavyweight Title against the hometown hero ${wrestlerFace['name']}.`);
	console.log(`Let the match begin!`);
	
	if (winner) {
		console.log(`${wrestlerFace['name']} is in trouble as ${wrestlerHeel['name']} goes for their finishing move ${wrestlerHeel['finishingMove']}...`);
		console.log(`But ${wrestlerFace['name']} escapes at the last second and hits ${wrestlerHeel['name']} with the ${wrestlerFace['finishingMove']}!`);
		console.log(`1..2..3! ${wrestlerFace['name']} is your new World Heavyweight Champion!!!`);
		console.log(`Any words from the hometown hero and new World Champ?`);
		console.log(`"${wrestlerFace['catchphrase']}"`);
	} else {
		console.log(`${wrestlerFace['name']} is in full control tonight as they look to finish off ${wrestlerHeel['name']} with their finishing move ${wrestlerHeel['finishingMove']}.`);
		console.log(`But ${wrestlerHeel['name']} cheats with a cheap eye poke that the referee didn't see! ${wrestlerFace['name']} is in trouble as ${wrestlerHeel['name']} hits their finisher ${wrestlerHeel['finishingMove']}!`);
		console.log(`1..2..3! ${wrestlerHeel['name']} has stolen the victory and retains their World Heavyweight Champion!!!`);
		console.log(`Any words from the retaining World Champ infront of this disappointed crowd?`);
		console.log(`"${wrestlerHeel['catchphrase']}"`);
	}
};

mainEvent();
