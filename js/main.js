// first, retrieve all HTML elements with class = js-search
// and store into variable as jQuery object
const search = $('.js-search');
const buttonSearch = $('.js-reset');

// set up a keypress event handler on the jQuery object that we selected
search.keypress(onKeyPressed);
buttonSearch.click(onKeyPressed);


//??can't get search buttont to work

//1. set up search button
//2. wrap images in clear fix...


//clear search field on button press

$('.js-reset').click(function(onKeyPressed){
        $('input[type="text"]').val('');
});


//not sure how to run function on button press as well as enter press???

function onKeyPressed(e) {
	if (e.which === 13) {

	const currentElement = $(this);

	const queryString = currentElement.val();

	
	console.log('enter key pressed', queryString)

	//skip the updating of the label for now...


	const container = $('.js-container');
	container.html('');

	const urlToRequest = `http://www.omdbapi.com/?t=${queryString}&tomatoes=true&y=&plot=short&r=json`;
	console.log(urlToRequest)

	const data = $.get( urlToRequest );
	
	data.then(onDataBack);
	
	}
}



// const randomNum = $('.js-random');
// randomNum.html('');
// randomNum.append(randomNum);

//clear search field

$('.js-reset').click(function(){
        $('input[type="text"]').val('');
 		const movieData = $('.js-container');
		movieData.html('');
});

// $('.js-search').click(function(onDataBack){
//   //       $('input[type="text"]').val('');
//  	// 	const movieData = $('.js-container');
// 		// movieData.html('');
// });


// function getMovieByTitle(title){
// 	const urlToRequest = `http://www.omdbapi.com/?t=${title}&tomatoes=true&y=&plot=short&r=json`;
// 	console.log(urlToRequest)

// 	const data = $.get( urlToRequest );

// 	data.then(onDataBack);
// }

let tomatoRating;

function onDataBack(response) {
	console.log('data is back!')
	console.log(response);

	//removed .js-movie-data and put in js-conatimer
	const movieData = $('.js-container');
	movieData.html('');
	 // if (typeof response === "undefined" || typeof p2 === "undefined") {
  //       alert("movie by that name not found");

  //   }

//posts movie poster
	const moviePoster = response.Poster;
	console.log(moviePoster);
	const movieHtml = `<img src="${moviePoster}">`;

//posts RT rating
	tomatoRating = response.tomatoMeter;
	// const tomatoMeter = parseInt(response.tomatoMeter, 10);
	console.log(tomatoRating);

	// const tomRate = `<div>Rotten Tomato sore: ${tomatoRating}</div>`;

//posts movie release date
	// const tomatoYear = response.Year;
	// console.log(tomatoYear);
	// const tomYear = `<div>Year released: ${tomatoYear}</div>`;

//posts movie plot
	// const tomatoPlot = response.Plot;
	// console.log(tomatoPlot);
	// const tomPlot = `<div>Plot: ${tomatoPlot}</div>`;

//rules of the game
	const tomRules = `<div class="js-label">click rotten image if score is less than 50, tomato if above</div>`;


//posts rotten image
	const rottenImg = `<img src="images/rotten.png">`;
	// console.log("rottenImg");
	// const tomRotten = `${rottenImg}`;
	const tomRotten = `<div class="js-rotten-button">${rottenImg}</div>`;
	// console.log("tomRotten");

//posts fresh image
	const freshImg = `<img src="images/fresh.png">`;
	// console.log("freshImg");
	// const tomFresh = `${freshImg}`;
	const tomFresh = `<div class="js-fresh-button">${freshImg}</div>`;
	// console.log("tomFresh");

	movieData.append(movieHtml, tomRules, tomRotten, tomFresh);
	// movieData.append(tomatoRating);
}




//bind images with js and .clickevent

const rottenGuess = $('.js-button-choice');
rottenGuess.click(imageEnter);

$('body').on('click', '.js-rotten-button', imageEnter);

function imageEnter(e){
	
	if (tomatoRating < 50){
		$('.js-label').text("correct!");
	console.log('correct');
	} else {
		$('.js-label').text("wrong!");
	console.log('wrong');
	}

};



$('body').on('click', '.js-fresh-button', imageEnterFresh);

function imageEnterFresh(e){
	
	if (tomatoRating >= 50){
		$('.js-label').text("correct");
	console.log('correct');
	} else {
		$('.js-label').text("wrong");
	console.log('wrong');
	}
};


///how to set up a functionthat grabs the score

//then determines what 

///how to get the actual score

// function tomatoRatingScore(response) {
// 	const tomatoRating = response.tomatoMeter;
// 	console.log(tomatoRating);
// }
// if (tomatoRating >= 50) {
// 	console.log('movie is fresh');
//  } else {
//  	console.log('movie is rotten');
//  }








//can't get random number to generate as a score an be placed in html


//put icons under the movie photo
	// const rottenImg = <img src="http://www.billdamon.com/images/rottentomatoes/rotten.png">;
	// console.log(trottenImg);
	// const tomPlot = `<img src="http://www.billdamon.com/images/rottentomatoes/rotten.png">`;




		  
// 		 </p>
// 	`;

//  	const tomatoMeter = parseInt(response.tomatoMeter, 10);

//  	console.log(tomatoMeter, typeof tomatoMeter);


// 	generateGameScores(tomatoMeter);

// 	movieData.append(movieHtml);
// }


/*
// this function runs when the user initiates a keystroke on the
// jQuery object called `search`
function onKeyPressed(e) {
	// check the `which` property of our `e` object - the event object
	// if `e.which` is 13 then it is an enter key press
	if (e.which === 13) {
		// in here we initialize the logic for our giphy search engine program

		const currentElement = $(this);
		// ^^^ currentElement stores a jQuery object out of the
		// specific element that we have initiated the event on

		// now, grab the value of the current input field
		// so that we can...
		// use it in our GET request (ie: this queryString is what 
		// we will search for against the Giphy API)
		const queryString = currentElement.val();
		console.log('enter key pressed', queryString)


		// update the label, yo
		const label = $('.js-label');
		label.text(queryString);

		// the container stores the search results
		// however we are not sure if we are doing a search for
		// the first time or ten time...TBH, IDGAF
		// we just want to clear it every time a search occurs
		const container = $('.js-container');
		container.html('');

		// assemble the correct api endpoint that we need to make a request to the giphy api
		// NOTICE the querystring in the urlToRequest wrapped in the ${}
		const urlToRequest = `http://api.giphy.com/v1/gifs/search?q=${queryString}&api_key=dc6zaTOxFJmzC`;
		console.log(urlToRequest)

		// we are now storing into the variable `data` an object
		// that represents our network request to the Giphy API
		const data = $.get( urlToRequest );

		// WHEN the network request comes back, THEN the `data` object
		// will run our `onDataBack` function to handle the successful response
		data.then(onDataBack);
	}
}

// this function will run WHEN the network request returns **successfully**
function onDataBack(response) {
	console.log('data is back!')
	console.log(response);

	// get the container in jQuery
	const container = $('.js-container');

	// `response.data` is...
	// an array. AN array is a list of things that are similar in nature
	// the `forEach` is a function that will run on EACH item in our array
	response.data.forEach(eachDataItem);


	// this is the function that we are calling from our `forEach`
	function eachDataItem(currentItem) {
		// `currentItem` = response.data[0] or response.data[1]
		// for each `currentItem`, grab the downsized image url
		const url = currentItem.images.downsized_large.url;
		console.log(url)

		// create a string that is an img tag
		const imgTag = `<img class="search-img" src="${url}">`;
		console.log(imgTag)
		
		// insert it into the container for esults
		container.append(imgTag)
	}
}

*/