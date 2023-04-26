import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <Link to="about" component="a">About Me</Link>
    <Link to="birding" component="a">Birding</Link>
  </nav>
);

export default Nav;
