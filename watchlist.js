// ------------------------------------------------------------------------
// ******************************INITIALIZATION****************************
// ------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', initSaved)

function initSaved () {
    var rawWatchlist = localStorage.getItem('watchlist')
    var savedWatchlist = JSON.parse(rawWatchlist)
    console.log(savedWatchlist)
    document.getElementById('movies-container').innerHTML = renderSavedMovies(savedWatchlist)
}

// ------------------------------------------------------------------------
// ******************************RENDERING****************************
// ------------------------------------------------------------------------

function renderSavedMovies (movieArray) {
    var finalHTML = ''
    var moviesHTML = movieArray.map(function (currentMovie) {
        var movieHTML =
        `<div class="movie card" style="width: 20rem">
            <img class="card-img-top" src=${currentMovie.Poster}>
            <div class="card-body">
                <h5 class="card-title">${currentMovie.Title}<span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                <button class="btn btn-primary" onclick="#')">Watch movie!</button>
            </div>
        </div>`
        return movieHTML
    })
    finalHTML += moviesHTML.join('')
    return finalHTML
}

// ------------------------------------------------------------------------
// ******************************EVENTS****************************
// ------------------------------------------------------------------------

function clearWatchlist () {
    localStorage.setItem('watchlist', null)
    console.log(localStorage.getItem('watchlist'))
    location.reload()
}