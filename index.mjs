import Cauldron from "./cauldron.mjs";
import Ingredients from "./ingredients.mjs";
import { getData } from "./service.mjs";

const execute = async () => {
    try {
        const data = await getData();

        const ingredients = Ingredients.load(data)

        const cauldron = new Cauldron(ingredients);
        
    } catch (error) {
        console.log(error);
    }
}

const showIngredients = async (ingredients) => {

    for (const key in ingredients.ingredients) {
        console.log(ingredients.ingredients[key].name);
        console.log(ingredients.ingredients[key].effects);
    }
}
execute();

