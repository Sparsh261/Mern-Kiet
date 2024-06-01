import Card from './card'
import { useEffect, useState } from "react";


const Carousel = ({ toSearch }) => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');

    const getData = async () => {
        console.log(toSearch)
        if(toSearch){
            setQuery(toSearch)
        }
        if (query.length > 0) {
            console.log(toSearch + "by")
            const shorturl = await fetch(`http://localhost:1400/products?title=${query}`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then((res) => res.json()).then(r => {
                    setData(r.data.product);
                })
                .catch((err) => console.log(err))
            console.log(data);
        }
        else {
            console.log(toSearch + "hi")
            const shorturl = await fetch('http://localhost:1400/products', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then((res) => res.json()).then(r => {
                    setData(r.data.product);
                })
                .catch((err) => console.log(err))
            // console.log(data);
        }
    }
    useEffect(() => { getData() }, [query,toSearch])

    return (

        <div>
            <div className="hero-image">
                <div className="hero-words" >
                    You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                    Click here to go to amazon.in
                </div>
            </div>

            <div className="content">
                {data.map(elem => {
                    return (
                        <div key={elem.id_}>
                            <Card elem={elem} />
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Carousel