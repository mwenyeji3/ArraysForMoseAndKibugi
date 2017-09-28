//PROBLEM
//Given an array and an integer, rotate the array so that the item
//at any position will move to a new position n times further.
// Meaning each value should move n times

var rotateArrayLeft = function (array, n) {
  //TODO
}

//Test
//var testArray = [1,2,3,4,5,6,7,8,9];

var rotateArrayLeft = function (array, n) {
  
var count = [];

for ( var i = 0 ; i < array.length ; i++){

	var newIndex = ((i + n) % array.length);
	

		count.push(array[newIndex])
}

//changing the whole array to even numbers;

//changed the whole array odd number that are greater than 6

return count.filter((parse)=>parse % 2 !== 0).filter((mose)=> mose > 6 )


};
  
console.log(rotateArrayLeft([1,2,3,4,5,6,7,8,9],6));






 // Should log [ 7, 8, 9, 1, 2, 3, 4, 5, 6 ]
