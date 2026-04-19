

from src.interfaces.occupant import Occupant
from src.models.square import Square


class Zombie(Occupant):
    def __init__(self):
        super().__init__("Zombie")

    def interact(self) -> str:
        return "The Zombie lunges forward with a decaying groan!"

    def move(self, current_square: 'Square') -> Square | None:
        # Zombies are slow, maybe they don't move every turn
        return None
    