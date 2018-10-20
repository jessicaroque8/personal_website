import { h } from 'preact';
import Main from '../../components/main';
import Header from '../../components/header';

const renderHeader = () => <Header title="Contact" />;

const Contact = () => <Main renderHeader={renderHeader}>Coming soon!</Main>;
export default Contact;
