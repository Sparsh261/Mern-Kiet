import Data from '../../../data.json'
import Card from './card'


const Carousel = () => {

    const card = Data.products.map(elem=>{
        return(
            <Card elem={elem}/>
        )
    })

    // console.log(Data.products[0])

    return (

        <div>
            <div className="hero-image">
                <div className="hero-words" >
                    You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                    Click here to go to amazon.in
                </div>
            </div>


            <div className="content">
                {/* {card} */}
                {/* {<Card elem={Data.products[0]}/>} */}
            </div>


        </div>

    )
}

export default Carousel