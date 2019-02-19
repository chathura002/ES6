import './main-styles.css'
//let Keyword

// for(let i= 0; i<45; i++){
// 			var div = document.createElement('div');
// 			div.onclick = function() {
// 				alert("you clicked on a box #" + i);
// 			};
// 			document.getElementsByTagName('section')[0].appendChild(div);
// 		}

//-----------------------------------------------------------------------
//Const key word

// const birthYear = 1983;
// var age = 2018 - birthYear;
// console.log(age);

// function coldEnough(deg) {
// 		   const freezingTemp = 32;
// 		   if (freezingTemp <= deg) {
// 		   	return deg + " is above freezing.";
// 		   } else {
// 		   	return deg + " is below freezing.";
// 		   }
// 		}

// 		console.log(coldEnough(40));
// 		console.log(coldEnough(12));
// 		console.log(coldEnough(-10));

//------------------------------------------------------------------------
//Template strings

// function prinatName(first_name){
// 	console.log(`Hello ${first_name}`)
// }

// prinatName("Kehan");

// function createEmail(firstName, purchase_price){
// 	var shipping = 5.95;
// 	console.log(
// 			`Hi ${firstName} Thanks for buying us! 
// 			Total: $${purchase_price}
// 			Shipping Cost: $${shipping}
// 			Grand Total: $${purchase_price+shipping}`
// 		)
// }

// createEmail('Kasthuri', 100);

//------------------------------------------------------------------------
//Spread operator
// var cats = ["Tabby", "Siamese", "Persian"];
// var dogs = ["Golden Retriever", "Pug", "Schnauzer"];

// var animals = ["Whale", "Giraffe", ...cats, "Snake", ...dogs, "Coyote"];

// console.log(animals);

//------------------------------------------------------------------------
//Map

// var course = new Map();
// course.set('react',{description: 'ui'});
// course.set('jest',{description: 'testing'});

// console.log(course);
// console.log(course.react);
// console.log(course.get('react'));

// var details = new Map([
// 		[new Date(), 'today'],
// 		['items', [1,2]]
// 	]);

// console.log(details.size);

// details.forEach(function(aaa){
// 	console.log(aaa);
// });


//------------------------------------------------------------------------
//Set

// var books = new Set();

// books.add('Pride and Prejudice');
// books.add('War and Peace');
// books.add('Oliver Twist')
// 	 .add('Shelok holms');

// console.log(books);
// console.log('How many books? ', books.size);
// console.log('has Oliver Twist? ', books.has('Oliver Twist'));
// console.log(books.delete('Oliver Twist'));
// console.log('has Oliver Twist? ', books.has('Oliver Twist'));

// var data = [4,2,4,4,2,5,1,6,7,5,6,8,2,7];
// 		var set = new Set(data);
// 		console.log('data.length', data.length);
// 		console.log('set.size', set.size);
// 		console.log('set.size', set);

//------------------------------------------------------------------------
//For-of loop

// for (let letter of 'Chathura'){
// 	console.log(letter);
// } 

// var topics = ['JS','Node','React']

// for(let topic of topics){
// 	console.log(topic);
// }

// var topics = new Map();
// topics.set('HTML','/path/html');
// topics.set('CSS','/path/css');
// topics.set('JS','/path/js');
// topics.set('Node','/path/node');

// for(let top of topics){
// 	console.log(top);
// }


// for(let top of topics.keys()){
// 	console.log(top);
// }

// for(let top of topics.values()){
// 	console.log(top);
// }

//-------------------------------------------------------------------------
//Enhancing object literals

// var cat = {
// 	meow(times){
// 		console.log("meow".repeat(times));
// 	},
// 	purr(times){
// 		console.log("purr".repeat(times));
// 	},
// 	snore(times){
// 		console.log("snore".repeat(times));
// 	},
// }

// cat.meow(3);
// cat.purr(4);
// cat.snore(5);

//-------------------------------------------------------------------------
//Arrow functions

// var studentList = students => console.log(students);

// studentList(['Joe','Karanthe','Paranthe','Suda']);

// var person = {
// 	first_name: "Chathura",
// 	actions: ['read','play','ski','cricket'],
// 	printActions(){
// 		this.actions.forEach((act) => {
// 			var str = this.first_name+ " likes to " + act;
// 			console.log(str);
// 		});
// 	}
// };

// person.printActions();

//--------------------------------------------------------------------------
//Destructuring assignment

// var [first,,,fourth,] = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"];
// console.log(firt);
// console.log(fourth);

// var {title,price} = {
// 	title: "Whopper",
// 	price: "9.90",
// 	description: "BK's best selling and favorite burger",
// 	ingredients: ["buns","whopper patty","salad","tomato","pickles"]
// };

// console.log(title);
// console.log(price);

// var vacation = {
// 			destination: "Chile",
// 			travelers: 2,
// 			activity: "skiing", 
// 			cost: 4000
// };

// function vacationMarketing({destination,activity}){
// 	return `Come to ${destination} and do some ${activity}`
// }

// console.log(vacationMarketing(vacation));

//--------------------------------------------------------------------------
//Generators

// function* director(){
// 	yield "Three";
// 	yield "Two";
// 	yield "One";
// 	yield "Action";
// }

// var action = director();

// console.log(action.next());
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);
// console.log(action.next().value);

//-----------------------------------------------------------------------------
//Symbols
// const id= Symbol();
// var courseInfo = {
// 	title: "ES6",
// 	topics: ['babel','syntax','classes'],
// 	id:'js-topics'
// }

// courseInfo[id]=22323;

// console.log(courseInfo);

//-----------------------------------------------------------------------------
//Iterators (Custom)

// var title = "ECMA";
// var iterateIt = title[Symbol.iterator]();


// function tableReady(arr){
// 	var nextIndex =0;
// 	return {
// 		next(){
// 			if(nextIndex < arr.length){
// 				return {value: arr.shift(), done:false}
// 			}else{
// 				return {done: true}
// 			}
// 		}
// 	}
// }

// var watchList = ["joe","Allan","Ranasinghe","Sam"];
// var iterateList = tableReady(watchList);
// console.log(watchList.length);

// console.log(`${iterateList.next().value}, your table is ready`);
// console.log(`${iterateList.next().value}, your table is ready`);
// console.log(`${iterateList.next().value}, your table is ready`);
// console.log(`${iterateList.next().value}, your table is ready`);
// console.log(`Is this done ? ${iterateList.next().done}`)

//-----------------------------------------------------------------------------
//Asynchronous Features
//Intro to promises

// const dealy = seconds =>{
// 	return new Promise((resolve,reject) => {
// 		if(typeof seconds !== 'number'){
// 			reject(new Error('Error'));
// 		} else{
// 			setTimeout(()=>resolve(`${seconds} second delay up`), seconds * 1000);
// 		}
		
// 	});
// };

// console.log("Zero seconds");
// dealy("10 MIN").then(msg=>msg.toUpperCase())
// 		.then(msg=> `${msg}!!!!`)
// 		.then(msg=>console.log(msg));
// dealy(1).then(msg=>msg.toUpperCase())
// 		.then(msg=> `${msg}!!!!`)
// 		.then(msg=>console.log(msg));


//-----------------------------------------------------------------------------
//Building promises

// const spacePeople = () => {
// 	return new Promise((resolve, reject)=>{
// 		const api = 'http://api.open-notify.org/astros.json';
// 		const request = new XLMHttpRequest();
// 		request.open('GET', api);
// 		request.onload = () => {
// 			if(request.status=== 200){
// 				resolve(JSON.parse(request.response));
// 			} else{
// 				reject(Error(request.statusText()))
// 			}
// 		};
// 		request.onerror = err => reject(err);
// 		request.send();
// 	});
// };

// spacePeople().then(
// 	spaceData => console.log(spaceData),
// 	err => console.error(new Error('Error Msg'))
// )

//-----------------------------------------------------------------------------
//Loading data with fetch
// fetch('http://api.open-notify.org/astros.json')
// .then(res => res.json())
// .then(console.log());


//-----------------------------------------------------------------------------
//Async and await

// const dealy = seconds => {
// 	return new Promise(
// 			resolve => setTimeout(resolve, seconds * 1000);
// 		)
// };

// const countToFive = async() => {
// 	console.log('Zero seconds');
// 	await dealy(1);
// 	console.log('One Second');
// 	await delay(2);
// 	console.log('Two Second');
// };

// countToFive();

//-----------------------------------------------------------------------------
//ES6 Classes

// class Vehicle{
// 	constructor(des, wheels){
// 		this.des = des;
// 		this.wheels = wheels;
// 	}
// 	describeYourself(){
// 		console.log(`I am a ${this.des} with ${this.wheels} wheels`);
// 	}
// }


// var myVehicle = new Vehicle();
// myVehicle.describeYourself("cool ski van", 4);

// class SemiTruck extends Vehicle{
// 	constructor(){
// 		super("semi truck", 18);
// 	}
// }

// var groceryStoreSemi = new SemiTruck();
// groceryStoreSemi.describeYourself();

//-----------------------------------------------------------------------------
//getters and Setters

var attendence = {
	_list: [],
	set addname(name){
		this._list.push(name);
	},
	get list(){
		return this._list.join(', ');
	}
};

attendence.addname = 'Kalana';
attendence.addname = 'Thumindu';
attendence.addname = 'Kumindu';
attendence.addname = 'Samith';
console.log(attendence.list);
console.log("sdsdsd ", attendence._list);


class Hike{
	constructor(distance, pace){
		this.distance = distance;
		this.pace = pace;
	}
	get lengthInHours(){
		return `${this.calcLength()} hours`;
	}
	calcLength(){
		return this.distance / this.pace;
	}
}

const mtTallac = new Hike(10, 2);
console.log(mtTallac.lengthInHours);