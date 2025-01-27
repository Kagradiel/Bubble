import BubbleColors from "./Colors";
import Upgrade from "./Upgrade";

export default interface Bolha{
    cor: BubbleColors;
    upgrades: Upgrade[];
    armadura: number;
    coins: number;
}