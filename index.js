const API_KEY ='9114587316e6f7452fef68901559ec86';
const BASE_URL='https://api.themoviedb.org/3/search/movie?';
const API_URL= BASE_URL+ API_KEY+'&query=ALL';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';
// const searchURL = BASE_URL + '/search/movie?'+API_KEY;
let query = "All"
let URL = `${BASE_URL}api_key=${API_KEY}&query=${query}`
console.log(URL)

let search = document.getElementById('search') 
console.log(search)


getmovies(URL);



function getmovies(URL){
    fetch(URL).then(res => res.json()).then(data=>{
        console.log(data.results);
        showmovies(data.results);
    })
}

   function showmovies(data){
       main.innerHTML='';

    data.forEach(movie=>{
        const {title,poster_path,vote_average,overview}= movie;
        const movieE1=document.createElement('div');
        movieE1.classList.add('movie');
        movieE1.innerHTML = 
        ` <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getColor(vote_average)}">${vote_average}</
          span>
        </div>
        <div class="overview">
          <h3>overview</h3>
          ${overview}
        </div>
        `
        
        main.appendChild(movieE1);
        

    })
}
function getColor(vote){
    if(vote>=8){
    return'green'
     }else if(vote >=5){
        return'orange'
     }else{

            return 'red'
        }
}
form.addEventListener('submit',(e) => {
    e.preventDefault();

    const searchTerm = search.value;
    console.log(searchTerm)
    if(searchTerm){
        query =searchTerm
         URL = `${BASE_URL}api_key=${API_KEY}&query=${query}`
        // console.log(query,URL)
        getmovies(URL)
    }else{
        
        getmovies(URL);
    }

    
    

})