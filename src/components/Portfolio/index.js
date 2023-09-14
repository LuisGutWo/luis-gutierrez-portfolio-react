import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import MainPortfolioCards from "../Portfolio/MainPortfolioCards";
import 'animate.css';

const Portfolio = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setLoading(true);

        fetch(process.env.REACT_APP_API_URL)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            },
                (error) => {
                    console.log(error);
                    setLoading(false);
                }
            )
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    if (loading) return <Loader type="line-scale-pulse-out" />;

    return (
        <>
            <section className="background">
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
            </section>
            <article className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portafolio".split("")}
                        idx={15}
                    />
                </h1>

                <Row
                    xs={2}
                    md={3}
                    lg={4}
                    className="works-cards-section"
                >
                    {data.map(
                        (item) => (
                            <Col key={item.id}>
                                <MainPortfolioCards key={item.id} item={item} />
                            </Col>
                        )
                    )
                    }
                </Row>

            </article>
            <Loader type="line-scale-pulse-out" />
        </>
    );
}

export default Portfolio;