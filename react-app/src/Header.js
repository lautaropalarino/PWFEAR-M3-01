import React from 'react'
import logo from './logo.svg';
class Header extends React.Component {


	render(){
		
		return(
		<header className="App-header">
	        <img src={logo} className="App-logo" alt="logo" />

	        <h1>{this.props.title}</h1>
	        
	        <a
	          className="App-link"
	          href= {this.props.link}  
	          target="_blank"
	          rel="noopener noreferrer"
	        >
	        {this.props.action}  
	        </a>
      	</header>)
	}

}

export default Header