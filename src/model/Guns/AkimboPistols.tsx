import { Gun, WeaponSlot } from '../Gun';
import { AkimboPistols as Sprites } from '../../images';

const [
    SpriteAkimboBabyDeagle, SpriteAkimboBernetti9, SpriteAkimboBronco44, SpriteAkimboBroomstick, SpriteAkimboChimano88, SpriteAkimboChimanoCompact,
    SpriteAkimboChimanoCustom, SpriteAkimboCrosskill, SpriteAkimboDeagle, SpriteAkimboGruberKurz, SpriteAkimboInterceptor45, SpriteAkimboLEO, SpriteAkimboMatever357, SpriteAkimboParabellum,
    SpriteAkimboSignature40, SpriteAkimboSTRYK18c, SpriteAkimboWhiteStreak, SpriteAkimboCastigo44, SpriteAkimboCrosskillGuard, SpriteAkimboM139mm,
    SpriteAkimboCrosskillChunkyCompact, SpriteAkimboContractor, SpriteAkimboFrenchmanModel87, SpriteAkimboBernettiAuto, SpriteAkimboCzech92, SpriteAkimboIgorAutomatik,
    SpriteAkimboHOLT9mm, SpriteAkimboKangArmsModel54, SpriteAkimboGeckoM2, SpriteAkimboKahn357,
] = Sprites;

const AkimboBabyDeagle = new Gun("Akimbo Baby Deagle", SpriteAkimboBabyDeagle, WeaponSlot.AkimboPistol);
const AkimboBernetti9 = new Gun("Akimbo Bernetti 9", SpriteAkimboBernetti9, WeaponSlot.AkimboPistol);
const AkimboBronco44 = new Gun("Akimbo Bronco .44", SpriteAkimboBronco44, WeaponSlot.AkimboPistol);
const AkimboBroomstick = new Gun("Akimbo Broomstick", SpriteAkimboBroomstick, WeaponSlot.AkimboPistol);
const AkimboChimano88 = new Gun("Akimbo Chimano 88", SpriteAkimboChimano88, WeaponSlot.AkimboPistol);
const AkimboChimanoCompact = new Gun("Akimbo Chimano Compact", SpriteAkimboChimanoCompact, WeaponSlot.AkimboPistol);

const AkimboChimanoCustom = new Gun("Akimbo Chimano Custom", SpriteAkimboChimanoCustom, WeaponSlot.AkimboPistol);
const AkimboCrosskill = new Gun("Akimbo Crosskill", SpriteAkimboCrosskill, WeaponSlot.AkimboPistol);
const AkimboDeagle = new Gun("Akimbo Deagle", SpriteAkimboDeagle, WeaponSlot.AkimboPistol);
const AkimboGruberKurz = new Gun("Akimbo Gruber Kurz", SpriteAkimboGruberKurz, WeaponSlot.AkimboPistol);
const AkimboInterceptor45 = new Gun("Akimbo Interceptor 45", SpriteAkimboInterceptor45, WeaponSlot.AkimboPistol);
const AkimboLEO = new Gun("Akimbo LEO", SpriteAkimboLEO, WeaponSlot.AkimboPistol);
const AkimboMatever357 = new Gun("Akimbo Matever .357", SpriteAkimboMatever357, WeaponSlot.AkimboPistol);
const AkimboParabellum = new Gun("Akimbo Parabellum", SpriteAkimboParabellum, WeaponSlot.AkimboPistol);

const AkimboSignature40 = new Gun("Akimbo Signature .40", SpriteAkimboSignature40, WeaponSlot.AkimboPistol);
const AkimboSTRYK18c = new Gun("Akimbo STRYK 18c", SpriteAkimboSTRYK18c, WeaponSlot.AkimboPistol);
const AkimboWhiteStreak = new Gun("Akimbo White Streak", SpriteAkimboWhiteStreak, WeaponSlot.AkimboPistol);
const AkimboCastigo44 = new Gun("Akimbo Castigo .44", SpriteAkimboCastigo44, WeaponSlot.AkimboPistol);
const AkimboCrosskillGuard = new Gun("Akimbo Crosskill Guard", SpriteAkimboCrosskillGuard, WeaponSlot.AkimboPistol);
const AkimboM139mm = new Gun("Akimbo M13 9mm", SpriteAkimboM139mm, WeaponSlot.AkimboPistol);

const AkimboCrosskillChunkyCompact = new Gun("Akimbo Crosskill Chunky Compact", SpriteAkimboCrosskillChunkyCompact, WeaponSlot.AkimboPistol);
const AkimboContractor = new Gun("Akimbo Contractor", SpriteAkimboContractor, WeaponSlot.AkimboPistol);
const AkimboFrenchmanModel87 = new Gun("Akimbo Frenchman Model 87", SpriteAkimboFrenchmanModel87, WeaponSlot.AkimboPistol);
const AkimboBernettiAuto = new Gun("Akimbo Bernetti Auto", SpriteAkimboBernettiAuto, WeaponSlot.AkimboPistol);
const AkimboCzech92 = new Gun("Akimbo Czech 92", SpriteAkimboCzech92, WeaponSlot.AkimboPistol);
const AkimboIgorAutomatik = new Gun("Akimbo Igor Automatik", SpriteAkimboIgorAutomatik, WeaponSlot.AkimboPistol);

const AkimboHOLT9mm = new Gun("Akimbo HOLT 9mm", SpriteAkimboHOLT9mm, WeaponSlot.AkimboPistol);
const AkimboKangArmsModel54 = new Gun("Akimbo Káng Arms Mode 54", SpriteAkimboKangArmsModel54, WeaponSlot.AkimboPistol);
const AkimboGeckoM2 = new Gun("Akimbo Gecko M2", SpriteAkimboGeckoM2, WeaponSlot.AkimboPistol);
const AkimboKahn357 = new Gun("Akimbo Kahn .357", SpriteAkimboKahn357, WeaponSlot.AkimboPistol);

const AkimboPistols: Gun[] = [
    AkimboBabyDeagle, AkimboBernetti9, AkimboBronco44, AkimboBroomstick, AkimboChimano88, AkimboChimanoCompact,
    AkimboChimanoCustom, AkimboCrosskill, AkimboDeagle, AkimboGruberKurz, AkimboInterceptor45, AkimboLEO, AkimboMatever357, AkimboParabellum,
    AkimboSignature40, AkimboSTRYK18c, AkimboWhiteStreak, AkimboCastigo44, AkimboCrosskillGuard, AkimboM139mm,
    AkimboCrosskillChunkyCompact, AkimboContractor, AkimboFrenchmanModel87, AkimboBernettiAuto, AkimboCzech92, AkimboIgorAutomatik,
    AkimboHOLT9mm, AkimboKangArmsModel54, AkimboGeckoM2, AkimboKahn357,
];

export default AkimboPistols;