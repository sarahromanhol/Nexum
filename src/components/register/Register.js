import Axios from "axios";
import React from "react";
import styled from "styled-components";


const headers = {
    headers: {
        Authorization: "7b34660a-e65f-4a6b-b3af-7b3651eccdad"
    }
}


const ContainerPageRegister = styled.div`
    background-color: #FF9933;
    height: 120vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
`

const ContainerPrincipal = styled.div`
    margin: 0;
    align-items: center;
    justify-content: center;
`

const ContainerRegister = styled.div`
    background-color: ghostwhite;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 500px;
    height: 600px;
    box-shadow: 8px 10px 3px 3px #a25922;

    h2{
        margin-bottom: -50px;
    }
`

const BotaoCadastro = styled.button`
        border-radius: 40px;
        background-color: #FF9933;
        color: white;
        cursor: pointer;
        border: hidden;
        height: 30px;
        width: 200px;
        font-weight: 800;
        font-size: medium;
        box-shadow: 3px 4px 3px #727D71;
        margin-top: -60px;

`

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

`
const AllInputs = styled.input`
    margin-top: 10px;
    width: 200px;
    height: 24px;
    border-radius: 20px;
    color: #FF9933;
    font-weight: 800;
    padding: 2px 35px;
    cursor: pointer;
`

const LabelPagamentos = styled.label`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    color: #FF9933;
    font-weight: 600;
    cursor: pointer;
    h3{
        margin-bottom: 20px;
        align-items: center;
        font-weight: 800;
    }
`

const Checkbox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    

    input {
        width: 20px;
        height: 20px;
    }

    span {
        margin-left: 20px;
    }
`

class Register extends React.Component {
    state = {
        servico: "",
        descricao: "",
        prazo: "",
        preco: "",
        formasDePagamentos: [
            {
                id: "debito",
                name: "Cartão de Débito"
            },
            {
                id: "credito",
                name: "Cartão de Crédito"
            },
            {
                id: "paypal",
                name: "PayPal"
            },
            {
                id: "pix",
                name: "Pix"
            },
            {
                id: "boleto",
                name: "Boleto"
            },
        ],
        pagamentoSelecionado: []
    }

    onChangeServico = (event) => {
        this.setState({
            servico: event.target.value
        })
    }
    onChangeDescricao = (event) => {
        this.setState({
            descricao: event.target.value
        })
    }
    onChangePrazo = (event) => {
        this.setState({
            prazo: event.target.value
        })
    }
    onChangePreco = (event) => {
        this.setState({
            preco: event.target.value
        })
    }
    onChangePagamento = (name) => {
        let selected = this.state.pagamentoSelecionado
        let find = selected.indexOf(name)

        if (find > -1) {
            selected.splice(find, 1)
        } else {
            selected.push(name)
        }

        this.setState({ selected })
    }

    createJob = () => {
        const url = 'https://labeninjas.herokuapp.com/jobs'
        const body = {
            title: this.state.servico,
            description: this.state.descricao,
            price: Number(this.state.preco),
            paymentMethods: this.state.pagamentoSelecionado,
            dueDate: this.state.prazo
        }

        Axios
            .post(url, body, headers)
            .then((res) => {
                alert(`${res.data.message}: ${body.title}`)
                this.setState(
                    {
                        servico: "",
                        descricao: "",
                        prazo: "",
                        preco: "",
                        pagamentoSelecionado: []
                    }

                )
                let boxes = document.getElementsByName("metodo");
                for (let i = 0; i < boxes.length; i++) {
                    boxes[i].checked = false;
                }
            })
            .catch((err) => {
                alert(`${err.response.data.message} ${JSON.stringify(err.response.data.errors)}`)
            })
    }

    render() {

        const checkBoxesPagamento = this.state.formasDePagamentos.map((pagamento) => {
            return (
                <label key={pagamento.id}>
                    <Checkbox>
                        <input type="checkbox"
                            name="metodo"
                            onChange={() => this.onChangePagamento(pagamento.name)}
                            selected={this.state.pagamentoSelecionado.includes(pagamento.name)}
                        ></input>
                        <span>{pagamento.name}</span>
                    </Checkbox>
                </label>
            )
        })
        
        
        return (
            <ContainerPageRegister>
                <ContainerPrincipal>    
                    <ContainerRegister>
                        <h2>Cadastre o seu serviço</h2>
                        <ContainerForm>
                            <label htmlFor="servico">
                                <AllInputs
                                    type="text" id="servico" name="servico" placeholder="Título"
                                    value={this.state.servico} onChange={this.onChangeServico} />
                            </label>
                            <label htmlFor="descricao">
                                <AllInputs
                                    type="text" id="descricao" name="descricao" placeholder="Descrição"
                                    value={this.state.descricao} onChange={this.onChangeDescricao} />
                            </label>
                            <label htmlFor="prazo">
                                <AllInputs type="date" id="prazo" name="prazo"
                                    value={this.state.prazo} onChange={this.onChangePrazo} />
                            </label>
                            <label htmlFor="preco">
                                <AllInputs type="number" id="preco" name="preco" placeholder="Preço" min="0"
                                    value={this.state.preco} onChange={this.onChangePreco} />
                            </label>
                            <LabelPagamentos>
                                <h3>Formas de Pagamento:</h3>
                                {checkBoxesPagamento}
                            </LabelPagamentos>
                        </ContainerForm>
                        <BotaoCadastro onClick={this.createJob}>Cadastrar Serviço</BotaoCadastro>
                    </ContainerRegister>
                </ContainerPrincipal>
            
            </ContainerPageRegister>
        )
    }
}

export default Register