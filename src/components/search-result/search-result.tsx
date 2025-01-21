import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { ComponentModel } from "../../database/component-model";
import { DatabaseClientContext } from "../../service/database-context";
import SearchBar from "../search-bar/search-bar";
import "./search-result.css";


const SearchResult = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');

    const [components, setComponents] = useState<Array<ComponentModel>>([]);
    const databaseClient = useContext(DatabaseClientContext);

    useEffect(() => {
        const getComponent = async () => {

            const { data: componentsData } = await databaseClient
                .from('Component')
                .select()
                .ilike('title', '%' + query + '%');

            console.log(componentsData)
            setComponents(componentsData)
        }
        getComponent()
    }, [databaseClient, query])

    const navigate = useNavigate();

    const handleClick = (id: string) => {
        navigate(`/recipe?query=${id}`);
    };

    return (
        <div>

            <SearchBar />

            <h2>Search Results</h2>
            {query && components.length != 0 ? (

                <>
                    <h2>Results</h2>
                    <ul className="search-result-card-list">
                        {
                            components
                                .map((component, index) => (
                                    <li className="search-result-card" key={index} onClick={() => handleClick(component.id)}>{component.title} </li>
                                ))
                        }
                    </ul>
                </>

            ) : (
                <p>No result are found.</p>
            )}
        </div>
    );
};

export default SearchResult;