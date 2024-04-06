import { Link } from "react-router-dom"
import style from './style.module.css'
import { BiSolidHomeAlt2 } from "react-icons/bi";
import logo from '../../assets/img/logo.png'
const NavBar = () =>{
    return(
        <div className={ style.navBox }>
            <img src={ logo } alt="" />
            <ul>
            <Link to='/'>
                <li>
                    <BiSolidHomeAlt2 />
                </li>
            </Link>

        </ul>
        </div>
    )
}

export default NavBar