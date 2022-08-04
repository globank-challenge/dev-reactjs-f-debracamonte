import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import useSetPokemonDetail from "../../hooks/useSetPokemonDetail";
import { RootState } from "../../redux/store";
import "./styles.css";
import { Event, SearchBarProps } from "./types";

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const error = useSelector((state: RootState) => state.errorHandler);
  const { setPokemonDetail } = useSetPokemonDetail();
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (e: Event) => {
    setInputValue(e.target.value);
  };
  const onEnterHandler = (event: Event) => {
    if (event.key === "Enter") {
      setPokemonDetail(inputValue.toLowerCase());
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
      <span className="error">
        {error && "Ese pokemon no existe (aún) intentalo otra vez!"}
      </span>
    </>
  );
};

export default SearchBar;
