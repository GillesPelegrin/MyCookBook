import { IngredientModel } from "./ingredient-model"

export  interface ComponentIngredientModel {
        id: string,
        Ingredient: IngredientModel
        component_id: string,
        ingredient_id: string
}