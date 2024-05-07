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
import 'animate.css';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'c', 'e', 'r', 'c', 'a', ' ', 'd', 'e', ' ', 'm', 'i']}
              idx={15}
            />
            <Image src="https://firebasestorage.googleapis.com/v0/b/luis-gutierrez-portfolio.appspot.com/o/luis_perfil_img.jpg?alt=media&token=01a1ef00-1c24-47d6-a4b6-6e89e56da91e" className="about-thumbnail" fluid />
          </h1>
          <p>
            Hola, mi nombre es Luis Gutierrez y soy desarrollador web Front-end con conocimientos en HTML, CSS, JavaScript, React, Bootstrap, Material UI. 
          </p>
          <br />
          <p align="LEFT">
            Me gusta utilizar React para crear interfaces de usuario dinámicas, interactivas y modernas que se adapten a diferentes dispositivos y navegadores. Estoy generando experiencia en el uso de componentes, hooks, estados, props y rutas, así como en la integración de APIs y servicios externos.
          </p>
          <br />
          <p>
            Entusiasta, responsable y con capacidad de trabajar en equipo o de forma autónoma. El dedicarme al servicio y atención al cliente me ayudo a desarrollar la habilidad de relacionarme y adaptarme socialmente a nuevos entornos, liderar equipos de trabajo, cumplir metas y conseguir altos estándares de servicio.

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
