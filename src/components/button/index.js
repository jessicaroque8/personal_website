import { h } from 'preact';
import style from './style.css';
import LinkWrapper from '../link-wrapper';

const Button = ({ to, href, onClick, children }) => {
	if (to || href)
		return (
			<LinkWrapper {...to} {...href}>
				<button class={style.specialBtn}>{children}</button>
			</LinkWrapper>
		);
	return (
		<button {...onClick} class={style.specialBtn}>
			{children}
		</button>
	);
};
export default Button;
