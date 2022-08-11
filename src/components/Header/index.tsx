import "./styles.css";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="header__title">Listado de Pokemon</h1>
        <h2 className="header__subtitle">
          Dale click a tu pokemon favorito y mira su información
        </h2>
      </div>
      <SearchBar placeholder="Prueba buscando el nombre de tu pokemon favorito" />
    </header>
  );
};

export default Header;
