import { h } from 'preact';
import style from './style.css';

const Main = ({ renderHeader, children }) => (
	<div class={style.mainContainer}>
		{renderHeader()}
		<div class={style.mainContent}>{children}</div>
	</div>
);
export default Main;
