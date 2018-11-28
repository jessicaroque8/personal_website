import { h } from 'preact';
import style from './style.css';

const getSize = size => {
	switch (size) {
		case 'xsmall':
			return style.xsmall;
		case 'small':
			return style.small;
		case 'large':
			return style.large;
		default:
			return style.medium;
	}
};

const getFlexAlign = flexAlign => {
	if (!flexAlign) return null;
	switch (flexAlign) {
		case 'start':
			return style.flexStart;
		case 'end':
			return style.flexEnd;
		case 'center':
			return style.flexCenter;
		default:
			return style.flexStart;
	}
};

const getAlign = align => {
	switch (align) {
		case 'left':
			return style.left;
		case 'right':
			return style.right;
		case 'center':
			return style.center;
		default:
			return style.left;
	}
};

const getFontWeight = fontWeight => {
	switch (fontWeight) {
		case 'light':
			return style.light;
		case 'bold':
			return style.bold;
		default:
			return style.regular;
	}
};

const Text = ({ is, size, flexAlign, align, fontWeight, addClass, children }) => {
	const textClass = { class: `${getSize(size)} ${getFontWeight(fontWeight)} ${getFlexAlign(flexAlign)} ${getAlign(align)} ${addClass}` };
	switch (is) {
		case 'div':
			return <div {...textClass}>{children}</div>;
		case 'span':
			return <span {...textClass}>{children}</span>;
		default:
			return <p {...textClass}>{children}</p>;
	}
};
export default Text;
