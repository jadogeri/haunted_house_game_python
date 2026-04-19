from backend.src.interfaces.occupant import Occupant
from backend.src.models.square import Square


class Room:
    def __init__(self):
        # 1. Create a 5x5 grid of Square instances
        self.grid: list[list[Square]] = [
            [Square() for _ in range(5)] for _ in range(5)
        ]
        
        # 2. Link all squares to their neighbors
        self._link_squares()

    def _link_squares(self):
        """Automatically connects each square's north/south/east/west properties."""
        for r in range(5):
            for c in range(5):
                current = self.grid[r][c]
                
                # Link North (row above)
                if r > 0:
                    current.north = self.grid[r-1][c]
                
                # Link East (column to the right)
                if c < 4:
                    current.east = self.grid[r][c+1]
                
                # Note: South and West link automatically via your Square setters!

    def get_square(self, x: int, y: int) -> Square:
        """Helper to get a square by coordinates (0-4)."""
        if not (0 <= x < 5 and 0 <= y < 5):
            raise IndexError("Coordinates out of bounds for 5x5 room.")
        return self.grid[y][x]

    def place_occupant(self, x: int, y: int, occupant: Occupant):
        """Place a Monster, Weapon, or Player at a specific coordinate."""
        self.get_square(x, y).occupant = occupant
