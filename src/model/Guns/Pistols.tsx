import { Gun, WeaponSlot } from "../Gun";

import { Pistols as Sprites } from "../../images";

const [
    SpriteChimano88, SpriteCrosskill, SpriteBernetti9, SpriteBronco44, SpriteWhiteStreak, SpriteParabellum, SpriteCastigo44, SpriteCrosskillGuard,
    SpriteSTRYK18c, SpriteDeagle, SpriteM139mm, SpriteGruberKurz, SpriteSignature40, SpriteCrosskillChunkyCompact, SpriteBabyDeagle,
    SpriteBroomstick, SpriteContractor, SpriteFrenchmanModel87, SpriteLEO, SpriteBernettiAuto, SpriteCzech92, SpriteIgorAutomatik,
    SpriteHOLT9mm, SpritePeacemaker45, SpriteMatever357, SpriteKangArmsModel54, SpriteRUS12AngryTiger, SpriteGeckoM2,
    SpriteKahn357, SpriteInterceptor45, SpriteChimanoCustom, Sprite57AP, SpriteChimanoCompact,
] = Sprites;

const Chimano88 = new Gun("Chimano 88", SpriteChimano88, WeaponSlot.Pistol);
const Crosskill = new Gun("Crosskill", SpriteCrosskill, WeaponSlot.Pistol);
const Bernetti9 = new Gun("Bernetti 9", SpriteBernetti9, WeaponSlot.Pistol);
const Bronco44 = new Gun("Bronco .44", SpriteBronco44, WeaponSlot.Pistol);
const WhiteStreak = new Gun("White Streak", SpriteWhiteStreak, WeaponSlot.Pistol);
const Parabellum = new Gun("Parabellum", SpriteParabellum, WeaponSlot.Pistol);
const Castigo44 = new Gun("Castigo .44", SpriteCastigo44, WeaponSlot.Pistol);
const CrosskillGuard = new Gun("Crosskill Guard", SpriteCrosskillGuard, WeaponSlot.Pistol);

const STRYK18c = new Gun("STRYK 18c", SpriteSTRYK18c, WeaponSlot.Pistol);
const Deagle = new Gun("Deagle", SpriteDeagle, WeaponSlot.Pistol);
const M139mm = new Gun("M13 9mm", SpriteM139mm, WeaponSlot.Pistol);
const GruberKurz = new Gun("Gruber Kurz", SpriteGruberKurz, WeaponSlot.Pistol);
const Signature40 = new Gun("Signature .40", SpriteSignature40, WeaponSlot.Pistol);
const CrosskillChunkyCompact = new Gun("Crosskill Chunky Compact", SpriteCrosskillChunkyCompact, WeaponSlot.Pistol);
const BabyDeagle = new Gun("Baby Deagle", SpriteBabyDeagle, WeaponSlot.Pistol);

const Broomstick = new Gun("Broomstick", SpriteBroomstick, WeaponSlot.Pistol);
const Contractor = new Gun("Contractor", SpriteContractor, WeaponSlot.Pistol);
const FrenchmanModel87 = new Gun("Frenchman Model 87", SpriteFrenchmanModel87, WeaponSlot.Pistol);
const LEO = new Gun("LEO", SpriteLEO, WeaponSlot.Pistol);
const BernettiAuto = new Gun("Bernetti Auto", SpriteBernettiAuto, WeaponSlot.Pistol);
const Czech92 = new Gun("Czech 92", SpriteCzech92, WeaponSlot.Pistol);
const IgorAutomatik = new Gun("Igor Automatik", SpriteIgorAutomatik, WeaponSlot.Pistol);

const HOLT9mm = new Gun("HOLT 9mm", SpriteHOLT9mm, WeaponSlot.Pistol);
const Peacemaker45 = new Gun("Peacemaker .45", SpritePeacemaker45, WeaponSlot.Pistol);
const Matever357 = new Gun("Matever .357", SpriteMatever357, WeaponSlot.Pistol);
const KangArmsModel54 = new Gun("Káng Arms Model 54", SpriteKangArmsModel54, WeaponSlot.Pistol);
const RUS12AngryTiger = new Gun("RUS-12 Angry Tiger", SpriteRUS12AngryTiger, WeaponSlot.Pistol);
const GeckoM2 = new Gun("Gecko M2", SpriteGeckoM2, WeaponSlot.Pistol);

const Kahn357 = new Gun("Kahn .357", SpriteKahn357, WeaponSlot.Pistol);
const Interceptor45 = new Gun("Interceptor .45", SpriteInterceptor45, WeaponSlot.Pistol);
const ChimanoCustom = new Gun("Chimano Custom", SpriteChimanoCustom, WeaponSlot.Pistol);
const AP57 = new Gun("5/7 AP", Sprite57AP, WeaponSlot.Pistol);
const ChimanoCompact = new Gun("Chimano Compact", SpriteChimanoCompact, WeaponSlot.Pistol);

const Pistols = [
    Chimano88, Crosskill, Bernetti9, Bronco44, WhiteStreak, Parabellum, Castigo44, CrosskillGuard,
    STRYK18c, Deagle, M139mm, GruberKurz, Signature40, CrosskillChunkyCompact, BabyDeagle,
    Broomstick, Contractor, FrenchmanModel87, LEO, BernettiAuto, Czech92, IgorAutomatik,
    HOLT9mm, Peacemaker45, Matever357, KangArmsModel54, RUS12AngryTiger, GeckoM2,
    Kahn357, Interceptor45, ChimanoCustom, AP57, ChimanoCompact,
];

export default Pistols;