// DONE:    the renderMovies() function that will take in an 
//          array of movie objects and return a string of HTML 
//          that looks like the HTML in the movie <div>     
// TODO:    implement a feature that allows users to save movies
//          to their "watch list"

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('search-form').addEventListener('input', searchMovies)
    document.getElementById('search-form').addEventListener('submit', searchMovies)

    function searchMovies(search) {
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

    function renderMovies (movieArray) {
        var finalHTML = ''
        var moviesHTML = movieArray.map(function (currentMovie) {
            var movieHTML =
            `<div class="movie card" style="width: 20rem">
                <img class="card-img-top" src=${currentMovie.Poster}>
                <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}<span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                    <a href="#" class="btn btn-primary">Add!</a>
                </div>
            </div>`
            return movieHTML
        })
        finalHTML += moviesHTML.join('')
        return finalHTML
    }    
    var moviesFinalHTML = renderMovies(movieData)

    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault()
        $('#movies-container').html(moviesFinalHTML)
    }) 
})