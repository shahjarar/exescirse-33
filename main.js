//TASK 33
// ORIDINAL  Numbers Ordinal numbers indicate thier position in a array, such as 1st or 2nd .most ordinal numbers end in   th except
// 1, 2. and 3.
//.Store the numbers 1 through 9 in a array.
// .loo thruogh the array .use an if else chain inside the loop to the print the propder oridinal ending for  each number .your output
// should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",and each result be on a separate line
// let numbers : number [] =[1,2,3,4,5,6,7,8,9]
// for (let number of numbers){
// 
// if (number === 1) {
//     console.log('$(numbers)st')//1st
// } else if (number === 2) {
//     console.log('$(numbers}nd)')//2nd
// } else if (number === 3) {
//         console.log('$(numbers}rd)')//3rd
//  } else if (number === 4) {
//             console.log('$(numbers}th)')//4th,5th ,6th, 7th ,8th ,9th
// }
// }
// Task 34
// pizza: think of at least three kinds of your favorite pizza. store these pizza names in a array, and then use a for loop to print
// the name of each pizza.
//.Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the prizza. for each 
//pizza you should have one line of output containing a simple statement like poppersonal pizza.
//.Add a line at the end of your program, outside the for loop, that states how much you like pizza. the output should consist
// of three or more lines about the kinds of pizza you like and then an additional sntence , such as I really love pizza!
// let favourite_pizza : string [] = ["poperoni","chicken" , "veg"]
// // for(let pizza of favourite_pizza) {
// //     console.log(pizza)
// // }
// // console.log ("\n")
// for (let pizza of favourite_pizza){
//     console.log('I really like $(pizza)pizza!')
// }
// console.log("nI really love pizza!")
// Task 35
//Animals :think of at least three different animals that have a common characteristic. store the names of these animals in a list,
//and then use a for loop to print put the each animals.Modify your program to print a statement about each animal, such
//as aA dog would make a great pet. Add a line at theend of your prfogram starting what these animals have in common .you could  print 
// a sentence such ad Any of these animals would make a great pet!
var animals = ["cat", "lion", "dog"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\n");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log(' A $(animal) has a long tail');
}
console.log("\n all of these are great pets! but i love cats more");
