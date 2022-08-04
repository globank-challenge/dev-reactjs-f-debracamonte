import "./styles.css";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Listado de Pokemon</h1>
      <SearchBar placeholder="Buscar" />
    </header>
  );
};

export default Header;
