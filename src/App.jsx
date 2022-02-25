import React from 'react'
import './App.css'
import searchAnime from './searchAnime'
import AnimeList from './AnimeList'

const App = () => {
  const [value, setValue] = React.useState('')
  const [animeList, setAnimeList] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [prevQuery, setPrevQuery] = React.useState('')

  const search = React.useCallback(
    async (value) => {
      const query = valueToQuery(value)

      if (query === prevQuery) return

      setPrevQuery(query)
      setIsLoading(true)
      const anime = await searchAnime(query)

      setIsLoading(false)
      setAnimeList([...anime])
    },
    [prevQuery]
  )

  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault()
      search(value)
    },
    [value, search]
  )

  const onChange = React.useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return (
    <div className="App">
      <form className="App__searchForm" onSubmit={onSubmit}>
        <div className="App__searchLabel">Search Anime:</div>
        <input
          className="App__searchInput"
          name="query"
          value={value}
          onChange={onChange}
          autoComplete="off"
        />
        <button className="App__searchButton">SEARCH</button>
      </form>
      <div className="App__results">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <AnimeList animeList={animeList} />
        )}
      </div>
    </div>
  )
}

const valueToQuery = (value) => {
  value = value.trim().toLowerCase().replace(/\s\s+/g, ' ')
  value = encodeURIComponent(value)
  return value
}

export default App
