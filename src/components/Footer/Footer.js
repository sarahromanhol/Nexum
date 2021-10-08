import React from "react";
import styled from "styled-components";
import logo from '../../imgs/logo-caixa-menor.png';
import logoNome from '../../imgs/logo-titulobranco-menor.png'



const FooterContainer = styled.footer`
    background-color: black;
    display: flex;
    justify-content: center;
    height: 100px;
    align-items: center;
    position: sticky;
`

const LogoAndTitleContainer = styled.span`
    display: flex;
    justify-content: space-evenly;
    width: 100px;
    align-items: center;
    color: white;
    
`


const LogoCaixa = styled.img`
    width: 50px;
    margin: 0 auto;
    cursor: pointer;
    
`

const LogoNome = styled.img`
    width: 110px;
    margin-right: 20px;
    cursor: pointer;
`



export default function Footer(props) {
    return (
        <FooterContainer>
            <LogoAndTitleContainer>
                <LogoCaixa src={logo} alt='logo' onClick={() => props.changePage("home")}/>
                <LogoNome src={logoNome} alt='nome da empresa' onClick={() => props.changePage("home")} />
            </LogoAndTitleContainer>
        </FooterContainer>
    )
}