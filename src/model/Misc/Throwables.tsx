import Throwable from "../Throwable";

import { Throwables as Sprites } from "../../images";

const [
    SpriteConcussionGrenade, SpriteSnowball,
    SpriteHEFGrenade, SpriteAceOfSpades, SpriteIncendiaryGrenade, SpriteMatryoshkaGrenade, SpriteFragGrenade, SpriteMolotovCocktail,
    SpriteDynamite, SpriteShuriken, SpriteJavelin, SpriteThrowingAxe, SpriteThrowingKnife,
    SpriteX1ZAPper, SpriteViperGrenade, SpriteAdhesiveGrenade,
] = Sprites;

const ConcussionGrenade = new Throwable("Concussion Grenade", SpriteConcussionGrenade);
const Snowball = new Throwable("Snowball", SpriteSnowball);

const HEFGrenade = new Throwable("HEF Grenade", SpriteHEFGrenade);
const AceOfSpades = new Throwable("Ace of Spades", SpriteAceOfSpades);
const IncendiaryGrenade = new Throwable("Incendiary Grenade", SpriteIncendiaryGrenade);
const MatryoshkaGrenade = new Throwable("Matryoshka Grenade", SpriteMatryoshkaGrenade);
const FragGrenade = new Throwable("Frag Grenade", SpriteFragGrenade);
const MolotovCocktail = new Throwable("Molotov Cocktail", SpriteMolotovCocktail);

const Dynamite = new Throwable("Dynamite", SpriteDynamite);
const Shuriken = new Throwable("Shuriken", SpriteShuriken);
const Javelin = new Throwable("Javelin", SpriteJavelin);
const ThrowingAxe = new Throwable("Throwing Axe", SpriteThrowingAxe);
const ThrowingKnife = new Throwable("Throwing Knife", SpriteThrowingKnife);

const X1ZAPper = new Throwable("X1-ZAPper", SpriteX1ZAPper);
const ViperGrenade = new Throwable("Viper Grenade", SpriteViperGrenade);
const AdhesiveGrenade = new Throwable("Adhesive Grenade", SpriteAdhesiveGrenade);

const Throwables = [
    ConcussionGrenade, Snowball,
    HEFGrenade, AceOfSpades, IncendiaryGrenade, MatryoshkaGrenade, FragGrenade, MolotovCocktail,
    Dynamite, Shuriken, Javelin, ThrowingAxe, ThrowingKnife,
    X1ZAPper, ViperGrenade, AdhesiveGrenade,
];

export default Throwables;