import './AnimeCard.css'

const AnimeCard = ({ title, image }) => {
  return (
    <div className="AnimeCard">
      <img className="AnimeCard__image" src={image} />
      <div className="AnimeCard__title" title={title}>
        {title}
      </div>
    </div>
  )
}

export default AnimeCard
