import React from 'react'
import './AnimeList.css'
import AnimeCard from './AnimeCard'

const AnimeList = ({ animeList }) => {
  return (
    <div className="AnimeList">
      {animeList.map((anime) => {
        return (
          <div className="AnimeList__card" key={anime.title}>
            <AnimeCard title={anime.title} image={anime.image} />
          </div>
        )
      })}
    </div>
  )
}

export default React.memo(AnimeList)
