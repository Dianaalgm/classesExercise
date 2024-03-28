//FIRST QUESTION : Create a function that will merge two arrays and return the result as a new array
function mergeArr(firstArr,secArr){
//create a const to store the merged array in
    const mergedArray = []
//push the first array in the new one
    for (const element of firstArr){
        mergedArray.push(element);
    }
//push the second array in the second one
    for (const element of secArr){
        mergedArray.push(element);
    }
//return the new array
    return mergedArray;
}
//create values of the two arrays 
    const firstArr = [1,2,3];
    const secArr = [4,5,6];
    const mergedArray = mergeArr(firstArr,secArr)
    console.log(mergedArray);


//SECON QUESTION : Create a function that converts a string to an array of characters
    function str(myString){
//split the string and set it equal to a new array
    const newArray = myString.split();
//return the new array
    return newArray;
}
//define a string 
    const myString = 'Hello there!' ; 
//set the function equal to the new array
    const newArray = str(myString);
    console.log(newArray);

/* THIRD QUESTION: BONUS Find the frequency of characters inside a string. 
Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.*/


// Classes Excersize//
 
class Humans {
    constructor (canBreathe, legs, arms ){
    this.canBreathe = true;
    this.legs = 2;
    this.arms = 2;
    }
}
 let Mom = new Humans ("","","");
 console.log(Mom)