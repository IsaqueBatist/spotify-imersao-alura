const searchInput = document.getElementById('search-input')
const resultArtist = document.getElementById('result-artist')
const resultPlaylist = document.getElementById('result-playlists')


const displayResult = (result) => {
  resultPlaylist.classList.add('hidden')
  
  const artistName = document.getElementById('artist-name')
  const artistImage = document.getElementById('artist-img')
  
  result.forEach(element => {
    artistName.innerText = element.name
    artistImage.src = element.urlImg
  })

  resultArtist.classList.remove('hidden')
}


const requestAPI = async (searchTerm) => {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url).then(res => res.json()).then(result => displayResult(result))
}

document.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase()
  if(searchTerm.trim() === "") {
    resultPlaylist.classList.add('hidden')
    resultArtist.classList.remove('hidden')
    return;
  }
  requestAPI(searchTerm)
})

