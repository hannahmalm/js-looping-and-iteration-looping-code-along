// Code your solutions in this file
//Example from code along

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGift(gift) {
  // For Ruby or Pythonistas, note that the " is now a ` (back-tick)
  // We'll discuss interpolation in detail elsewhere, but note that
  // JavaScript uses ` like Ruby uses ".
  //open dom and nothice the scentence is written 3 times in the dom 
//   console.log(`Wrapped ${gift} and added a bow!`);
//   console.log(gifts.length)
  

// wrapGift(gifts[0]);
// wrapGift(gifts[1]);
// wrapGift(gifts[2]);

//structure of the loop 
// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   }


//Inside the loop, create a custom message for each name from the provided array, thanking that person for their gift.
// Collect the messages in an array and return this array.

//let age=40 is the initialization
//age < 40 is the condition
//age++ is the iteration 
// for (let age = 30; age < 40; age++) {
//     //loop body
//     console.log(`Im ${age} years old.`)
// }

// FOR loop
//build a function named writeCards()
//accepts two arguments - array of string and event name
//create a for loop with a counter starting at 0 
//The condition should halt the for loop after the last name in teh array is printed in loop body
//Find the length of the array for this
//inside loop body write a custom message - 'Thank you, Ada, for the wonderful birthday gift!`



//WHILE Loop
//while ([condition]) {
//     [loop body]
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     let i =0; // iniitlization moves outside body of loop
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow`);
//         i++; //iteration moves inside body
//     }
//     return gifts;
// }

// wrapGifts(gifts)


// describe( 'writeCards()', () => {

//     it( 'returns an array of thank you messages for each name provided to the function', () => {
//       expect( writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' ) )
//         .to.deep.eq( [ 'Thank you, Lisa, for the wonderful surprise gift!', 'Thank you, Kaitlin, for the wonderful surprise gift!', 'Thank you, Jan, for the wonderful surprise gift!' ] );
//     } );
//   } );


// names = ['Lisa', 'Kaitlin', 'Jan']
// events = ['surprise']

function writeCards(names, events) {
    let cards = [] //create a new array to hold the cards
    for (let i=0; i < names.length; i++) { //start at 0, iterate through length of array, iterate++
        cards.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`) //push this into 
    }
    return cards //return the array 
    // console.log(cards)
}



//Write wile function countDown() 
//takes positive integer
//starts from that number and counts down to zero using console.log();
// integer = [2,3,4,5]

integer = 10
function countDown(integer){
    while (integer > 0){
        console.log(integer);
        integer =- 1;
    }
    console.log(integer);
}



