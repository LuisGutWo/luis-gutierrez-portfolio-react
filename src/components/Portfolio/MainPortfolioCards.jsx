import React from 'react'
import 'animate.css';

import image1 from '../../assets/images/landing-page-gatos.png'
import image2 from '../../assets/images/desafio-git.png'
import image3 from '../../assets/images/iguana-page-desafio.png'
import image4 from '../../assets/images/desafio_grid_template.png'
import image5 from '../../assets/images/huellitas_screenshot_new.png'
import image6 from '../../assets/images/fina_pizza_screenshot.png'
import { Card } from 'react-bootstrap'

const portfolioCardData = [
  {
    id: 1,
    name: 'Fina Pizza',
    img: image6,
    description: 'Aplicación en React realizada para la pizzeria Fina Pizza',
  },
  {
    id: 2,
    name: 'Huellitas Pets-store',
    img: image5,
    description:
      'E-Commerce creado como trabajo final del modulo React. Inspirado en una tienda de mascotas y accesorios',
  },
  {
    id: 3,
    name: 'Portafolio-Blog',
    img: image2,
    description:
      'Practica de Flex para realizar un portafolio y blog para una fotógrafa ficticia pero con datos gastronómicos reales.',
  },
  {
    id: 4,
    name: 'Iguana Page',
    img: image3,
    description:
      'Primeros trabajos utilizando grid. Iguana Page realizada desde cero',
  },
  {
    id: 5,
    name: 'Upbeat Drums',
    img: image4,
    description:
      'Layout básico para una tienda de baterías utilizando flexbox y grid',
  },
  {
    id: 6,
    name: 'Landing Gatos',
    img: image1,
    description:
      'Trabajo elaborado dentro de la practica de Css Flex box. Inspirado en mi gran pasión... Los gatos.',
    enlace: 'https://github.com/LuisGutWo/landing-page-gatos',
  },
  {
    id: 7,
    name: 'Landing Gatos',
    img: image1,
    description:
      'Trabajo elaborado dentro de la practica de Css Flex box. Inspirado en mi gran pasión... Los gatos.',
    enlace: 'https://github.com/LuisGutWo/landing-page-gatos',
  },
  {
    id: 8,
    name: 'Landing Gatos',
    img: image1,
    description:
      'Trabajo elaborado dentro de la practica de Css Flex box. Inspirado en mi gran pasión... Los gatos.',
    enlace: 'https://github.com/LuisGutWo/landing-page-gatos',
  },
  {
    id: 9,
    name: 'Landing Gatos',
    img: image1,
    description:
      'Trabajo elaborado dentro de la practica de Css Flex box. Inspirado en mi gran pasión... Los gatos.',
    enlace: 'https://github.com/LuisGutWo/landing-page-gatos',
  }
]

const MainPortfolioCards = () => {
  return (
    <section className="carousel" key={portfolioCardData.id}>
      <div className="carousel__container">
        {portfolioCardData.map((data) => {
          return (
            <Card className="carousel-card animate__animated animate__zoomIn">
              <img className="carousel-card__img" src={data.img} alt="people" />
              <div className="carousel-card__details">
                <h5 className="carousel-card__details--title">{data.name}</h5>
                <h6 className="carousel-card__details--subtitle">
                  {data.description}
                </h6>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default MainPortfolioCards
