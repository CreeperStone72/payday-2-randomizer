import { Gun, WeaponSlot } from '../Gun';

import { PrimarySpecials as Sprites } from '../../images';

const [
    SpriteOVE9000, SpriteXL556Microgun, SpriteDECATechnologiesCompoundBow, SpriteAirbow, SpritePlainsriderBow,
    SpriteLightCrossbow, SpriteEnglishLongbow, SpriteHeavyCrossbow, SpriteVulcanMinigun, SpritePiglet, SpriteFlamethrowerMk1, SpriteGL40,
    SpriteHailstormMk5,
] = Sprites;

const OVE9000 = new Gun("OVE9000", SpriteOVE9000, WeaponSlot.PrimarySpecial);
const XL556Microgun = new Gun("XL 5.56 Microgun", SpriteXL556Microgun, WeaponSlot.PrimarySpecial);
const DECATechnologiesCompoundBow = new Gun("DECA Technologies Compound Bow", SpriteDECATechnologiesCompoundBow, WeaponSlot.PrimarySpecial);
const Airbow = new Gun("Airbow", SpriteAirbow, WeaponSlot.PrimarySpecial);
const PlainsriderBow = new Gun("Plainsrider Bow", SpritePlainsriderBow, WeaponSlot.PrimarySpecial);

const LightCrossbow = new Gun("Light Crossbow", SpriteLightCrossbow, WeaponSlot.PrimarySpecial);
const EnglishLongbow = new Gun("English Longbow", SpriteEnglishLongbow, WeaponSlot.PrimarySpecial);
const HeavyCrossbow = new Gun("Heavy Crossbow", SpriteHeavyCrossbow, WeaponSlot.PrimarySpecial);
const VulcanMinigun = new Gun("Vulcan Minigun", SpriteVulcanMinigun, WeaponSlot.PrimarySpecial);
const Piglet = new Gun("Piglet", SpritePiglet, WeaponSlot.PrimarySpecial);
const FlamethrowerMk1 = new Gun("Flamethrower Mk.1", SpriteFlamethrowerMk1, WeaponSlot.PrimarySpecial);
const GL40 = new Gun("GL40", SpriteGL40, WeaponSlot.PrimarySpecial);

const HailstormMk5 = new Gun("Hailstorm Mk 5", SpriteHailstormMk5, WeaponSlot.PrimarySpecial);

const PrimarySpecials = [
    OVE9000, XL556Microgun, DECATechnologiesCompoundBow, Airbow, PlainsriderBow,
    LightCrossbow, EnglishLongbow, HeavyCrossbow, VulcanMinigun, Piglet, FlamethrowerMk1, GL40,
    HailstormMk5,
];

export default PrimarySpecials;