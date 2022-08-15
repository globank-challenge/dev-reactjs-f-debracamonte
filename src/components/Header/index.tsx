import "./styles.css";
import SearchBar from "../SearchBar";
import useSetPokemonDetail from "../../hooks/useSetPokemonDetail";

const Header = (): JSX.Element => {
  const { setPokemonDetail } = useSetPokemonDetail();
  return (
    <header className="header">
      <div>
        <h1 className="header__title">Listado de Pokemon</h1>
        <h2 className="header__subtitle">
          Dale click a tu pokemon favorito y mira su información
        </h2>
      </div>
      <SearchBar
        placeholder="Prueba buscando tu pokemon favorito"
        onSearch={setPokemonDetail}
      />
    </header>
  );
};

export default Header;
