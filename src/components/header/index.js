import { h } from 'preact';
import style from './style.css';
const Header = ({ title, subtitle, addClass }) => (
	<div class={`${style.headerContainer} ${addClass}`}>
		{title && <h2>{title}</h2>}
		{subtitle && <p>{subtitle}</p>}
	</div>
);
export default Header;
