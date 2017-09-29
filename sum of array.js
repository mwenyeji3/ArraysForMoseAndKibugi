var matrix = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
];

const sum = matrix.reduce( (a , b)=> a.concat(b)).reduce((a , b)=> a + b)

console.log(sum);



//create a function and return the sum of all numbers; // answer = 26