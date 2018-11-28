import { h } from 'preact';
import style from './style.css';

const getDisplay = display => {
	if (!display) return null;
	switch (display) {
		case 'flex':
			return style.flex;
		default:
			return null;
	}
};

const Section = ({ display, addClass, children }) => {
	const sectionClasses = { class: `${style.sectionContainer} ${getDisplay(display)} ${addClass}` };
	return <div {...sectionClasses}>{children}</div>;
};
export default Section;
