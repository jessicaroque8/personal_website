import { h } from 'preact';
import style from './style.css';
import LinkWrapper from '../link-wrapper';

const Button = ({ to, href, onClick, isPrimary, children }) => {
	const primaryClass = isPrimary ? style.primary : null;
	if (to || href)
		return (
			<LinkWrapper to={to} href={href}>
				<button class={style.specialBtn}>{children}</button>
			</LinkWrapper>
		);
	return (
		<button {...onClick} class={`${style.specialBtn} ${primaryClass}`}>
			{children}
		</button>
	);
};
export default Button;
