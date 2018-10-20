import { h } from 'preact';
// import Pattern from '../../../../components/pattern';
import Hero from '../../../../components/hero';
import Button from '../../../../components/button';
import style from './style.css';

const HomeHeader = () => (
	<div class={style.homeHeaderContainer}>
		{/* <Pattern type="trees"> */}
		<Hero
			containerClass={style.addHeroContainer}
			// subtitle="Hello humans and bots,"
			// subtitleClass={style.homeHeroSubtitle}
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
			<p class={style.homeBlurb}>
				From frontend to backend,
				<br />I can help make your next project
				<br />a reality.
			</p>
			<Button href="/nav/experience.html">More about me</Button>
		</Hero>
		{/* </Pattern> */}
	</div>
);
export default HomeHeader;
