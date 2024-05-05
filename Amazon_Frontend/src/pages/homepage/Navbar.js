const Navbar = () => {
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
                <input type="text" placeholder="Search Amazon"/>
                    <div class="search-bar-logo">
                        <i class="fa-solid fa-magnifying-glass"></i>
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