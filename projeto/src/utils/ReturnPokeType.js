import bug from "../assets/poke-types/bug.png"
import fire from "../assets/poke-types/fire.png";
import flying from "../assets/poke-types/flying.png";
import grass from "../assets/poke-types/grass.png";
import normal from "../assets/poke-types/normal.png";
import poison from "../assets/poke-types/poison.png";
import water from "../assets/poke-types/water.png";

export const getTypes = (types) => {
    switch(types) {
        case "bug":
            return bug;
        case "fire":
            return fire;
        case "flying":
            return flying;
        case "grass":
            return grass;
        case "normal":
            return normal;
        case "poison":
            return poison;
        case "water":
            return water;
            default:
                return fire;
    }
}