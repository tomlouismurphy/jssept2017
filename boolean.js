//Boolean

let doorsOpen = true;

doorsOpen = !doorsOpen
// doorsOpen is now false

1 > 2
1 < 2
1 >= 2
1 <= 2

1 === 1
//triple equals is more strict; even checks datatype

1 == 1
//double equals is less strict

//conditionals
if(a > 2){
	console.log(a + ' is > 2')
} else{
	console.log(a + ' is less than 2')
}

if(a > 2){
	console.log(a + ' is > 2')
} else if (a === 2){
	console.log(a + ' equals 2')
}
else{
	console.log(a + ' is less than 2')
}

const input = '';
const username = input || "ewgiaherogearh";