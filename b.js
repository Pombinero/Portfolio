//create an array with 4 values//
let myArray = [21, 45, 91, 20];

//one parameter that adds one//
let Increase = function(num)
{
    console.log(num + 1);
}

//two parameters//
function oddNumber (funcExpression, number)
{
    if (number % 2 === 0) {
        funcExpression(number);
    }
    else
    {
console.log("The number is odd");
    }
}

// For-in loop//
for (let index in myArray) {
    oddNumber(Increase, myArray[index]);
}