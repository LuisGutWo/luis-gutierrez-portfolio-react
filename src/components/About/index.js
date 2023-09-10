import { useEffect, useState } from 'react'
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { Image } from 'react-bootstrap'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="container about-page">

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'c', 'e', 'r', 'c', 'a', ' ', 'd', 'e', ' ', 'm', 'i']}
              idx={15}
            />
            <Image src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/luis_portada.jpg?alt=media&token=896dee8f-d49c-4c7f-923d-81df3a0b7ef2" className="about-thumbnail" thumbnail />
          </h1>
          <p>
            Soy desarrollador Front-end en búsqueda de nuevos desafíos profesionales que me permitan crecer en la industria TI y tener la oportunidad de aprender nuevas tecnologías y metodologías de trabajo.
          </p>
          <br/>
          <p align="LEFT">
            Como técnico en Hostelería y Turismo, me he dedicado por mas de 18 años al servicio al cliente, muy meticuloso en lo que hago y siempre estando a la vanguardia adquiriendo constantemente nuevos conocimientos.
          </p>
          <br/>
          <p>
            Me defino como un apasionado por las cosas que valoro en esta vida como mi familia, el cocinar y disfrutar de buena música, y por sobre todo un amante de la tecnología.
          </p>
          <a href="https://www.canva.com/design/DAFgzUcKi5w/J1k21Aj8S8KcBvmIbF1F2Q/view?utm_content=DAFgzUcKi5w&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
            rel="noreferrer" className="about-button">Descarga mi CV</a>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faBootstrap} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default About
