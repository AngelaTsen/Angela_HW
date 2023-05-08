
const inputSearch = document.getElementById('input-search');
const buttonSearch = document.getElementById('search');

buttonSearch.addEventListener('click', () => {
    const filmQuery = inputSearch.value;
    console.log(filmQuery);
    const divElement = document.getElementById('container');
    divElement.innerHTML = '';

fetch('https://api.themoviedb.org/3/search/movie?api_key=684ecd12253bde93eb817856fa49084b&query='+filmQuery)
    .then(response => response.json())
    .then(data => {
        if(data.results.lenght === undefined){
        divElement.innerHTML = 'Нічого не знайдено :(';
        }

console.log(data);
data.results.forEach(function(film) {
        console.log(film.title);
        const newElement = document.createElement('div'); 
        newElement.textContent = film.title; 
        divElement.appendChild(newElement)
        });
})
    .catch(error => {
      console.error('Сталася помилка:', error);
    });


  });
