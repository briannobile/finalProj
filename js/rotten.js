function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}
const randomPosition = generateRandomNumberFromRange(0,3);
const currentScore = 65;
const scores = [];
if (randomPosition === 0) {
	scores[0] = currentScore;
	// console.log('choice 0 is correct');
} else {
	scores[0] = generateRamdomwithException(40, 100, currentScore);
}

if (randomPosition === 1) {
	scores[1] = currentScore;
} else {
	scores[1] = generateRamdomwithException(40, 100, currentScore);
}

if (randomPosition === 2) {
	scores[2] = currentScore;
} else {
	scores[2] = generateRamdomwithException(40, 100, currentScore);
}

if (randomPosition === 3) {
	scores[3] = currentScore;
} else {
	scores[3] = generateRamdomwithException(40, 100, currentScore);
}
console.log(scores, randomPosition);
const choiceA = $('.js-button-a');
choiceA.text(scores[0]);

const choiceB = $('.js-button-b');
choiceB.text(scores[1]);

const choiceC = $('.js-button-c');
choiceC.text(scores[2]);

const choiceD = $('.js-button-d');
choiceD.text(scores[3]);


function generateRamdomwithException(s, e, exc) {
	const randomA = generateRandomNumberFromRange(s, exc-1);
	const randomB = generateRandomNumberFromRange(exc+1, e);

	const randomC = generateRandomNumberFromRange(0,1);

	if (randomC === 0) {
		return randomA;
	}
	else {
		return randomB;
	}
}
// console.log(generateRamdomwithException(10, 40, 25));


// const A = generateRandomNumberFromRange(40, 100);
// const B = generateRandomNumberFromRange(40, 100);
// const C = generateRandomNumberFromRange(40, 100);
// console.log(A, B, C);


// const choiceA = $('.js-button-a');
// choiceA.text(A);

// const choiceB = $('.js-button-b');
// choiceB.text(B);

// const choiceC = $('.js-button-c');
// choiceC.text(C);


//put the actual tomatometer score in 

// const D = tomatoMeter:


//load the next movie from the OMDb...











// const choiceB = $('.js-button-b');
// choiceB.text('button b here');



// generate 3 random numbers betwttn 0-100


// const arr = []
// while(arr.length < 3){
//     const randomnumber = Math.ceil(Math.random()*100)
//     if(arr.indexOf(randomnumber) > -1) continue;
//     arr[arr.length] = randomnumber;
// }
// document.write(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// array numbers 0, 1, and 2 are where the values are stored?

// how to get into the choice fields????


///on selection of genre, choose a movie from the OMDb....

// ?????


///place real score into one of the choice fields, and mark as correct answet?



//if anwser is correct display message

//if incorrect display message


	//both messages have next button for selection of next movie or cancel
	//or go back to the home page







