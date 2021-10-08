import React from "react";
import styled from "styled-components";
import logo from '../../imgs/logo-caixa-menor.png';
import logoNome from '../../imgs/logo-titulobranco-menor.png'



const HeaderContainer = styled.header`
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
`

const LogoAndTitleContainer = styled.span`
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    align-items: center;
    color: white;
    
`

const ButtonsContainer = styled.span`
    display: flex;
    justify-content: space-around;
    padding: 100px;
    width: 200px;
    align-items: center;
`

const ButtonHome = styled.button`
    margin-right: 120px;
    background-color: black;
    color: white;
    cursor: pointer;
    border: hidden;
    font-weight: 800;
    font-size: larger;
    transition: color 600ms, transform 600ms;

    :hover {
        color: #FF9933;
        transform: scale(1.1);
    }
`
const ButtonCart = styled.button`
    margin-right: 220px;
    background-color: black;
    color: white;
    cursor: pointer;
    border: hidden;
    font-weight: 800;
    font-size: larger;
    transition: color 600ms, transform 600ms;

    :hover {
        color: #FF9933;
        transform: scale(1.1);
    }
`

const LogoCaixa = styled.img`
    width: 50px;
    margin-left: 220px;
    cursor: pointer;
    transition: transform 1.5s;

    :hover {
        transform: scale(1.2) rotate(360deg);
    }
`

const LogoNome = styled.img`
    width: 110px;
    margin-right: 20px;
    cursor: pointer;
`



export default function Header(props) {
    return (
        <HeaderContainer>
            <LogoAndTitleContainer>
                <LogoCaixa src={logo} alt='logo' onClick={() => props.changePage("home")}/>
                <LogoNome src={logoNome} alt='nome da empresa' onClick={() => props.changePage("home")}/>
            </LogoAndTitleContainer>
            <ButtonsContainer>
                <ButtonHome onClick={() => props.changePage("home")}>Home</ButtonHome>
                <ButtonCart onClick={() => props.changePage("carrinho")}>Carrinho</ButtonCart>
            </ButtonsContainer>
        </HeaderContainer>
    )
}
