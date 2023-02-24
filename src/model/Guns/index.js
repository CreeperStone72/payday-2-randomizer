import AkimboPistols from "./AkimboPistols";
import AkimboShotguns from "./AkimboShotguns";
import AkimboSMGs from "./AkimboSMGs";
import AssaultRifles from "./AssaultRifles";
import LMGs from "./LMGs";
import Pistols from "./Pistols";
import PrimaryShotguns from "./PrimaryShotguns";
import PrimarySnipers from "./PrimarySnipers";
import PrimarySpecials from "./PrimarySpecials";
import SecondaryShotguns from "./SecondaryShotguns";
import SecondarySnipers from "./SecondarySnipers";
import SecondarySpecials from "./SecondarySpecials";
import SMGs from "./SMGs";

const Primaries = [
    AssaultRifles,
    LMGs,
    PrimaryShotguns,
    PrimarySnipers,
    AkimboPistols,
    AkimboShotguns,
    AkimboSMGs,
    PrimarySpecials,
];

const Secondaries = [
    Pistols,
    SecondaryShotguns,
    SecondarySnipers,
    SMGs,
    SecondarySpecials,
];

export { Primaries, Secondaries };