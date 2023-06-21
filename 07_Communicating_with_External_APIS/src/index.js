const resultsDiv = document.querySelector('#results');
const apiSearchForm = document.querySelector('#api-Search');
  
apiSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = encodeURI(e.target.search.value);
  console.log(query);
  resultsDiv.innerHTML = ''
  fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=episodes`)
    .then(r => r.json())
    .then(show => {
      const episode = show._embedded.episodes[0]
      const elements = [
        createElement('h1', { textContent: show.name}),
        createElement('img', {
          src: show.image.medium,
          alt: `${show.name} poster`
        }),
        createElement('div', { innerHTML: show.summary})
        // display one episode
        // createElement('h2', { textContent: episode.name}),
        // createElement('img', {
        //   src: episode.image.medium,
        //   alt: `${episode.name} poster`
        // }),
        // createElement('div', { innerHTML: episode.summary})

      ]
      resultsDiv.append(...elements)
      // iterate to show all episodes
      show._embedded.episodes.forEach(episode => {
        const episodeElements = [
          createElement('h2', { textContent: `S${episode.season}E${episode.number}. ${episode.name}`}),
          createElement('img', {
            src: episode.image.medium,
            alt: `${episode.name} poster`
          }),
          createElement('div', { innerHTML: episode.summary})
  
        ]
        resultsDiv.append(...episodeElements)
      })
      // debugger
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
