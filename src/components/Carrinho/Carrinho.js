import React from 'react';
import styled from 'styled-components';
import lixeira from "../../imgs/lixeira1.png"
import emptyCart from '../../imgs/empty-cart.svg'

// Background Carrinho

const BackgroundSite = styled.div`
    background-color: #F5F6FA;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`
const ContainerPrincipal = styled.div`
    display: flex;
`


// Container Carrinho

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const CarrinhoContainer = styled.div`
    display: flex;
    background-color: #FF9933;
    box-shadow: 4px 6px 3px #727D71;

    border-radius: 10px;
    padding: 0px 16px 16px;
    margin-top: 60px;

    width: 550px;
    height: 120px;
    text-align: center;
    align-items: center;
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-style: small;
`

const CardCarrinhoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    background-color: #FFFFFF;
    box-shadow: 4px 5px 3px #a25922;
	border: 1px solid gray;
    width: 400px;
    height: 80px;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 10px;

`

const BotaoLixeira = styled.button`
    box-shadow: 3px 5px 3px #a25922;
    border: hidden;
    border-radius: 5px;
    
    background-color: red;
    cursor: pointer;
    
    font-weight: 800;
    margin-top: 15px;
    margin-right: 15px;
    transition: all 700ms;
    img{
        margin-top: 5px;
    }

    :hover {
        transform: scale(1.1);
    }
`


// Soma Container

const SomaContainer = styled.div`
	border: 1px solid gray;
    border-radius: 30px;
    background-color: white;
    box-shadow: 4px 6px 3px #727D71;

    width: 300px;
    height: 150px;
    text-align: center;
    justify-content: space-evenly;

    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 100px;
    color: #FF9933;

    h3{
        color:black;
    }
`

const BotaoCompra = styled.button`
    margin-bottom: 10px;
    box-shadow: 3px 5px 3px #727D71;
    border: none;
    border-radius: 20px;
    background-color: #FF9933;
    color: white;
    cursor: pointer;
    border: hidden;
    font-weight: bold;
    font-weight: 800;
    width: 200px;
    margin: 0 auto;
    height: 30px;
    transition: background-color 1s, color 1s, box-shadow 1s;

    :hover {
        background-color: whitesmoke;
        color: #FF9933;
        box-shadow: 5px 6px 3px 2px #FF9933;
    }
`

const VoltarContainer = styled.div`
    margin-right: 400px;
    margin-top: 60px;
`

const BotaoVoltar = styled.button`
    margin: 0 auto;
    margin-bottom: 20px;
    width: 200px;
    height: 30px;
    
    box-shadow: 3px 5px 3px #727D71;
	border: none;
    border-radius: 20px;
    background-color: #FF9933;
    color: white;
    cursor: pointer;
    border: hidden;
    font-weight: bold;
    font-weight: 800;
    transition: background-color 1s, color 1s, box-shadow 1s;

    :hover {
        background-color: whitesmoke;
        color: #FF9933;
        box-shadow: 5px 6px 3px 2px #FF9933;
    }
`

const ContainerEmpty = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const EmptyCart = styled.img`
    width: 50%;
    height: 50%;
`

export class Carrinho extends React.Component {

    totalCart = () => {
        let totalPrice = 0

        for (let service of this.props.servicesInCart) {
            totalPrice += service.price
        }

        return totalPrice
    }

    render() {
        const listCart = this.props.servicesInCart.map((servico) => {
            return (
                <CarrinhoContainer key={servico.id}>
                    <CardCarrinhoContainer>
                        <h3>{servico.title}</h3>
                        <h3>Preço: R$ {servico.price}</h3>
                    </CardCarrinhoContainer>
                    <BotaoLixeira onClick={() => this.props.removeServiceCart(servico.id)}><img src={lixeira} alt="lixeira imagem" /></BotaoLixeira>
                </CarrinhoContainer>
            )
        })
        return (
            <div>
                {listCart.length > 0 ? (
                    <BackgroundSite> 

                    <ContainerPrincipal>
                        
                        <ServicesContainer>
                            {listCart}
                        </ServicesContainer>
                        
                        <SomaContainer>
                            <h2>Total de compras</h2>
                            <h3>Preço: R$ {this.totalCart()}</h3>
                            <BotaoCompra onClick={this.props.completedCart}> Finalizar Compra</BotaoCompra>
                        </SomaContainer>
                    
                    </ContainerPrincipal>
                    
                    <VoltarContainer>
                        <BotaoVoltar onClick={() => this.props.changePage("servicos")}>Voltar para Lista</BotaoVoltar>
                    </VoltarContainer>
                
                </BackgroundSite>
                ) : (
                    <div>
                        <ContainerEmpty>
                            <EmptyCart src={emptyCart} alt="Carrinho vazio"/>
                            <h3>Seu carrinho ainda está vazio!</h3>
                        </ContainerEmpty>
                        <VoltarContainer>
                            <BotaoVoltar onClick={() => this.props.changePage("servicos")}>Voltar para Lista</BotaoVoltar>
                        </VoltarContainer>
                    </div>
                )} 
            </div>
        )
    }
}

export default {Carrinho}