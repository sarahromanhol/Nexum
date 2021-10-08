import React from "react";
import styled from "styled-components";
import fotoHome from '../../imgs/imagem1.jpg';
import fotoHome2 from '../../imgs/imagem2.jpg';
import fundo from '../../imgs/fundo-Home.png'

// Background Site

const ContainerBackground = styled.div`
    background-image: url(${fundo});
    background-size: cover;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

// Main 

const ContainerService = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 108px;
`

const Service = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 30px 10px;
    margin-top: 50px;
`

const Imagem1 = styled.img`
        width: 500px;
        height: 300px;
        border-radius: 20px;
        margin-top: 75px;
        margin-left: 130px;
`

const ContainerCadastro = styled.div`
    display: flex;
    flex-direction: row;
`

const Cadastrar = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    padding: 30px 10px;
    margin-left: 150px;
    margin-bottom: 65px;
`

const Imagem2 = styled.img`
        width: 500px;
        height: 300px;
        border-radius: 20px;
        margin-top: 25px;
`


// Botões de páginas

const ButtonService = styled.button`
    margin: 10px;
    width: 250px;
    height: 50px;
    margin-bottom: 20px;
    
    border-radius: 40px;
    background-color: #FF9933;
    color: white;
    cursor: pointer;
    border: hidden;
    font-weight: 800;
    font-size: medium;
    box-shadow: 5px 6px 3px #727D71;
    transition: background-color 1s, color 1s, box-shadow 1s;

    :hover {
        background-color: whitesmoke;
        color: #FF9933;
        box-shadow: 5px 6px 3px 2px #FF9933;
    }
`

const ButtonClient = styled.button`
    margin: 10px;
    width: 250px;
    height: 50px;
    margin-bottom: 20px;
    
    border-radius: 40px;
    box-shadow: 5px 6px 3px #a25922;
	border: none;
    background-color: white;
    color: #FF9933;
    cursor: pointer;
    font-weight: 800;
    font-size: medium;
    transition: background-color 1s, color 1s, box-shadow 1s;

    :hover {
        background-color: #FF9933;
        color: white;
        box-shadow: 5px 6px 3px ghostwhite;
    }

`

// Textos

const Titulo1 = styled.h2`
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 30px 0px;
    font-weight: 800;
    letter-spacing: -0.03em; 
    font-size: 1.875rem;
    line-height: 1.00;
    color: inherit;
    
`
const Titulo2 = styled.h2`
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 30px 0px;
    font-weight: 800;
    letter-spacing: -0.03em; 
    font-size: 1.875rem;
    line-height: 1.00;
    color: black;
    
`

const Paragrafo1 =styled.p`
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 5px 0px 10px;
    font-weight: 500;
    letter-spacing: 0.10em;
    font-size: 1.25rem;
    line-height: 1.20;
    color: inherit;
    font-weight: 600;
`
const Paragrafo2 =styled.p`
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 5px 0px 10px;
    font-weight: 500;
    letter-spacing: 0.10em;
    font-size: 1.25rem;
    line-height: 1.20;
    color: black;
    font-weight: 600;
`


export default function Home(props) {
    return (
        <ContainerBackground>
            <ContainerService>
                <Service>
                    <ButtonService onClick={() => props.changePage("servicos")}>Buscar soluções</ButtonService>
                    <Titulo1>NEXUM é conexão_</Titulo1>
                    <Paragrafo1>NEXUM é uma plataforma digital que conecta nossos clientes à soluções, oferecendo serviços e atendimento para resolver o seu dia a dia.</Paragrafo1>
                </Service>
                    
                <Imagem1 src={fotoHome} alt='Pessoas trabalhando'/>
            </ContainerService>
            

            <ContainerCadastro>
                <Imagem2 src={fotoHome2} alt='Pessoastrabalhando'/> 

                <Cadastrar>
                    <ButtonClient onClick={() => props.changePage("register")}>Cadastre seu serviço</ButtonClient>
                    <Titulo2>Faça parte da Solução_</Titulo2>
                    <Paragrafo2>Contribuímos de forma que seu serviço seja potencializado com mais visibilidade e agilidade para melhores resultados.</Paragrafo2>
                </Cadastrar>
            </ContainerCadastro>
        </ContainerBackground>
        
    )
}