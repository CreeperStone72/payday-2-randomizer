import { Gun, WeaponSlot } from "../Gun";
import { LMGs as Sprites } from "../../images";

const [ SpriteKSP58, SpriteRPK, SpriteM60, SpriteKSP, SpriteBuzzsaw42, SpriteBrenner21, SpriteVersteckt, SpriteAkronHC ] = Sprites;

const KSP58 = new Gun("KSP 58", SpriteKSP58, WeaponSlot.LMG);
const RPK = new Gun("RPK", SpriteRPK, WeaponSlot.LMG);
const M60 = new Gun("M60", SpriteM60, WeaponSlot.LMG);
const KSP = new Gun("KSP", SpriteKSP, WeaponSlot.LMG);
const Buzzsaw42 = new Gun("Buzzsaw 42", SpriteBuzzsaw42, WeaponSlot.LMG);
const Brenner21 = new Gun("Brenner 21", SpriteBrenner21, WeaponSlot.LMG);
const Versteckt = new Gun("SG Versteckt 51D", SpriteVersteckt, WeaponSlot.LMG);
const AkronHC = new Gun("Akron HC", SpriteAkronHC, WeaponSlot.LMG);

const LMGs: Gun[] = [
    KSP58, RPK, M60, KSP, Buzzsaw42, Brenner21, Versteckt, AkronHC
];

export default LMGs;