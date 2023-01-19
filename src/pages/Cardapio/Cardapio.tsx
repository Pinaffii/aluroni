import style from "./Cardapio.module.scss";
import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Buscador from "./Buscador/Buscador";
import Filtros from "./Filtros/Filtros";
import Ordenador from "./Ordenador/Ordenador";
import Itens from "./Itens/Itens";

interface Props {}

const Cardapio = (props: Props) => {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");

  return (
    <main>
      <nav className={style.menu}>
        <Logo />
      </nav>
      <header className={style.header}>
        <div className={style.header__text}>A casa do código e da massa</div>
      </header>
      <section className={style.cardapio}>
        <h3 className={style.cardapio__titulo}>Cardapio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={style.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
};

export default Cardapio;
