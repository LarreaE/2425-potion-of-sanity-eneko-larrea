import Ingredients from "./ingredients.mjs";
import { getData } from "./service.mjs";

const execute = async () => {
    try {
        const data = await getData();

        const ingredients = Ingredients.load(data)

        console.log(ingredients);

        for (const key in ingredients) {

            console.log(ingredients[key].effects);
        }
        
    } catch (error) {
        console.log(error);
    }
}

execute();