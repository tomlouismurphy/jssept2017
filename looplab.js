//for loop question #1

for (let i = 0; i <= 20; i++){
	console.log(i);
	if (i % 2 === 0) {
		console.log(i + ' is even');
	} else {
		console.log(i + ' is odd');
	}
};

//for loop question #2

let myBagOfBeans = 50;

for (let i = 100; i > 0; i--){
	if (i % 2 === 0) {
		myBagOfBeans += i;
	}
	console.log(myBagOfBeans)
}

//for loop question #3

const arr = ['cheese', 'pepperoni', 'sausage', 'coca cola', 'lemonade', 'dough', 'beer', 'wine', 'ranch', 'blue cheese', 'bbq sauce'];
const arrDrinks = [];
const arrFoods = [];
const arrSauces = [];

for (let i = 0; i < arr.length; i++){
	if (arr[i] === 'coca cola' || arr[i] === 'lemonade' || arr[i] === 'beer' || arr[i] === 'wine') {
		arrDrinks.push(arr[i]);
	} else if (arr[i] === 'ranch' || arr[i] === 'bbq sauce' || arr[i] === 'blue cheese'){
		arrSauces.push(arr[i]);
	} else {
		arrFoods.push(arr[i]);
	}
}

//for loop question 4

const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30];
const numbersArray = [];

for (let i = 0; i < mixedArray.length; i++){
	if (typeof mixedArray[i] === "number"){
		console.log(i);
		numbersArray.push(mixedArray[i]);	
	}
}

//for loop question 5

const food = ['bun', "jalepeno cheddar", "elk", "beef", "1954 ford mustang", 1.14, 1.23, 'hot dog', "gary clark jr", " I'lll never fall in love again", "mustard", "ketchup", 30, 50, 80, "grilled onions", "egg", "Dr. Suess"];
const dinner = [];

for (let i = 0; i < food.length; i++){
	if (food[i] === 'bun' || food[i] === "jalepeno cheddar" || food[i] === "elk" || food[i] === "beef" || food[i] === 'hot dog' || food[i] === "mustard" || food[i] === "ketchup" || food[i] === "grilled onions" || food[i] === "egg") {
		dinner.push(food[i]);
	}
}

//for in loop question 1

const colorObjects = {red: 'red', blue: 'blue', cyan: 'cyan'}

for (let temp in colorObjects){
	console.log(colorObjects[temp]);
};

//for in loop question 2

const seinfeld = {cosmo: "kramer", jerry: "Seinfeld", george: "constanza", elaine: "bennis"}

for (let x in seinfeld){
	console.log(seinfeld[x]);
}

//for in loop question 3

const profile = {name: "Elon Musk", occupation: "space man", hobbies: ["paypal", "space X", "rocket science"]}

for (let type in profile){
	console.log(profile[type]);
}

//part 3, question 1 - used for loop, as there are no objects within objects

const oldTime = ["benton flippen", "carter family", "roscoe Holcomb", "gus cannon", "Tommy Jarrell"];
for (let i = 0; i < oldTime.length; i++) {
	console.log(oldTime[i])
}

//part 3, question 2, used for in loop, as there are objects within objects

const sandwhich = {name: "sunday morning special", bread: "ciabatta", cheese: "pepper jack", green: "arugala", redStuff: "cherry tomatoes", heated: true}

for (let detail in sandwhich){
	console.log(sandwhich[detail]);
}

//part 3, question 3, used for loop, as there are no objects within objects

const zeppelin = ["In through the out door", "Zep 1", "Zep 2", "Zep3", "Zep4", "Physical Graffiti"]
for (let i = 0; i < zeppelin.length; i++) {
	console.log(zeppelin[i])
}