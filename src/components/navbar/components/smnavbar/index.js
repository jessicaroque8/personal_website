import { h, Component } from 'preact';
import style from './style';
import sharedStyles from '../../style.css';
import LinkWrapper from '../../../link-wrapper';
import LinkListItem from './components/link-list-item';

class SmNavBar extends Component {
	toggleMenu = () => {
		console.log('clicked');
		this.setState({ showMenu: !this.state.showMenu });
	};

	constructor() {
		super();
		this.state = {
			showMenu: false
		};
	}

	render(props, state) {
		const menuStateStyle = state.showMenu ? style.menuOpen : null;
		return (
			<div class={sharedStyles.mobile}>
				<div class={sharedStyles.navContainer}>
					<div class={sharedStyles.navLinks}>
						<i onClick={this.toggleMenu} class="material-icons">
							menu
						</i>
					</div>
					<div>
						<LinkWrapper to="/" noStyle>
							<img src="../../assets/img/jr-logo.png" alt="Logo" class={style.logoImg} />
						</LinkWrapper>
					</div>
				</div>
				<nav class={`${style.menuContainer} ${menuStateStyle}`}>
					<span class={style.navTitle}>Navigation</span>
					<ul>
						<LinkListItem
							iconName="home"
							linkAttributes={{ to: '/', text: 'Home' }}
							onClick={this.toggleMenu}
							iconClass="material-icons"
							key="home"
						/>
						<LinkListItem
							iconName="portrait"
							linkAttributes={{ to: '/resume', text: 'Resume' }}
							onClick={this.toggleMenu}
							iconClass="material-icons"
						/>
						<LinkListItem
							iconName="layers"
							linkAttributes={{ to: '/projects', text: 'Projects' }}
							onClick={this.toggleMenu}
							iconClass="material-icons"
						/>
						<LinkListItem
							iconName="mail"
							linkAttributes={{ to: '/contact', text: 'Contact' }}
							onClick={this.toggleMenu}
							iconClass="material-icons"
						/>
					</ul>
					<span class={style.navTitle}>Social</span>
					<ul key="social-links">
						<LinkListItem
							linkAttributes={{ href: 'http://www.linkedin.com/in/jessicaroque8', text: 'LinkedIn' }}
							onClick={this.toggleMenu}
							iconClass="fab fa-linkedin"
						/>
						<LinkListItem
							linkAttributes={{ href: 'http://www.github.com/jessicaroque8', text: 'GitHub' }}
							onClick={this.toggleMenu}
							iconClass="fab fa-github-square"
						/>
					</ul>
				</nav>
			</div>
		);
	}
}
export default SmNavBar;
