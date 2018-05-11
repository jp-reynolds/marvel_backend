var db = require("../models");


var characterSeedList = [

	{
		supername: "Captain America",
		name: "Scott Rodgers", 
		origin: "Brooklyn, NY", 
		abilities: "Super-soldier, Vibranium Shield, Doing the right thing",
		summary: "...",
		allies: "Winter Soldier, Peggy Carter, Falcon",
		foes: "HYDRA, Red Skull, Dr. Arnim Zola",
		quote: "...",
		organization: "avengers",
		image: "https://i.imgur.com/lI3C5Ep.jpg"
	},
	{
		supername: "Ironman",
		name: "Tony Stark", 
		origin: "...", 
		abilities: "Genius, Super-suit, witty comments",
		summary: "adopted by Howard Stark,, graduated from MIT at the age of 15...",
		allies: "War Machine, J.A.R.V.I.S., Peggy Potts",
		foes: "Iron Monger, Ultron, Aldrich Killian, Justin Hammer",
		quote: "I single handedly privatized World Peace",
		organization: "avengers"		,
		image: "https://i.imgur.com/HITddnp.jpg"
	},
	{
		supername: "Thor",
		name: "Thor Odinson", 
		origin: "Prince of Asgard", 
		abilities: "God of thunder, Hammer, Handsome",
		summary: "Complications with his brother Loki and ruling Asgard, loves Earth or Midgard.....",
		allies: "Jane Foster, Erik Selvig, Odin, Heimdall",
		foes: "Loki, Malekith, Hela, Thanos",
		quote: "I am mighty",
		organization: "avengers",
		image: "https://i.imgur.com/lcERhBZ.jpg"
	},
	{
		supername: "Incredible Hulk",
		name: "Bruce Banner", 
		origin: "...", 
		abilities: "Doctor, Gamma radiation, super strength",
		summary: "Experiment with gamma radiation on something went terribly wrong....",
		allies: "Betty Ross, Black Widow",
		foes: "Abomination, himself..",
		quote: "HULK SMASH!!",
		organization: "avengers",
		image: "https://i.imgur.com/bQ0ACp5.jpg"
	},
	{
		supername: "Spiderman",
		name: "Peter Parker", 
		origin: "Forest Hills, NY", 
		abilities: "Spidey Senses, Super Strength, Genius",
		summary: "Lost his parents at the age of 6 and moved in with his Uncle Ben and Aunt May. Got bit by a spider, top of his class in highschool...",
		allies: "Betty Ross, Black Widow",
		foes: "Abomination, himself..",
		quote: "Just your friendly, neighborhood Spiderman!",
		organization: "avengers",
		image: "https://i.imgur.com/lD7m17E.jpg"
	},
	{
		supername: "The Vision?",
		name: "...", 
		origin: "...", 
		abilities: "Mind Stone, Artificial/Vibranium, Alter his own density",
		summary: "created in a lab.....",
		allies: "Scarlet Witch, Tony Stark",
		foes: "Thanos",
		quote: "...",
		organization: "avengers",
		image: "https://i.imgur.com/c5TipFj.jpg"
	},
	{
		supername: "Black Panther",
		name: "King T'Challa", 
		origin: "Wakanda", 
		abilities: "Possess the power of the Black Panther, Vibranium technology",
		summary: "Righteous prince who became king. from wakanda....",
		allies: "Nakia, M'baku, Shuri, Okoye",
		foes: "Killmonger, Klaue",
		quote: "X",
		organization: "avengers"	,
		image: "https://i.imgur.com/2WN1TMd.jpg"
	},
	{
		supername: "Hawkeye",
		name: "Clint", 
		origin: "...", 
		abilities: "Perfect accuracy, high-tech bow and arrows",
		summary: "normal dude that is really good at shooting things...",
		allies: "Black Widow",
		foes: "...",
		quote: "...",
		organization: "avengers",
		image: "https://i.imgur.com/Nkozmkr.jpg"
	},
	{
		supername: "Black Widow",
		name: "Scarlet Johanson", 
		origin: "Russia...", 
		abilities: "Special Ops russia super spy...",
		summary: "taken as a child and trained to become a master at everything....",
		allies: "Hawkeye, Hulk",
		foes: "...",
		quote: "...",
		organization: "avengers",
		image: "https://i.imgur.com/r4JdYLq.jpg"
	},
	{
		supername: "Winter Soldier",
		name: "Bucky", 
		origin: "...", 
		abilities: "high-tech super arm, advanced military training...",
		summary: ".... ",
		allies: "Captain America",
		foes: "HYDRA",
		quote: ".....",
		organization: "avengers",
		image: "https://i.imgur.com/RvfkSyN.jpg"
	},
	{
		supername: "Captain Marvel",
		name: "...", 
		origin: "...", 
		abilities: "...",
		summary: "....",
		allies: "...",
		foes: "....",
		quote: "...",
		organization: "avengers",
		image: "https://i.imgur.com/JFt2WNa.jpg"
	},
	{
		supername: "Nick Fury",
		name: "Nick Fury", 
		origin: "....", 
		abilities: "Incredible leadership...",
		summary: "S.H.I.E.L.D...",
		allies: "The Avengers",
		foes: "Ultron, Ronan, Loki",
		quote: "(probably something hilairious)",
		organization: "avengers",
		image: "https://i.imgur.com/O7a6s38.jpg?2"
	},
	{
		supername: "War Machine",
		name: "....", 
		origin: "....", 
		abilities: "More armored less techy iron man suit...",
		summary: "....",
		allies: "Iron Man",
		foes: "...the ground",
		quote: "...",
		organization: "avengers",
		image: "https://i.imgur.com/7dTRfsN.jpg"
	},
	{
		supername: "Dr. Strange",
		name: "Dr. Strange", 
		origin: "....", 
		abilities: "Doctor genius, Time Stone",
		summary: "world renown doctor...",
		allies: "....",
		foes: ".....",
		quote: "....",
		organization: "avengers",
		image: "https://i.imgur.com/CflaXoy.jpg?2"
	},
	{
		supername: "Ant-Man",
		name: "Scott Lang", 
		origin: "Florida?", 
		abilities: "Pym particle suit, ex-convict, ant senses...",
		summary: ".......",
		allies: "Wasp",
		foes: "Yellowjacket",
		quote: "...",
		organization: "avengers",
		image: "https://i.imgur.com/NPWAkJE.jpg"
	},
	{
		supername: "Scarlet Witch",
		name: "....", 
		origin: "Socovia?", 
		abilities: "mind control and red phasing things...",
		summary: "power from mind stone lost her brother quicksilver ",
		allies: "Vision, Quicksilver",
		foes: "....",
		quote: ".....",
		organization: "avengers",
		image: "https://i.imgur.com/RuQayyQ.jpg"
	},
	{
		supername: "Falcon",
		name: ".....", 
		origin: "....", 
		abilities: "Super-suit, flying...",
		summary: "easily the lamest superhero....",
		allies: "Captain America, War Machine",
		foes: "...",
		quote: "...",
		organization: "avengers",
		image: "https://i.imgur.com/aOHb79K.jpg"
	},
	{
		supername: "Starlord",
		name: "....", 
		origin: "Terra (Earth)", 
		abilities: "half-god, ...",
		summary: "born on earth, listens to pretty good music",
		allies: "Gamora, Drax, Groot, Rocket",
		foes: "Yondu, Ronan, Thanos, Nebula",
		quote: "X",
		organization: "avengers",
		image: "https://i.imgur.com/MlIk69s.jpg"
	},
	{
		supername: "Gamora",
		name: "Gamora", 
		origin: "that one planet", 
		abilities: "trained in advanced combat, alien",
		summary: "parents were murdered and then Thanos raised her, had a bitchy sister...",
		allies: "Starlord, Rocket, Groot, Drax",
		foes: "Thanos, Nebula, Ronan",
		quote: "....",
		organization: "avengers",
		image: "https://i.imgur.com/BK0mJ5b.jpg"
	},
	{
		supername: "Groot",
		name: "Groot", 
		origin: "...", 
		abilities: "magical nature abilities, super strength",
		summary: "a sad story probably....",
		allies: "Starlord, Rocket, Drax, Gamora",
		foes: "...",
		quote: "I am Groot",
		organization: "avengers",
		image: "https://i.imgur.com/sGmSewo.jpg"
	},
	{
		supername: "Rocket",
		name: "Rocket", 
		origin: "....", 
		abilities: "enhanced intelligence, being a raccoon",
		summary: "......",
		allies: "Groot, Starlord, Drax, Gamora",
		foes: "....",
		quote: "....",
		organization: "avengers",
		image: "https://i.imgur.com/YZE15eu.jpg"
	},
	{
		supername: "Drax",
		name: "Drax", 
		origin: ".....", 
		abilities: "....",
		summary: "Entire family was murdered by Thanos....",
		allies: "Starlord, Gamora, Groot, Rocket",
		foes: "Thanos, Ronan",
		quote: "X",
		organization: "avengers",
		image: "https://i.imgur.com/veUzdAf.jpg"
	},
	{
		supername: "Thanos",
		name: "....", 
		origin: ".....", 
		abilities: "....",
		summary: "....",
		allies: "....",
		foes: "....",
		quote: "....",
		organization: "villain",
		image: "https://i.imgur.com/QCyYewg.jpg"
	},
	{
		supername: "Ronan",
		name: "....", 
		origin: ".....", 
		abilities: "....",
		summary: "....",
		allies: "....",
		foes: "....",
		quote: "....",
		organization: "villain",
		image: "https://i.imgur.com/MhwgUtb.jpg"
	},
	{
		supername: "Ulton",
		name: "....", 
		origin: ".....", 
		abilities: "....",
		summary: "....",
		allies: "....",
		foes: "....",
		quote: "....",
		organization: "villain",
		image: "https://i.imgur.com/MJwfoba.jpg"
	},
	{
		supername: "Loki",
		name: "....", 
		origin: ".....", 
		abilities: "....",
		summary: "....",
		allies: "....",
		foes: "....",
		quote: "....",
		organization: "villain",
		image: "https://i.imgur.com/O1hGuOs.jpg"
	},
	{
		supername: "Nebula",
		name: "....", 
		origin: ".....", 
		abilities: "....",
		summary: "....",
		allies: "....",
		foes: "....",
		quote: "....",
		organization: "villain",
		image: "https://i.imgur.com/hXZ2PvC.jpg"
	},
];


var placeSeedList = [
	{
		name: "Wakanda",
		where: "Africa",
		summary: "....",
		events: "....",
		image: "https://i.imgur.com/8shthsv.jpg"
	},
	{
		name: "Socovia",
		where: "...",
		summary: "....",
		events: "....",
		image: "https://i.imgur.com/s2i1MZ9.png"
	},
	{
		name: "Asgard",
		where: "....",
		summary: "....",
		events: "....",
		image: "https://i.imgur.com/ky1Z76C.png"
	}
];


db.Character.remove({}, function(err, deleteResults){
		db.Character.create(characterSeedList, function(err, characters){
			console.log("running seed file");
			console.log(characters);
		});
});

db.Place.remove({}, function(err, deleteResults){
		db.Place.create(placeSeedList, function(err, places){
			console.log("running seed file");
			console.log(places);
		});
});