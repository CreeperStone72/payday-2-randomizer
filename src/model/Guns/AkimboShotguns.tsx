import { Gun, WeaponSlot } from "../Gun";

import { AkimboShotguns as Sprites } from "../../images";

const [
    SpriteAkimboGoliath12G, SpriteAkimboJudge, SpriteBrothersGrimm12G, SpriteAkimboVD12,
] = Sprites;

const AkimboGoliath12G = new Gun("Akimbo Goliath 12G", SpriteAkimboGoliath12G, WeaponSlot.AkimboShotgun);
const AkimboJudge = new Gun("Akimbo Judge", SpriteAkimboJudge, WeaponSlot.AkimboShotgun);
const BrothersGrimm12G = new Gun("Brothers Grimm 12G", SpriteBrothersGrimm12G, WeaponSlot.AkimboShotgun);
const AkimboVD12 = new Gun("Akimbo VD-12", SpriteAkimboVD12, WeaponSlot.AkimboShotgun);

const AkimboShotguns = [
    AkimboGoliath12G, AkimboJudge, BrothersGrimm12G, AkimboVD12,
];

export default AkimboShotguns;