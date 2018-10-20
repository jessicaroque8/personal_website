import { h } from 'preact';
import style from './style.css';
const Header = ({ title }) => (
	<div class={style.headerContainer}>
		<h2 class={style.headerTitle}>{title}</h2>
	</div>
);
export default Header;
