import React from "react";
import styled from "styled-components";
import filtro from "../../imgs/filtro.png"

// Filtros

const ContainerFiltro = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    width: 240px;
    
    background-color: #FF9933;
    color: white;
    align-items: center;
    
    padding: 25px;
    margin-right: 70px;
    
    input {
        width: 180px;
        margin-top: 40px;
        border-radius: 20px;
        height: 30px;
        cursor: pointer;
        color: #FF9933;
        font-weight: 800;
        padding: 2px 15px;
        cursor: pointer;
        box-shadow: 3px 4px 3px #a25922;
        
    }

`

function Filtro (props) {
    return (
        <div>
            <ContainerFiltro>
                    <img src={filtro} alt="filtro imagem" />
                    <input placeholder="Preço Mínimo" type="number" value={props.precoMin} onChange={props.updatePrecoMin} min="0" max="infinite"/>
                    <input placeholder="Preço Máximo" type="number" value={props.precoMax} onChange={props.updatePrecoMax} min="0" max="infinite"/>
            </ContainerFiltro>
        </div>
    )
}

export default Filtro