import Randomized from "./Randomized";

class PerkDeck extends Randomized {
    static readonly PERK_COUNT = 9;

    private sprites: string[];
    private card: number;

    public constructor(name: string, sprites: string[]) {
        super(name, sprites[0]);
        this.sprites = sprites;
        this.card = 0;
    }

    public setCard(card: number) {
        if (card < 0 || card > PerkDeck.PERK_COUNT) return;
        this.card = card;
        this.setSprite(this.sprites[card]);
    }

    public getCard(): number {
        return this.card;
    }
}

export default PerkDeck;