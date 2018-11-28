import { h } from 'preact';
import style from './style';
import Main from '../../components/main';
import Header from '../../components/header';
import Section from '../../components/section';
import Container from '../../components/container';
import Card from '../../components/card';
import HourglassSVG from './components/hourglass-svg';

const renderHeader = () => <Header title="Resume" subtitle="Get an idea of how I've grown over the years." />;
const Resume = () => (
	<Main renderHeader={renderHeader}>
		<Section addClass={style.experienceContainer}>
			<Container flexJustify="center" addClass={style.sectionTitleContainer}>
				<h3>Experience</h3>
				<HourglassSVG addClass={style.hourglass} />
			</Container>
			<Card
				subtitle="LearnSkin/Dermveda"
				title="Software Engineer"
				titleBody="April 2018 - Present"
				imgAttributes={{ src: '../../assets/img/dermveda-logo.png', alt: 'Dermveda logo' }}
				isCircleImg
			>
				Conceptualizes and develops interactive, user-centric features across the SDLC using React, Redux, Styled-Components, GraphQL,
				KeystoneJS, Mongoose, MongoDB, and NodeJS. Designs with AdobeXD. Debugs with patience and tenacity. Works on multiple projects
				including creating reusable and maintainable components for a component library, building a product platform full-stack, designing and
				developing landing pages, SEO-optimization, implementing Facebook Pixel, and redesigning and refactoring a course player. Grew from
				contracted intern, to full-time onsite developer in Sacramento, to trusted remote developer (still full-time) in San Diego.
			</Card>
			<Card
				subtitle="Achieve Internet"
				title="Project Management Intern"
				titleBody="June 2017 - August 2017"
				imgAttributes={{ src: '../../assets/img/achieve-internet-logo.png', alt: 'Achieve Internet logo' }}
				isCircleImg
			>
				Assisted Project Manager using tools JIRA, Confluence, Tempo, Excel, and Powerpoint. Duties included creating daily scrum reports,
				following up with developers on tickets, generating templates for client-facing project status reports, and creating documentation for
				the JIRA ticket lifecycle.
			</Card>
			<Card
				subtitle="Sama Dog"
				title="Technology Advisor"
				titleBody="January 2016 - October 2018"
				imgAttributes={{ src: '../../assets/img/sama-dog-logo.jpeg', alt: 'Sama Dog logo' }}
				isCircleImg
			>
				Served as primary consultant for business tech to include implementation of Asana and Evernote, teaching Squarespace basics, managing
				domain hosting, configuring Google Apps for Business for multiple domains and users, and troubleshooting hardware.
			</Card>
			<Card
				subtitle="The Chopra Center for Wellbeing"
				title="Assistant to the VP of Client Services"
				titleBody="January 2016 - July 2016"
				imgAttributes={{ src: '../../assets/img/chopra-logo.png', alt: 'Chopra Center logo' }}
				isCircleImg
			>
				Prioritized emails, managed schedule, troubleshooted hardware.
			</Card>
			<Card
				subtitle="The Chopra Center for Wellbeing"
				title="Events Administrative Assistant"
				titleBody="July 2015 - January 2016"
				imgAttributes={{ src: '../../assets/img/chopra-logo.png', alt: 'Chopra Center logo' }}
				isCircleImg
			>
				Generated reports, assisted with vendor relationships, and conducted general research for Events Department.
			</Card>
		</Section>
	</Main>
);
export default Resume;
