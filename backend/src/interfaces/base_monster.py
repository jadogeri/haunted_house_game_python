from abc import ABC, abstractmethod
from typing import Optional

from nanoid import generate

from backend.src.models.square import Square

    
class BaseMonster(ABC):
    def __init__(self, name: str, hp: int, speed: int, can_phase: bool = False):
        self.id = generate()
        self.name = name
        self.hp = hp
        self.speed = speed
        self.can_phase = can_phase # New flag for movement rules

    @abstractmethod
    def interact(self) -> str: pass

    @abstractmethod
    def move(self, current_square: Square) -> Square | None: pass
