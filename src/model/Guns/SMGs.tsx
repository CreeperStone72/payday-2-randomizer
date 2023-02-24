import { Gun, WeaponSlot } from "../Gun";

import { SMGs as Sprites } from "../../images";

const [
    SpriteMark10, SpriteCompact5, SpriteCMP, SpritePara, SpriteHeather, SpriteMP40, SpriteKrinkov, SpriteKobus90, SpriteSignature, SpriteSwedishK, SpriteSpecOps,
    SpriteCR805B, SpriteAKGen21Tactical, SpriteMiyaka10Special, SpriteCobra, SpriteMicroUzi, SpriteJackal, SpriteBlaster9mm, SpriteKrossVertex,
    SpriteTatonka, SpritePatchettL2A1, SpriteUzi, SpriteWaspDS, SpriteChicagoTypewriter, SpriteJacketsPiece,
] = Sprites;

const Mark10 = new Gun("Mark 10", SpriteMark10, WeaponSlot.SubmachineGun);
const Compact5 = new Gun("Compact-5", SpriteCompact5, WeaponSlot.SubmachineGun);
const CMP = new Gun("CMP", SpriteCMP, WeaponSlot.SubmachineGun);
const Para = new Gun("Para", SpritePara, WeaponSlot.SubmachineGun);
const Heather = new Gun("Heather", SpriteHeather, WeaponSlot.SubmachineGun);
const MP40 = new Gun("MP40", SpriteMP40, WeaponSlot.SubmachineGun);
const Krinkov = new Gun("Krinkov", SpriteKrinkov, WeaponSlot.SubmachineGun);
const Kobus90  = new Gun("Kobus 90", SpriteKobus90, WeaponSlot.SubmachineGun);
const Signature = new Gun("Signature", SpriteSignature, WeaponSlot.SubmachineGun);
const SwedishK = new Gun("Swedish K", SpriteSwedishK, WeaponSlot.SubmachineGun);
const SpecOps = new Gun("SpecOps", SpriteSpecOps, WeaponSlot.SubmachineGun);

const CR805B = new Gun("CR 805B", SpriteCR805B, WeaponSlot.SubmachineGun);
const AKGen21Tactical = new Gun("AK Gen 21 Tactical", SpriteAKGen21Tactical, WeaponSlot.SubmachineGun);
const Miyaka10Special = new Gun("Miyaka 10 Special", SpriteMiyaka10Special, WeaponSlot.SubmachineGun);
const Cobra = new Gun("Cobra", SpriteCobra, WeaponSlot.SubmachineGun);
const MicroUzi = new Gun("Micro Uzi", SpriteMicroUzi, WeaponSlot.SubmachineGun);
const Jackal = new Gun("Jackal", SpriteJackal, WeaponSlot.SubmachineGun);
const Blaster9mm = new Gun("Blaster 9mm", SpriteBlaster9mm, WeaponSlot.SubmachineGun);
const KrossVertex = new Gun("Kross Vertex", SpriteKrossVertex, WeaponSlot.SubmachineGun);

const Tatonka = new Gun("Tatonka", SpriteTatonka, WeaponSlot.SubmachineGun);
const PatchettL2A1 = new Gun("Patchett L2A1", SpritePatchettL2A1, WeaponSlot.SubmachineGun);
const Uzi = new Gun("Uzi", SpriteUzi, WeaponSlot.SubmachineGun);
const WaspDS = new Gun("Wasp-DS", SpriteWaspDS, WeaponSlot.SubmachineGun);
const ChicagoTypewriter = new Gun("Chicago Typewriter", SpriteChicagoTypewriter, WeaponSlot.SubmachineGun);
const JacketsPiece = new Gun("Jacket's Piece", SpriteJacketsPiece, WeaponSlot.SubmachineGun);

const SMGs = [
    Mark10, Compact5, CMP, Para, Heather, MP40, Krinkov, Kobus90, Signature, SwedishK, SpecOps,
    CR805B, AKGen21Tactical, Miyaka10Special, Cobra, MicroUzi, Jackal, Blaster9mm, KrossVertex,
    Tatonka, PatchettL2A1, Uzi, WaspDS, ChicagoTypewriter, JacketsPiece,
];

export default SMGs;