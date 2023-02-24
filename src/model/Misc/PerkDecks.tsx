import PerkDeck from "../PerkDeck";

import { PerkDecks as Sprites } from "../../images";

const [
    T2, T4, T6, T8,
    T1_CC, T3_CC, T5_CC, T7_CC, T9_CC,
    T1_MU, T3_MU, T5_MU, T7_MU, T9_MU,
    T1_AR, T3_AR, T5_AR, T7_AR, T9_AR,
    T1_RO, T3_RO, T5_RO, T7_RO, T9_RO,
    T1_CR, T3_CR, T5_CR, T7_CR, T9_CR,
    T1_HM, T3_HM, T5_HM, T7_HM, T9_HM,
    T1_BU, T3_BU, T5_BU, T7_BU, T9_BU,
    T1_IN, T3_IN, T5_IN, T7_IN, T9_IN,
    T1_SO, T3_SO, T5_SO, T7_SO, T9_SO,
    T1_GA, T3_GA, T5_GA, T7_GA, T9_GA,
    T1_GR, T3_GR, T5_GR, T7_GR, T9_GR,
    T1_YA, T3_YA, T5_YA, T7_YA, T9_YA,
    T1_EP, T3_EP, T5_EP, T7_EP, T9_EP,
    T1_MA, T3_MA, T5_MA, T7_MA, T9_MA,
    T1_AN, T3_AN, T5_AN, T7_AN, T9_AN,
    T1_BI, T3_BI, T5_BI, T7_BI, T9_BI,
    T1_KI, T3_KI, T5_KI, T7_KI, T9_KI,
    T1_SI, T3_SI, T5_SI, T7_SI, T9_SI,
    T1_ST, T3_ST, T5_ST, T7_ST, T9_ST,
    T1_TT, T3_TT, T5_TT, T7_TT, T9_TT,
    T1_HA, T3_HA, T5_HA, T7_HA, T9_HA,
    T1_LE, T3_LE, T5_LE, T7_LE, T9_LE,
    T1_CO, T3_CO, T5_CO, T7_CO, T9_CO,
]: string[] = Sprites;

const getSprites = (T1: string, T3: string, T5: string, T7: string, T9: string) => [T1, T2, T3, T4, T5, T6, T7, T8, T9];

const CrewChief = new PerkDeck("Crew Chief", getSprites(T1_CC, T3_CC, T5_CC, T7_CC, T9_CC));
const Muscle = new PerkDeck("Muscle", getSprites(T1_MU, T3_MU, T5_MU, T7_MU, T9_MU));
const Armorer = new PerkDeck("Armorer", getSprites(T1_AR, T3_AR, T5_AR, T7_AR, T9_AR));
const Rogue = new PerkDeck("Rogue", getSprites(T1_RO, T3_RO, T5_RO, T7_RO, T9_RO));
const Crook = new PerkDeck("Crook", getSprites(T1_CR, T3_CR, T5_CR, T7_CR, T9_CR));
const Hitman = new PerkDeck("Hitman", getSprites(T1_HM, T3_HM, T5_HM, T7_HM, T9_HM));
const Burglar = new PerkDeck("Burglar", getSprites(T1_BU, T3_BU, T5_BU, T7_BU, T9_BU));
const Infiltrator = new PerkDeck("Infiltrator", getSprites(T1_IN, T3_IN, T5_IN, T7_IN, T9_IN));
const Sociopath = new PerkDeck("Sociopath", getSprites(T1_SO, T3_SO, T5_SO, T7_SO, T9_SO));
const Gambler = new PerkDeck("Gambler", getSprites(T1_GA, T3_GA, T5_GA, T7_GA, T9_GA));
const Grinder = new PerkDeck("Grinder", getSprites(T1_GR, T3_GR, T5_GR, T7_GR, T9_GR));
const Yakuza = new PerkDeck("Yakuza", getSprites(T1_YA, T3_YA, T5_YA, T7_YA, T9_YA));
const ExPresident = new PerkDeck("Ex-President", getSprites(T1_EP, T3_EP, T5_EP, T7_EP, T9_EP));
const Maniac = new PerkDeck("Maniac", getSprites(T1_MA, T3_MA, T5_MA, T7_MA, T9_MA));
const Anarchist = new PerkDeck("Anarchist", getSprites(T1_AN, T3_AN, T5_AN, T7_AN, T9_AN));
const Biker = new PerkDeck("Biker", getSprites(T1_BI, T3_BI, T5_BI, T7_BI, T9_BI));
const Kingpin = new PerkDeck("Kingpin", getSprites(T1_KI, T3_KI, T5_KI, T7_KI, T9_KI));
const Sicario = new PerkDeck("Sicario", getSprites(T1_SI, T3_SI, T5_SI, T7_SI, T9_SI));
const Stoic = new PerkDeck("Stoic", getSprites(T1_ST, T3_ST, T5_ST, T7_ST, T9_ST));
const TagTeam = new PerkDeck("Tag Team", getSprites(T1_TT, T3_TT, T5_TT, T7_TT, T9_TT));
const Hacker = new PerkDeck("Hacker", getSprites(T1_HA, T3_HA, T5_HA, T7_HA, T9_HA));
const Leech = new PerkDeck("Leech", getSprites(T1_LE, T3_LE, T5_LE, T7_LE, T9_LE));
const Copycat = new PerkDeck("Copycat", getSprites(T1_CO, T3_CO, T5_CO, T7_CO, T9_CO));

const PerkDecks = [
    CrewChief,
    Muscle,
    Armorer,
    Rogue,
    Crook,
    Hitman,
    Burglar,
    Infiltrator,
    Sociopath,
    Gambler,
    Grinder,
    Yakuza,
    ExPresident,
    Maniac,
    Anarchist,
    Biker,
    Kingpin,
    Sicario,
    Stoic,
    TagTeam,
    Hacker,
    Leech,
    Copycat,
];

export default PerkDecks;