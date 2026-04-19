import { Link } from 'react-router-dom';
import Board from './Board';

const Foyer = () => (
  <div>
    <h1>The Grand Foyer</h1>
    <nav>
      <Link to="/kitchen">Go to Kitchen</Link>
      <Link to="/library">Go to Library</Link>
      <Link to="/gallery">Go to Portrait Gallery</Link>

    </nav>
      <div className="room-view">
    <h2>The Grand Foyer</h2>
    <Board width={30} height={40} />
    {/* This creates a 6x8 grid */}
  </div>
  </div>
);
