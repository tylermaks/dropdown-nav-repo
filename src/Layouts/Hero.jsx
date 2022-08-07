import React from 'react'

import "../Assets/styles/Hero/Hero.css"
import mobileHeroImg from "../Assets/images/image-hero-mobile.png"
import desktopHeroImg from "../Assets/images/image-hero-desktop.png"
import audiophile from "../Assets/images/client-audiophile.svg"
import databiz from "../Assets/images/client-databiz.svg"
import maker from "../Assets/images/client-maker.svg"
import meet from "../Assets/images/client-meet.svg"

const clients = [databiz,audiophile, meet, maker]

function Hero(){
    return(
        <section className="hero-container">
            <div className="inner-container inner-container--img">
                <img className="mobile-hero-img" src={mobileHeroImg} alt="Hero" />
                <img className="desktop-hero-img" src={desktopHeroImg} alt="Hero" />
            </div>

            <div className="inner-container inner-container--text">
                <article className="hero-text">
                    <h1>Make remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes, 
                        create team rituals, and watch productivity soar.</p>
                </article>
                <button>Learn More</button>
                <div className="social-proof">
                    {clients.map(client => {
                        return (

                            <img 
                                className="client" 
                                src={client} 
                                alt="Client Logo" 
                            />

                        )
                    })}
                </div>
            </div>
           
        </section>
    )
}

export default Hero;