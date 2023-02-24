import { Gun, WeaponSlot } from "../Gun";

import { SecondarySpecials as Sprites } from "../../images";

const [
    SpriteOVE9000, SpriteCompact40mm, SpriteMA17Flamethrower, SpriteArbiter, SpritePistolCrossbow, SpriteHRL7, SpriteChinaPuff40mm,
    SpriteCommando101, SpriteBasiliskV3, SpriteCashBlaster,
] = Sprites;

const OVE9000 = new Gun("OVE9000", SpriteOVE9000, WeaponSlot.SecondarySpecial);
const Compact40mm = new Gun("Compact 40mm", SpriteCompact40mm, WeaponSlot.SecondarySpecial);
const MA17Flamethrower = new Gun("MA-17 Flamethrower", SpriteMA17Flamethrower, WeaponSlot.SecondarySpecial);
const Arbiter = new Gun("Arbiter", SpriteArbiter, WeaponSlot.SecondarySpecial);
const PistolCrossbow = new Gun("Pistol Crossbow", SpritePistolCrossbow, WeaponSlot.SecondarySpecial);
const HRL7 = new Gun("HRL-7", SpriteHRL7, WeaponSlot.SecondarySpecial);
const ChinaPuff40mm = new Gun("China Puff 40mm", SpriteChinaPuff40mm, WeaponSlot.SecondarySpecial);

const Commando101 = new Gun("Commando 101", SpriteCommando101, WeaponSlot.SecondarySpecial);
const BasiliskV3 = new Gun("Basilisk V3", SpriteBasiliskV3, WeaponSlot.SecondarySpecial);
const CashBlaster = new Gun("Cash Blaster", SpriteCashBlaster, WeaponSlot.SecondarySpecial);

const SecondarySpecials = [
    OVE9000, Compact40mm, MA17Flamethrower, Arbiter, PistolCrossbow, HRL7, ChinaPuff40mm,
    Commando101, BasiliskV3, CashBlaster,
];

export default SecondarySpecials;