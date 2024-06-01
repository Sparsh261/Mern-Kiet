import Navbar from "./navbar";
import { useState } from "react";

const ImageGenerator = () => {

    const [name, setName] = useState("d");
    const [src, setSrc] = useState();

    const func = (x) => {
        setName(x.target.value);
        console.log(name);
    }

    const handleClick = () => {
        setSrc(`https://source.unsplash.com/random/400x400/?${name}`)
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