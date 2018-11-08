// ------------------------------------------------------------------------
// ******************************INITIALIZATION****************************
// ------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', init)

function init () {
    document.getElementById('search-form').addEventListener('submit', function(e) {
        e.preventDefault()
        document.getElementById('movies-container').innerHTML = renderMovies(movieData)
    })
    document.getElementById('search-form').addEventListener('input', searchMovies)
    document.getElementById('search-form').addEventListener('submit', searchMovies)
}

// ------------------------------------------------------------------------
// ******************************RENDERING****************************
// ------------------------------------------------------------------------

function renderMovies (movieArray) {
    var finalHTML = ''
    var moviesHTML = movieArray.map(function (currentMovie) {
        var movieHTML =
        `<div class="movie card" style="width: 20rem">
            <img class="card-img-top" src=${currentMovie.Poster}>
            <div class="card-body">
                <h5 class="card-title">${currentMovie.Title}<span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                <button class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Save To Watchlist</button>
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

function searchMovies (search) {
    var searchString = search.target.value.toLowerCase()
    var filterMovies = movieData.filter(function (movies) {
        var searchName = movies.Title.toLowerCase().indexOf(searchString) > -1
        var searchDate = movies.Year.toLowerCase().indexOf(searchString) > -1
        return searchName || searchDate
    })
    if (search.target.value === ''){
        searchContainer.innerHTML = renderMovies(movieData)
    } else {
        searchContainer.innerHTML = renderMovies(filterMovies)
    }
    renderMovies(movieData)
}

function saveToWatchlist (imdbID) {
    var movie = movieData.find(function (currentMovie) {
        return currentMovie.imdbID == imdbID
    })
    var watchlistJSON = localStorage.getItem('watchlist')
    var watchlist = JSON.parse(watchlistJSON)
    if (watchlist == null) {
        watchlist = []
    }
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)
    console.log(imdbID)
}