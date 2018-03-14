import React from 'react';
import Header from '../header';
import Bg from './bg';
import Description from './description';
import Images from './images';
import Footer from '../footer';
class App extends React.Component{

	render(){
		return(
			<div>
				<Header />
				<Bg />
				<Description />
				<Images />
				<Footer />
			</div>
		)
	};
}
export default App;