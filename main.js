//create empty array to push individual letters tot hat array using CharCode and a "for loop"
const alphabet = [];
for (i = 97; i <= 122; i++) {
    let arrayLetter = String.fromCharCode(i);
    alphabet.push(arrayLetter);
}
let wrongLettersArray = [];
let rightLettersArray = [];
//this is where the different words for the game can be entered
const wordsArray = ['movie', 'heyguys', 'another', 'lastone', 'jkone', 'hat', 'cool', 'nerd'];
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
console.log(randomWordArray.join(''));
//Now create bank based on alphabet length and set text value equal to counterpart
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
//create right divs that change based on randomWordArray length.  Use loop to name Id's
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
//This is where we control the flow. 
//"this" will refer to the button that was clicked in this function.
//Three options here. Letter matches and goes to right divs, wrong and goes to bottom divs, or nothing ith the
//  letter was chosen already.
let addButtonFunction = function () {       
    for (i = 0; i < randomWordArray.length; i++) {
        if (this.innerText == randomWordArray[i]) {
            let correctDiv = document.getElementById('right-' + i);
            rightLettersArray.push(this.innerText);  
            correctDiv.innerText = randomWordArray[i];          
        }       
    };
    for (i = 0; i < randomWordArray.length; i++) {
        if (this.innerText == randomWordArray[i]) {
            this.innerText = '!';
            this.style.color = 'black';            
            return console.log('Match!');
        };
    };                       
    if (this.innerText === '!') {
        alert('you done picked this letter already')
        return console.log('you done picked this letter already');
    }; 
    if (this.innerText !== 'X' && this.innerText !== 'Z') {
    //This is the area where we will grant the ability to change the image displayed    
    wrongLettersArray.push(this.innerText);
    wrongIdNumber = (wrongLettersArray.length - 1);
    losingImage = document.getElementById('mainImage')
    losingImage.src = ("images/image-" + wrongIdNumber + ".png");
    currentWrongDiv = document.getElementById('wrong-' + (wrongIdNumber));
    currentWrongDiv.innerText = this.innerText;       
    this.style.color = 'black';
    console.log('Wrong!');
    return this.innerText = 'X';
    };    
    if (this.innerText == 'Z') {
        return
    };
    alert('you done picked this letter already');
    return console.log('you done picked this letter already');       
};
//make function to check if winning conditions have been met each time a button is clicked.
let checkWin = function () {
    for (i = 0; i < randomWordArray.length; i++) {
        let rightBoxes = document.getElementById('right-' + i);
        if (rightBoxes.innerText == false) {
            return    
        };    
    };
    if (this.innerText == 'Z') {
        return console.log('stop messing with stuff and play a new game')
    }
    let scoreboard = document.getElementById('scoreboardWin')
    let scoreboardText = scoreboard.innerText;
    let scoreboardValue = parseFloat(scoreboardText);
    scoreboard.innerHTML = scoreboardValue + 1;
    let winningImage = document.getElementById('mainImage');
    winningImage.src = "images/winningImage.jpg"
    for (i = 0; i < alphabet.length; i++) {    
        let letters = document.getElementById('letter-' + i);
        letters.style.color = 'black';
        letters.style.background = 'black';
        letters.innerText = 'Z';
    };
    document.getElementById('letterBank').style.background = 'black';
};
//Make function to see if losing conditions are met each time letter is pressed
let checkLose = function () {
    if (wrongLettersArray.length === 6) {
        if (this.innerText == 'Z') {
            return console.log('stop messing with stuff and play a new game');
        };
        let scoreboard = document.getElementById('scoreboardLose')
        let scoreboardText = scoreboard.innerText;
        let scoreboardValue = parseFloat(scoreboardText);
        scoreboard.innerHTML = scoreboardValue + 1;
        for (i = 0; i < alphabet.length; i++) {    
            let letters = document.getElementById('letter-' + i);
            letters.style.color = 'black';
            letters.style.background = 'black';
            letters.innerText = 'Z';
        };
        document.getElementById('imgContainer').style.backgroundImage = "url('images/gameOver.png')";
        document.getElementById('imgContainer').addEventListener('click', resetGame);
        document.getElementById('letterBank').style.background = 'black';                            
    };
};
let resetGame = function () {
    for (i = 0; i < alphabet.length; i++) {
        let letters = document.getElementById('letter-' + i);
        letters.innerText = alphabet[i];
        letters.style.color = 'white';
        letters.style.background = 'black';    
    };
    for (i = 0; i < randomWordArray.length; i++) {
        let rightDiv = document.getElementById('right-' + i);
        rightDiv.innerText = null;
    };
    for (i = 0; i < 6; i++) {
        let wrongDiv = document.getElementById('wrong-' + i);
        wrongDiv.innerText = null;
    };
    document.getElementById('imgContainer').removeEventListener('click', resetGame);
    document.getElementById('imgContainer').style.background = 'none';
    wrongLettersArray = []
    rightLettersArray = []
    startingImage = document.getElementById('mainImage');
    startingImage.src = "images/startingImage.png";
    document.getElementById('letterBank').style.background = 'black';
};
let getNewRandomWord = function () {
    //randomWordArray length is still the length of the current word until we change it on the next line
    for (i = 0; i < randomWordArray.length; i++) {
        let rightDiv = document.getElementById('right-' + i);
        rightDiv.remove();
    };
    for (i = 0; i < alphabet.length; i++) {
        let letters = document.getElementById('letter-' + i);
        letters.innerText = alphabet[i];
        letters.style.color = 'white';
        letters.style.background = 'black';        
    };
    for (i = 0; i < 6; i++) {
        let wrongDiv = document.getElementById('wrong-' + i);
        wrongDiv.innerText = null;
    };
    document.getElementById('imgContainer').style.background = 'none';
    document.getElementById('letterBank').style.background = 'black';
    randomWordArray = lettersArray[getRandomWordIndex()]
    createRightBoxes();
    wrongLettersArray = [];
    rightLettersArray = [];
    console.log(randomWordArray.join(''));
    startingImage = document.getElementById('mainImage');
    startingImage.src = "images/startingImage.png";
}; 
let changeLetterBackground = function () {
    this.style.cursor = 'default';
    this.style.backgroundColor = 'red';
    if (wrongLettersArray.length == 6) {
        return this.style.background = 'black';
    };
    if (rightLettersArray.length == randomWordArray.length) {
        return this.style.backgroundColor = 'black';       
    };
};
let revertLetterBackground = function () {
    for (i = 0; i < randomWordArray.length; i++) {
        if (wrongLettersArray.length == 6) {
            return this.style.background = 'black';
        }
        let rightBoxes = document.getElementById('right-' + i);
        if (rightBoxes.innerText == false) {
            this.style.backgroundColor = 'black'
        };    
    };
};
//Add event listners.  Use loop for letter bank.
for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', addButtonFunction);
};
for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', checkLose);
};
for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('click', checkWin);
};
for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('mouseover', changeLetterBackground);
};
for (i = 0; i < alphabet.length; i++) {
    document.getElementById('letter-' + i).addEventListener('mouseleave', revertLetterBackground);
};
document.getElementById('resetButton').addEventListener('click', resetGame);
document.getElementById('newWordButton').addEventListener('click', getNewRandomWord);