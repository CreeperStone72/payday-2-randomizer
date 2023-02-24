import { Gun, WeaponSlot } from "../Gun";

import { SecondarySnipers as Sprites } from "../../images";

const [
    SpritePronghorn, SpriteAranG2, SpriteNorthStar,
] = Sprites;

const Pronghorn = new Gun("Pronghorn", SpritePronghorn, WeaponSlot.SecondarySniper);
const AranG2 = new Gun("Aran G2", SpriteAranG2, WeaponSlot.SecondarySniper);
const NorthStar = new Gun("North Star", SpriteNorthStar, WeaponSlot.SecondarySniper);

const SecondarySnipers = [
    Pronghorn, AranG2, NorthStar,
];

export default SecondarySnipers;