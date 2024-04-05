import { Link } from "react-router-dom"
import { style } from './style.module.css'
import { BiSolidHomeAlt2 } from "react-icons/bi";

const NavBar = () =>{
    return(
        <ul>
            <Link to='/'>
                <li>
                    <BiSolidHomeAlt2 />
                </li>
            </Link>

        </ul>
    )
}

export default NavBar