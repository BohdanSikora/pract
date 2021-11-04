
/*let potato = false;
let makar = true;
let grech = true;
if (potato) {
    console.log('You been a fat man')
} else if(makar) {
    console.log('You doble fat crazy man')
} else if (grech) {
    console.log('You greeat man')
} else {
    console.log('You hungry man')
}*/
/*let name1 = 'Bohdan'
if (name1 ==='Bohdan') {
    console.log('Hello Me', name1)
} else {'Hello stranger', name1};*/

/* let sheepCounted = 0;
while(sheepCounted < 10) {
    console.log ('I have counted ' + sheepCounted + ' sheep');
    sheepCounted++
}
console.log('zzaaazzzzz');*/

/*for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log('I have counted ' + sheepCounted + ' sheep   ')
}
console.log('sleepppppp')j
*/

/*let sayYouFuckingMud = 5
for(let i = 0; i < sayYouFuckingMud; i++) {
    console.log('Fuck Bitch')
}*/
/*let name3 = prompt("What's your name?");
console.log('Hello ' + name3)*/


/*let likesCats = confirm('Do you like cats?')
if(likesCats) {
    console.log('You are cool!')
}else {
    console.log('Go nax')
}




/*let animal = ['Lion', 'Cat', 'Dog', 'Flamingo', 'Snak']
for(let i = 0; i < animal.length; i++) {
    console.log('This zoo contains a ' + animal[i] + '.')
}
animal.join;
console.log(animal)
*/

/*let name2 = 'Animal'
for(let i = 0; i < name2.length;i++) {
    console.log('My name is '+ name2[i] + '.')
}*/

/*for (let x = 2; x < 10000; x = x * 2) {
    console.log(x)
}*/
/*let animals = ['Cat', 'Fish', 'Lemur', 'Komodo Dragon']
for( let i = 0; i < animals.length; i++) {
    console.log('Awesome ' + animals[i])
}*/
/*et alhabet = 'abcdefghijklmnopqrstuvwxyz'
let randomW = alhabet[Math.floor (Math.random() * alhabet.length)]
let randomString = '';
while(randomString.length <= 6) {
    randomString +=randomW
}
console.log(randomString)

*/
/*let input = 'javascript is awesome'
let output = ''
for (let i = 0; i<input.length; i++) {
    let symbol = input[i]
    switch (symbol) {
        case 'a': output += '4'; break;
        case 'e': output += '3'; break;
        case 'i': output += '1'; break;
        case 'o': output += '0'; break;
        case 't': output += '7'; break;
        default: output += symbol;
    } }

    */


    let words = [
        'javascript',
        'monkey',
        'amazing',
        'pancake'
    ]
    let word = words[Math.floor(Math.random() * words.length)]
    let aswerArrey = []
    for(let i = 0; i < word.length; i++) {
        aswerArray[i] = '';
    }
    let remainingLetters = word.length;
    while (remainingLetters > 0) {
    }
    alert (aswerArray.join('_'))

    let guess = prompt('Guasse a letter, or click Cancel')
    if(guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert ('Please enter a single letter')
    } else {

    
    for(let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            aswerArray[j] = guess;
            remainingLetters--;
        }
    }
}
alert(aswerArray.join(''))
alert('Good job! The aswer was' + word)