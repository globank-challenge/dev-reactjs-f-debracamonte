import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./styles.css";
import Button from "../Button";
import useSetPokemonList from "../../hooks/useSetPokemonList";

const Footer = () => {
  const { previusPageHandler, nextPageHandler, itsDisabled } =
    useSetPokemonList();

  return (
    <footer className="footer">
      <Button
        onClick={() => previusPageHandler()}
        disabled={itsDisabled("previous")}
      >
        <AiOutlineLeft />
        Anterior
      </Button>
      <Button onClick={() => nextPageHandler()} disabled={itsDisabled("next")}>
        Siguiente
        <AiOutlineRight />
      </Button>
    </footer>
  );
};

export default Footer;
