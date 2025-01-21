import { useState } from "react";
import { useNavigate } from "react-router";
import "./search-bar.css";


export default function SearchBar() {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            navigate(`/search?query=${inputValue}`);
        }
    };

    return (

        <header className="search">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Find/add new techniques or recipes" className="search-bar"
            />
        </header>


    );
};
