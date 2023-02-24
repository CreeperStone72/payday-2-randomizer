import { Gun, WeaponSlot } from "../Gun";

import { PrimaryShotguns as Sprites } from "../../images";

const [
    SpriteReinfeld880, SpriteIZHMA12G, SpriteMosconi12G, SpriteBreaker12G, SpriteMosconi12GTactical, SpriteM1014, SpriteRaven, SpriteReinfeld88,
    SpriteSteakout12G, SpriteVD12, SpritePredator12G, SpriteJocelineOU12G
] = Sprites;

const Reinfeld880 = new Gun("Reinfeld 880", SpriteReinfeld880, WeaponSlot.PrimaryShotgun);
const IZHMA12G = new Gun("IZHMA 12G", SpriteIZHMA12G, WeaponSlot.PrimaryShotgun);
const Mosconi12G = new Gun("Mosconi 12G", SpriteMosconi12G, WeaponSlot.PrimaryShotgun);
const Breaker12G = new Gun("Breaker 12G", SpriteBreaker12G, WeaponSlot.PrimaryShotgun);
const Mosconi12GTactical = new Gun("Mosconi 12G Tactical", SpriteMosconi12GTactical, WeaponSlot.PrimaryShotgun);
const M1014 = new Gun("M1014", SpriteM1014, WeaponSlot.PrimaryShotgun);
const Raven = new Gun("Raven", SpriteRaven, WeaponSlot.PrimaryShotgun);
const Reinfeld88 = new Gun("Reinfeld88", SpriteReinfeld88, WeaponSlot.PrimaryShotgun);
const Steakout12G = new Gun("Steakout 12G", SpriteSteakout12G, WeaponSlot.PrimaryShotgun);
const VD12 = new Gun("VD-12", SpriteVD12, WeaponSlot.PrimaryShotgun);
const Predator12G = new Gun("Predator 12G", SpritePredator12G, WeaponSlot.PrimaryShotgun);
const Joceline12G = new Gun("Joceline O/U 12G", SpriteJocelineOU12G, WeaponSlot.PrimaryShotgun);

const PrimaryShotguns = [
    Reinfeld880, IZHMA12G, Mosconi12G, Breaker12G, Mosconi12GTactical, M1014, Raven, Reinfeld88, Steakout12G, VD12, Predator12G, Joceline12G
]

export default PrimaryShotguns;