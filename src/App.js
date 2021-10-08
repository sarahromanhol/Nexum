import React from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/register/Register';
import { Servicos } from './components/Servicos/Servicos';
import { Carrinho } from './components/Carrinho/Carrinho';
import DetalhesServicos from './components/Servicos/DetalhesServicos';
import GlobalStyle from './styles/Global'


export default class App extends React.Component {
	state = {
		currentPage: 'home',
		servicoClicado: "",
		servicesInCart: []
	}

	changePage = (currentPage) => {
		this.setState({
			currentPage: currentPage
		})
	}

	goToDetailPage = (id) => {
		this.setState({ 
			currentPage: 'detalhes', 
			servicoClicado: id 
		})
	}

	addToCart = (service) => {
		const newService = [...this.state.servicesInCart, service]
		this.setState({
			servicesInCart: newService
		})
        alert('Seu produto foi adicionado ao carrinho')
    }

	removeServiceCart = (serviceId) => {
        if (window.confirm(`Tem certeza que deseja excluir o item do carrinho?`)) {
			const newServicesInCart = this.state.servicesInCart.filter((service) => {
				return service.id !== serviceId
			})
			this.setState({
				servicesInCart: newServicesInCart
			})
            alert(`O item foi deletado do carrinho.`)
        }
    }

	completedCart = () => {
        alert(`Obrigado por contratar com a gente. Volte sempre!`)
        this.setState({
            servicesInCart: []
        })
    }

	render() {

		const renderCurrentPage = () => {
			switch (this.state.currentPage) {
				case 'home':
					return <Home changePage={this.changePage} />
				case 'carrinho':
					return <Carrinho changePage={this.changePage} servicesInCart={this.state.servicesInCart} removeServiceCart={this.removeServiceCart} completedCart={this.completedCart}/>
				case 'servicos':
					return <Servicos goToDetailPage={this.goToDetailPage} addToCart={this.addToCart} />
				case 'register':
					return <Register />
				case 'detalhes':
					return <DetalhesServicos changePage={this.changePage} id={this.state.servicoClicado} addToCart={this.addToCart}/>
				default:
					return <Home changePage={this.changePage}/>
			}
		}


		return (
			<div>
				<GlobalStyle />
				<Header changePage={this.changePage} />
				{renderCurrentPage()}
				<Footer changePage={this.changePage} />
			</div>
		)
	}
}
