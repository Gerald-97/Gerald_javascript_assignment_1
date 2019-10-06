/*****************************************
    This is an example of using comments
******************************************/

// 1.  Using the delete operator by index, produces a hole
var fruits = ["apple", "banana", "carrot", "dates", "eggs"];
var fruitsWithHole = delete fruits[0];

/* Using shift deletes from the front, in this case, 
    it removes the hole */
var fruitsWithoutHole = fruits.shift();

// 2. using a for loop in the array fruits to log the items in fruits
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
};

// The "for of" operator does the same  in a cleaner way (only for arrays)/
for (i of fruits){
    console.log(i);
};

// The "while" loop can do the same, careful! They can cause infinite loops
// use the break key to stop it before that happens or put an increment
var a = 0
while (a < 4){
    console.log(fruits[a]);
    a++;
};

// 3.  Fun fact, you can use backquotes `` to put in multiline strings, it retains the spaces
var testBackquote = `qwertyuioplkjhgfdssxcvbnm
        wertyuiolhgfdxcv.... 
        That's it`;

/**************************************************************
 * 
 *                   STRING OPERATIONS
 * 
 **************************************************************/

var testStr1 = "Feline";
var testStr2 = " is a kind of animal";

// 4. Some simple operations 
var testConcat = testStr1.concat(testStr2);
var testUpperCase = testConcat.toUpperCase();

// Converting string to Array using split. Include the factor of the split(e.g split at spaces)
var testArray = testConcat.split(" ");

// Using slice
var testSlice = testConcat.slice(0, 6);

// 5. You can convert numbers into any base, performing
var numB10 = 2048;

numB8 = numB10.toString(8);
numB16 = numB10.toString(16);
numB2 = numB10.toString(2);

/* Performing arithmetic opertions on it treats them as literal numbers 
because it takes them as strings, not base numbers.
 Here is interpretes 4000 - 800*/  
numB8and16 = numB8 - numB16;

// 6. Convert the strings to numbers by parseInt
num8 = parseInt(numB8);
num2 = parseInt(numB2);

// Back to arrays, push adds stuff to an array

var testArray2 = ["home", 255, true, "Ismail", 255, 36.54, "Bot"];
testArray2.push("false");

// 7. Splice inserts an item into the array at the specified location, 
//here its location index 2 and replacing 0 items in the array
testArray2.splice(2, 0, "Me");

// 8. Map allows you to create a copy of an array or object and perform a function on it
function allStrings(element){
    return(element.toString());
}
var testArray2ToString = testArray2.map(allStrings);

// 9. Filter allows you to isolate items that satisfy a particular criteria in an array
function stringFilter(element){
    return(element == "255");
}
var testArray2FilterString = testArray2ToString.filter(stringFilter);

// You can have a method in an object 

var profileInfo = {
    firstName: "Gerald", 
    lastName: "Kenechukwu", 
    age: 79, 
    notSick: true, 
    getStatus: function(){
        return(this.firstName + " " + this.lastName + " is healthy")
    }
};
//Calling this method with the bracket would run it, without it, it shows the definition.
profileInfo.getStatus();
