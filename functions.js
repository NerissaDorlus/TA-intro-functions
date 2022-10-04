//do something with no parameters

function sayHello(){
    console.log('Hello')
}
sayHello();


//do something with parameters

function greetPerson(name){
    console.log(`Hello ${name}. Welcome!`)
}

greetPerson('Giania');
greetPerson('Brad')

//returns something with no parameters

function addTwoPlusTwo(){
    return 2+2
}
console.log(addTwoPlusTwo());
const answer = addTwoPlusTwo();
console.log('Answer: ', answer);

//return something with parameters

function doubleMyNumber(number){
    return number * 2
}
console.log(doubleMyNumber(11))
