import LogoS from '../../../assets/images/letra_l_neon.png'
import './index.scss'
import 'animate.css';

const Logo = () => {


  return (
    <div className="logo-container">
      <img
        className="solid-logo animate__animated animate__jackInTheBox"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Logo
