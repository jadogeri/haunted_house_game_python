// Board.tsx
import React from 'react';
import Square from './Square';

interface BoardProps {
  width: number; // feet
  height: number; // feet
}

const Board = ({ width, height }: BoardProps) => {
  // Convert feet to grid units (1 tile = 5 feet)
  const columns = Math.ceil(width / 5);
  const rows = Math.ceil(height / 5);

  const totalSquares = columns * rows;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 40px)`,
      gridTemplateRows: `repeat(${rows}, 40px)`,
      gap: '2px',
      padding: '20px',
      backgroundColor: '#000',
      border: '2px solid #444',
      boxShadow: '0 0 20px rgba(0,0,0,1)'
    }}>
      {Array.from({ length: totalSquares }).map((_, i) => (
        <Square key={i} x={i % columns} y={Math.floor(i / columns)} />
      ))}
    </div>
  );
};

export default Board;
