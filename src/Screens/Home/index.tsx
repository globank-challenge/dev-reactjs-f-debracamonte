import "./styles.css";
import PokeList from "../../components/PokeList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DetailCard from "../../components/DetailCard";
import Loading from "../../components/Loading";
import useSetPokemonList from "../../hooks/useSetPokemonList";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Home = () => {
  const { useInitPokemonList } = useSetPokemonList();
  const isActive = useSelector(
    (state: RootState) => state.pokemonDetail.active
  );
  useInitPokemonList();
  return (
    <>
      <Loading />
      <div className="pokeHome">
        <Header />
        <main className="pokeHome-body">
          <PokeList />
          {isActive && <DetailCard />}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
