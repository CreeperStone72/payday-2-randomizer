import { Gun, WeaponSlot } from "../Gun";

import { SecondaryShotguns as Sprites } from "../../images";

const [
    SpriteLocomotive12G, SpriteGoliath12G, SpriteGrimm12G, SpriteClaire12G, SpriteGSPS12G, SpriteStreetSweeper, SpriteArgosIII, SpriteTheJudge,
] = Sprites;

const Locomotive12G = new Gun("Locomotive 12G", SpriteLocomotive12G, WeaponSlot.SecondaryShotgun);
const Goliath12G = new Gun("Goliath 12G", SpriteGoliath12G, WeaponSlot.SecondaryShotgun);
const Grimm12G = new Gun("Grimm 12G", SpriteGrimm12G, WeaponSlot.SecondaryShotgun);
const Claire12G = new Gun("Claire 12G", SpriteClaire12G, WeaponSlot.SecondaryShotgun);
const GSPS12G = new Gun("GSPS 12G", SpriteGSPS12G, WeaponSlot.SecondaryShotgun);
const StreetSweeper = new Gun("Street Sweeper", SpriteStreetSweeper, WeaponSlot.SecondaryShotgun);
const ArgosIII = new Gun("Argos III", SpriteArgosIII, WeaponSlot.SecondaryShotgun);
const TheJudge = new Gun("The Judge", SpriteTheJudge, WeaponSlot.SecondaryShotgun);

const SecondaryShotguns = [
    Locomotive12G, Goliath12G, Grimm12G, Claire12G, GSPS12G, StreetSweeper, ArgosIII, TheJudge,
];

export default SecondaryShotguns;