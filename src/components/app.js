import { h, Component } from 'preact';
import { Router } from 'preact-router';

import { LrgNavBar, SmNavBar } from './navbar';
import Content from './content';
import Footer from './footer';
// Code-splitting is automated for routes
import Home from '../routes/home';
import About from '../routes/about';
import Contact from '../routes/contact';
import Projects from '../routes/projects';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<LrgNavBar />
				<SmNavBar />
				<Content>
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<About path="/about" />
						<Contact path="/contact" />
						<Projects path="/projects" />
					</Router>
				</Content>
				<Footer />
			</div>
		);
	}
}
