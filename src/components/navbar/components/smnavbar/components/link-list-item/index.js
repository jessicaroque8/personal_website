import { h } from 'preact';
import style from './style.css';
import LinkWrapper from '../../../../../link-wrapper';

const LinkListItem = ({ iconClass, iconName, linkAttributes, onClick }) => {
	if (!linkAttributes) return null;
	const linkAttrs = linkAttributes.to ? { to: linkAttributes.to } : { href: linkAttributes.href };
	return (
		<li class={style.listItem} onClickCapture={onClick}>
			<LinkWrapper {...linkAttrs} addClass={style.linkStyles} noStyle>
				<div>
					<i class={iconClass}>{iconName}</i>
				</div>
				<span>{linkAttributes.text}</span>
			</LinkWrapper>
		</li>
	);
};
export default LinkListItem;
