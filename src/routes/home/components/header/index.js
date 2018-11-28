import { h } from 'preact';
import Hero from '../../../../components/hero';
import Container from '../../../../components/container';
import BounceArrow from '../../../../components/bounce-arrow';
import style from './style.css';

const HomeHeader = () => (
	<div class={style.homeHeaderContainer}>
		<Hero
			containerClass={style.addHeroContainer}
			title="Jessica Roque."
			addTitleClass={style.addHeroTitle}
			imageAttributes={{ src: '../../assets/img/bitmoji-tree.png', alt: 'Bitmoji pic of me haha' }}
		>
			<p class={style.homeBlurb}>
				I love bringing ideas to life
				<br />
				with simple and beautiful code.
				<br />
			</p>
			<Container flexJustify="center">
				<BounceArrow />
			</Container>
		</Hero>
	</div>
);
export default HomeHeader;
