Points = new Mongo.Collection("points");
Plates = new Mongo.Collection("plates"); 
Tables = new Mongo.Collection("tables"); 

labels={
	app_title: "PAG Tournament"
};

hands=[
	{
		id: 0,
		name: "high card",
		img: "niente_punto.png",
		type: 'HI',
		value: 1
	},
	{
		id: 1,
		name: "one pair",
		img: "coppia.png",
		type: 'HI',
		value: 2
	},
	{
		id: 2,
		name: "two pair",
		img: "doppia_coppia.png",
		type: 'HI',
		value: 3
	},
	{
		id: 3,
		name: "three of a kind",
		img: "tris.png",
		type: 'HI',
		value: 4
	},
	{
		id: 4,
		name: "straight",
		img: "scala.png",
		type: 'HI',
		value: 5
	},
	{
		id: 5,
		name: "full house",
		img: "full.png",
		type: 'HI',
		value: 6
	},
	{
		id: 6,
		name: "flush",
		img: "colore.png",
		type: 'CO',
		value: 7
	},
	{
		id: 7,
		name: "four of a kind",
		img: "poker.png",
		type: 'HI',
		value: 8
	},
	{
		id: 8,
		name: "straight flush",
		img: "scala_reale.png",
		type: 'CO-HI',
		value: 9
	},
	{
		id: 9,
		name: "non visto",
		img: "non_visto.png",
		type: 'NV',
		value: 0
	}
];

point_heights=[
/*	{
		id: 0,
		name: "two",
		img: "2_P.png",
		value: 2
	},
	{
		id: 1,
		name: "three",
		img: "3_P.png",
		value: 3
	},
	{
		id: 2,
		name: "four",
		img: "4_P.png",
		value: 4
	},
	{
		id: 3,
		name: "five",
		img: "5_P.png",
		value: 5
	},*/
	{
		id: 4,
		name: "six",
		img: "6_P.png",
		value: 6
	},
	{
		id: 5,
		name: "seven",
		img: "7_P.png",
		value: 7
	},
	{
		id: 6,
		name: "eight",
		img: "8_P.png",
		value: 8
	},
	{
		id: 7,
		name: "nine",
		img: "9_P.png",
		value: 9
	},
	{
		id: 8,
		name: "ten",
		img: "10_P.png",
		value: 10
	},
	{
		id: 9,
		name: "jack",
		img: "11_P.png",
		value: 11
	},
	{
		id: 10,
		name: "queen",
		img: "12_P.png",
		value: 12
	},
	{
		id: 11,
		name: "king",
		img: "13_P.png",
		value: 13
	},
	{
		id: 12,
		name: "ace",
		img: "1_P.png",
		value: 14
	}
];

telesine=[
	{
		id: 0,
		name: "piramide",
		code: "PI",
		img: "piramide.jpg",
		plates: 2
	},
	{
		id: 1,
		name: "niagara",
		code: "NI",
		img: "niagara.jpg",
		plates: 2
	},
	{
		id: 2,
		name: "brivido",
		code: "BR",
		img: "brivido.jpg",
		plates: 1
	},
	{
		id: 3,
		name: "xyz",
		code: "XYZ",
		img: "xyz.png",
		plates: 3
	}
];

suits=[
	{
		id: 0,
		name: "spades",
		img: "colore_picche.gif",
		value: 1
	},
	{
		id: 1,
		name: "clubs",
		img: "colore_fiori.gif",
		value: 2
	},
	{
		id: 2,
		name: "diamonds",
		img: "colore_quadri.gif",
		value: 3
	},
	{
		id: 3,
		name: "hearts",
		img: "colore_cuori.gif",
		value: 4
	}
];



tracks = [
	{
		id:0,
		file:"drums1.wav",
		name:"drums1"
	},
	{
		id:1,
		file:"bassline.wav",
		name:"bass"
	},
	{
		id:2,
		file:"arp.wav",
		name:"arp"
	},
	{
		id:3,
		file:"cymbal1.wav",
		name:"cymbal1"
	},
	{
		id:4,
		file:"hihat2.wav",
		name:"hihat2"
	},
	{
		id:5,
		file:"snaredrum1.wav",
		name:"snaredrum1"
	},
	{
		id:6,
		file:"bassline24bit.wav",
		name:"bassline24bit"
	},
	{
		id:7,
		file:"bassline32bit.wav",
		name:"bassline32bit"
	}	
];