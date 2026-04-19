from typing import Protocol, runtime_checkable

@runtime_checkable
class Occupant(Protocol):
    name: str
    def interact(self) -> str:
        ...
