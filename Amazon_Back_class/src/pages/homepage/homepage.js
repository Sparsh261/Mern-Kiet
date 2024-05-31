import Navbar from './Navbar'
import Carousel from './Carousel'
import Categoryrow from './categoryRow'
import Footer from './Footer'


const Homepage = ()=>{
    return(
       <div>
        <Navbar/>
        <Categoryrow/>
        <Carousel/>
        <Footer/>
       </div>

    );
}

export default Homepage;