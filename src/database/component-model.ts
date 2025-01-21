import { ComponentIngredientModel } from "./component-ingredient-model"
import { ComponentTagsModel } from "./component-tags-model"
import { RecipeStepsModel } from "./recipe-steps-model"

export  interface ComponentModel {
        id: string,
        title: string,
        description: string
        Component_Ingredient: Array<ComponentIngredientModel>,
        RecipeSteps: Array<RecipeStepsModel>,
        Component_Tags: Array<ComponentTagsModel>
}