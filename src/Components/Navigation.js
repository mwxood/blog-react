import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <nav className="top-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
