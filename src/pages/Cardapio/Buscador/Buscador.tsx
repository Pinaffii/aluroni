import * as React from "react";
import style from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface IBuscadorProps {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador: React.FunctionComponent<IBuscadorProps> = ({
  busca,
  setBusca,
}) => {
  return (
    <div className={style.buscador}>
      <input
        placeholder="Busca"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
};

export default Buscador;
