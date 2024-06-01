import Navbar from "./navbar";
import "./history.css"
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";

const dummyData = [
    {
        id:"1",
        title:"aws",
    },
    {
        id:"2",
        title:"best",
    },
    {
        id:"3",
        title:"catch",
    }
]

const chmgTitle = ()=>{
    console.log("chngtitle")
} 
const chmgdesc = ()=>{
    console.log("chngdesc")
} 

const History = () => {
        const [query,setQuery] = useState("");
        const [data,setData] = useState([]);
        const [dataQuery,setDataQuery] = useState([]);

        const getQuery = async() => {

            const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
            let d = await res.json();
            setDataQuery(d.products);
            console.log(d);
        }

        useEffect(()=>{
            getQuery();
        },[query])

    return(
        <>
            <Navbar/>
            <div className="history-container">
                <h1>History</h1>
                <div>
                    <input onChange={(e)=>{setQuery(e.target.value);}} value={query} ></input><br/>
                    {
                        dataQuery.map((elem)=>{
                            return(
                                <div key={elem.id}> 
                                <h2>{elem.title}</h2>
                                <p>{elem.description}</p>
                                <img src={elem.images[0]}></img>
                                <Link to={`/history/${elem.id}`} >more</Link>
                            </div>
                            )
                        })
                    }
                </div>
                <div className="his1">
                    {data.map(elem=>{
                        return(
                            <div key={elem.id}> 
                                <h2>{elem.title}</h2>
                                {/* <h2>{...id,rest}</h2> */}
                                <p>{elem.description}</p><br></br>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default History;