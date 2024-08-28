// jquery
// $('.search-btn').on('click', function(){
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=3ed17ff1&s=' + $('.input-keyword').val(),
//         success: response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);

//             // ketika tombol detail di klik
//             $('.modal-detail-button').on('click', function(){
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=3ed17ff1&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);

//                     $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// });

// fetch
// const searchBtn = document.querySelector('.search-btn');
// searchBtn.addEventListener('click', function(e){

//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=3ed17ff1&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCards(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // ketika tom'bol 'detail di klik
//             const modalDetailBtn = document.querySelectorAll('.modal-detail-button');
//             modalDetailBtn.forEach(btn => {
//                 btn.addEventListener('click', function() {
//                     const imdbid = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=3ed17ff1&i=' + imdbid)
//                         .then(response => response.json())
//                         .then(m => {
//                             const movieDetail = showMovieDetail(m);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail;
//                     });
//                 });
//             });
//         });
// });

// async await
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", async function () {
    try {
        const inputKeyword = document.querySelector(".input-keyword");
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch (error) {
        // console.log(error);
        alert(error);
    }
});

function getMovies(keyword) {
    return fetch("http://www.omdbapi.com/?apikey=3ed17ff1&s=" + keyword)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then((response) => {
            console.log(response);
            if (response.Response === "False") {
                throw new Error(response.Error);
            } else {
                return response.Search;
            }
        });
}

function updateUI(movies) {
    let cards = "";
    movies.forEach((m) => (cards += showCards(m)));
    const movieContainer = document.querySelector(".movie-container");
    movieContainer.innerHTML = cards;
}

// batas terpisah dari semua func ambil API
// ketika tombol detail di klik
// event binding
document.addEventListener("click", async function (e) {
    try {
        if (e.target.classList.contains("modal-detail-button")) {
            const imdbid = e.target.dataset.imdbid;
            const movieDetail = await getMoviedetail(imdbid);
            updateUIDetail(movieDetail);
        }
    } catch (error) {
        // console.log(error);
        alert(error);
    }
});

function getMoviedetail(imdbid) {
    return fetch("http://www.omdbapi.com/?apikey=3ed17ff1&i=" + imdbid)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then((m) => m);
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = movieDetail;
}

function showCards(m) {
    return `<div class="col-md-4 my-5">
                <div class="card" >
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">${m.Title} (${m.Year})</li>
                            <li class="list-group-item"> <strong>Diretor :</strong> ${m.Director}</li>
                            <li class="list-group-item"><strong>Actors: </strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer: </strong> ${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot: </strong> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}
