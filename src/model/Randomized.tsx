class Randomized {
    readonly name: string;
    private sprite: string;

    public constructor(name: string, sprite: string) {
        this.name = name;
        this.sprite = sprite;
    }

    public getSprite(): string {
        return this.sprite;
    }

    protected setSprite(sprite: string) {
        this.sprite = sprite;
    }
}

export default Randomized;