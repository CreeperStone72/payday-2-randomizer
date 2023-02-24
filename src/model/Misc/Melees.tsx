import Melee from "../Melee";

import { Melees as Sprites } from "../../images";

const [
    SpriteWeaponButt, SpriteFists, SpriteBoltCutters, SpriteUtilityKnife, SpriteElectricalBrassKnuckles, SpriteSpecialistKnives,
    SpriteElVerdugo, SpritePushDaggers, SpriteLeatherSap, SpriteHackaton, SpriteKentosTanto, SpriteElRitmo, SpriteAlabamaRazor,
    SpriteURSAKnife, SpriteSwaggerStick, SpritePounderNailGun, SpriteTheMotherforker, SpriteSpatula, SpriteKLASShovel,
    SpriteEmptyPalmKata, SpriteShawnsShears, SpriteMicrophone, SpriteSelfieStick, SpriteBayonetKnife, SpriteMachete, SpriteChainWhip,
    SpriteIcePick, SpriteRezkoye, SpriteTelescopicBaton, SpriteJackpot, SpriteTwoHandedGreatRuler, SpriteBaseballBat, SpriteClassicBaton,
    SpriteHockeyStick, SpriteDivingKnife, SpriteKriegerBlade, SpriteBucklerShield, SpriteYoureMine, SpriteMetalDetector,
    SpriteCroupiersRake, SpriteCompactHatchet, SpriteKazaguruma, SpriteLumberLiteL2, SpriteHotline8000X, SpritePotatoMasher,
    SpriteScalperTomahawk, SpriteSwitchblade, SpriteDragansCleaverKnife, SpriteShinsakutoKatana, SpriteOkinawanStyleSai, SpritePitchfork,
    SpriteArkansasToothpick, SpriteMicrophoneStand, SpriteX46Knife, SpriteTalons, SpriteBeardedAxe, SpriteHook, SpriteCleaverKnife,
    SpriteBuzzer, SpriteGoldFever, SpriteWing, SpriteCloversShillelagh, SpriteShepherdsCane, SpriteScoutKnife, SpriteBergerCombatKnife,
    SpriteTrenchKnife, SpriteSurvivalTomahawk, SpriteMorningStar, SpritePoker, SpriteGreatSword, SpriteTheSpearOfFreedom,
    SpriteTenderizer, SpriteDingDongBreachingTool, SpriteMacheteKnife, SpriteKunaiKnife, SpriteUtilityMachete, SpriteTrautmanKnife,
    SpriteFireAxe, Sprite350KBrassKnuckles, SpriteUrsaTantoKnife, SpriteNovasShank, SpriteMoneyBundle,
    SpriteOVERKILLBoxingGloves, SpriteKnuckleDaggers, SpritePsychoKnife, SpriteLucilleBaseballBat, SpriteRivertownGlenBottle,
    Sprite50BlessingsBriefcase, SpriteCarpentersDelight, SpriteAlphaMauler, SpriteThePen, SpriteComicallyLargeSpoon,
    SpriteComicallyLargeSpoonOfGold,
]: string[] = Sprites;

const WeaponButt = new Melee("Weapon Butt", SpriteWeaponButt);
const Fists = new Melee("Fists", SpriteFists);
const BoltCutters = new Melee("Bolt Cutters", SpriteBoltCutters);
const UtilityKnife = new Melee("Utility Knife", SpriteUtilityKnife);
const ElectricalBrassKnuckles = new Melee("Electrical Brass Knuckles", SpriteElectricalBrassKnuckles);
const SpecialistKnives = new Melee("Specialist Knives", SpriteSpecialistKnives);

const ElVerdugo = new Melee("El Verdugo", SpriteElVerdugo);
const PushDaggers = new Melee("Push Daggers", SpritePushDaggers);
const LeatherSap = new Melee("Leather Sap", SpriteLeatherSap);
const Hackaton = new Melee("Hackaton", SpriteHackaton);
const KentosTanto = new Melee("Kento's Tanto", SpriteKentosTanto);
const ElRitmo = new Melee("El Ritmo", SpriteElRitmo);
const AlabamaRazor = new Melee("Alabama Razor", SpriteAlabamaRazor);

const URSAKnife = new Melee("URSA Knife", SpriteURSAKnife);
const SwaggerStick = new Melee("Swagger Stick", SpriteSwaggerStick);
const PounderNailGun = new Melee("Pounder Nail Gun", SpritePounderNailGun);
const TheMotherforker = new Melee("The Motherforker", SpriteTheMotherforker);
const Spatula = new Melee("Spatula", SpriteSpatula);
const KLASShovel = new Melee("K.L.A.S. Shovel", SpriteKLASShovel);

const EmptyPalmKata = new Melee("Empty Palm Kata", SpriteEmptyPalmKata);
const ShawnsShears = new Melee("Shawn's Shears", SpriteShawnsShears);
const Microphone = new Melee("Microphone", SpriteMicrophone);
const SelfieStick = new Melee("Selfie-stick", SpriteSelfieStick);
const BayonetKnife = new Melee("Bayonet Knife", SpriteBayonetKnife);
const Machete = new Melee("Machete", SpriteMachete);
const ChainWhip = new Melee("Chain Whip", SpriteChainWhip);

const IcePick = new Melee("Ice Pick", SpriteIcePick);
const Rezkoye = new Melee("Rezkoye", SpriteRezkoye);
const TelescopicBaton = new Melee("Telescopic Baton", SpriteTelescopicBaton);
const Jackpot = new Melee("Jackpot", SpriteJackpot);
const TwoHandedGreatRuler = new Melee("Two Handed Great Ruler", SpriteTwoHandedGreatRuler);
const BaseballBat = new Melee("Baseball Bat", SpriteBaseballBat);
const ClassicBaton = new Melee("Classic Baton", SpriteClassicBaton);

const HockeyStick = new Melee("Hockey Stick", SpriteHockeyStick);
const DivingKnife = new Melee("Diving Knife", SpriteDivingKnife);
const KriegerBlade = new Melee("Krieger Blade", SpriteKriegerBlade);
const BucklerShield = new Melee("Buckler Shield", SpriteBucklerShield);
const YoureMine = new Melee("You're Mine", SpriteYoureMine);
const MetalDetector = new Melee("Metal Detector", SpriteMetalDetector);

const CroupiersRake = new Melee("Croupier's Rake", SpriteCroupiersRake);
const CompactHatchet = new Melee("Compact Hatchet", SpriteCompactHatchet);
const Kazaguruma = new Melee("Kazaguruma", SpriteKazaguruma);
const LumberLiteL2 = new Melee("Lumber Lite L2", SpriteLumberLiteL2);
const Hotline8000X = new Melee("Hotline 8000X", SpriteHotline8000X);
const PotatoMasher = new Melee("Potato Masher", SpritePotatoMasher);

const ScalperTomahawk = new Melee("Scalper Tomahawk", SpriteScalperTomahawk);
const Switchblade = new Melee("Switchblade", SpriteSwitchblade);
const DragansCleaverKnife = new Melee("Dragan's Cleaver Knife", SpriteDragansCleaverKnife);
const ShinsakutoKatana = new Melee("Shinsakuto Katana", SpriteShinsakutoKatana);
const OkinawanStyleSai = new Melee("Okinawan Style Sai", SpriteOkinawanStyleSai);
const Pitchfork = new Melee("Pitchfork", SpritePitchfork);

const ArkansasToothpick = new Melee("Arkansas Toothpick", SpriteArkansasToothpick);
const MicrophoneStand = new Melee("Microphone Stand", SpriteMicrophoneStand);
const X46Knife = new Melee("X-46 Knife", SpriteX46Knife);
const Talons = new Melee("Talons", SpriteTalons);
const BeardedAxe = new Melee("Bearded Axe", SpriteBeardedAxe);
const Hook = new Melee("Hook", SpriteHook);
const CleaverKnife = new Melee("Cleaver Knife", SpriteCleaverKnife);

const Buzzer = new Melee("Buzzer", SpriteBuzzer);
const GoldFever = new Melee("Gold Fever", SpriteGoldFever);
const Wing = new Melee("Wing", SpriteWing);
const CloversShillelagh = new Melee("Clover's Shillelagh", SpriteCloversShillelagh);
const ShepherdsCane = new Melee("Shepherd's Cane", SpriteShepherdsCane);
const ScoutKnife = new Melee("Scout Knife", SpriteScoutKnife);
const BergerCombatKnife = new Melee("Berger Combat Knife", SpriteBergerCombatKnife);

const TrenchKnife = new Melee("Trench Knife", SpriteTrenchKnife);
const SurvivalTomahawk = new Melee("Survival Tomahawk", SpriteSurvivalTomahawk);
const MorningStar = new Melee("Morning Star", SpriteMorningStar);
const Poker = new Melee("Poker", SpritePoker);
const GreatSword = new Melee("Great Sword", SpriteGreatSword);
const TheSpearOfFreedom = new Melee("The Spear of Freedom", SpriteTheSpearOfFreedom);

const Tenderizer = new Melee("Tenderizer", SpriteTenderizer);
const DingDongBreachingTool = new Melee("Ding Dong Breaching Tool", SpriteDingDongBreachingTool);
const MacheteKnife = new Melee("Machete Knife", SpriteMacheteKnife);
const KunaiKnife = new Melee("Kunai Knife", SpriteKunaiKnife);
const UtilityMachete = new Melee("Utility Machete", SpriteUtilityMachete);
const TrautmanKnife = new Melee("Trautman Knife", SpriteTrautmanKnife);

const FireAxe = new Melee("Fire Axe", SpriteFireAxe);
const K350BrassKnuckles = new Melee("350K Brass Knuckles", Sprite350KBrassKnuckles);
const UrsaTantoKnife = new Melee("Ursa Tanto Knife", SpriteUrsaTantoKnife);
const NovasShank = new Melee("Nova's Shank", SpriteNovasShank);
const MoneyBundle = new Melee("Money Bundle", SpriteMoneyBundle);

const OVERKILLBoxingGloves = new Melee("OVERKILL Boxing Gloves", SpriteOVERKILLBoxingGloves);
const KnuckleDaggers = new Melee("Knuckle Daggers", SpriteKnuckleDaggers);
const PsychoKnife = new Melee("Psycho Knife", SpritePsychoKnife);
const LucilleBaseballBat = new Melee("Lucille Baseball Bat", SpriteLucilleBaseballBat);
const RivertownGlenBottle = new Melee("Rivertown Glen Bottle", SpriteRivertownGlenBottle);

const Blessings50Briefcase = new Melee("50. Blessings Briefcase", Sprite50BlessingsBriefcase);
const CarpentersDelight = new Melee("Carpenter's Delight", SpriteCarpentersDelight);
const AlphaMauler = new Melee("Alpha Mauler", SpriteAlphaMauler);
const ThePen = new Melee("The Pen", SpriteThePen);
const ComicallyLargeSpoon = new Melee("Comically Large Spoon", SpriteComicallyLargeSpoon);

const ComicallyLargeSpoonOfGold = new Melee("Comically Large Spoon of Gold", SpriteComicallyLargeSpoonOfGold);

const Melees: Melee[] = [
    WeaponButt, Fists, BoltCutters, UtilityKnife, ElectricalBrassKnuckles, SpecialistKnives,
    ElVerdugo, PushDaggers, LeatherSap, Hackaton, KentosTanto, ElRitmo, AlabamaRazor,
    URSAKnife, SwaggerStick, PounderNailGun, TheMotherforker, Spatula, KLASShovel,
    EmptyPalmKata, ShawnsShears, Microphone, SelfieStick, BayonetKnife, Machete, ChainWhip,
    IcePick, Rezkoye, TelescopicBaton, Jackpot, TwoHandedGreatRuler, BaseballBat, ClassicBaton,
    HockeyStick, DivingKnife, KriegerBlade, BucklerShield, YoureMine, MetalDetector,
    CroupiersRake, CompactHatchet, Kazaguruma, LumberLiteL2, Hotline8000X, PotatoMasher,
    ScalperTomahawk, Switchblade, DragansCleaverKnife, ShinsakutoKatana, OkinawanStyleSai, Pitchfork,
    ArkansasToothpick, MicrophoneStand, X46Knife, Talons, BeardedAxe, Hook, CleaverKnife,
    Buzzer, GoldFever, Wing, CloversShillelagh, ShepherdsCane, ScoutKnife, BergerCombatKnife,
    TrenchKnife, SurvivalTomahawk, MorningStar, Poker, GreatSword, TheSpearOfFreedom,
    Tenderizer, DingDongBreachingTool, MacheteKnife, KunaiKnife, UtilityMachete, TrautmanKnife,
    FireAxe, K350BrassKnuckles, UrsaTantoKnife, NovasShank, MoneyBundle,
    OVERKILLBoxingGloves, KnuckleDaggers, PsychoKnife, LucilleBaseballBat, RivertownGlenBottle,
    Blessings50Briefcase, CarpentersDelight, AlphaMauler, ThePen, ComicallyLargeSpoon,
    ComicallyLargeSpoonOfGold,
];

export default Melees;