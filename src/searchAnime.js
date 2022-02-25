const cache = {}

const fetchAnime = async (query) => {
  const url = `https://api.jikan.moe/v3/search/anime?q=${query}`
  const response = await fetch(url)
  const data = await response.json()

  return data
}

const searchAnime = async (query, limit = 10) => {
  if (cache[query]) {
    return cache[query]
  }

  const data = await fetchAnime(query)
  const animeList = data.results.slice(0, limit)
  const result = animeList.map((anime) => {
    return {
      title: anime.title,
      image: anime.image_url,
    }
  })

  cache[query] = result

  return result
}

export default searchAnime
