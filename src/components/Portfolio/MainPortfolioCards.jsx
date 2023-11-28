import React from 'react'
import 'animate.css'
import { Button, Card } from 'react-bootstrap'

const MainPortfolioCards = ({ item }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={item.img} className="card-image" />
      <Card.Body className="info">
        <Card.Title className="title">{item.name}</Card.Title>
        <Card.Text className="description">{item.description}</Card.Text>
        <Button href={item.enlace} target="_blank" rel="noopener" className="card-button">
          Ir al sitio
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MainPortfolioCards
