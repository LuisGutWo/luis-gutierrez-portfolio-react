import { NavLink } from 'react-router-dom';
import LogoS from '../../../assets/images/letra_l_neon.png'
import './index.scss'
import 'animate.css';

const Logo = () => {


  return (
    <NavLink to="./about" className="logo-container">
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </NavLink>
  )
}

export default Logo
