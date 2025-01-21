import { useNavigate } from "react-router";
import SearchBar from "../search-bar/search-bar";
import "./home.css";


export default function Home() {

    const navigate = useNavigate();
    const handleClick = (id: string) => {
        navigate(`/recipe?query=${id}`);
    };

    return (
        <>
            <div className="header">Home</div>

            <SearchBar />

            <div>
                <div className="sub-header">History</div>

                <ul className="history-recipe-cards">
                    <li className="history-recipe-card" onClick={() => handleClick("1")}>Pesto</li>
                    <li className="history-recipe-card" onClick={() => handleClick("2")}>Fancy Pesto</li>
                    <li className="history-recipe-card" onClick={() => handleClick("1")}> Pesto</li>
                </ul>

                <div className="sub-header">Tags</div>
                <br />
                <div>Italian</div>

                <ul className="history-recipe-cards">
                    <li className="history-recipe-card" onClick={() => handleClick("1")}>...</li>
                    <li className="history-recipe-card" onClick={() => handleClick("1")}> ...</li>
                    <li className="history-recipe-card" onClick={() => handleClick("1")}> ...</li>
                </ul>

                <br />
                <div>Mexicaans</div>

                <ul className="history-recipe-cards">
                    <li className="history-recipe-card" onClick={() => handleClick("1")}>...</li>
                    <li className="history-recipe-card" onClick={() => handleClick("1")}> ...</li>
                    <li className="history-recipe-card" onClick={() => handleClick("1")}> ...</li>
                </ul>

            </div>

        </>


    );
};
