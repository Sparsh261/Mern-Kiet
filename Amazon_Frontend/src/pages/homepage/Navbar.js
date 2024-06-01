import { useEffect, useState } from "react"
import Carousel from "./Carousel";





const Navbar = () => {

    let [toSearch, settoSearch] = useState('');



    const getData = async () => {


        const shorturl = await fetch(`http://localhost:1400/products?title=${toSearch}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json()).then(r => {
                // setData(r.data.product);
                console.log(r);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        // if (toSearch) {
            // getData();
            <Carousel toSearch={toSearch}/>
            console.log(toSearch.length);
        // }
    }, [toSearch])


    return (
        <div class="navbar ">
            <div class="nav-logo border">
                <div class="logo">

                </div>
            </div>

            <div class="address border">
                <p class="add-one">Deliver to</p>
                <i class="fa-solid fa-location-dot"></i>
                <p class="add-two">India</p>
            </div>

            <div class="nav-search-bar border">
                <select>
                    <option>All </option>
                </select>
                <input type="text" placeholder="Search Amazon" value={toSearch}
                     onChange={(e) => { settoSearch(e.target.value) }} />
                <div class="search-bar-logo">
                    <button onClick={()=>{<Carousel toSearch={toSearch}/>}}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <div class="signin border">
                <p class="line1">Hello,Sign in</p>
                <p class="line2">Accounts & Requests</p>
            </div>

            <div class="signin border">
                <p class="line1">Returns</p>
                <p class="line2">& orders</p>
            </div>

            <div class="cart border">
                <i class="fa-solid fa-cart-shopping"></i>
                Cart
            </div>
        </div>
    )
}

export default Navbar