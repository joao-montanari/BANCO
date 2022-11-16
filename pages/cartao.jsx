import Wallpaper from "../components/cartao/Wallpaper";
import AreaCards from "../components/cartao/AreaCards";
import Tabela from "../components/cartao/Tabela";
import LayoutCard from '../components/cartao/LayoutCard';
import Recorte from "../components/cartao/Recorte";
import CartaoDeCredito from "../components/CartaoDeCredito";

export default function Cartao(){
    return(
        <>
            <Wallpaper/>
            <Recorte/>
            <AreaCards/>
            <Tabela/>
            <LayoutCard/>
            <CartaoDeCredito/>
        </>
    )
}