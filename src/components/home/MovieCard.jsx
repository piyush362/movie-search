import './moviecard.css'

const MovieCard = (props) => {

    const handleCardClick = (e) => {
        window.open(`https://www.imdb.com/title/${props.rating}/`, 'noopener,noreferrer');
    }
    return (
        <div className="card" onClick={(e) => handleCardClick()}>
            <img src={props.poster} alt="poster" />
            <h1>{props.title}</h1>
            <p>type: {props.type} <span>| {props.year} </span></p>
        </div>
    )
}
export default MovieCard;