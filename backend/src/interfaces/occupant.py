from typing import Optional, Protocol, runtime_checkable

from backend.src.models.square import Square

@runtime_checkable
class Occupant(Protocol):
    name: str
    def interact(self) -> str:  ...
    def move(self, current_square: 'Square') -> Optional['Square']: ...




from __future__ import annotations  # MUST BE LINE 1
from abc import ABC, abstractmethod
from typing import Optional, TYPE_CHECKING

# This prevents the circular import during execution
if TYPE_CHECKING:
    from src.models.square import Square
class OccupantOLD(ABC):
    def __init__(self, name: str):
        self.name = name

    @abstractmethod
    def interact(self) -> str:
        """Must return a string description of the interaction."""
        pass

    @abstractmethod
    def move(self, current_square: 'Square') -> Optional['Square']: # Use string here
        """Must return the next Square or None if stationary."""
        pass
