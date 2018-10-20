import { h } from 'preact';
import style from './style';

const getClass = type => {
	switch (type) {
		case 'trees':
			return style.trees;
		case 'asteroids':
			return style.asteroids;
		default:
			return style.trees;
	}
};

const Pattern = ({ type, children }) => {
	const patternType = getClass(type);
	return <div class={`${style.pattern} ${patternType}`}>{children}</div>;
};

export default Pattern;
