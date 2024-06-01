 import { Link } from "react-router-dom"
 
 const Card = ({elem}) => {
    return (
        <>

            <div key={elem.id}>
                <h2>{elem.title}</h2>
                <p>{elem.description}</p>
                <img src={elem.images[0]}></img>
                <Link to={`/history/${elem.id}`} >more</Link>
            </div>

            </>
            )
}

export default Card