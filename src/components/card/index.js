import { h } from 'preact';
import style from './style';

const getImgContainerClass = (hasImg, isCircleImg) => {
	if (!hasImg) return style.noImgContainer;
	if (isCircleImg) return style.circleImgContainer;
	return style.imgContainer;
};
const getImgClass = (hasImg, isCircleImg) => {
	if (!hasImg) return style.noImg;
	if (isCircleImg) return style.circleImg;
	return style.img;
};
const Card = ({ subtitle, title, titleBody, hasImg = true, imgAttributes = {}, isCircleImg = false, isFloater = false, children }) => {
	const imgContainerClass = getImgContainerClass(hasImg, isCircleImg);
	const imgClass = getImgClass(hasImg, isCircleImg);
	const floaterClass = isFloater ? style.cardBounce : null;
	return (
		<section class={`${style.cardContainer} ${floaterClass}`}>
			<header class={style.cardHeading}>
				<div class={`${imgContainerClass}`}>
					<img src={imgAttributes.src} alt={imgAttributes.alt} class={imgClass} />
				</div>
				<div class={style.cardHeadingText}>
					<h4 class={style.cardSubtitle}>{subtitle}</h4>
					<h3>{title}</h3>
					<p>{titleBody}</p>
				</div>
			</header>
			<div class={style.cardBody}>{children}</div>
		</section>
	);
};
export default Card;
