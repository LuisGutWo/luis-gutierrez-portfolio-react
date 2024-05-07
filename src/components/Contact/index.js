import { useEffect, useState } from 'react'
import { Modal } from "react-bootstrap";
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [showEmailSend, setShowEmailSend] = useState(false);
  const form = useRef()

  const handleCloseEmailSend = () => setShowEmailSend(false);
  const handleShowEmailSend = () => setShowEmailSend(true);

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_EMAILJS,
        process.env.REACT_APP_TEMPLATE_EMAILJS,
        form.current,
        process.env.REACT_APP_FORM_CURRENT
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'a', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Actualmente soy freelance y buscando también la oportunidad que me permita crecer como Front End, aprender a trabajar en la industria TI y adquirir nuevas habilidades y tecnologías.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nombre" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Titulo o encabezado"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Mensaje"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="ENVIAR" onClick={handleShowEmailSend} />
                </li>
              </ul>
              <Modal show={showEmailSend} onHide={handleCloseEmailSend}>
                <Modal.Header closeButton>
                  <Modal.Body>
                    Correo Enviado! 🛸 <br /> Te responderemos de inmediato.
                    Gracias
                  </Modal.Body>
                </Modal.Header>
              </Modal>
            </form>
          </div>
        </div>
        <div className="info-map">
          Luis Gutierrez,
          <br />
          Santiago de Chile,
          <br />
          <span>agutierrezwong@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-33.4365900, -70.6841300]} zoom={16}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-33.4365900, -70.6841300]}>
              <Popup>Aquí vive Luis, invítame un cafe :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Contact
