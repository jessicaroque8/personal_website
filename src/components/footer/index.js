import { h } from 'preact';
import style from './style';
import LinkWrapper from '../link-wrapper';

const Footer = () => (
	<footer>
		<p>
			Made with xo using Preact.{' '}
			<LinkWrapper href="https://github.com/jessicaroque8/personal_website">Check out the code on GitHub.</LinkWrapper>
		</p>
	</footer>
);
export default Footer;
