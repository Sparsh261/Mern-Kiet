import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const HistoryInfoPage = () => {

    const params = useParams();
    const id = params.id;
    const [data,setData] = useState()

    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${id}`);
        let d = await res.json();
        setData(d.products)
        console.log(d.products);
    }

    useEffect(() => { getData(); }, [])

    return (
        <div>
            <p>info of {id}</p>
            {/* <img src={data?.images?.[1]}></img> */}
            {/* <img src={data?.thumbnail}></img> */}
            <p>info of {id}</p>
        </div>
    )
}

export default HistoryInfoPage;