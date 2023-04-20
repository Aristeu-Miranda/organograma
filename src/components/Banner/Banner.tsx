import React from "react";
import ImgBanner from "../../imagens/banner.png";
import './Banner.css'

export const Banner = () => {
    return (
        <header className="banner">
            <img src={ImgBanner} alt="Imagem banner azul" />
        </header>
    )
}

