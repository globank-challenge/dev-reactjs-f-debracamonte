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
        text="Anterior"
        disabled={itsPreviusDisabled()}
        icon={<AiOutlineLeft />}
        iconOnTheLeft
      />
      <Button
        onClick={() => nextPageHandler()}
        disabled={itsNextDisabled()}
        text="Siguiente"
        icon={<AiOutlineRight />}
      />
    </footer>
  );
};

export default Footer;
