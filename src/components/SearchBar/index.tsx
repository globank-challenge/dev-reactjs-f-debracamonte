import { AiOutlineSearch } from "react-icons/ai";
import useSetPokemonDetail from "../../hooks/useSetPokemonDetail";
import ErrorMessage from "../ErrorMessage";
import "./styles.css";
import { SearchBarProps } from "./types";

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
  const { inputValue, onChangeHandler, onEnterHandler } = useSetPokemonDetail();
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
          onChange={(e) => onChangeHandler(e)}
          onKeyDown={(e) => onEnterHandler(e, onSearch)}
        />
      </div>
      <ErrorMessage message="Ese pokemon no existe (aún) intentalo otra vez!" />
    </>
  );
};

export default SearchBar;
