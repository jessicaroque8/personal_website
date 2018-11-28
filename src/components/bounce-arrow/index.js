import { h } from 'preact';
import style from './style.css';

const BounceArrow = () => (
	<svg xmlns="http://www.w3.org/2000/svg" class={`${style.arrow} ${style.bounce}`} viewBox="0 0 24 24">
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path fill="#010101" d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
	</svg>
);
export default BounceArrow;
