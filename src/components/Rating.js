const Rating = (props) => {

    let starts = [];
    for (let i = 0; i < props.stars; i++) {
        stars.push(<img src=""></img>)

    }
    return ( 
        <div>
            {stars.map(item => item)}
        </div>
     );
}
 
export default Rating;props

