import { h } from 'preact';
import Main from '../../components/main';
import Section from '../../components/section';
import LinkWrapper from '../../components/link-wrapper';
import Button from '../../components/button';
import Container from '../../components/container';
import Text from '../../components/text';
import Header from './components/header';
import LightbulbSVG from './components/lightbulb-svg';
import MessageSVG from './components/message-svg';
import style from './style.css';

const Home = () => (
	<Main renderHeader={Header}>
		<Section addClass={style.toolsSection}>
			<Container flexJustify="center" addClass={style.lightbulbContainer}>
				<LightbulbSVG addClass={style.lightbulb} />
			</Container>
			<Text fontWeight="bold" align="center">
				I'm most familiar with these technologies.
			</Text>
			<ul class={style.tools}>
				<li>
					<img src="../../assets/img/javascript.png" alt="Javascript icon" />
					<Text is="span" size="small">
						JavaScript
					</Text>
				</li>
				<li>
					<img src="../../assets/img/react.png" alt="React.js icon" />
					<Text is="span" size="small">
						React
					</Text>
				</li>
				<li>
					<img src="../../assets/img/nodejs.png" alt="Node.js icon" />
					<Text is="span" size="small">
						Node.js
					</Text>
				</li>
				<li>
					<img src="../../assets/img/ruby.png" alt="Ruby icon" />
					<Text is="span" size="small">
						Ruby
					</Text>
				</li>
				<li>
					<img src="../../assets/img/rails.png" alt="Ruby on Rails icon" />
					<Text is="span" size="small">
						Rails
					</Text>
				</li>
			</ul>
			<div>
				<Text size="xsmall" align="center">
					But above all else, I live to learn
					<br />
					and Adapt* is my middle name.
				</Text>
				<Text size="xsmall" align="center">
					* Okay fine, it's Ashley... but close enough.
				</Text>
			</div>
		</Section>
		<Section addClass={style.currentPositionContainer}>
			<Container>
				<Container flexJustify="center" isImg addClass={style.currentPositionImageContainer}>
					<img src="../../assets/img/bitmoji-carrot.png" alt="Me in a bitmoji carrot" />
				</Container>
				<Container>
					<Text size="medium" align="center">
						I'm a Software Engineer at sister companies <LinkWrapper href="http://www.learnskin.com">LearnSkin</LinkWrapper> and{' '}
						<LinkWrapper href="http://www.dermveda.com">Dermveda</LinkWrapper>.
					</Text>
					<Container flexJustify="center" addClass={style.resumeBtnContainer}>
						<Button to="/resume">See Full Resume</Button>
					</Container>
				</Container>
			</Container>
		</Section>
		<Section addClass={style.contactContainer}>
			<Container addClass={style.contactInnerContainer}>
				<Container>
					<MessageSVG addClass={style.message} />
				</Container>
				<Text size="large" fontWeight="bold">
					Need a hand on a project?
				</Text>
				<Text size="small">I'm open to freelance opportunities.</Text>
				<Container>
					<Button to="/contact" isPrimary>
						Let's chat.
					</Button>
				</Container>
			</Container>
		</Section>
	</Main>
);

export default Home;
