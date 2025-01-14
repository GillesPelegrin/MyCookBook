import { DatabaseClientContext } from '../../service/database-context';
import { useContext, useEffect, useState } from 'react';
import './recipe-card.css'; // Assuming a CSS file for styling
import { ComponentModel } from '../../database/component-model';
// import { Database } from '../../database/database.types';

const RecipeCard = () => {


    const [component, setComponent] = useState<ComponentModel>({} as ComponentModel);

    useEffect(() => {
        const getComponent = async () => {
            const { data } = await databaseClient
            .from('Component')
            .select()
            .eq('id', '1')

            setComponent(data[0])
            // console.log(error)
        }

        getComponent()
        
    })

    const databaseClient = useContext(DatabaseClientContext);
    // const { data } = await databaseClient.from('components').select().returns<Component>()
     


    return (
        <div className="recipe-card">


            <header className="search">
                <input type="text" placeholder="Find/add new techniques or recipes" className="search-bar" />
            </header>

            <div className='recipe-header'>
                <div className="recipe-title">
                    <h1>Recipe: {component?.title}</h1>
                    <div className="tags">
                        <span className="tag">Tag 1</span>
                        <span className="tag">Tag 2</span>
                    </div>
                </div>

                <div className="image-section">
                    <div className="image-placeholder">Picture</div>
                </div>
            </div>

            <div className="description">
                <h2>Description</h2>
                <p>
                {component?.description}
                </p>
            </div>

            <div className="recipe-content">
                <div className="ingredients">
                    <h2>Ingredients</h2>
                    <h3>Component 1</h3>
                    <ul>
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                    </ul>
                    <h3>General</h3>
                    <ul>
                        <li>Ingredient 3</li>
                        <li>Ingredient 4</li>
                        <li>Ingredient 5</li>
                    </ul>
                </div>

                <div className="recipe-details">
                    <div className="directions">
                        <h2>Directions</h2>
                        <ol>
                            <li>
                                Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </li>
                            <li>
                                Step 2: Component 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                            <li>
                                Step 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="linked-components">
                <h2>Linked Components</h2>
                <div className="component-box">Component 1</div>
                <div className="component-box">Component 2</div>
            </div>
        </div>
    );
};

export default RecipeCard;