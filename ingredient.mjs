import Effect from "./effect.mjs";


class Ingredient {

    constructor(name,effects,value,weight) {
        
        this.name = name;
        this.effects = effects;
        this.value = value;
        this.weight = weight;
    }

    static from ({name,effects,value,weight}) {
        return new Ingredient(
            name,
            effects.map(effect => Effect.from(effect)),
            value,
            weight,
        );
    }
}

export default Ingredient