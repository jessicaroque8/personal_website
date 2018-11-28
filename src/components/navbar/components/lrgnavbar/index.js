import { h } from 'preact';
import sharedStyles from '../../style.css';
import style from './style.css';
import LinkWrapper from '../../../link-wrapper';

const LrgNavBar = () => (
	<nav class={`${sharedStyles.navContainer} ${sharedStyles.desktopTablet}`}>
		<a href="./index.html">
			<h1 class={style.title}>JessicaRoque.com</h1>
			<img src="../../assets/img/jr-logo.png" alt="Logo" />
		</a>
		<div class={sharedStyles.navLinks}>
			<ul>
				<li>
					<LinkWrapper to="/" noStyle>
						Home
					</LinkWrapper>
				</li>
				<li>
					<LinkWrapper to="/resume" noStyle>
						Resume
					</LinkWrapper>
				</li>
				<li>
					<LinkWrapper to="/projects" noStyle>
						Projects
					</LinkWrapper>
				</li>
				<li>
					<LinkWrapper to="/contact" noStyle>
						Contact
					</LinkWrapper>
				</li>
			</ul>
			<ul>
				<li>
					<LinkWrapper href="http://www.linkedin.com/in/jessicaroque8" noStyle>
						<i class="fab fa-linkedin" />
					</LinkWrapper>
				</li>
				<li>
					<LinkWrapper href="http://www.github.com/jessicaroque8" noStyle>
						<i class="fab fa-github-square" />
					</LinkWrapper>
				</li>
			</ul>
		</div>
	</nav>
);
export default LrgNavBar;
