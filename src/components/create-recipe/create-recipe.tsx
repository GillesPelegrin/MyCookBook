import { useState } from "react";
import { ComponentIngredientModel } from "../../database/component-ingredient-model";
import { ComponentModel } from "../../database/component-model";
import { ComponentTagsModel } from "../../database/component-tags-model";
import { IngredientModel } from "../../database/ingredient-model";
import { TagsModel } from "../../database/tags-model";
import "./create-recipe.css";

export default function CreateRecipe() {

    const [component] = useState<ComponentModel>({
        title: "test",
        description: "super beschrijving",
        Component_Ingredient: [
            {
                Ingredient: {
                    name: "ingredient 1"
                } as IngredientModel
            } as ComponentIngredientModel,
            {
                Ingredient: {
                    name: "ingredient 2"
                } as IngredientModel
            } as ComponentIngredientModel
        ],
        Component_Tags: [
            {
                Tags: {
                    name: "Italian"
                } as TagsModel
            } as ComponentTagsModel
        ]

    } as ComponentModel);


    return (
        <>
            <div className="header">Create recipe</div>
            <div className="create-recipe-menu">
                <div className="input-field">
                    <label>Title</label>
                    <input type="text" defaultValue={component.title} />
                </div>


                <div className="input-field">
                    <label>Beschrijving</label>
                    <textarea defaultValue={component.description} />
                </div>

                <div className="input-field">
                    <label>Component</label>
                    <div className="added-component-cards">
                        <div className="add-component-card">
                            <div>+</div>
                            <div>Add new element</div>
                        </div>
                        <div className="added-component-card">
                            <div>Add new element</div>
                        </div>
                    </div>
                </div>

                <div className="input-field">
                    <label>Ingredienten</label>

                    {
                        component && component.Component_Ingredient && component.Component_Ingredient
                            .map(ci => ci.Ingredient)
                            .map((ingredient) => (
                                <input value={ingredient.name} />
                            ))
                    }

                    {
                        !component || !component.Component_Ingredient && <input type="text" />
                    }

                </div>

                <div className="input-field">
                    <label>Tags</label>

                    {
                        component && component.Component_Tags && component.Component_Tags
                            .map(ci => ci.Tags)
                            .map((tag) => (
                                <input value={tag.name} />
                            ))
                    }

                    {
                        !component || !component.Component_Tags && <input type="text" />
                    }

                </div>

            </div>

        </>
    );
};
