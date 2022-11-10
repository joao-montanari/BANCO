import Cabecalho from './Cabecalho';
import Footer from './Footer';

export default function Layout({children}){
    return(
        <>
            <Cabecalho/>
            <div>{children}</div>
            <Footer/>
        </>
    )
}