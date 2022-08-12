import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import ErrorMessage from "../ErrorMessage";
import "./styles.css";
import { Event, SearchBarProps } from "./types";

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e: Event) => {
    setInputValue(e.target.value);
  };
  const onEnterHandler = (event: Event) => {
    if (event.key === "Enter") {
      onSearch(inputValue.toLowerCase());
      setInputValue("");
    }
  };
  return (
    <>
      <div className="searchbar">
        <span className="searchbar__icon">
          <AiOutlineSearch />
        </span>
        <input
          className="searchbar__input"
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={onChangeHandler}
          onKeyDown={onEnterHandler}
        />
      </div>
      <ErrorMessage message="Ese pokemon no existe (aún) intentalo otra vez!" />
    </>
  );
};

export default SearchBar;
