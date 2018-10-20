import { h } from 'preact';
import style from './style';

const Content = ({ children }) => <main class={style.content}>{children}</main>;
export default Content;
