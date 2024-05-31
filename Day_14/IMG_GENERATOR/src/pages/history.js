import Navbar from "./navbar";
import "./history.css"
import { useState , useEffect } from "react";

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
        // const [title,setTitle] = useState("flower");
        // const [desc,setdesc] = useState();

        const [data,setData] = useState([{'id':'1'}]);

        // useEffect(()=>{
        //     console.log("title cnged");
        // },[title]);

        // useEffect(()=>{
        //     console.log("desc cnged");
        // },[desc]);
        let d;
        const da = async()=>{
            const res = await fetch('https://dummyjson.com/products');
            d = await res.json();
            console.log(d);
        }
        da();
    return(
        <>
            <Navbar/>
            <div className="history-container">
                <h1>History</h1>
                <div>
                    {/* <button onClick={chmgTitle}>Change title</button>
                    <button onClick={()=>{chmgTitle();chmgdesc()}} >Change title & desc</button>
                    <button onClick={chmgdesc}>Change desc</button> */}
                    <input onChange={(e)=>{setTitle(e.target.value)}} value={title} ></input><br/>
                    <input onChange={(e)=>{setdesc(e.target.value)}}></input>
                    {/* {title}<br></br>
                    {desc} */}
                </div>
                <div className="his1">
                    {d.map(elem=>{
                        return(
                            <div key={elem.id}> 
                                <h2>{elem.id}</h2>
                                {/* <h2>{...id,rest}</h2> */}
                                <p>{elem.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default History;