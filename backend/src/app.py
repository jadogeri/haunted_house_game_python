
from src.models.shadow import Shadow
from src.models.square import Square
from src.models.vampire import Skeleton, Vampire
from src.models.zombie import Zombie


def create_app():
    zombie = Zombie();
    shadow = Shadow();
    skeleton = Skeleton();
    vampire = Vampire();
    square = Square()       
    print(zombie.interact())
    print(shadow.interact())
    print(skeleton.interact())  
    print(vampire.interact())

if __name__ == "__main__":
    create_app()

