import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary() {
    const [keyWord, setKeyword] = useState("");
    function search(event) {
        event.preventDefault();

        function handleKeywordChange(event) {
            setKeyword(event.terget.value);
        }
}

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
        </div>
    );
 }