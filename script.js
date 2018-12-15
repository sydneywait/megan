var meganObject = {
    firstName: "Megan",
    lastName: "Madden",
    favoriteMovies: ["Billy Madison", "Wreck-It-Ralph", "The Breakfast Club", "A Christmas Prince", "Harry Potter"],
    fullOfHolidayCheer: true,
    homeTown: "Huntington, WV",
    buildBioHTML: function(){
        movieList=""
        for(i=0;i<meganObject.favoriteMovies.length; i++){
            movieList = movieList + `<li>${meganObject.favoriteMovies[i]}</li>`

    }

    if(this.fullOfHolidayCheer===true){
        meganCheer=`Megan is definitely full of holiday cheer`
    }
    else{
        meganCheer=`Megan is a grinch`
    }
      HTMLString =
      `<h1>${this.firstName} ${this.lastName}</h1>
      <h3>Favorite Movies:</h3>
      <ul>${movieList}</ul>
      <p>${meganCheer}</p>
      <p>She is from ${this.homeTown}</p>`
      console.log(HTMLString);
      return HTMLString;
// document.querySelector("#personal-website").innerHTML=HTMLString;

    }
}
myReturnedHTML = meganObject.buildBioHTML();




// Fill in the buildBioHTML method
// This method should build an HTML string that represents the data you collected. Your HTML string should have:
// An h1 element with your partner's full name
// A bulleted list (ul) with a li element for each of their favorite movies. (Use a for loop to build this part of the HTML string!)
// A sentence about whether or not they're full of holiday cheer. (Example: "Definitely full of holiday cheer" or "Not at all full of holiday cheer". Please don't print just "true" or "false".)
// A p element with their hometown.
// This method should return the HTML string.
// Call (invoke) the buildBio method and store the returned HTML string in a variable.
// Print your HTML string to the DOM
// In your JavaScript file, below the object you built, copy and paste the following function:
function printToDOM(htmlString, idOfElement){
     var element = document.querySelector(`#${idOfElement}`);
     element.innerHTML = htmlString;
}
printToDOM(myReturnedHTML, "personal-website")
// Call (invoke) the printToDOM function. You should pass in the HTML string you built with your buildBio method the id of the element you want to print to.