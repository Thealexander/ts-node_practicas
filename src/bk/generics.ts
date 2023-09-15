import * as HeroClasses from "../classes/Hero";
import { powers } from "../data/power";
import { genericFunctionArrow, genericFunmction, printObjects } from "../genericss/generics";
import { Villian, Hero } from "../interfaces";

// console.log('Hola Mundo!');

// const ironman = new HeroClasses.Hero('Alex', 56, 45);

// //console.log(ironman);
// //console.log(powers)

// //Funciones genericas
// printObjects(123);
// printObjects(new Date());
// printObjects({ a: 1, b: 2, c: 3 });
// printObjects([1, 2, 3, 4, 5, 6, 7]);

// const name = 'Alexander';

// console.log(genericFunctionArrow(3.141618).toFixed(2))
// console.log(genericFunmction(name).toUpperCase())
// console.log(genericFunmction(new Date()).getDate())

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wnston Wilson',
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool).realName)