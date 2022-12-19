// Initiazling both scores
var homeScore = 0
var guestScore = 0

// calling both scores from HTML file
var homeEL = document.getElementById("home-el")
var guestEL = document.getElementById("guest-el")

// function for new game
function newGame(){
    var homeScore = 0
    var guestScore = 0
    homeEL.textContent = homeScore
    guestEL.textContent = guestScore
}

// function to add to home score
function homeAdd1(){
    homeScore += 1
    homeEL.textContent = homeScore
}
function homeAdd2(){
    homeScore += 2
    homeEL.textContent = homeScore
}
function homeAdd3(){
    homeScore += 3
    homeEL.textContent = homeScore
}

// function to add to guest score
function guestAdd1(){
    guestScore += 1
    guestEL.textContent = guestScore
}
function guestAdd2(){
    guestScore += 2
    guestEL.textContent = guestScore
}
function guestAdd3(){
    guestScore += 3
    guestEL.textContent = guestScore
}