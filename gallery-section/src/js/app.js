import React from 'react';
import Header from './header';
import Hero from './hero';
import Features from './features';
import Secondary from './secondary';
import Images from './images';
import Footer from './footer';
class App extends React.Component{

	render(){
		return(
			<div>
				<Header />
				<Hero />
				<Features />
				<Secondary />
				<Images />
				<Footer />
			</div>
		)
	};
}
export default App;