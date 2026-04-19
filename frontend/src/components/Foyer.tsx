import { Link } from 'react-router-dom';

const Foyer = () => (
  <div>
    <h1>The Grand Foyer</h1>
    <nav>
      <Link to="/kitchen">Go to Kitchen</Link>
      <Link to="/library">Go to Library</Link>
      <Link to="/gallery">Go to Portrait Gallery</Link>
    </nav>
  </div>
);
