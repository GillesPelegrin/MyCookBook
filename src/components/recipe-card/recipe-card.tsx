import { useContext, useEffect, useState } from 'react';
import { ComponentModel } from '../../database/component-model';
import { DatabaseClientContext } from '../../service/database-context';
import SearchBar from '../search-bar/search-bar';
import './recipe-card.css'; // Assuming a CSS file for styling
import { useLocation } from 'react-router';
// import { IngredientModel } from '../../database/ingredient-model';
// import { Database } from '../../database/database.types';

const RecipeCard = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');


    const [component, setComponent] = useState<ComponentModel>({} as ComponentModel);
    // const [ingredients, setIngredients] = useState<IngredientModel>({} as IngredientModel);
    const databaseClient = useContext(DatabaseClientContext);

    useEffect(() => {
        const getComponent = async () => {

            const { data: componentData } = await databaseClient
                .from('Component')
                .select(`
                    *,
                    Component_Ingredient (
                      *,
                      Ingredient (*)
                    ),
                    Component_Tags (
                      *,
                      Tags (*)
                    ),
                    RecipeSteps (*)
                  `)
                .eq('id', query)

            console.log(componentData[0])
            setComponent(componentData[0])
        }

        getComponent()

    }, [databaseClient])


    return (
        <div className="recipe-card">

            <div className='header'>Recept</div>

            <SearchBar />

            <div className='recipe-header'>
                <div className="recipe-title">
                    <h1>{component?.title}</h1>
                    <div className="tags">
                        {
                            component && component.Component_Tags && component.Component_Tags
                                .map(ci => ci.Tags)
                                .map((tag, index) => (
                                    <span className="tag" key={index}>{tag.name}</span>
                                ))
                        }

                    </div>
                </div>

                <div className="image-section">
                    <div className="image-placeholder">Picture</div>
                </div>
            </div>

            <div className="description">
                <h2>Beschrijving</h2>
                <p>
                    {component?.description}
                </p>
            </div>

            <div className="recipe-content">
                <div className="ingredients">
                    <h2>Ingredienten</h2>
                    <ul>
                        {
                            component && component.Component_Ingredient && component.Component_Ingredient
                                .map(ci => ci.Ingredient)
                                .map((ingredient, index) => (
                                    <li key={index}>{ingredient.name}</li>
                                ))
                        }
                    </ul>
                </div>

                <div className="recipe-details">
                    <div className="directions">
                        <h2>Stappen</h2>
                        <ol>

                            {
                                component && component.RecipeSteps && component.RecipeSteps
                                    .map((recipeSteps, index) => (
                                        <li key={index}>{recipeSteps.description}</li>
                                    ))
                            }
                        </ol>
                    </div>
                </div>
            </div>

            <div className="linked-components">
                <h2>Gelinkte componenten</h2>
                <div className="component-box">Component 1</div>
                <div className="component-box">Component 2</div>
            </div>
        </div>
    );
};

export default RecipeCard;