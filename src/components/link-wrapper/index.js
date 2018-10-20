import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

// uses React conventions of 'to' and 'href' to distinguish between internal and external links
const LinkWrapper = ({ to, href, noStyle, addClass, children }) => {
	const noStyleClass = noStyle ? style.noStyle : null;
	const linkClasses = `${style.link} ${noStyleClass} ${addClass}`;
	if (to)
		return (
			<Link href={to} class={linkClasses}>
				{children}
			</Link>
		);
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" class={linkClasses}>
			{children}
		</a>
	);
};
export default LinkWrapper;
