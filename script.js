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

}

mainEvent();
