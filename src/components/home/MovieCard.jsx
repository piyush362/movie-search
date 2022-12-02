import './moviecard.css'

const MovieCard = (props) => {
    return (
        <div className="card">
            <img src={props.poster} alt="poster" />
            <h1>{props.title}</h1>
            <p>type: {props.type} <span>| {props.year} </span></p>
        </div>
    )
}
export default MovieCard;