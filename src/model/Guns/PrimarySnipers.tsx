import { Gun, WeaponSlot } from "../Gun";
import { PrimarySnipers as Sprites } from "../../images";

const [
    SpritePlatypus70, SpriteRattlesnake, SpriteR700, SpriteBernettiRangehitter, SpriteKangArmsX1, SpriteLebensauger308, SpriteDesertfox,
    SpriteContractor308, SpriteR93, SpriteRepeater1874, SpriteGrom, SpriteNagant, SpriteThanatos50cal
] = Sprites;

const Platypus70 = new Gun("Platypus 70", SpritePlatypus70, WeaponSlot.PrimarySniper);
const Rattlesnake = new Gun("Rattlesnake", SpriteRattlesnake, WeaponSlot.PrimarySniper);
const R700 = new Gun("R700", SpriteR700, WeaponSlot.PrimarySniper);
const BernettiRangehitter = new Gun("Bernetti Rangehitter", SpriteBernettiRangehitter, WeaponSlot.PrimarySniper);
const KangArmsX1 = new Gun("Káng Arms X1", SpriteKangArmsX1, WeaponSlot.PrimarySniper);
const Lebensauger308 = new Gun("Lebensauger .308", SpriteLebensauger308, WeaponSlot.PrimarySniper);
const Desertfox = new Gun("Desertfox", SpriteDesertfox, WeaponSlot.PrimarySniper);

const Contractor308 = new Gun("Contractor .308", SpriteContractor308, WeaponSlot.PrimarySniper);
const R93 = new Gun("R93", SpriteR93, WeaponSlot.PrimarySniper);
const Repeater1874 = new Gun("Repeater 1874", SpriteRepeater1874, WeaponSlot.PrimarySniper);
const Grom = new Gun("Grom", SpriteGrom, WeaponSlot.PrimarySniper);
const Nagant = new Gun("Nagant", SpriteNagant, WeaponSlot.PrimarySniper);
const Thanatos50cal = new Gun("Thanatos .50 cal", SpriteThanatos50cal, WeaponSlot.PrimarySniper);

const PrimarySnipers = [
    Platypus70, Rattlesnake, R700, BernettiRangehitter, KangArmsX1, Lebensauger308, Desertfox,
    Contractor308, R93, Repeater1874, Grom, Nagant, Thanatos50cal
];

export default PrimarySnipers;