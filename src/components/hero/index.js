import { h } from 'preact';
import style from './style';

const Hero = ({ imageAttributes, title, addTitleClass, subtitle, subtitleClass, containerClass, addImgClass, isCircleImg, children }) => {
	const circleContainerClass = isCircleImg ? style.circleImgContainer : null;
	const circleImgClass = isCircleImg ? style.circleImg : null;
	return (
		<header class={`${style.heroContainer} ${containerClass}`}>
			<div class={style.heroBody}>
				<p class={`${style.heroSubtitle} ${subtitleClass}`}>{subtitle}</p>
				<h1 class={`${style.heroTitle} ${addTitleClass}`}>{title}</h1>
				{children}
			</div>
			<div class={`${style.heroImgContainer} ${circleContainerClass}`}>
				<img src={imageAttributes.src} alt={imageAttributes.alt} class={`${style.heroImg} ${circleImgClass} ${addImgClass}`} />
			</div>
		</header>
	);
};
export default Hero;
