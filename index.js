// "COMPOSE FUNCTION"
// In normal cases when we want to compse functions
function removeSpace(string){
    // removes all the space characters from the string
    // then join them using "_"
    return string.split(" ").join("_");
    //'Hi_there_how_r_u'
}

function repeatString(string){
    // join 2 strings
    return string+string;
    // 'Hi there how r uHi there how r u'
}

function toUpperCase(string){
    // convert the given string to upper case
    return string.toUpperCase();
}

let string = "Hi there how are you"
const result1 = removeSpace(string);
const result2 = repeatString(result1);
const result3 = toUpperCase(result2);
// expected result
console.log(result1, "\n", result2, "\n", result3);
console.log("\n");

// passing functions into functions
console.log(toUpperCase(repeatString(removeSpace(string))));
console.log("\n");

// With the help of redux function compose we can do the above desired task as follows
import { compose } from "redux";
// note: maintain the order of functions in the compose function
// use this when u want to use one function result as an input next function
const composedFunction = compose(removeSpace, repeatString, toUpperCase);
console.log(composedFunction(string)); // f(g(h(x)))
