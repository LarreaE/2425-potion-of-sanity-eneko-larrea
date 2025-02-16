import Cauldron from "./cauldron.mjs";
import Ingredients from "./ingredients.mjs";
import { getData } from "./service.mjs";

const execute = async () => {
    try {
        const data = await getData();

        const ingredients = Ingredients.load(data)

        const cauldron = new Cauldron(ingredients);

        //potion creation
        const potion1 = cauldron.createPotion('Bear Claws','Bee');
        const potion2 = cauldron.createPotion("Chicken's Egg",'Chaurus Eggs');
        const potion3 = cauldron.createPotion('Chaurus Eggs','Bleeding Crown');
        const potion5 = cauldron.createPotion('Wheat','Abecean Longfin');
        const potion4 = cauldron.createPotion('Nightshade','Ectoplasm');

        showPotion(potion1)
        showPotion(potion2)
        showPotion(potion3)
        showPotion(potion4)
        showPotion(potion5)




    } catch (error) {
        console.log(error);
    }

}

function showPotion(potion) {
    console.log(`${potion.name}`);
    console.log(`Value:         ${potion.value}`);
    console.log(`Weight:        ${potion.weight}`);
    console.log(`Time:          ${potion.time}`);
    console.log(`--------------------------`);

    
}
const showIngredients = async (ingredients) => {

    for (const key in ingredients.ingredients) {
        console.log(ingredients.ingredients[key].name);
        console.log(ingredients.ingredients[key].effects);
    }
}
execute();

