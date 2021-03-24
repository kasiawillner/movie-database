const MovieItem = (props) => {
    return (
        <figure>
            <h2>{props.title}</h2>
            <figcaption>
            <div>
            <p>{props.rate}</p>
            <img src={props.stars}></img>
            </div>
            <ul>
                <li>{props.year}</li>
                <li>{props.director}</li>
                <li>{props.duration}</li>
                <li>{props.genre.map((item, index) => 
                <p>{item}</p>
                )}</li>
            </ul>
            </figcaption>
        </figure>
     );
}
 
export default MovieItem;