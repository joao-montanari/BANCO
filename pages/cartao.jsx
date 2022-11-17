import Wallpaper from "../components/cartao/Wallpaper";
import AreaCards from "../components/cartao/AreaCards";
import Tabela from "../components/cartao/Tabela";
import LayoutCard from '../components/cartao/LayoutCard';
import Recorte from "../components/cartao/Recorte";
import LayoutCartao from "../components/cartao/LayoutCartao";

export default function Cartao(){
    return(
        <>
            <Wallpaper/>
            <Recorte/>
            <AreaCards/>
            <Tabela/>
            <LayoutCard/>
            <LayoutCartao/>
        </>
    )
}