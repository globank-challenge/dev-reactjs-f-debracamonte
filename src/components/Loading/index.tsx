import "./styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import pokeball from "../../assets/pokeball.png";

const Loading = () => {
  const isLoading = useSelector(
    (state: RootState) => state.pokemonList.loading
  );

  return (
    <>
      {isLoading && (
        <div className="loading">
          <img src={pokeball} className="loading__img" alt="loading" />
          <p className="loading__text">Loading</p>
        </div>
      )}
    </>
  );
};

export default Loading;
