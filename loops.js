//loops

const arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
};

//write for loop to cycle through arr 
//and print out whether the number is odd or even

for (let i = 0; i < arr.length; i++){
	if (arr[i] % 2 === 0) {
		console.log('even')
	} else {
		console.log('odd')
	}
};

//write loop that will empty the array
//and leave message of each item leaving the array
//on each iteration of the loop

for (let i = (arr.length - 1); i >= 0; i--){
	console.log((arr[i]) + ' is leaving the array');
	arr.pop();
};

//looping through objects
//for in loop

const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle){
	console.log(turtle[temp])
};

//write a for in loop for turtleface
//on each key value pair, add the message cowabunga

const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle){
	turtle[temp] += ' cowabunga';
	console.log(turtle[temp]);
};