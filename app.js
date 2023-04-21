

// todo HW1
function reverse(...str){
    let joined = str.join(' ')
    let result = "";
   for (i = 0; i < joined.length; i++){
      result += joined[(joined.length - 1) - i];
   }
   return result;
}

console.log(reverse('hello', 'good', 'frontend'))

function reverseString(...string) {
    let a = string.join(' ')
  if (a === "")
    return "";
  else
    return reverseString(a.substr(1)) + a.charAt(0);
}

console.log(reverseString('banan','apple','orange'))

//todo HW2
function getNum(...numbers) {
    return numbers.reduce((a, b) => (a + b)) / numbers.length;
}
console.log(getNum(23,89,56,28,60,89))

//todo HW3
function getCoffee(){
    const drinkName = prompt('What do you want to drink?')
    if(drinkName === 'coffee'){
        const coffee = prompt('How do you want coffee, black or with cream?')
        coffee === 'black'
            ? alert('Your order is accepted')
            : coffee === 'with cream'
            ? alert('Your order is accepted')
            : alert("We don't have that coffee")
    } else {
        alert("We don't have")
    }

}

getCoffee()







