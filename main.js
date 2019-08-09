//create empty array to push individual letters tot hat array using CharCode and a "for loop"
const alphabet = [];
for (i = 97; i <= 122; i++) {
    let arrayLetter = String.fromCharCode(i);
    alphabet.push(arrayLetter);
}
let wrongLettersArray = [];

//this is where the different words for the game can be entered
let wordsArray = ['movie', 'heyguys', 'another', 'lastone', 'jkone', 'hat', 'cool', 'nerd'];

//divide the words into more managable pieces
let lettersArray = [];
for (i = 0; i < wordsArray.length; i++) {
splitStringArray = wordsArray[i].split('');
lettersArray.push(splitStringArray);
};

//Now the "lettersArray" array is an array of arrays.
//The individual arrays inside this multi-dimensional array contain
//  individual letters that represent each letter of the chosen word.
let getRandomWordIndex = function () {
    let randomWordIndex = (Math.floor(Math.random() * (lettersArray.length)));
    return randomWordIndex
};

//Now we have a function that can return a random index number that is related to the
//  length of the "lettersArray" array.
//we can use this to choose a random array within that array
let randomWordArray = lettersArray[getRandomWordIndex()];

console.log(randomWordArray);

let createBank = function () {
    for (i=0; i < alphabet.length; i++) {
        let alphabetLetters = document.createElement('div');
        document.getElementById('letterBank').appendChild(alphabetLetters);
        alphabetLetters.id = "letter-" + i;  
        alphabetLetters.className = "letters";
        alphabetLetters.innerText = alphabet[i];
    };
};
createBank();

let createRightBoxes = function () {
    for (i = 0; i < randomWordArray.length; i++) {    
        let rightBoxes = document.createElement('div');
        let rightContainer = document.getElementById('rightContainer');
        rightContainer.appendChild(rightBoxes);
        rightBoxes.id = 'right-' + i;
        rightBoxes.className = 'right';
    }
};
createRightBoxes();


//This is where we control the flow. When i get home create div elements in the dom
//  to represent correct letter choices.

//"this" will refer to the button that was clicked in this function.
let addButtonFunction = function () {       
    for (i = 0; i < randomWordArray.length; i++) {
        if (this.innerText == randomWordArray[i]) {
            let correctDiv = document.getElementById('right-' + i);
            correctDiv.innerText = randomWordArray[i];           
        }       
    };
    for (i = 0; i < randomWordArray.length; i++) {
        if (this.innerText == randomWordArray[i]) {
            this.innerText = '!';
            //this.style.textDecoration = 'line-through';
            this.style.color = 'purple';            
            return console.log('Match!');
        };
    };                       
    
    if (this.innerText === '!') {
        alert('you done picked this letter already')
        return console.log('you done picked this letter already');
    }; 
    //console.log('Wrong!');
    if (this.innerText !== 'X' && this.innerText !== 'Z') {
    //This is the area where we will grant the ability to change the image displayed    
    wrongLettersArray.push(this.innerText);
    wrongIdNumber = (wrongLettersArray.length - 1);
    losingImage = document.getElementById('mainImage')
    losingImage.src = ("images/image-" + wrongIdNumber + ".png")
    currentWrongDiv = document.getElementById('wrong-' + (wrongIdNumber));
    currentWrongDiv.innerText = this.innerText;       
    this.style.color = 'purple';
    console.log('wrong');

    return this.innerText = 'X';
    };
    
    if (this.innerText == 'Z') {
        return
    };
    alert('you done picked this letter already');
    return console.log('you done picked this letter already');       
};


let checkWin = function () {
    for (i = 0; i < randomWordArray.length; i++) {
        let rightBoxes = document.getElementById('right-' + i);
        //console.log("checks for undefined: " + rightBoxes)
        if (rightBoxes.innerText == false) {
            console.log('button is linked');
            return    
        };    
    };
    if (this.innerText == 'Z') {
        return console.log('stop messing with stuff and play a new game')
    }
    if (this.innerText !== 'Z') {
        let winningImage = document.getElementById('mainImage');
        winningImage.src = "https://atgbcentral.com/data/out/83/4656995-cool-background-pictures.jpg";
        for (i = 0; i < alphabet.length; i++) {    
            let letters = document.getElementById('letter-' + i);
            letters.style.color = 'white';
            letters.style.background = 'white';
            letters.innerText = 'Z';
        };
        //////If you can reload css.... put it here
        document.getElementById('letterBank').style.background = 'white';
        //document.getElementById('opener').style.marginLeft = '120px';
        //document.getElementById('mainImage').style.marginRight = '195px';
        alert('Good job! You Win!');
        console.log('good job');
        //console.log(this.innerText);
    };
    // if (this.innerText == 'Z') {
    // console.log('stop messing with stuff and play a new game');
    // };
};

console.log(document.getElementById('letter-' + 1).innerText)
let checkLose = function () {
    if (wrongLettersArray.length === 6) {
        if (this.innerText == 'Z') {
            console.log('stop messing with stuff and play a new game');
        };
        for (i = 0; i < alphabet.length; i++) {    
            let letters = document.getElementById('letter-' + i);
            letters.style.color = 'white';
            letters.style.background = 'white';
            letters.innerText = 'Z';
        };
        document.getElementById('letterBank').style.background = 'white';
                              
        // if (this.innerText == 'Z') {
        //     console.log('stop messing with stuff and play a new game');
        // }
        // for (i = 0; i < alphabet.length; i++) {
        //     let letters = document.getElementById('letter-' + i)
        //     letters.innerText = alphabet[i];
        //     letters.style.color = 'white'
            
        //console.log(document.getElementById('letter-' + i).innerHTML)
    };
    //console.log('you lose');
    //return alert('you lose')    
};

 

    //else {
     //   console.log('almost done');
      //  console.log(lastWrongBox.innerText);
    //


//console.log(String.valueOf('h'))

//let x = document.getElementById('right-1');

//console.log(x.valueOf())



//

for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', addButtonFunction);
};
for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', checkLose);
};
for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', checkWin);
};

