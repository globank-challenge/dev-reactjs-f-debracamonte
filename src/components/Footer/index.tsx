import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "./styles.css";
import Button from "../Button";
import useSetPokemonList from "../../hooks/useSetPokemonList";

const Footer = () => {
  const {
    previusPageHandler,
    nextPageHandler,
    itsPreviusDisabled,
    itsNextDisabled,
  } = useSetPokemonList();

  return (
    <footer className="footer">
      <Button
        onClick={() => previusPageHandler()}
        disabled={itsPreviusDisabled()}
      >
        <AiOutlineLeft />
        {"Anterior"}
      </Button>
      <Button onClick={() => nextPageHandler()} disabled={itsNextDisabled()}>
        Siguiente
        <AiOutlineRight />
      </Button>
    </footer>
  );
};

export default Footer;
