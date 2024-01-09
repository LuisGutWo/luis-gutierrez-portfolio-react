import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import MainPortfolioCards from './MainPortfolioCards'
import 'animate.css'

const Portfolio = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setLoading(true)

    fetch('works.json')
      .then((res) => res.json())
      .then(
        (data) => {
          setData(data)
          setLoading(false)
        },
        (error) => {
          console.log(error)
          setLoading(false)
        }
      )
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  if (loading) return <Loader type="line-scale-pulse-out" />

  return (
    <>
      <article className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portafolio'.split('')}
            idx={15}
          />
        </h1>

        <Row xs={1} md={2} lg={3} className="g-3">
          {data.map((item) => (
            <Col key={item.id}>
              <MainPortfolioCards key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </article>
      <Loader type="line-scale-pulse-out" />
    </>
  )
}

export default Portfolio
