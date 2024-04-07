import React from "react";
import RMDBLOGO from "../../images/react-movie-logo.svg";
import TMDBLOGO from "../../images/tmdb_logo.svg";

import { Wrapper,Content, LogoImg, TMDBLogoImg } from "./Header.style.js";

const Header= () =>{
    return(
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLOGO} alt="rmdb-logo"/>
                <TMDBLogoImg src={TMDBLOGO} alt="tmdb-logo"/>
            </Content>
        </Wrapper>
    )
}

export default Header;