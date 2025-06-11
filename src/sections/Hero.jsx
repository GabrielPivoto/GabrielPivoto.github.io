import { Canvas } from "@react-three/fiber"
import { Astronaut } from "../components/Astrounaut"
import { useMediaQuery } from "react-responsive"

import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"

const Hero = () => {

    const isMobile = useMediaQuery({ maxWidth: 853 })

    return (
        <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            <HeroText />
            <ParallaxBackground />
            
            <img
                src="https://avatars.githubusercontent.com/u/65688445?v=4"
                alt="Minha foto"
                className="absolute top-30 right-95 w-70 h-70 rounded-full border-4 border-white z-50"
            />
        </section>
    )
}

export default Hero