import { Gun, WeaponSlot } from "../Gun";

import { AssaultRifles as Sprites } from "../../images";

const [
    SpriteAMCAR, SpriteAK, SpriteCAR4, SpriteUAR, SpriteAK762, SpriteJP36, SpriteGalant, SpriteM308, SpriteAK5, SpriteAMR16, SpriteTempest21, SpriteUnion556,
    SpriteCommando553, SpriteEagleHeavy, SpriteKETCHNOV, SpriteCavity9mm, SpriteAK17, SpriteBootleg, SpriteQueensWrath, SpriteClarion,
    SpriteLionsRoar, SpriteValkyria, SpriteGecko762, SpriteLittleFriend762, SpriteFalcon, SpriteGewehr3, SpriteKS12Urban, SpriteRodion3B, SpriteGoldenAK762
] = Sprites;

const AMCAR = new Gun("AMCAR", SpriteAMCAR, WeaponSlot.AssaultRifle);
const AK = new Gun("AK", SpriteAK, WeaponSlot.AssaultRifle);
const CAR4 = new Gun("CAR-4", SpriteCAR4, WeaponSlot.AssaultRifle);
const UAR = new Gun("UAR", SpriteUAR, WeaponSlot.AssaultRifle);
const AK762 = new Gun("AK.762", SpriteAK762, WeaponSlot.AssaultRifle);
const JP36 = new Gun("JP36", SpriteJP36, WeaponSlot.AssaultRifle);
const Galant = new Gun("Galant", SpriteGalant, WeaponSlot.AssaultRifle);
const M308 = new Gun("M308", SpriteM308, WeaponSlot.AssaultRifle);
const AK5 = new Gun("AK5", SpriteAK5, WeaponSlot.AssaultRifle);
const AMR16 = new Gun("AMR-16", SpriteAMR16, WeaponSlot.AssaultRifle);
const Tempest21 = new Gun("Tempest-21", SpriteTempest21, WeaponSlot.AssaultRifle);
const Union556 = new Gun("Union 5.56", SpriteUnion556, WeaponSlot.AssaultRifle);

const Commando553 = new Gun("Commando 553", SpriteCommando553, WeaponSlot.AssaultRifle);
const EagleHeavy = new Gun("Eagle Heavy", SpriteEagleHeavy, WeaponSlot.AssaultRifle);
const KETCHNOV = new Gun("KETCHNOV Byk-1", SpriteKETCHNOV, WeaponSlot.AssaultRifle);
const Cavity9mm = new Gun("Cavity 9mm", SpriteCavity9mm, WeaponSlot.AssaultRifle);
const AK17 = new Gun("AK17", SpriteAK17, WeaponSlot.AssaultRifle);
const Bootleg = new Gun("Bootleg", SpriteBootleg, WeaponSlot.AssaultRifle);
const QueensWrath = new Gun("Queen's Wrath", SpriteQueensWrath, WeaponSlot.AssaultRifle);
const Clarion = new Gun("Clarion", SpriteClarion, WeaponSlot.AssaultRifle);

const LionsRoar = new Gun("Lion's Roar", SpriteLionsRoar, WeaponSlot.AssaultRifle);
const Valkyria = new Gun("Valkyria", SpriteValkyria, WeaponSlot.AssaultRifle);
const Gecko762 = new Gun("Gecko 7.62", SpriteGecko762, WeaponSlot.AssaultRifle);
const LittleFriend762 = new Gun("Little Friend 7.62", SpriteLittleFriend762, WeaponSlot.AssaultRifle);
const Falcon = new Gun("Falcon", SpriteFalcon, WeaponSlot.AssaultRifle);
const Gewehr3 = new Gun("Gewehr 3", SpriteGewehr3, WeaponSlot.AssaultRifle);
const KS12Urban = new Gun("KS12 Urban", SpriteKS12Urban, WeaponSlot.AssaultRifle);
const Rodion3B = new Gun("Rodion 3B", SpriteRodion3B, WeaponSlot.AssaultRifle);
const GoldenAK762 = new Gun("Golden AK.762", SpriteGoldenAK762, WeaponSlot.AssaultRifle);

const AssaultRifles: Gun[] = [
    AMCAR, AK, CAR4, UAR, AK762, JP36, Galant, M308, AK5, AMR16, Tempest21, Union556,
    Commando553, EagleHeavy, KETCHNOV, Cavity9mm, AK17, Bootleg, QueensWrath, Clarion,
    LionsRoar, Valkyria, Gecko762, LittleFriend762, Falcon, Gewehr3, KS12Urban, Rodion3B, GoldenAK762
];

export default AssaultRifles;