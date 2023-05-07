fetch('https://api.themoviedb.org/3/search/movie?api_key=684ecd12253bde93eb817856fa49084b&query=batman')
.then(response => response.json())
.then(data => {
  console.log(data);
  
})
.catch(error => {
  console.error('Сталася помилка:', error);
});


fetch(apiURL)
  .then(response => response.json())
  .then((data) => data);
  
  const postsWrapper = document.body.querySelector('#postsWrapper');

