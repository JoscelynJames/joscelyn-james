import milkyway from './imgs/milkyWay.jpeg';
import pos from './imgs/pos.png';
import petapp from './imgs/petapp.png';
import lemon from './imgs/sams.png';
import gradTracker from './imgs/gradTracker.jpeg';
import snowglobe from './imgs/snowglobe.png';
import miles from './imgs/miles.svg';
import missy from './imgs/missy.svg';

var projects = [
	{
		name: 'Miles',
		className: 'miles',
		desc: 'Low poly SVG bird',
		tech: 'JavaScript, Anime, SVG, Sketch',
		github: false,
		deployed: false,
		img: miles,
	},
	{
		name: 'Resturant Point of Sales',
		className: 'pos',
		desc: 'Interface for a resturant point of sales systems.',
		tech: 'React, Redux, CSS',
		github: 'https://github.com/JoscelynJames/restaurant-pos-ui',
		deployed: 'https://restaurant-pos-6406f.firebaseapp.com/',
		img: pos,
	},
	{
		name: 'Milky Way Battles',
		className: 'mwb',
		desc: 'A space themed arcade shooter where your objective is to destroy as many enemy ship and aviod astriods. You get points for every enemy destoryed and metoer destroyed. See how if you can get the next hight score!',
		tech: 'HTML, CSS, Phaser, JavaScript',
		github: 'https://github.com/JoscelynJames/MilkyWayBattles',
		deployed: 'https://milky-way-battles.firebaseapp.com/',
		img: milkyway,
	},
	{
		name: 'Where\'s my Bird App?',
		className: 'petapp',
		desc: 'I never miss out on anything my bird is doing. A video streaming app that allows me to view and track my bird.',
		tech: 'Raspberry Pi, motion, ffmpeg, Nginx, Golang, React, Rechart.js',
		github: 'https://github.com/JoscelynJames/pet-app-react',
		deployed: 'https://wheres-my-pet-app.firebaseapp.com/',
		img: petapp,
	},
	{
		name: 'Grad Tracker',
		className: 'grad',
		desc: 'This app allows teachers to keep track the succsess of students after graduation with a quick text messaging survery.',
		tech: 'React, Node, Express, PostgreSQL, Twillio, Knex',
		github: 'https://github.com/lnchapin/GradTracker-frontend',
		deployed: 'https://gradtracker-9818d.firebaseapp.com/',
		img: gradTracker,
	},
	{
		name: 'Snow Globe SVG',
		className: 'snowglobe',
		desc: 'Animated snow globe for the holidays',
		tech: 'JavaScript, Anime, SVG, Adobe Illustrator',
		github: 'https://github.com/JoscelynJames/interactive-snow-globe',
		deployed: 'http://snowglobe-g59.surge.sh/',
		img: snowglobe,
	},
	{
		name: 'Sam\'s Lemonade',
		className: 'lemon',
		desc: 'Search a public address and see what incomming transactions you have.',
		tech: 'React, Redux, jest, Node, Express, PostgreSQL, GraphQL, Knex',
		github: 'https://github.com/JoscelynJames/sams-lemonade-standt',
		deployed: 'https://sams-lemonade-stand.firebaseapp.com/',
		img: lemon,
	},
	// {
	// 	name: 'Missy',
	// 	desc: 'SVG dog',
	// 	tech: ['JavaScript', 'Anime', 'SVG'],
	// 	github: false,
	// 	deployed: false,
	// 	img: missy,
	// },


];

export default projects;