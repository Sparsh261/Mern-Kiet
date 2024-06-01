import Navbar from "./navbar";
import { useState } from "react";

const ImageGenerator = () => {

    const [name, setName] = useState("d");
    const [src, setSrc] = useState();

    const func = (x) => {
        setName(x.target.value);
        // console.log(name);
    }

    const handleClick = async() => {
        const res = await fetch('http://localhost:1400/api/images',{
            method:"POST",
            body:JSON.stringify({
                text:name
            }),
            headers:{
                "Content-Type":"application/json",
            }
        });
        // console.log(res)
        const data = await res.json();
        if(data?.status==="success"){
            setSrc(data.data.url)
        }
    }



    return (
        <>
            <Navbar page={'imageGenerator'} />
            <div className="container">

                
                    <img src={src}></img>
                    <input onChange={(e) => { func(e) }} ></input>
                    <button onClick={handleClick}>generate </button>
         

            </div>
        </>
    )
}

export default ImageGenerator;