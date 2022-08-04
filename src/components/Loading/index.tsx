import "./styles.css";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Loading = () => {
  const isLoading = useSelector(
    (state: RootState) => state.pokemonList.loading
  );

  return <>{isLoading && <div className="loading">Loading</div>}</>;
};

export default Loading;
