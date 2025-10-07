/*

This application uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.
*/

//Constant for options to use for the fetch function
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_BEARER //Your API Bearer
  }
};

// Links to use to fetch wanted data. 
// For other types see the documentation for developers at https://developer.themoviedb.org/docs/getting-started 
// Or also https://developer.themoviedb.org/reference/configuration-details

var page_number = 1;
const APILINK = 'https://api.themoviedb.org/3/discover/movie?page='+ page_number +'&sort_by=popularity.desc';

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?query=';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SPECS = "&include_adult=false&language=en-US&page="+page_number;const content_pane = document.getElementById("content-pane"); 
const form = document.getElementById("form");
const search = document.getElementById("query");
const lastSearch = "";
returnMovies(APILINK,OPTIONS);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  content_pane.innerHTML = '';  const search_item = search.value;
  if(search_item){
    returnMovies(SEARCH_API + search_item + SPECS, OPTIONS);
    lastSearch = search.value;
    search.value = "";
  };
});
  
  function returnMovies(url, OPTIONS){
  fetch(url, OPTIONS).then(res => res.json())
    .then(function (data){
      console.log(data.results);  data.results.forEach(element => {
    //Construct the card for the movie to be displayed in HTML

    const div_card = document.createElement("div");
    div_card.setAttribute("class", "card");

    const div_row = document.createElement("div");
    div_row.setAttribute("class", "row");

    const div_column = document.createElement("div");
    div_column.setAttribute("class", "column");

    const image = document.createElement("img");
    image.setAttribute("class", "thumbnail");
    //image.setAttribute("id", "image");

    const title = document.createElement("span");
    title.setAttribute("class", "movie-title")

    const card_image_span = document.createElement("span");
    card_image_span.setAttribute("class", "card-image");

    title.innerHTML =  `${element.title}`;
    if(element.poster_path !== null){
      image.src = IMG_PATH + element.poster_path;
    }else{
      image.src = "./src/Image_Missing.png"
    }

    card_image_span.appendChild(image);
    div_card.appendChild(card_image_span);
    div_card.appendChild(title);

    div_column.appendChild(div_card);
    div_row.appendChild(div_column);

    content_pane.appendChild(div_row);
    
  });
})
.catch(err => console.error(err));  
}

