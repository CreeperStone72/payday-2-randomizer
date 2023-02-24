import Randomized from "./Randomized";

enum WeaponSlot {
    AssaultRifle,
    PrimaryShotgun,
    LMG,
    PrimarySniper,
    AkimboPistol,
    AkimboSMG,
    AkimboShotgun,
    PrimarySpecial,

    Pistol,
    SubmachineGun,
    SecondarySpecial,
    SecondaryShotgun,
    SecondarySniper,
}

class Gun extends Randomized {
    readonly slot: WeaponSlot;

    public constructor(name: string, sprite: string, slot: WeaponSlot) {
        super(name, sprite);
        this.slot = slot;
    }

    public isPrimary(): boolean {
        return this.slot === WeaponSlot.AssaultRifle
            || this.slot === WeaponSlot.PrimaryShotgun
            || this.slot === WeaponSlot.LMG
            || this.slot === WeaponSlot.PrimarySniper
            || this.slot === WeaponSlot.AkimboPistol
            || this.slot === WeaponSlot.AkimboSMG
            || this.slot === WeaponSlot.AkimboShotgun
            || this.slot === WeaponSlot.PrimarySpecial
    }

    public isSecondary(): boolean {
        return this.slot === WeaponSlot.Pistol
            || this.slot === WeaponSlot.SubmachineGun
            || this.slot === WeaponSlot.SecondarySpecial
            || this.slot === WeaponSlot.SecondaryShotgun
            || this.slot === WeaponSlot.SecondarySniper
    }
}

export { Gun, WeaponSlot };