import Navbar from './Navbar'
import Carousel from './Carousel'
import Categoryrow from './categoryRow'
import Card from './card'


const Homepage = ()=>{
    return(
       <div>
         <Navbar/>
        <Carousel/>
        <Categoryrow/>
        <Card/>
       </div>

    );
}

export default Homepage;