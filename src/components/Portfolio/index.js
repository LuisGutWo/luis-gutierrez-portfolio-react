import React, { useEffect, useState } from "react";
import EmblaCarousel from '../Layout/EmblaCarousel';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import '../../components/Layout/sandbox.css';
import '../../components/Layout/embla.css';
import "./index.scss";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


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
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <section className="sandbox">
                    <section className="sandbox__carousel">
                        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    </section>
                </section>
            </article>
            <Loader type="line-scale-pulse-out" />
        </>
    );
}

export default Portfolio;