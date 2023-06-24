const resultsDiv = document.querySelector('#results');
const apiSearchForm = document.querySelector('#api-Search');
  
apiSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = encodeURI(e.target.search.value);
  console.log(query);
  resultsDiv.innerHTML = ''
  // fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`)
  //   .then(r => r.json())
  //   .then(show => {
  //     const episode = show._embedded.episodes[0]
  //     const elements = [
  //       createElement('h1', { textContent: show.name}),
  //       createElement('img', {
  //         src: show.image.medium,
  //         alt: `${show.name} poster`
  //       }),
  //       createElement('div', { innerHTML: show.summary})
  //       // display one episode
  //       // createElement('h2', { textContent: episode.name}),
  //       // createElement('img', {
  //       //   src: episode.image.medium,
  //       //   alt: `${episode.name} poster`
  //       // }),
  //       // createElement('div', { innerHTML: episode.summary})

  //     ]
  //     resultsDiv.append(...elements)
  //     // iterate to show all episodes
  //     show._embedded.episodes.forEach(episode => {
  //       const episodeElements = [
  //         createElement('h2', { textContent: `S${episode.season}E${episode.number}. ${episode.name}`}),
  //         createElement('img', {
  //           src: episode.image.medium,
  //           alt: `${episode.name} poster`
  //         }),
  //         createElement('div', { innerHTML: episode.summary})
  
  //       ]
  //       resultsDiv.append(...episodeElements)
  //     })
  //     // debugger
  //   })
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${API_KEY}`)
    .then(r => r.json())
    .then(result => {
      // let book = result.items[0];
      // console.log("🚀 ~ file: index.js:49 ~ apiSearchForm.addEventListener ~ book:", book)
      // debugger
      result.items.forEach(book => {

        const title = document.createElement('h1')
        title.textContent = book.volumeInfo.title
        const cover = document.createElement('img')
        cover.src = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
        const pAuthors = document.createElement('p')
        if (book.volumeInfo.authors){
          pAuthors.textContent = `by ${book.volumeInfo.authors.join(', ')}`
        } else {
          pAuthors.textContent = 'no authors available'
        }
        const descrip = document.createElement('p')
        descrip.textContent = book.volumeInfo.description
        resultsDiv.append(title, cover, pAuthors, descrip)
      })
    })
  e.target.reset()
})

// const elements = [
//   createElement('button', {
//     textContent: 'Click Me!',
//     onClick: () => console.log('I was clicked')
//   }),
//   createElement('img', { src: "https://static.tvmaze.com/uploads/images/medium_portrait/447/1118982.jpg"})
// ]
// resultsDiv.append(...elements)
