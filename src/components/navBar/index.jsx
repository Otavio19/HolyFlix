import { Link } from "react-router-dom"
import { style } from './style.module.css'
const NavBar = () =>{
    return(
        <ul>
            <Link to='/'>
                <li>
                    Home
                </li>
            </Link>
            <Link to='/login'>
                <li>
                    Login
                </li>
            </Link>
        </ul>
    )
}

export default NavBar