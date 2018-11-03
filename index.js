// TODO:    the renderMovies() function that will take in an 
//          array of movie objects and return a string of HTML 
//          that looks like the HTML in the movie <div>     

document.addEventListener('DOMContentLoaded', function() {   


    function renderMovies (movieArray) {
        var finalHTML = ''
        var moviesHTML = movieArray.map(function (currentMovie) {
            var movieHTML =
            `<div class="movie card" style="width: 18rem">
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