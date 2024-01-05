import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/letra_l_neon.png'
import Logo from './Logo/index.js'
import './index.scss'
import 'animate.css';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['u', 'i', 's', ' ', 'G', 'u', 't', 'i', 'e', 'r', 'r', 'e', 'z']
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    '-',
    'e',
    'n',
    'd',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r'
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">

        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>a,</span>
            <br />
            <span className={`${letterClass} _15`}>S</span>
            <span className={`${letterClass} _16`}>o</span>
            <span className={`${letterClass} _17`}>y</span>
            <img
              src={LogoTitle}
              alt="Logo Luis Gutierrez"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <h2>Desarrollador Front-End</h2>
          <Link to="/contact" className="flat-button">
            CONTÁCTEME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Home
