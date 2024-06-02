import { Link } from "react-router-dom";
import "./navbar.css";
import {useContext} from "react";
import PointsContext from "../context/pointsContext";


const Navbar = (props)=>{
    
    const page = props.page;

    const customColor = (x) => {
        return {color:page===x?'red':'white'}
    }

    const contextValues = useContext(PointsContext);


    return(
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/" style={customColor('home')}>Home</Link>
                <Link to="/generator" style={customColor('imageGenerator')}>Image Generator</Link>
                <Link to="/history" style={customColor('history')}>History</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/help">Help</Link>
            </div>
            <div className="right">
            </div>
            <div className="right" style={{padding: '4px', color: 'brown'}}>
                {contextValues.userPoints}
            </div>
        </div>
    )
}

export default Navbar;