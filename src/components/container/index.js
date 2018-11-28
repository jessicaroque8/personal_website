import { h } from 'preact';
import style from './style';

const getClass = flexJustify => {
	switch (flexJustify) {
		case 'center':
			return style.center;
		case 'start':
			return style.start;
		case 'end':
			return style.end;
		case 'space-between':
			return style.between;
		default:
			'start';
	}
};
const Container = ({ flexJustify, addClass, isImg, children }) => {
	const containerClass = flexJustify || addClass || isImg ? { class: `${getClass(flexJustify)} ${isImg ? style.isImg : null} ${addClass}` } : null;
	return <div {...containerClass}>{children}</div>;
};
export default Container;
